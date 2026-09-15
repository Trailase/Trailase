'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/i18n/language-provider';

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <main className="container mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <h1 className="font-display text-4xl font-semibold tracking-tight">404</h1>
      <p className="text-muted-foreground">{t('error.notFound')}</p>
      <Link href="/" className="text-sm font-medium text-brand-500 underline">
        {t('error.home')}
      </Link>
    </main>
  );
}
