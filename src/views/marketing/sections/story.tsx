import {
  AlertCircle,
  Camera,
  ClipboardList,
  FileCheck2,
  Gauge,
  KeyRound,
  PenLine,
} from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/components/i18n/language-provider';
import { sectionTitle } from '../heading';
import { SectionVideo } from '../media';

const evidence = [
  { key: 'story.photos', value: '12', icon: Camera },
  { key: 'story.damage', value: '1', icon: AlertCircle },
  { key: 'story.inventory', value: '8', icon: ClipboardList },
  { key: 'story.meter', value: '048239', icon: Gauge },
  { key: 'story.keys', value: '5', icon: KeyRound },
  { key: 'story.signed', value: '✓', icon: PenLine },
];

function Phase({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <li className="flex flex-col rounded-2xl bg-card p-4 text-card-foreground shadow-2xl sm:p-5">
      <p className="self-start rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary-foreground">
        {label}
      </p>
      <div className="mt-4 flex flex-1 flex-col">{children}</div>
    </li>
  );
}

export function Story() {
  const { t } = useLanguage();
  return (
    <section
      id="evidence-story"
      className="relative isolate overflow-hidden bg-brand-navy px-gutter py-section text-white"
    >
      <SectionVideo video="homeStoryCombined" scrim="bg-brand-navy/70" />
      <div className="mx-auto w-full max-w-[var(--container-page)]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-caption font-semibold uppercase tracking-[0.08em] text-white/90">
            {t('story.eyebrow')}
          </p>
          <h2 className={`mt-4 ${sectionTitle}`}>{t('story.title')}</h2>
          <p className="mt-5 text-lg leading-8 text-white/85">{t('story.intro')}</p>
        </div>

        <ol className="mt-12 grid gap-5 lg:grid-cols-3">
          <Phase label={t('story.phase.scattered')}>
            <ul className="grid flex-1 grid-cols-2 gap-2.5">
              {evidence.map(({ key, value, icon: Icon }) => (
                <li key={key} className="min-w-0 rounded-xl border border-border p-3">
                  <Icon className="size-4 text-primary" aria-hidden />
                  <p className="mt-2 font-semibold leading-tight">{value}</p>
                  <p className="mt-0.5 hyphens-auto text-xs leading-tight text-muted-foreground [overflow-wrap:anywhere]">
                    {t(key)}
                  </p>
                </li>
              ))}
            </ul>
          </Phase>

          <Phase label={t('story.phase.structured')}>
            <div className="flex flex-1 flex-col overflow-hidden rounded-xl border border-border">
              <div className="flex items-center justify-between gap-3 border-b border-border p-4">
                <div className="min-w-0">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                    {t('story.report')}
                  </p>
                  <p className="mt-1 text-lg font-semibold">{t('home.mockRoom')}</p>
                </div>
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                  <FileCheck2 className="size-4" aria-hidden />
                </span>
              </div>
              <dl className="grid flex-1 grid-cols-2 gap-px bg-border">
                {evidence.slice(0, 4).map(({ key, value }) => (
                  <div key={key} className="min-w-0 bg-card p-3">
                    <dd className="font-semibold">{value}</dd>
                    <dt className="mt-0.5 hyphens-auto text-xs leading-tight text-muted-foreground [overflow-wrap:anywhere]">
                      {t(key)}
                    </dt>
                  </div>
                ))}
              </dl>
              <p className="flex items-center gap-2 bg-amber-50 p-3 text-xs font-medium text-amber-900 dark:bg-amber-950/35 dark:text-amber-200">
                <AlertCircle className="size-4 shrink-0" aria-hidden />
                {t('story.damageNote')}
              </p>
            </div>
          </Phase>

          <Phase label={t('story.phase.comparison')}>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { title: t('story.moveIn'), changed: false },
                { title: t('story.moveOut'), changed: true },
              ].map(({ title, changed }) => (
                <div key={title}>
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    <Image
                      src="/images/inspectionEvidence.jpg"
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 15vw, 50vw"
                      className="origin-[88%_62%] scale-[1.7] object-cover"
                    />
                    {changed && (
                      <span className="absolute left-[38%] top-[44%] size-8 rounded-full border-2 border-amber-300 bg-amber-300/25 shadow-[0_0_0_4px_rgba(251,191,36,.18)]" />
                    )}
                  </div>
                  <p className="mt-2 text-sm font-semibold">{title}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {t('story.evidenceNote')}
            </p>
          </Phase>
        </ol>
      </div>
    </section>
  );
}
