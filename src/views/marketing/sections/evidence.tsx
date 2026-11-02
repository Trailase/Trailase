import { CheckCircle2, ClipboardCheck, FileText, Smartphone } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/components/i18n/language-provider';
import { SectionHeading } from '../heading';

export function Evidence() {
  const { locale, t } = useLanguage();
  const formatDate = (value: string) =>
    new Intl.DateTimeFormat(locale, {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC',
    }).format(new Date(value));
  const points = [
    { icon: Smartphone, title: 'home.tenantTitle', text: 'home.tenantText' },
    { icon: ClipboardCheck, title: 'home.teamTitle', text: 'home.teamText' },
    { icon: FileText, title: 'home.readyTitle', text: 'home.readyText' },
  ];
  const moments = [
    { title: t('story.moveIn'), date: formatDate('2025-09-12'), changed: false },
    { title: t('story.moveOut'), date: formatDate('2026-06-30'), changed: true },
  ];

  return (
    <section className="bg-brand-50 px-gutter py-section dark:bg-card/40">
      <div className="mx-auto grid w-full max-w-[var(--container-page)] items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={t('home.evidenceEyebrow')}
            title={t('home.evidenceTitle')}
            intro={t('home.evidenceText')}
          />
          <ul className="mt-8 flex flex-col gap-5">
            {points.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-card text-primary shadow-sm">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-semibold">{t(title)}</h3>
                  <p className="mt-0.5 text-sm leading-6 text-muted-foreground">{t(text)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-card p-4 shadow-xl sm:p-5">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {moments.map(({ title, date, changed }) => (
              <div key={title}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src="/images/inspectionEvidence.jpg"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="origin-[88%_62%] scale-[1.7] object-cover"
                  />
                  {changed && (
                    <span className="absolute left-[38%] top-[44%] size-9 rounded-full border-2 border-amber-300 bg-amber-300/25 shadow-[0_0_0_5px_rgba(251,191,36,.18)] sm:size-12" />
                  )}
                </div>
                <p className="mt-2.5 text-sm font-semibold">{title}</p>
                <p className="text-xs text-muted-foreground">{date}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-amber-50 p-3.5 dark:bg-amber-950/30">
            <div>
              <p className="text-sm font-semibold">{t('home.wall')}</p>
              <p className="text-xs font-medium text-amber-800 dark:text-amber-200">
                {t('story.potentialChange')}
              </p>
            </div>
            <p className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium">
              <CheckCircle2 className="size-3.5 text-brand-teal" aria-hidden />
              {t('home.mockAssess')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
