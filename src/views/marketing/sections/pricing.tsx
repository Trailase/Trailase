import { ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '@/components/i18n/language-provider';
import { Button } from '@/components/ui/button';
import { requestContactUnits } from '@/lib/contact-redirect';
import { unitsRanges } from '@/models/contact/schema';
import { ctaButton, SectionHeading } from '../heading';

export function Pricing() {
  const { t } = useLanguage();
  const includedFeatures = [1, 2, 3, 4].map((n) => t(`home.pricingIncludedFeature${n}`));

  return (
    <section id="pricing" className="scroll-mt-20 bg-brand-50 px-gutter py-section dark:bg-card/40">
      <div className="mx-auto w-full max-w-[var(--container-page)]">
        <SectionHeading
          centered
          eyebrow={t('home.pricingEyebrow')}
          title={t('home.pricingTitle')}
          intro={t('home.pricingIntro')}
        />

        <p className="mx-auto mt-5 max-w-2xl text-center font-semibold text-primary">
          {t('home.pricingFreeNote')}
        </p>
        <p className="mx-auto mt-1 max-w-2xl text-center text-sm text-muted-foreground">
          {t('home.pricingLockInNote')}
        </p>

        <div className="mx-auto mt-8 max-w-4xl text-center">
          <p className="text-sm font-semibold">{t('home.pricingIncludedTitle')}</p>
          <ul className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check className="size-4 shrink-0 text-brand-teal" aria-hidden />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {unitsRanges.map((range, index) => {
            const n = index + 1;
            return (
              <button
                type="button"
                key={range}
                onClick={() => requestContactUnits(range)}
                className="group lift flex flex-col rounded-2xl text-left border border-border bg-card p-5 shadow-sm hover:border-primary/50"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {t(`home.pricingTier${n}Name`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">{t(`home.pricingTier${n}Range`)}</p>
                </div>
                <p className="mt-3">
                  <span className="font-display text-3xl font-semibold tracking-tight">
                    {t(`home.pricingTier${n}Price`)}
                  </span>
                  <span className="ml-1 text-sm text-muted-foreground">
                    {t(`home.pricingTier${n}Period`)}
                  </span>
                </p>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
                  {t(`home.pricingTier${n}Tagline`)}
                </p>
                <p className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {t('home.pricingCardCta')}
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </p>
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-primary/30 bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md leading-7 text-muted-foreground">{t('home.pricingCtaText')}</p>
          <Button
            asChild
            size="lg"
            className={`${ctaButton} h-auto min-h-12 whitespace-normal py-3 text-center shadow-brand`}
          >
            <a href="#contact">{t('home.pricingCta')}</a>
          </Button>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-5 text-muted-foreground">
          {t('home.pricingDisclaimer')}
        </p>
      </div>
    </section>
  );
}
