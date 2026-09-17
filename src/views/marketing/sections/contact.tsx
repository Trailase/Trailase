'use client';

import { CheckCircle2, Mail } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '@/components/i18n/language-provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useContactForm } from '@/controllers/contact/useContactForm';
import { requestContactRedirect } from '@/lib/contact-redirect';
import { env } from '@/lib/env';
import { contactMailto } from '@/lib/i18n';

export function Contact() {
  const { locale, t } = useLanguage();
  const contactHref = contactMailto(locale);
  const form = useContactForm(t, {
    success: (message) => toast.success(message),
    error: (message) => toast.error(message),
  });

  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-20 overflow-hidden bg-background px-gutter py-20 text-foreground md:py-28"
    >
      <div className="relative mx-auto grid w-full max-w-[var(--container-page)] gap-10 md:grid-cols-[1.1fr_1fr] md:items-start md:gap-16">
        <div className="max-w-xl">
          <p className="text-eyebrow">{t('home.tagline')}</p>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
            {t('home.contactTitle')}
          </h2>
          <p className="mt-5 max-w-xl text-body-lg leading-8 text-muted-foreground">
            {t('home.contactText')}
          </p>
          <p className="mt-4 max-w-xl text-sm font-medium text-primary">
            {t('home.contactTiming')}
          </p>
          <div className="mt-8 max-w-xl border-l-2 border-brand-teal pl-5">
            <p className="text-caption font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {t('home.founderTitle')}
            </p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{t('home.founderText')}</p>
            <p className="mt-3 text-sm font-medium text-foreground">{t('home.founderSignature')}</p>
          </div>
        </div>

        <div className="w-full rounded-xl border border-border bg-card p-6 text-card-foreground shadow-lg sm:p-7">
          {form.sent ? (
            <div className="flex flex-col items-start gap-3 py-2">
              <span className="grid size-11 place-items-center rounded-full bg-accent text-accent-foreground">
                <CheckCircle2 className="size-5" aria-hidden />
              </span>
              <p className="font-display text-xl tracking-tight">{t('home.contactSuccessTitle')}</p>
              <p className="text-sm text-muted-foreground">{t('home.contactSuccess')}</p>
            </div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={form.submit}>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="contact-name">{t('home.contactNameLabel')}</Label>
                <Input
                  id="contact-name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => form.setName(event.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="contact-email">{t('home.contactEmailLabel')}</Label>
                <Input
                  id="contact-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => form.setEmail(event.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="contact-message">{t('home.contactMessageLabel')}</Label>
                <Textarea
                  id="contact-message"
                  required
                  minLength={10}
                  rows={4}
                  placeholder={t('home.contactMessagePlaceholder')}
                  value={form.message}
                  onChange={(event) => form.setMessage(event.target.value)}
                />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                {t('home.contactFreeTrial')}
              </p>
              <Button
                type="submit"
                size="lg"
                disabled={form.submitting}
                className="h-auto min-h-12 whitespace-normal rounded-sm px-7 py-3 font-semibold shadow-brand"
              >
                {form.submitting ? t('home.contactSending') : t('home.contactButton')}
              </Button>
              {env.NEXT_PUBLIC_CAL_LINK && (
                <a
                  href={env.NEXT_PUBLIC_CAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-sm font-medium text-primary underline underline-offset-2"
                >
                  {t('home.contactCalLink')}
                </a>
              )}
              {form.unavailable && (
                <p className="text-sm text-muted-foreground">
                  {t('home.contactFallbackText')}{' '}
                  <a
                    className="inline-flex items-center gap-1 font-medium text-primary underline underline-offset-2"
                    href={contactHref}
                    onClick={(event) => {
                      event.preventDefault();
                      requestContactRedirect(contactHref);
                    }}
                  >
                    <Mail className="size-3.5" aria-hidden /> {t('home.contactFallbackLink')}
                  </a>
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
