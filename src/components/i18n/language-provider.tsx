'use client';

import { useRouter } from 'next/navigation';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import {
  type AppLocale,
  resolveLocale,
  type Translate,
  translate,
  type Variables,
} from '@/lib/i18n';

type LanguageContextValue = {
  locale: AppLocale;
  setLocale: (locale: AppLocale) => void;
  t: Translate;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  initialLocale,
  children,
}: {
  initialLocale: AppLocale;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [locale, setLocaleState] = useState(() => resolveLocale(initialLocale));

  const setLocale = useCallback(
    (nextLocale: AppLocale) => {
      setLocaleState(nextLocale);
      document.documentElement.lang = nextLocale;
      void fetch('/api/locale', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ locale: nextLocale }),
      }).finally(() => router.refresh());
    },
    [router],
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: (key: string, variables?: Variables) => translate(locale, key, variables),
    }),
    [locale, setLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}
