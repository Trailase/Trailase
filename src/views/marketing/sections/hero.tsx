import { ArrowRight, Camera, Check, CheckCircle2, Gauge, KeyRound, ListChecks } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/i18n/language-provider';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ctaButton } from '../heading';

const audiences = [
  'home.audience.coliving',
  'home.audience.student',
  'home.audience.serviced',
  'home.audience.btr',
  'home.audience.managers',
];

export function Hero() {
  const { t } = useLanguage();
  const record = [
    { icon: Camera, value: '12', label: t('home.photos') },
    { icon: ListChecks, value: '8', label: t('home.inventory') },
    { icon: KeyRound, value: '5', label: t('home.keys') },
    { icon: Gauge, value: '048239', label: t('home.meter') },
  ];

  return (
    <section className="hero-wash overflow-hidden px-gutter pb-12 pt-10 md:pb-16 md:pt-16">
      <div className="mx-auto grid w-full max-w-[var(--container-page)] items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div>
          <p className="inline-flex rounded-full bg-accent px-3.5 py-1.5 text-sm font-medium text-accent-foreground">
            {t('home.badge')}
          </p>
          <h1 className="mt-6 text-balance font-display text-[clamp(2.4rem,4.4vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-brand-navy dark:text-white">
            {t('home.title')}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">{t('home.intro')}</p>
          <div id="hero-actions" className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className={cn(ctaButton, 'shadow-brand')}>
              <a href="#contact">
                {t('home.walkthrough')} <ArrowRight aria-hidden />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className={ctaButton}>
              <Link href="/operator/inspections">{t('home.prototype')}</Link>
            </Button>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-muted-foreground">
            {['home.perk1', 'home.perk2', 'home.perk3'].map((perk) => (
              <li key={perk} className="flex items-center gap-1.5">
                <Check className="size-4 text-brand-teal" aria-hidden />
                {t(perk)}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mb-6 lg:mb-0">
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/inspectionEvidence.jpg"
              alt={t('home.heroImageAlt')}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[32%_center]"
            />
          </div>
          <p className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-card/95 px-3 py-1.5 text-xs font-semibold shadow-md backdrop-blur sm:left-4 sm:top-4">
            <CheckCircle2 className="size-4 text-brand-teal" aria-hidden />
            {t('home.signed')}
          </p>
          <div className="float-slow absolute -bottom-6 right-2 w-[min(17.5rem,82%)] rounded-2xl border border-border bg-card p-4 shadow-xl sm:right-4 lg:-right-4">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              {t('home.report')}
            </p>
            <p className="mt-1 font-display text-lg font-semibold tracking-tight">
              {t('home.mockRoom')}
            </p>
            <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2.5">
              {record.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex min-w-0 gap-2">
                  <Icon className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden />
                  <div className="min-w-0">
                    <dd className="text-sm font-semibold leading-tight">{value}</dd>
                    <dt className="text-[0.7rem] leading-tight text-muted-foreground hyphens-auto [overflow-wrap:anywhere]">
                      {label}
                    </dt>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 flex w-full max-w-[var(--container-page)] flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6 md:mt-20">
        <p className="text-sm font-semibold">{t('home.madeFor')}</p>
        <ul className="flex flex-wrap gap-2">
          {audiences.map((audience) => (
            <li
              key={audience}
              className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground"
            >
              {t(audience)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
