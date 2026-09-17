module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/build/adapter/setup-node-env.external.js [external] (next/dist/build/adapter/setup-node-env.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/build/adapter/setup-node-env.external.js", () => require("next/dist/build/adapter/setup-node-env.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/memory-cache.external.js [external] (next/dist/server/lib/incremental-cache/memory-cache.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/memory-cache.external.js", () => require("next/dist/server/lib/incremental-cache/memory-cache.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/shared-cache-controls.external.js [external] (next/dist/server/lib/incremental-cache/shared-cache-controls.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/shared-cache-controls.external.js", () => require("next/dist/server/lib/incremental-cache/shared-cache-controls.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/router-utils/instrumentation-globals.external.js [external] (next/dist/server/lib/router-utils/instrumentation-globals.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/lib/router-utils/instrumentation-globals.external.js", () => require("next/dist/server/lib/router-utils/instrumentation-globals.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/proxy.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "proxy",
    ()=>proxy
]);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$csp$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/csp.ts [middleware] (ecmascript)");
;
;
function proxy(request) {
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
    const isDev = ("TURBOPACK compile-time value", "development") === 'development';
    // CSP — script-src strict (nonce + 'strict-dynamic'); style-src relaxed for
    // headless UI. Built in src/lib/csp.ts (single source, unit-tested). The
    // per-request nonce is still exposed via x-nonce for script-src consumers.
    const csp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$csp$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["buildCsp"])(nonce, isDev, process.env.NEXT_PUBLIC_API_URL ?? '');
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-nonce', nonce);
    requestHeaders.set('Content-Security-Policy', csp);
    const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next({
        request: {
            headers: requestHeaders
        }
    });
    response.headers.set('Content-Security-Policy', csp);
    return response;
}
const config = {
    matcher: [
        {
            source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
            missing: [
                {
                    type: 'header',
                    key: 'next-router-prefetch'
                },
                {
                    type: 'header',
                    key: 'purpose',
                    value: 'prefetch'
                }
            ]
        }
    ]
};
}),
"[project]/src/lib/csp.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Builds the Content-Security-Policy applied per-request in proxy.ts.
//
// SECURITY POSTURE (platform decision — not the agent's to change):
//   - script-src stays STRICT: per-request nonce + 'strict-dynamic', and NO
//     'unsafe-inline'/'unsafe-eval' in production. This is the directive that
//     actually stops XSS; it is the non-negotiable rampart.
//   - style-src intentionally allows 'unsafe-inline' (and carries NO nonce).
//     Headless UI primitives (Radix/shadcn poppers, slider, progress, toast, …)
//     position and animate via runtime inline style ATTRIBUTES, which are not
//     nonce-eligible. A nonce on style-src silently breaks them in PRODUCTION
//     (they look fine in dev) while buying only marginal CSS-injection
//     protection. Relaxing style-src — and only style-src — keeps every
//     primitive working with zero per-component effort, with the XSS-critical
//     script-src untouched.
//
// CSP spec note: a nonce on a directive makes 'unsafe-inline' IGNORED, so to
// allow inline styles we deliberately do NOT put a nonce on style-src.
//
// buildCsp accepts extra source allow-lists and appends them to resource directives only —
// frame-src, connect-src, media-src, font-src, img-src. It never touches
// script-src or style-src (the strict script-src is the XSS rampart), and it
// drops wildcard / execution-escape tokens (see FORBIDDEN_SOURCE) so a per-app
// list can never silently gut the policy.
/** Optional extra CSP source allow-lists. */ __turbopack_context__.s([
    "buildCsp",
    ()=>buildCsp
]);
// Tokens that would defeat an allow-list seam: a bare wildcard and the
// script/style execution escapes never belong in per-app resource sources.
// They are dropped, not honored — the strict script-src rampart lives on its
// own directive, which this seam never feeds.
const FORBIDDEN_SOURCE = new Set([
    '*',
    "'unsafe-inline'",
    "'unsafe-eval'",
    "'unsafe-hashes'",
    "'strict-dynamic'"
]);
// Merge a directive's base tokens with any per-app extras: split on whitespace,
// drop forbidden and duplicate tokens, preserve order (base first, 'self' leads).
function sourceList(base, extra = []) {
    const seen = new Set();
    for (const part of [
        base,
        ...extra
    ]){
        for (const token of (part ?? '').split(/\s+/)){
            const t = token.trim();
            if (!t || FORBIDDEN_SOURCE.has(t) || seen.has(t)) continue;
            seen.add(t);
        }
    }
    return [
        ...seen
    ].join(' ');
}
function buildCsp(nonce, isDev, apiUrl = '', extra = {}) {
    return `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isDev ? " 'unsafe-eval'" : ''};
    style-src 'self' 'unsafe-inline';
    img-src ${sourceList("'self' blob: data: https:", extra.imgSrc)};
    font-src ${sourceList("'self' data:", extra.fontSrc)};
    connect-src ${sourceList(`'self' ${apiUrl}`, extra.connectSrc)};
    media-src ${sourceList("'self'", extra.mediaSrc)};
    frame-src ${sourceList("'self'", extra.frameSrc)};
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim();
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1-kv50z._.js.map