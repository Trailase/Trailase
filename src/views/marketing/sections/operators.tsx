import { Building2, KeyRound } from 'lucide-react';
import { AmbientVideo } from '@/components/custom/ambient-video';
import { useLanguage } from '@/components/i18n/language-provider';
import { Badge } from '@/components/ui/badge';
import { backgroundVideo } from '@/lib/background-videos';

const audiences = [
  'home.audience.coliving',
  'home.audience.student',
  'home.audience.serviced',
  'home.audience.btr',
  'home.audience.managers',
];

export function Operators() {
  const { t } = useLanguage();
  return (
    <section
      id="operators"
      className="scroll-reveal relative isolate scroll-mt-20 overflow-hidden px-gutter py-20 md:py-28"
    >
      <AmbientVideo
        src={backgroundVideo('homeOperators')}
        className="pointer-events-none absolute inset-0 -z-30 size-full object-cover object-center motion-reduce:hidden"
        playbackRate={0.6}
      />
      <div className="video-overlay video-overlay-right pointer-events-none absolute inset-0 -z-20" />
      <div className="pointer-events-none absolute -bottom-48 -right-32 -z-10 size-[32rem] rounded-full bg-brand-200/25 blur-3xl dark:bg-brand-700/15" />
      <div className="mx-auto grid w-full max-w-[var(--container-page)] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
        <div className="relative isolate overflow-hidden rounded-xl border border-brand-teal/40 bg-card/95 p-7 text-card-foreground shadow-2xl backdrop-blur-sm">
          <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full border-[38px] border-brand-teal/10" />
          <div className="relative">
            <Building2 className="size-7 text-primary" aria-hidden />
            <p className="text-eyebrow mt-12">{t('home.portfolioEyebrow')}</p>
            <p className="mt-3 font-display text-5xl tracking-tight text-primary">50–5,000</p>
            <p className="mt-2 text-sm text-muted-foreground">{t('home.units')}</p>
            <div className="mt-8 flex items-center gap-3 border-t border-border pt-5 text-sm">
              <KeyRound className="size-4 shrink-0 text-primary" aria-hidden />
              {t('home.standard')}
            </div>
          </div>
        </div>
        <div className="video-copy">
          <p className="text-eyebrow">{t('home.operatorsEyebrow')}</p>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
            {t('home.operatorsTitle')}
          </h2>
          <p className="mt-6 max-w-xl text-body-lg leading-8 text-muted-foreground">
            {t('home.operatorsText')}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {audiences.map((audience) => (
              <Badge
                key={audience}
                variant="outline"
                className="rounded-full border-brand-200 bg-brand-50/70 px-3.5 py-2 font-medium text-brand-800 shadow-xs dark:border-brand-800 dark:bg-brand-900/35 dark:text-brand-100"
              >
                <span className="mr-2 inline-block size-1.5 rounded-full bg-brand-teal" />
                {t(audience)}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
