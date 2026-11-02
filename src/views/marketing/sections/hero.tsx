import {
  ArrowRight,
  Camera,
  Check,
  CheckCircle2,
  Gauge,
  KeyRound,
  ListChecks,
  ShieldCheck,
  TriangleAlert,
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/components/i18n/language-provider';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ctaButton } from '../heading';
import { SectionVideo } from '../media';

export function Hero() {
  const { t } = useLanguage();
  const record = [
    { icon: Camera, value: '12', label: t('home.photos') },
    { icon: TriangleAlert, value: '1', label: t('home.issue') },
    { icon: ListChecks, value: '8', label: t('home.inventory') },
    { icon: KeyRound, value: '5', label: t('home.keys') },
    { icon: Gauge, value: '048239', label: t('home.meter') },
    { icon: ShieldCheck, value: '✓', label: t('home.confirmation') },
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-navy px-gutter pb-20 pt-14 text-white md:pt-20 lg:flex lg:min-h-[min(780px,calc(100dvh-3.5rem))] lg:items-center lg:py-20">
        <SectionVideo
          video="homeHero"
          playbackRate={0.6}
          scrim="bg-brand-navy/70 lg:bg-transparent lg:bg-gradient-to-r lg:from-brand-navy/90 lg:via-brand-navy/70 lg:via-50% lg:to-brand-navy/5"
        />
        <div className="mx-auto grid w-full max-w-[var(--container-page)] items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <p className="inline-flex rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-medium backdrop-blur">
              {t('home.slogan')}
            </p>
            <h1 className="mt-6 text-balance font-display text-[clamp(2.5rem,5vw,4.25rem)] font-semibold leading-[1.03] tracking-[-0.035em]">
              {t('home.title')}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">{t('home.intro')}</p>
            <div id="hero-actions" className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className={cn(ctaButton, 'shadow-brand')}>
                <a href="#contact">
                  {t('home.walkthrough')} <ArrowRight aria-hidden />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className={cn(
                  ctaButton,
                  'border-white/50 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white dark:border-white/50 dark:bg-white/10 dark:hover:bg-white/20',
                )}
              >
                <Link href="/operator/inspections">{t('home.prototype')}</Link>
              </Button>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-white/85">
              {['home.perk1', 'home.perk2', 'home.perk3'].map((perk) => (
                <li key={perk} className="flex items-center gap-1.5">
                  <Check className="size-4 text-brand-teal" aria-hidden />
                  {t(perk)}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-5 text-card-foreground shadow-2xl sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-eyebrow">{t('home.report')}</p>
                <p className="mt-2 font-display text-2xl font-semibold tracking-tight">
                  {t('home.mockRoom')}
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Chamberí Living · Sofia Martin
                </p>
              </div>
              <p className="flex shrink-0 items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                <CheckCircle2 className="size-3.5" aria-hidden />
                {t('home.completed')}
              </p>
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
              {record.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex min-w-0 flex-col bg-card p-3">
                  <Icon className="size-4 text-primary" aria-hidden />
                  <dd className="mt-2 font-semibold leading-tight">{value}</dd>
                  <dt className="mt-0.5 hyphens-auto text-xs leading-tight text-muted-foreground [overflow-wrap:anywhere]">
                    {label}
                  </dt>
                </div>
              ))}
            </dl>
            <div className="mt-4 rounded-xl border-l-2 border-amber-400 bg-amber-50 p-3.5 dark:bg-amber-950/30">
              <p className="text-sm font-semibold">{t('home.wall')}</p>
              <p className="mt-0.5 text-xs leading-5 text-muted-foreground">{t('home.wallNote')}</p>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs text-muted-foreground">
              <span>KF-2026-00482</span>
              <span className="font-medium text-primary">{t('home.evidenceRecorded')}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-border bg-card px-gutter py-5">
        <div className="mx-auto flex w-full max-w-[var(--container-page)] flex-wrap items-center justify-between gap-x-8 gap-y-2">
          <p className="font-display text-lg font-semibold tracking-tight">{t('home.badge')}</p>
          <p className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-teal" aria-hidden />
            {t('home.scale')}
          </p>
        </div>
      </div>
    </>
  );
}
