import { NextResponse } from 'next/server';
import { localeCookie, resolveLocale, supportedLocales } from '@/lib/i18n';

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { locale?: unknown } | null;
  if (typeof body?.locale !== 'string' || !supportedLocales.includes(body.locale as never)) {
    return NextResponse.json({ error: 'Unsupported locale.' }, { status: 400 });
  }

  const locale = resolveLocale(body.locale);
  const response = NextResponse.json({ locale });
  response.cookies.set(localeCookie, locale, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
  });
  return response;
}
