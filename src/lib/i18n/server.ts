import 'server-only';

import { cookies, headers } from 'next/headers';
import { type AppLocale, localeCookie, resolveLocale, supportedLocales } from './config';

function localeFromAcceptLanguage(value: string | null): AppLocale {
  const requested = value
    ?.split(',')
    .map((entry) => entry.trim().slice(0, 2).toLowerCase())
    .find((locale) => supportedLocales.includes(locale as AppLocale));

  return resolveLocale(requested);
}

export async function resolveRequestLocale(): Promise<AppLocale> {
  const storedLocale = (await cookies()).get(localeCookie)?.value;
  if (storedLocale) return resolveLocale(storedLocale);

  return localeFromAcceptLanguage((await headers()).get('accept-language'));
}
