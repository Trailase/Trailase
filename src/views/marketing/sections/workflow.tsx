import { ClipboardCheck, FileCheck2, Smartphone } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/components/i18n/language-provider';
import { Card, CardContent } from '@/components/ui/card';

const steps = [
  { number: '01', title: 'home.step1Title', description: 'home.step1Text', icon: ClipboardCheck },
  { number: '02', title: 'home.step2Title', description: 'home.step2Text', icon: Smartphone },
  { number: '03', title: 'home.step3Title', description: 'home.step3Text', icon: FileCheck2 },
];

export function Workflow() {
  const { t } = useLanguage();
  return (
    <section
      id="how-it-works"
      className="relative isolate scroll-mt-20 overflow-hidden px-gutter py-20 md:py-28"
    >
      <Image
        src="/marketing/section-workflow.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-30 object-cover object-center"
      />
      <div className="video-overlay pointer-events-none absolute inset-0 -z-20" />
      <div className="pointer-events-none absolute -left-24 top-24 -z-10 size-72 rounded-full border-[48px] border-brand-200/35 dark:border-brand-700/15" />
      <div className="mx-auto w-full max-w-[var(--container-page)]">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-24">
          <div className="video-copy max-w-xl">
            <p className="text-eyebrow">{t('home.workflowEyebrow')}</p>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
              {t('home.workflowTitle')}
            </h2>
            <p className="mt-6 text-body-lg leading-8 text-muted-foreground">
              {t('home.workflowIntro')}
            </p>
          </div>
          <p className="video-copy hidden border-l border-brand-teal pl-6 text-sm leading-6 text-foreground lg:block">
            {t('home.standard')}
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card
                key={step.number}
                className="group relative overflow-hidden border-brand-200/80 bg-card/95 shadow-md transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl dark:border-brand-800 dark:hover:border-brand-700"
              >
                <div className="absolute right-4 top-1 font-display text-8xl font-semibold tracking-tighter text-brand-100 transition group-hover:text-brand-200 dark:text-brand-300/50 dark:group-hover:text-brand-200/60">
                  {step.number}
                </div>
                <CardContent className="relative p-7 pt-8">
                  <span className="grid size-11 place-items-center rounded-full bg-brand-600 text-white shadow-brand dark:bg-brand-400 dark:text-brand-900">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-12 max-w-[15rem] font-display text-h4 tracking-tight">
                    {t(step.title)}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground dark:text-brand-100">
                    {t(step.description)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
