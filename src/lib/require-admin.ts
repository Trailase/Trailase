import 'server-only';
import { createHash, createHmac, timingSafeEqual } from 'node:crypto';
import { cookies, headers } from 'next/headers';
import { env } from '@/lib/env';

// Single-user admin auth for /admin. Credentials live in ADMIN_USERNAME /
// ADMIN_PASSWORD. A successful login sets an httpOnly cookie `<expiry>.<hmac>`
// signed with a key derived from the credentials, so changing either one
// invalidates every outstanding session. Nothing is stored server-side.

export const adminCookie = 'trailase_admin_session';
export const adminSessionSeconds = 60 * 60 * 8;

const maxFailures = 5;
const lockoutMs = 15 * 60 * 1000;
const failures = new Map<string, { count: number; firstAt: number }>();

const digest = (value: string) => createHash('sha256').update(value).digest();
const safeEqual = (a: Buffer, b: Buffer) => a.length === b.length && timingSafeEqual(a, b);

function credentials() {
  const { ADMIN_USERNAME: username, ADMIN_PASSWORD: password } = env;
  return username && password ? { username, password } : null;
}

export const isAdminConfigured = () => credentials() !== null;

function sign(expiry: string, username: string, password: string) {
  return createHmac('sha256', `${username}\n${password}`).update(`admin:${expiry}`).digest('hex');
}

export function verifyCredentials(username: string, password: string): boolean {
  const expected = credentials();
  if (!expected) return false;
  // Evaluate both so timing doesn't reveal which field was wrong.
  const userOk = safeEqual(digest(username), digest(expected.username));
  const passOk = safeEqual(digest(password), digest(expected.password));
  return userOk && passOk;
}

export function createSessionToken(): string | null {
  const creds = credentials();
  if (!creds) return null;
  const expiry = String(Date.now() + adminSessionSeconds * 1000);
  return `${expiry}.${sign(expiry, creds.username, creds.password)}`;
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const creds = credentials();
  const token = (await cookies()).get(adminCookie)?.value;
  if (!creds || !token) return false;
  const [expiry, signature] = token.split('.');
  if (!expiry || !signature || !(Number(expiry) > Date.now())) return false;
  return safeEqual(
    Buffer.from(signature),
    Buffer.from(sign(expiry, creds.username, creds.password)),
  );
}

async function clientKey() {
  const forwarded = (await headers()).get('x-forwarded-for')?.split(',')[0]?.trim();
  return forwarded || 'local';
}

export async function isLockedOut(): Promise<boolean> {
  const entry = failures.get(await clientKey());
  if (!entry) return false;
  if (Date.now() - entry.firstAt > lockoutMs) {
    failures.delete(await clientKey());
    return false;
  }
  return entry.count >= maxFailures;
}

export async function recordFailure() {
  const key = await clientKey();
  const entry = failures.get(key);
  if (!entry || Date.now() - entry.firstAt > lockoutMs) {
    failures.set(key, { count: 1, firstAt: Date.now() });
  } else {
    entry.count += 1;
  }
}

export async function clearFailures() {
  failures.delete(await clientKey());
}
