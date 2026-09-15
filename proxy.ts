// Next.js 16 uses `proxy.ts` instead of `middleware.ts`.
//
// This file is the load-bearing wire-up for:
//   - CSP with per-request nonce
//   - frame-ancestors 'none'
// The CSP is built in `src/lib/csp.ts`: script-src stays
// strict (nonce + 'strict-dynamic', no 'unsafe-inline'/'unsafe-eval' in
// production) — that is a permanent block. style-src deliberately allows
// 'unsafe-inline' so headless UI primitives (Radix/shadcn) work in prod; the
// rationale lives in csp.ts.

import { type NextRequest, NextResponse } from 'next/server';
import { buildCsp } from '@/lib/csp';

export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const isDev = process.env.NODE_ENV === 'development';

  // CSP — script-src strict (nonce + 'strict-dynamic'); style-src relaxed for
  // headless UI. Built in src/lib/csp.ts (single source, unit-tested). The
  // per-request nonce is still exposed via x-nonce for script-src consumers.
  const csp = buildCsp(nonce, isDev, process.env.NEXT_PUBLIC_API_URL ?? '');

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set('Content-Security-Policy', csp);
  return response;
}

export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
