'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import {
  adminCookie,
  adminSessionSeconds,
  clearFailures,
  createSessionToken,
  isAdminConfigured,
  isLockedOut,
  recordFailure,
  verifyCredentials,
} from '@/lib/require-admin';

export type LoginState = { error: string | null };

export async function login(_previous: LoginState, formData: FormData): Promise<LoginState> {
  if (!isAdminConfigured()) {
    return { error: 'Admin access is not configured. Set ADMIN_USERNAME and ADMIN_PASSWORD.' };
  }
  if (await isLockedOut()) {
    return { error: 'Too many failed attempts. Try again in 15 minutes.' };
  }

  const username = String(formData.get('username') ?? '');
  const password = String(formData.get('password') ?? '');
  const token = verifyCredentials(username, password) ? createSessionToken() : null;
  if (!token) {
    await recordFailure();
    return { error: 'Invalid username or password.' };
  }

  await clearFailures();
  (await cookies()).set(adminCookie, token, {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    path: '/admin',
    maxAge: adminSessionSeconds,
  });
  redirect('/admin');
}

export async function logout() {
  (await cookies()).delete({ name: adminCookie, path: '/admin' });
  redirect('/admin');
}
