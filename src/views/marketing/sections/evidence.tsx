import { ClipboardCheck, FileCheck2, Smartphone } from 'lucide-react';
import { useLanguage } from '@/components/i18n/language-provider';
import { Card, CardContent } from '@/components/ui/card';

export function Evidence() {
  const { t } = useLanguage();
  const benefits = [
    { icon: Smartphone, title: t('home.tenantTitle'), text: t('home.tenantText') },
    { icon: ClipboardCheck, title: t('home.teamTitle'), text: t('home.teamText') },
    { icon: FileCheck2, title: t('home.readyTitle'), text: t('home.readyText') },
  ];
  return (
    <section className="scroll-reveal relative isolate overflow-hidden border-y border-border bg-background px-gutter py-20 text-foreground md:py-28">
      <div className="mx-auto w-full max-w-[var(--container-page)]">
        <div className="max-w-3xl">
          <p className="text-eyebrow">{t('home.evidenceEyebrow')}</p>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
            {t('home.evidenceTitle')}
          </h2>
          <p className="mt-6 max-w-2xl text-body-lg leading-8 text-muted-foreground">
            {t('home.evidenceText')}
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="border-brand-teal/30 bg-card/95 text-card-foreground shadow-xl backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:border-primary/60"
              >
                <CardContent className="p-6">
                  <span className="flex size-10 items-center justify-center rounded-sm bg-accent text-accent-foreground">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-6 font-display text-2xl tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
