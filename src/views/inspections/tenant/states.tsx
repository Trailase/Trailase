import { ArrowLeft, Link2Off, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/components/i18n/language-provider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import type { FlowStatus } from '@/controllers/inspections/useFlow';
import { DemoLayout } from '../layout';

export function Loading() {
  const { t } = useLanguage();
  return (
    <main className="flex min-h-[calc(100dvh-3.5rem)] items-center bg-background px-gutter py-12">
      <div className="mx-auto w-full max-w-lg rounded-2xl border border-border bg-card p-7 shadow-sm">
        <Progress value={55} aria-label={t('inspection.loading')} />
        <p className="mt-4 text-sm text-muted-foreground">{t('inspection.loading')}</p>
      </div>
    </main>
  );
}

export function Failure({ error, retry }: { error: string | null; retry: () => void }) {
  const { t } = useLanguage();
  return (
    <DemoLayout video="homeHero">
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
          className="h-auto min-h-12 whitespace-normal rounded-full px-6 py-3 font-semibold"
          onClick={retry}
        >
          <RotateCcw aria-hidden />
          {t('inspection.tryAgain')}
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-auto min-h-12 whitespace-normal rounded-full bg-background px-6 py-3 font-semibold"
        >
          <Link href="/">
            <ArrowLeft aria-hidden />
            {t('inspection.return')}
          </Link>
        </Button>
      </div>
    </DemoLayout>
  );
}

export function Complete({ status, room }: { status: FlowStatus; room: string }) {
  const { t } = useLanguage();
  const submitted = status === 'submitted';
  return (
    <DemoLayout video="demoComplete">
      <Badge className="rounded-full bg-brand-100 text-brand-800 hover:bg-brand-100 dark:bg-brand-900/60 dark:text-brand-100">
        {submitted ? t('inspection.complete') : t('inspection.already')}
      </Badge>
      <h1 className="mt-5 font-display text-h2 tracking-tight">
        {submitted ? t('inspection.thanks') : t('inspection.alreadyTitle')}
      </h1>
      <p className="mt-5 max-w-lg text-body-lg text-muted-foreground">
        {submitted ? t('inspection.submittedText', { room }) : t('inspection.alreadyText')}
      </p>
      <p className="mt-5 text-sm text-muted-foreground">{t('inspection.close')}</p>
      <div className="mt-7 border-t border-border pt-6">
        <p className="font-semibold">{t('inspection.demoCta')}</p>
        <Button
          asChild
          className="mt-3 h-auto min-h-12 whitespace-normal rounded-full px-7 py-3 font-semibold shadow-brand"
        >
          <Link href="/#contact">{t('home.walkthrough')}</Link>
        </Button>
      </div>
    </DemoLayout>
  );
}
