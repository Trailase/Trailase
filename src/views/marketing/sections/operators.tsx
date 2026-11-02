import { Building2, KeyRound } from 'lucide-react';
import { useLanguage } from '@/components/i18n/language-provider';
import { sectionTitle } from '../heading';
import { SectionVideo } from '../media';

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
      className="relative isolate scroll-mt-14 overflow-hidden bg-brand-navy px-gutter py-section text-white"
    >
      <SectionVideo
        video="homeOperators"
        playbackRate={0.6}
        scrim="bg-brand-navy/70 lg:bg-transparent lg:bg-gradient-to-r lg:from-brand-navy/90 lg:via-brand-navy/70 lg:via-55% lg:to-brand-navy/5"
      />
      <div className="mx-auto grid w-full max-w-[var(--container-page)] items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="text-caption font-semibold uppercase tracking-[0.08em] text-white/90">
            {t('home.operatorsEyebrow')}
          </p>
          <h2 className={`mt-4 ${sectionTitle}`}>{t('home.operatorsTitle')}</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/85">{t('home.operatorsText')}</p>
          <p className="mt-8 text-sm font-semibold">{t('home.madeFor')}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {audiences.map((audience) => (
              <li
                key={audience}
                className="rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-sm backdrop-blur"
              >
                {t(audience)}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-card p-7 text-card-foreground shadow-2xl">
          <Building2 className="size-7 text-primary" aria-hidden />
          <p className="text-eyebrow mt-8">{t('home.portfolioEyebrow')}</p>
          <p className="mt-3 font-display text-5xl font-semibold tracking-tight text-primary">
            50–5,000
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{t('home.units')}</p>
          <p className="mt-7 flex items-center gap-3 border-t border-border pt-5 text-sm font-medium">
            <KeyRound className="size-4 shrink-0 text-primary" aria-hidden />
            {t('home.standard')}
          </p>
        </div>
      </div>
    </section>
  );
}
