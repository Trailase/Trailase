import { Check } from 'lucide-react';
import { useLanguage } from '@/components/i18n/language-provider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const tierNumbers = [1, 2, 3, 4, 5, 6] as const;
const featuredTier = 3;

export function Pricing() {
  const { t } = useLanguage();
  const includedFeatures = [1, 2, 3, 4].map((n) => t(`home.pricingIncludedFeature${n}`));

  return (
    <section
      id="pricing"
      className="relative isolate scroll-mt-20 overflow-hidden bg-background px-gutter py-20 text-foreground md:py-28"
    >
      <div className="mx-auto w-full max-w-[var(--container-page)]">
        <div className="max-w-2xl">
          <p className="text-eyebrow">{t('home.pricingEyebrow')}</p>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
            {t('home.pricingTitle')}
          </h2>
          <p className="mt-6 max-w-xl text-body-lg leading-8 text-muted-foreground">
            {t('home.pricingIntro')}
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.1em] text-primary">
            {t('home.pricingFreeNote')}
          </p>
          <p className="mt-2 text-sm font-medium text-muted-foreground">
            {t('home.pricingLockInNote')}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 rounded-xl border border-brand-teal/30 bg-card/95 p-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
            {t('home.pricingIncludedTitle')}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check className="size-4 shrink-0 text-brand-600 dark:text-brand-300" aria-hidden />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tierNumbers.map((n) => {
            const featured = n === featuredTier;
            const badge = featured ? t(`home.pricingTier${n}Badge`) : null;
            return (
              <Card
                key={n}
                className={
                  featured
                    ? 'relative flex flex-col border-primary bg-card shadow-2xl ring-1 ring-primary/40'
                    : 'relative flex flex-col border-border bg-card/95 shadow-md'
                }
              >
                {badge && (
                  <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground shadow-brand">
                    {badge}
                  </Badge>
                )}
                <CardContent className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl tracking-tight">
                    {t(`home.pricingTier${n}Name`)}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t(`home.pricingTier${n}Range`)}
                  </p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-display text-3xl tracking-tight">
                      {t(`home.pricingTier${n}Price`)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {t(`home.pricingTier${n}Period`)}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                    {t(`home.pricingTier${n}Tagline`)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-xl border border-primary/30 bg-card/95 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            {t('home.pricingCtaText')}
          </p>
          <Button asChild size="lg" className="h-auto min-h-11 rounded-sm px-6 shadow-brand">
            <a href="#contact">{t('home.pricingCta')}</a>
          </Button>
        </div>

        <p className="mt-8 max-w-2xl text-xs leading-5 text-muted-foreground">
          {t('home.pricingDisclaimer')}
        </p>
      </div>
    </section>
  );
}
