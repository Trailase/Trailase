'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';
import { apiFetch } from '@/lib/api-client';
import type { Translate } from '@/lib/i18n';

type Feedback = { success: (message: string) => void; error: (message: string) => void };

export function useContactForm(t: Translate, feedback: Feedback) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  // True once a send attempt fails — the view then offers the mailto link as
  // a fallback instead of leaving the visitor at a dead end.
  const [unavailable, setUnavailable] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    try {
      await apiFetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({ name: name || undefined, email, message }),
      });
      setSent(true);
      feedback.success(t('home.contactSuccess'));
    } catch {
      setUnavailable(true);
      feedback.error(t('home.contactError'));
    } finally {
      setSubmitting(false);
    }
  }

  return {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    submitting,
    sent,
    unavailable,
    submit,
  };
}
