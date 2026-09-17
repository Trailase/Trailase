// Sends the marketing Contact form via the Resend REST API directly — no SDK
// dependency, consistent with the "native fetch only" rule in api-client.ts.
import { env } from '@/lib/env';
import type { ContactMessageCreateType } from './schema';

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
    '',
    input.message,
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
