import 'server-only';
import type { NextRequest, NextResponse } from 'next/server';

export const anonymousSessionCookie = 'trailase_demo_session';

type AnonymousSession = {
  id: string;
  isNew: boolean;
  secure: boolean;
};

const sessionIdPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function getAnonymousSession(request: NextRequest): AnonymousSession {
  const cookieValue = request.cookies.get(anonymousSessionCookie)?.value;
  const forwardedProtocol = request.headers.get('x-forwarded-proto')?.split(',')[0]?.trim();
  const secure = request.nextUrl.protocol === 'https:' || forwardedProtocol === 'https';

  if (cookieValue && sessionIdPattern.test(cookieValue)) {
    return { id: cookieValue, isNew: false, secure };
  }

  return { id: crypto.randomUUID(), isNew: true, secure };
}

export function attachAnonymousSession(response: NextResponse, session: AnonymousSession) {
  if (!session.isNew) return response;

  response.cookies.set(anonymousSessionCookie, session.id, {
    httpOnly: true,
    sameSite: 'lax',
    secure: session.secure,
    path: '/',
  });
  return response;
}
