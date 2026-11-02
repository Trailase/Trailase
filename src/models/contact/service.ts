// Sends the marketing Contact form via the Resend REST API directly — no SDK
// dependency, consistent with the "native fetch only" rule in api-client.ts.
import { env } from '@/lib/env';
import type { ContactMessageCreateType } from './schema';

const unitsRangeLabels: Record<string, string> = {
  'up-to-25': 'Up to 25 units',
  '26-100': '26–100 units',
  '101-300': '101–300 units',
  '301-1000': '301–1,000 units',
  '1001-5000': '1,001–5,000 units',
  '5000-plus': '5,000+ units',
};

export type SendContactMessageResult =
  | { ok: true }
  | { ok: false; reason: 'not-configured' | 'send-failed' };

export async function sendContactMessage(
  input: ContactMessageCreateType,
): Promise<SendContactMessageResult> {
  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL) {
    return { ok: false, reason: 'not-configured' };
  }

  const from = env.CONTACT_FROM_EMAIL ?? 'Trailase <onboarding@resend.dev>';
  const subject = input.name
    ? `New Trailase walkthrough request from ${input.name}`
    : 'New Trailase walkthrough request';
  const text = [
    input.name ? `Name: ${input.name}` : null,
    `Email: ${input.email}`,
    input.unitsRange ? `Portfolio size: ${unitsRangeLabels[input.unitsRange]}` : null,
    input.message ? '' : null,
    input.message ?? null,
  ]
    .filter((line) => line !== null)
    .join('\n');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: input.email,
      subject,
      text,
    }),
  });

  return response.ok ? { ok: true } : { ok: false, reason: 'send-failed' };
}
