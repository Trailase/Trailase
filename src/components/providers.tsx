'use client';

import { LanguageProvider } from '@/components/i18n/language-provider';
import type { AppLocale } from '@/lib/i18n';

export function AppProviders({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: AppLocale;
}) {
  return <LanguageProvider initialLocale={initialLocale}>{children}</LanguageProvider>;
}
