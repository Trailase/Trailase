import { Globe, KeyRound, Link2, ShieldCheck, UserX } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/components/i18n/language-provider';
import { Card, CardContent } from '@/components/ui/card';

export function Trust() {
  const { t } = useLanguage();
  const points = [
    { icon: UserX, title: t('home.trustPoint1Title'), text: t('home.trustPoint1Text') },
    { icon: Link2, title: t('home.trustPoint2Title'), text: t('home.trustPoint2Text') },
    { icon: KeyRound, title: t('home.trustPoint3Title'), text: t('home.trustPoint3Text') },
    { icon: ShieldCheck, title: t('home.trustPoint4Title'), text: t('home.trustPoint4Text') },
    {
      icon: Globe,
      title: t('home.trustPoint5Title'),
      text: t('home.trustPoint5Text'),
      span: true,
    },
  ];

  return (
    <section className="scroll-reveal relative isolate overflow-hidden border-y border-border px-gutter py-20 text-foreground md:py-28">
      <Image
        src="/images/trustHandshake.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-30 object-cover object-[38%_45%]"
      />
      <div className="video-overlay-story absolute inset-0 -z-20" />
      <div className="relative mx-auto w-full max-w-[var(--container-page)]">
        <div className="max-w-2xl">
          <p className="text-eyebrow">{t('home.trustEyebrow')}</p>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
            {t('home.trustTitle')}
          </h2>
          <p className="mt-6 max-w-xl text-body-lg leading-8 text-foreground/75 dark:text-white/72">
            {t('home.trustIntro')}
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <Card
                key={point.title}
                className={
                  point.span
                    ? 'relative border-brand-200/80 bg-card/95 shadow-md dark:border-brand-800 md:col-span-2'
                    : 'relative border-brand-200/80 bg-card/95 shadow-md dark:border-brand-800'
                }
              >
                <CardContent className="flex items-start gap-4 p-6">
                  <span className="grid size-10 shrink-0 place-items-center rounded-sm bg-accent text-accent-foreground">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-lg tracking-tight">{point.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{point.text}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <p className="mt-8 max-w-2xl border-l-2 border-brand-teal pl-5 text-sm leading-6 text-foreground/75 dark:text-white/72">
          {t('home.trustScope')}
        </p>
      </div>
    </section>
  );
}
