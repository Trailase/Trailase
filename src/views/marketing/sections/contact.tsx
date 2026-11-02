'use client';

import { Check, CheckCircle2, Mail } from 'lucide-react';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { useLanguage } from '@/components/i18n/language-provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useContactForm } from '@/controllers/contact/useContactForm';
import {
  type ContactUnitsDetail,
  contactUnitsEvent,
  requestContactRedirect,
} from '@/lib/contact-redirect';
import { env } from '@/lib/env';
import { contactMailto } from '@/lib/i18n';
import { ctaButton, sectionTitle } from '../heading';

export function Contact() {
  const { locale, t } = useLanguage();
  const contactHref = contactMailto(locale);
  const form = useContactForm(t, {
    success: (message) => toast.success(message),
    error: (message) => toast.error(message),
  });
  const { setUnitsRange } = form;

  useEffect(() => {
    const handleUnits = (event: Event) => {
      setUnitsRange((event as CustomEvent<ContactUnitsDetail>).detail.unitsRange);
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };
    window.addEventListener(contactUnitsEvent, handleUnits);
    return () => window.removeEventListener(contactUnitsEvent, handleUnits);
  }, [setUnitsRange]);

  return (
    <section
      id="contact"
      className="scroll-mt-14 bg-brand-navy px-gutter py-section pb-24 text-white sm:pb-section dark:bg-[#0b2a5c]"
    >
      <div className="mx-auto grid w-full max-w-[var(--container-page)] items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className="text-caption font-semibold uppercase tracking-[0.08em] text-brand-teal">
            {t('home.contactEyebrow')}
          </p>
          <h2 className={`mt-4 ${sectionTitle}`}>{t('home.contactTitle')}</h2>
          <p className="mt-5 text-lg leading-8 text-white/75">{t('home.contactText')}</p>
          <ul className="mt-7 flex flex-col gap-3 font-medium">
            {['home.contactSlaNote', 'home.perk1', 'home.perk2'].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-white/10 text-brand-teal">
                  <Check className="size-4" aria-hidden />
                </span>
                {t(item)}
              </li>
            ))}
          </ul>
          <p className="mt-7 max-w-lg text-sm leading-6 text-white/65">{t('home.contactTiming')}</p>
        </div>

        <div className="w-full rounded-3xl bg-card p-6 text-card-foreground shadow-2xl sm:p-8">
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
              <div className="grid gap-4 sm:grid-cols-2">
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
                  <Label htmlFor="contact-name">{t('home.contactNameLabel')}</Label>
                  <Input
                    id="contact-name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(event) => form.setName(event.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="contact-units">{t('home.contactUnitsLabel')}</Label>
                <select
                  id="contact-units"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  value={form.unitsRange}
                  onChange={(event) => form.setUnitsRange(event.target.value)}
                >
                  <option value="">{t('home.contactUnitsPlaceholder')}</option>
                  <option value="up-to-25">{t('home.contactUnitsUpTo25')}</option>
                  <option value="26-100">{t('home.contactUnitsRange26to100')}</option>
                  <option value="101-300">{t('home.contactUnitsRange101to300')}</option>
                  <option value="301-1000">{t('home.contactUnitsRange301to1000')}</option>
                  <option value="1001-5000">{t('home.contactUnitsRange1001to5000')}</option>
                  <option value="5000-plus">{t('home.contactUnits5000Plus')}</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="contact-message">{t('home.contactMessageLabel')}</Label>
                <Textarea
                  id="contact-message"
                  rows={3}
                  placeholder={t('home.contactMessagePlaceholder')}
                  value={form.message}
                  onChange={(event) => form.setMessage(event.target.value)}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={form.submitting}
                className={`${ctaButton} mt-1 w-full shadow-brand`}
              >
                {form.submitting ? t('home.contactSending') : t('home.contactButton')}
              </Button>
              {env.NEXT_PUBLIC_CAL_LINK && (
                <Button asChild size="lg" variant="outline" className={`${ctaButton} w-full`}>
                  <a href={env.NEXT_PUBLIC_CAL_LINK} target="_blank" rel="noopener noreferrer">
                    {t('home.contactCalButton')}
                  </a>
                </Button>
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
