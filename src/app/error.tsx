'use client';

import { useLanguage } from '@/components/i18n/language-provider';
import { Button } from '@/components/ui/button';

export default function RouteError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useLanguage();
  return (
    <main className="container mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <h1 className="font-display text-3xl font-semibold tracking-tight">{t('error.title')}</h1>
      <p className="text-muted-foreground">{t('error.text')}</p>
      <Button onClick={() => reset()}>{t('inspection.tryAgain')}</Button>
    </main>
  );
}
