import { ArrowLeft, Link2Off, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { AmbientVideo } from '@/components/custom/ambient-video';
import { DemoBackground } from '@/components/custom/demo-background';
import { useLanguage } from '@/components/i18n/language-provider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import type { FlowStatus } from '@/controllers/inspections/useFlow';
import { backgroundVideo } from '@/lib/background-videos';

export function Loading() {
  const { t } = useLanguage();
  return (
    <main className="flex min-h-[calc(100vh-3.5rem)] items-center bg-gradient-to-br from-brand-50 via-background to-brand-100/50 px-gutter py-12 dark:from-brand-900/30 dark:via-background dark:to-brand-900/10">
      <div className="mx-auto w-full max-w-lg rounded-2xl border border-brand-200 bg-card/90 p-7 shadow-2xl backdrop-blur dark:border-brand-800">
        <Progress value={55} aria-label={t('inspection.loading')} />
        <p className="mt-4 text-sm text-muted-foreground">{t('inspection.loading')}</p>
      </div>
    </main>
  );
}

export function Failure({ error, retry }: { error: string | null; retry: () => void }) {
  const { t } = useLanguage();
  return (
    <main className="relative isolate flex min-h-[calc(100svh-3.5rem)] items-center overflow-hidden bg-background px-gutter py-12">
      <AmbientVideo
        src={backgroundVideo('homeHero')}
        className="pointer-events-none absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-background/10" />
      <div className="mx-auto w-full max-w-[var(--container-page)]">
        <div className="w-full max-w-xl rounded-2xl border border-border bg-card/95 p-7 text-foreground shadow-2xl backdrop-blur sm:p-9">
          <span className="grid size-12 place-items-center rounded-xl bg-accent text-primary">
            <Link2Off aria-hidden className="size-6" />
          </span>
          <h1 className="mt-5 font-display text-h2 tracking-tight">{t('inspection.linkTitle')}</h1>
          <p role="alert" className="mt-4 text-muted-foreground">
            {error ?? t('inspection.linkUnavailable')}
          </p>
          <p className="mt-4 text-foreground">{t('inspection.recoveryHelp')}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              type="button"
              className="h-auto min-h-12 whitespace-normal rounded-md px-5 py-3"
              onClick={retry}
            >
              <RotateCcw aria-hidden />
              {t('inspection.tryAgain')}
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-auto min-h-12 whitespace-normal rounded-md bg-background px-5 py-3"
            >
              <Link href="/">
                <ArrowLeft aria-hidden />
                {t('inspection.return')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export function Complete({ status, room }: { status: FlowStatus; room: string }) {
  const { t } = useLanguage();
  const submitted = status === 'submitted';
  return (
    <main className="demo-layout demo-complete min-h-[calc(100vh-3.5rem)] bg-background px-gutter py-12">
      <DemoBackground src={backgroundVideo('demoComplete')} />
      <div className="mx-auto w-full max-w-[var(--container-page)]">
        <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card/95 p-6 text-foreground shadow-2xl backdrop-blur-xl sm:p-10">
          <Badge className="rounded-sm bg-brand-100 text-brand-800 hover:bg-brand-100 dark:bg-brand-900/60 dark:text-brand-100">
            {submitted ? t('inspection.complete') : t('inspection.already')}
          </Badge>
          <h1 className="mt-5 font-display text-h1 tracking-tight">
            {submitted ? t('inspection.thanks') : t('inspection.alreadyTitle')}
          </h1>
          <p className="mt-5 max-w-lg text-body-lg text-muted-foreground">
            {submitted ? t('inspection.submittedText', { room }) : t('inspection.alreadyText')}
          </p>
          <p className="mt-5 text-sm text-muted-foreground">{t('inspection.close')}</p>
        </div>
      </div>
    </main>
  );
}
