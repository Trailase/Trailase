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
            <p className="mt-3 font-display text-lg leading-7 text-foreground">
              {t('home.founderHook')}
            </p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{t('home.founderText')}</p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div>
                <p className="font-display text-2xl tracking-tight text-primary">
                  {t('home.founderStat1Value')}
                </p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  {t('home.founderStat1Label')}
                </p>
              </div>
              <div>
                <p className="font-display text-2xl tracking-tight text-primary">
                  {t('home.founderStat2Value')}
                </p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  {t('home.founderStat2Label')}
                </p>
              </div>
            </div>
          </div>

          <dl className="mt-8 flex max-w-xl flex-col gap-5">
            <div>
              <dt className="text-sm font-semibold text-foreground">{t('home.faqDeviceQ')}</dt>
              <dd className="mt-1 text-sm leading-6 text-muted-foreground">
                {t('home.faqDeviceA')}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-foreground">{t('home.faqSetupQ')}</dt>
              <dd className="mt-1 text-sm leading-6 text-muted-foreground">
                {t('home.faqSetupA')}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-foreground">{t('home.faqPmsQ')}</dt>
              <dd className="mt-1 text-sm leading-6 text-muted-foreground">{t('home.faqPmsA')}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-foreground">{t('home.faqScaleQ')}</dt>
              <dd className="mt-1 text-sm leading-6 text-muted-foreground">
                {t('home.faqScaleA')}
              </dd>
            </div>
          </dl>
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
              <p className="text-xs text-muted-foreground">{t('home.contactSlaNote')}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  type="submit"
                  size="lg"
                  disabled={form.submitting}
                  className="h-auto min-h-12 flex-1 whitespace-normal rounded-sm px-7 py-3 font-semibold shadow-brand"
                >
                  {form.submitting ? t('home.contactSending') : t('home.contactButton')}
                </Button>
                {env.NEXT_PUBLIC_CAL_LINK && (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-auto min-h-12 flex-1 whitespace-normal rounded-sm px-7 py-3 font-semibold"
                  >
                    <a href={env.NEXT_PUBLIC_CAL_LINK} target="_blank" rel="noopener noreferrer">
                      {t('home.contactCalButton')}
                    </a>
                  </Button>
                )}
              </div>
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
