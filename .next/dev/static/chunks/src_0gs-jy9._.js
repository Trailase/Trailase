(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/custom/global-mounts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalMounts",
    ()=>GlobalMounts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/i18n/language-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contact$2d$redirect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/contact-redirect.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function GlobalMounts() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [contactHref, setContactHref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalMounts.useEffect": ()=>{
            const handleContactRedirect = {
                "GlobalMounts.useEffect.handleContactRedirect": (event)=>{
                    const detail = event.detail;
                    if (detail?.href.startsWith('mailto:')) setContactHref(detail.href);
                }
            }["GlobalMounts.useEffect.handleContactRedirect"];
            window.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contact$2d$redirect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactRedirectEvent"], handleContactRedirect);
            return ({
                "GlobalMounts.useEffect": ()=>window.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contact$2d$redirect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactRedirectEvent"], handleContactRedirect)
            })["GlobalMounts.useEffect"];
        }
    }["GlobalMounts.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: Boolean(contactHref),
        onOpenChange: (open)=>!open && setContactHref(null),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-md rounded-xl border-brand-200 shadow-2xl dark:border-brand-800",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "grid size-11 place-items-center rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900 dark:text-brand-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                        className: "size-5",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/global-mounts.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/custom/global-mounts.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "font-display text-2xl tracking-tight",
                            children: t('contact.redirectTitle')
                        }, void 0, false, {
                            fileName: "[project]/src/components/custom/global-mounts.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            className: "pt-1 leading-6",
                            children: t('contact.redirectText')
                        }, void 0, false, {
                            fileName: "[project]/src/components/custom/global-mounts.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/custom/global-mounts.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    className: "mt-2 gap-2 sm:space-x-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogClose"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                variant: "outline",
                                children: t('contact.cancel')
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/global-mounts.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/custom/global-mounts.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: contactHref ?? undefined,
                                target: "_blank",
                                rel: "noopener",
                                onClick: ()=>{
                                    window.setTimeout(()=>setContactHref(null), 300);
                                },
                                children: [
                                    t('contact.continue'),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/custom/global-mounts.tsx",
                                        lineNumber: 61,
                                        columnNumber: 39
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/custom/global-mounts.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/custom/global-mounts.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/custom/global-mounts.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/custom/global-mounts.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/custom/global-mounts.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(GlobalMounts, "Y1SM1opLOV0ot/JInjYQyaIG0f0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = GlobalMounts;
var _c;
__turbopack_context__.k.register(_c, "GlobalMounts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/custom/site-nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteFooter",
    ()=>SiteFooter,
    "SiteNav",
    ()=>SiteNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$custom$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/custom/theme-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/i18n/language-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$language$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/i18n/language-selector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contact$2d$redirect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/contact-redirect.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nav.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/site.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/brand.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function SiteNav() {
    _s();
    const { locale, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const primaryItems = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItems"].filter((item)=>item.group === 'primary');
    const contactItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItems"].find((item)=>item.group === 'secondary');
    const hrefFor = (item)=>item.translationKey === 'nav.contact' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactMailto"])(locale) : item.href;
    const isActive = (href)=>href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
    const openContact = (event, item)=>{
        if (item.translationKey !== 'nav.contact') return;
        event.preventDefault();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contact$2d$redirect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestContactRedirect"])(hrefFor(item));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            "aria-label": "Primary",
            className: "mx-auto flex h-14 max-w-screen-xl items-center gap-2 px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "mr-3 shrink-0 rounded-md dark:bg-white/95 dark:px-2 dark:py-1 dark:shadow-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/brand/logo.png",
                        alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteName"],
                        width: 180,
                        height: 60,
                        priority: true,
                        className: "h-8 w-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/site-nav.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/custom/site-nav.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden items-center gap-1 md:flex",
                    children: primaryItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            asChild: true,
                            variant: "ghost",
                            size: "sm",
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(isActive(item.href) && 'bg-accent text-accent-foreground'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                children: t(item.translationKey)
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/site-nav.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this)
                        }, item.href, false, {
                            fileName: "[project]/src/components/custom/site-nav.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/custom/site-nav.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ml-auto flex items-center gap-1",
                    children: [
                        contactItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            asChild: true,
                            variant: "secondary",
                            size: "sm",
                            className: "hidden md:inline-flex",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: hrefFor(contactItem),
                                onClick: (event)=>openContact(event, contactItem),
                                children: t(contactItem.translationKey)
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/site-nav.tsx",
                                lineNumber: 73,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/custom/site-nav.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$language$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSelector"], {}, void 0, false, {
                            fileName: "[project]/src/components/custom/site-nav.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$custom$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                            fileName: "[project]/src/components/custom/site-nav.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
                            open: mobileOpen,
                            onOpenChange: setMobileOpen,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "md:hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                "aria-hidden": true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/custom/site-nav.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: t('nav.openMenu')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/custom/site-nav.tsx",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/custom/site-nav.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/custom/site-nav.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                                    side: "right",
                                    "aria-describedby": undefined,
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                                className: "text-left",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteName"]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/custom/site-nav.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/custom/site-nav.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                            "aria-label": "Mobile",
                                            className: "mt-6 flex flex-col gap-2",
                                            children: [
                                                primaryItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        asChild: true,
                                                        variant: "ghost",
                                                        className: "w-full justify-start",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: item.href,
                                                            onClick: ()=>setMobileOpen(false),
                                                            children: t(item.translationKey)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/custom/site-nav.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, item.href, false, {
                                                        fileName: "[project]/src/components/custom/site-nav.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 19
                                                    }, this)),
                                                contactItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    asChild: true,
                                                    variant: "secondary",
                                                    className: "mt-2 w-full justify-start",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: hrefFor(contactItem),
                                                        onClick: (event)=>{
                                                            openContact(event, contactItem);
                                                            setMobileOpen(false);
                                                        },
                                                        children: t(contactItem.translationKey)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/custom/site-nav.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/custom/site-nav.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/custom/site-nav.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/custom/site-nav.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/custom/site-nav.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/custom/site-nav.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/custom/site-nav.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/custom/site-nav.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(SiteNav, "eJDXnhTZVEVhZB+V3E9UkMH/R6Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SiteNav;
function SiteFooter() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-border bg-background px-gutter py-7 text-center text-sm text-muted-foreground",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                "© ",
                new Date().getFullYear(),
                " ",
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteName"]
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/custom/site-nav.tsx",
            lineNumber: 125,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/custom/site-nav.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c1 = SiteFooter;
var _c, _c1;
__turbopack_context__.k.register(_c, "SiteNav");
__turbopack_context__.k.register(_c1, "SiteFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/custom/theme-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/i18n/language-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ThemeToggle({ className }) {
    _s();
    const { resolvedTheme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        variant: "ghost",
        size: "icon",
        className: className,
        "aria-label": t('theme.toggle'),
        onClick: ()=>setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                className: "block dark:hidden"
            }, void 0, false, {
                fileName: "[project]/src/components/custom/theme-toggle.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                className: "hidden dark:block"
            }, void 0, false, {
                fileName: "[project]/src/components/custom/theme-toggle.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/custom/theme-toggle.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "2TEQMcnHGfBz8VTWglw8yqTiC9M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/i18n/language-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/config.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function LanguageProvider({ initialLocale, children }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [locale, setLocaleState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "LanguageProvider.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveLocale"])(initialLocale)
    }["LanguageProvider.useState"]);
    const setLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LanguageProvider.useCallback[setLocale]": (nextLocale)=>{
            setLocaleState(nextLocale);
            document.documentElement.lang = nextLocale;
            void fetch('/api/locale', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    locale: nextLocale
                })
            }).finally({
                "LanguageProvider.useCallback[setLocale]": ()=>router.refresh()
            }["LanguageProvider.useCallback[setLocale]"]);
        }
    }["LanguageProvider.useCallback[setLocale]"], [
        router
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LanguageProvider.useMemo[value]": ()=>({
                locale,
                setLocale,
                t: ({
                    "LanguageProvider.useMemo[value]": (key, variables)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["translate"])(locale, key, variables)
                })["LanguageProvider.useMemo[value]"]
            })
    }["LanguageProvider.useMemo[value]"], [
        locale,
        setLocale
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/i18n/language-provider.tsx",
        lineNumber: 53,
        columnNumber: 10
    }, this);
}
_s(LanguageProvider, "ydUwtzhjDK0FttJvyZwJqT8g6Js=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/i18n/language-selector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageSelector",
    ()=>LanguageSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/languages.js [app-client] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/i18n/language-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/config.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function LanguageSelector() {
    _s();
    const { locale, setLocale, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    variant: "outline",
                    size: "sm",
                    className: "h-9 gap-2 bg-background/85 px-2.5 shadow-xs",
                    "aria-label": t('language.label'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                            className: "size-4 text-muted-foreground",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/src/components/i18n/language-selector.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden text-xs font-medium sm:inline",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeNames"][locale]
                        }, void 0, false, {
                            fileName: "[project]/src/components/i18n/language-selector.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-semibold uppercase sm:hidden",
                            children: locale
                        }, void 0, false, {
                            fileName: "[project]/src/components/i18n/language-selector.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            className: "size-3.5 text-muted-foreground",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/src/components/i18n/language-selector.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/i18n/language-selector.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/i18n/language-selector.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                align: "end",
                className: "min-w-44 border-border bg-popover p-1.5 text-popover-foreground shadow-xl",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportedLocales"].map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        className: "h-10 cursor-pointer justify-between rounded-md px-3",
                        onSelect: ()=>setLocale(value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeNames"][value]
                            }, void 0, false, {
                                fileName: "[project]/src/components/i18n/language-selector.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: locale === value ? 'size-4 text-brand-500' : 'size-4 opacity-0',
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/i18n/language-selector.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        ]
                    }, value, true, {
                        fileName: "[project]/src/components/i18n/language-selector.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/i18n/language-selector.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/i18n/language-selector.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(LanguageSelector, "QuDHc5OP5OCt9T+RsBN8EaINh4Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = LanguageSelector;
var _c;
__turbopack_context__.k.register(_c, "LanguageSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppProviders",
    ()=>AppProviders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/i18n/language-provider.tsx [app-client] (ecmascript)");
'use client';
;
;
function AppProviders({ children, initialLocale }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageProvider"], {
        initialLocale: initialLocale,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/providers.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_c = AppProviders;
var _c;
__turbopack_context__.k.register(_c, "AppProviders");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/theme-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
// next-themes wrapper. Wired into layout.tsx providers slot (class-based dark mode).
'use client';
;
;
function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/theme-provider.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0', {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
            destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
            outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
            secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2',
            sm: 'h-8 rounded-md px-3 text-xs',
            lg: 'h-10 rounded-md px-8',
            icon: 'h-9 w-9'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 44,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = 'Button';
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const DialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c = DialogOverlay;
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg', className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 48,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 49,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/dialog.tsx",
                        lineNumber: 47,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = DialogContent;
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col space-y-1.5 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 57,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = DialogHeader;
DialogHeader.displayName = 'DialogHeader';
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = DialogFooter;
DialogFooter.displayName = 'DialogFooter';
const DialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg font-semibold leading-none tracking-tight', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 73,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c6 = DialogTitle;
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm text-muted-foreground', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c8 = DialogDescription;
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "DialogOverlay");
__turbopack_context__.k.register(_c1, "DialogContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "DialogContent");
__turbopack_context__.k.register(_c3, "DialogHeader");
__turbopack_context__.k.register(_c4, "DialogFooter");
__turbopack_context__.k.register(_c5, "DialogTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "DialogTitle");
__turbopack_context__.k.register(_c7, "DialogDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const DropdownMenu = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DropdownMenuTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DropdownMenuGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"];
const DropdownMenuPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DropdownMenuSub = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"];
const DropdownMenuRadioGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"];
const DropdownMenuSubTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, inset, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0', inset && 'pl-8', className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                className: "ml-auto"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = DropdownMenuSubTrigger;
DropdownMenuSubTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"].displayName;
const DropdownMenuSubContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 46,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = DropdownMenuSubContent;
DropdownMenuSubContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"].displayName;
const DropdownMenuContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md', 'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 62,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 61,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = DropdownMenuContent;
DropdownMenuContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DropdownMenuItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0', inset && 'pl-8', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 82,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = DropdownMenuItem;
DropdownMenuItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, children, checked, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 108,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 107,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 98,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = DropdownMenuCheckboxItem;
DropdownMenuCheckboxItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"].displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                        className: "h-2 w-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 130,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 129,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 121,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = DropdownMenuRadioItem;
DropdownMenuRadioItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"].displayName;
const DropdownMenuLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c12 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 145,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c13 = DropdownMenuLabel;
DropdownMenuLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"].displayName;
const DropdownMenuSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c14 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('-mx-1 my-1 h-px bg-muted', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 157,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c15 = DropdownMenuSeparator;
DropdownMenuSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].displayName;
const DropdownMenuShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('ml-auto text-xs tracking-widest opacity-60', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c16 = DropdownMenuShortcut;
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;
__turbopack_context__.k.register(_c, "DropdownMenuSubTrigger$React.forwardRef");
__turbopack_context__.k.register(_c1, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c2, "DropdownMenuSubContent$React.forwardRef");
__turbopack_context__.k.register(_c3, "DropdownMenuSubContent");
__turbopack_context__.k.register(_c4, "DropdownMenuContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "DropdownMenuContent");
__turbopack_context__.k.register(_c6, "DropdownMenuItem$React.forwardRef");
__turbopack_context__.k.register(_c7, "DropdownMenuItem");
__turbopack_context__.k.register(_c8, "DropdownMenuCheckboxItem$React.forwardRef");
__turbopack_context__.k.register(_c9, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c10, "DropdownMenuRadioItem$React.forwardRef");
__turbopack_context__.k.register(_c11, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c12, "DropdownMenuLabel$React.forwardRef");
__turbopack_context__.k.register(_c13, "DropdownMenuLabel");
__turbopack_context__.k.register(_c14, "DropdownMenuSeparator$React.forwardRef");
__turbopack_context__.k.register(_c15, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c16, "DropdownMenuShortcut");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetOverlay",
    ()=>SheetOverlay,
    "SheetPortal",
    ()=>SheetPortal,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const Sheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SheetTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const SheetClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const SheetPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const SheetOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0', className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c = SheetOverlay;
SheetOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const sheetVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out', {
    variants: {
        side: {
            top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
            bottom: 'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
            left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
            right: 'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm'
        }
    },
    defaultVariants: {
        side: 'right'
    }
});
const SheetContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = ({ side = 'right', className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 61,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sheetVariants({
                    side
                }), className),
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 64,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 65,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/sheet.tsx",
                        lineNumber: 63,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 62,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = SheetContent;
SheetContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const SheetHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col space-y-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = SheetHeader;
SheetHeader.displayName = 'SheetHeader';
const SheetFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 79,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = SheetFooter;
SheetFooter.displayName = 'SheetFooter';
const SheetTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg font-semibold text-foreground', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 90,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c6 = SheetTitle;
SheetTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const SheetDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm text-muted-foreground', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 102,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c8 = SheetDescription;
SheetDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "SheetOverlay");
__turbopack_context__.k.register(_c1, "SheetContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "SheetContent");
__turbopack_context__.k.register(_c3, "SheetHeader");
__turbopack_context__.k.register(_c4, "SheetFooter");
__turbopack_context__.k.register(_c5, "SheetTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "SheetTitle");
__turbopack_context__.k.register(_c7, "SheetDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/sonner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// Global toast host mounted once in the layout providers slot.
const Toaster = ({ ...props })=>{
    _s();
    const { theme = 'system' } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
        theme: theme,
        className: "toaster group",
        style: {
            '--normal-bg': 'var(--popover)',
            '--normal-text': 'var(--popover-foreground)',
            '--normal-border': 'var(--border)'
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sonner.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Toaster, "bbCbBsvL7+LiaR8ofHlkcwveh/Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Toaster;
;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/brand.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Brand identity. `site.ts` re-exports
// siteName/siteDescription; `manifest.ts` + `opengraph-image.tsx` read `brandVisual`.
__turbopack_context__.s([
    "brandVisual",
    ()=>brandVisual,
    "siteDescription",
    ()=>siteDescription,
    "siteName",
    ()=>siteName
]);
const siteName = 'Trailase';
const siteDescription = 'Clear property handovers, guided tenant inspections, and one complete record from move-in to move-out.';
const brandVisual = {
    /** PWA browser-UI / status-bar color. */ themeColor: '#1766ff',
    /** PWA splash + install background. */ backgroundColor: '#f5f9ff',
    /** Social-share (OG/Twitter) image. */ og: {
        background: '#031d4f',
        foreground: '#ffffff',
        /** Second line under the site name; '' hides it. */ tagline: 'Clear handovers. Confident decisions.'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/contact-redirect.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contactRedirectEvent",
    ()=>contactRedirectEvent,
    "requestContactRedirect",
    ()=>requestContactRedirect
]);
const contactRedirectEvent = 'trailase:contact-redirect';
function requestContactRedirect(href) {
    window.dispatchEvent(new CustomEvent(contactRedirectEvent, {
        detail: {
            href
        }
    }));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/env.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "env",
    ()=>env
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Optional environment configuration. Both Trailase prototypes run without an
// env file; Railway supplies its public domain to the production launcher.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@t3-oss/env-nextjs/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-client] (ecmascript) <export * as z>");
;
;
const env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEnv"])({
    server: {
        NODE_ENV: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            'development',
            'test',
            'production'
        ]).default('development'),
        // Contact form email delivery (see src/models/contact/service.ts). Optional:
        // without these the form reports itself as unavailable and the UI falls
        // back to the mailto link instead of pretending to send anything.
        RESEND_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        CONTACT_TO_EMAIL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email().optional(),
        CONTACT_FROM_EMAIL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    },
    client: {
        NEXT_PUBLIC_APP_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().default('http://localhost:3000'),
        // Base for @/lib/api-client + proxy.ts connect-src. Default-empty
        // (unset) means same-origin `/api`; set only for an external API origin.
        NEXT_PUBLIC_API_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional(),
        // Public Cal.com/Calendly booking link (see contact.tsx). Optional: unset
        // means no calendar link renders, only the contact form.
        NEXT_PUBLIC_CAL_LINK: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional()
    },
    runtimeEnv: {
        NODE_ENV: ("TURBOPACK compile-time value", "development"),
        RESEND_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.RESEND_API_KEY,
        CONTACT_TO_EMAIL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.CONTACT_TO_EMAIL,
        CONTACT_FROM_EMAIL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.CONTACT_FROM_EMAIL,
        NEXT_PUBLIC_APP_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_APP_URL,
        NEXT_PUBLIC_API_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_CAL_LINK: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CAL_LINK
    },
    emptyStringAsUndefined: true,
    // Kept for compatibility with the production Docker build.
    skipValidation: !!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SKIP_ENV_VALIDATION
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/i18n/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contactMailto",
    ()=>contactMailto,
    "localeCookie",
    ()=>localeCookie,
    "localeNames",
    ()=>localeNames,
    "resolveLocale",
    ()=>resolveLocale,
    "supportedLocales",
    ()=>supportedLocales
]);
const supportedLocales = [
    'en',
    'es',
    'fr',
    'nl'
];
const localeCookie = 'trailase_locale';
const localeNames = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    nl: 'Nederlands'
};
function resolveLocale(value) {
    return supportedLocales.includes(value) ? value : 'en';
}
const contactEmail = 'k3y.fl0ws@gmail.com';
const contactCopy = {
    en: {
        subject: 'Show me Trailase in action',
        body: 'Hello,\n\nI would like to see how Trailase could make our property handovers clearer and easier to manage.\n\nBest regards,'
    },
    es: {
        subject: 'Quiero ver Trailase en acción',
        body: 'Hola,\n\nMe gustaría ver cómo Trailase puede hacer que las entregas de nuestras propiedades sean más claras y fáciles de gestionar.\n\nUn saludo,'
    },
    fr: {
        subject: 'Je souhaite voir Trailase en action',
        body: 'Bonjour,\n\nJe souhaiterais voir comment Trailase peut rendre nos états des lieux plus clairs et plus simples à gérer.\n\nCordialement,'
    },
    nl: {
        subject: 'Laat mij Trailase in actie zien',
        body: 'Hallo,\n\nIk wil graag zien hoe Trailase onze woningoverdrachten duidelijker en makkelijker beheersbaar kan maken.\n\nMet vriendelijke groet,'
    }
};
function contactMailto(locale) {
    const copy = contactCopy[locale];
    return `mailto:${contactEmail}?subject=${encodeURIComponent(copy.subject)}&body=${encodeURIComponent(copy.body)}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/i18n/en.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "messages",
    ()=>messages
]);
const messages = {
    'language.label': 'Language',
    'theme.toggle': 'Toggle light and dark theme',
    'nav.how': 'How it works',
    'nav.for': 'Who it’s for',
    'nav.pricing': 'Pricing',
    'nav.prototype': 'Live demo',
    'nav.contact': 'Book a walkthrough',
    'nav.openMenu': 'Open menu',
    'home.badge': 'Every handover. One clear record.',
    'home.title': 'Clear handovers. Confident decisions.',
    'home.intro': 'Trailase guides tenants through move-in and move-out inspections, then brings every photo, note, reading, and signature into one review-ready record.',
    'home.walkthrough': 'See Trailase in action',
    'home.prototype': 'Try the live demo',
    'home.scale': 'Made for professional teams managing 50–5,000 rooms or units.',
    'home.report': 'Move-in condition report',
    'home.photos': 'Photographs',
    'home.issue': 'Existing issue',
    'home.inventory': 'Inventory items',
    'home.keys': 'Keys received',
    'home.meter': 'Meter reading',
    'home.confirmation': 'Tenant confirmation',
    'home.completed': 'Completed',
    'home.wall': 'Wall near window',
    'home.wallNote': 'Existing surface mark documented and confirmed by the tenant.',
    'home.evidenceRecorded': 'Evidence recorded',
    'home.workflowEyebrow': 'From follow-up to flow',
    'home.workflowTitle': 'Stop chasing details. Keep every handover moving.',
    'home.workflowIntro': 'Replace paper forms, loose camera rolls, and message threads with one simple process your team can repeat with confidence.',
    'home.step1Title': 'Set the handover in motion',
    'home.step1Text': 'Choose the property, room, tenant, and inspection type from one operator workspace.',
    'home.step2Title': 'Let the tenant do their part',
    'home.step2Text': 'They open one guided link on their phone. No app, account, or training required.',
    'home.step3Title': 'Review one complete record',
    'home.step3Text': 'Photos, condition notes, inventory, keys, meter readings, and signatures arrive together.',
    'home.evidenceEyebrow': 'Clarity when it matters',
    'home.evidenceTitle': 'When questions arise, the full context is already there.',
    'home.evidenceText': 'Trailase places move-in and move-out evidence side by side, helping your team spot potential changes quickly while keeping people in control of every decision.',
    'home.tenantTitle': 'Easy to complete',
    'home.tenantText': 'A focused mobile journey tenants can finish without an account or app.',
    'home.teamTitle': 'Consistent by default',
    'home.teamText': 'The same guided evidence standard across every room, property, and city.',
    'home.readyTitle': 'Clear when it counts',
    'home.readyText': 'A structured, reviewable history is ready whenever a question comes up.',
    'home.portfolioEyebrow': 'Built to grow with your portfolio',
    'home.units': 'rooms or units under management',
    'home.standard': 'One trusted handover standard across every property',
    'home.operatorsEyebrow': 'More consistency, without more friction',
    'home.operatorsTitle': 'One confident process, from 50 rooms to 5,000.',
    'home.operatorsText': 'Trailase gives European property teams a professional handover experience they can repeat across locations, while keeping every tenant journey simple.',
    'home.audience.coliving': 'Coliving operators',
    'home.audience.student': 'Student accommodation',
    'home.audience.serviced': 'Serviced apartments',
    'home.audience.btr': 'Build-to-rent operators',
    'home.audience.managers': 'Property managers',
    'home.tagline': 'A clearer handover starts here',
    'home.contactTitle': 'Make your next handover the easiest one yet.',
    'home.contactText': 'Tell us where move-ins or move-outs slow your team down. We’ll show you how Trailase turns those loose ends into one clear process.',
    'home.contactTiming': 'Student housing and large portfolios see most of their turnover in a few concentrated weeks each year. Set this up before that window, not during it.',
    'home.contactButton': 'Request a walkthrough',
    'home.contactNameLabel': 'Name (optional)',
    'home.contactEmailLabel': 'Email',
    'home.contactMessageLabel': 'What would help your team most?',
    'home.contactMessagePlaceholder': 'Tell us when your next move-in or move-out season starts, and where it gets messy…',
    'home.contactSending': 'Sending…',
    'home.contactSuccessTitle': 'Message sent.',
    'home.contactSuccess': 'Thanks — we will reply by email shortly.',
    'home.contactError': 'That did not go through. Try the email link below instead.',
    'home.contactFallbackText': 'You can also reach us directly:',
    'home.contactFallbackLink': 'Email us',
    'home.founderTitle': 'Why this exists',
    'home.founderText': 'Trailase started after seeing the same gap play out again and again while renting rooms across Europe: no consistent way to prove a room’s condition going in or out. In one case, a landlord claimed a wall’s paint had been damaged months after move-out. It took two months of back-and-forth to resolve, and only got settled because before-and-after photos happened to exist. The same gap shows up at scale. A student housing team clearing 200 rooms in the same August week rarely has time to document each one properly, so disputes surface weeks later with no evidence on either side. A multi-city portfolio with different staff running each handover ends up with a different standard in every building, so nobody can prove anything was consistent. Trailase exists to close that gap before it becomes a dispute. That is why the first ten inspections are free: see it work on your own properties before deciding anything else.',
    'home.contactFreeTrial': 'Free for your first 10 inspections. No contract.',
    'home.contactCalLink': 'Prefer to talk first? Book a slot on our calendar',
    'home.faqDeviceQ': 'What if a tenant does not have a smartphone?',
    'home.faqDeviceA': 'Trailase runs entirely in the browser, so tenants can complete it from a phone, tablet, or laptop with a camera. No app or account is required.',
    'home.faqSetupQ': 'How long does this take to set up?',
    'home.faqSetupA': 'An operator creates a share link in seconds from one workspace. Tenants complete it on their own device with no account or install.',
    'home.faqPmsQ': 'Do we need to replace our property management software?',
    'home.faqPmsA': 'No. Trailase handles the inspection and evidence step only. It works alongside whatever software your team already uses for leasing, maintenance, or accounting.',
    'home.faqScaleQ': 'How fast can we roll this out across a large portfolio?',
    'home.faqScaleA': 'Most teams create their first inspection link within minutes. Larger portfolios can roll out property by property, since no training or install is required for tenants or staff.',
    'home.faqLiabilityQ': 'Does Trailase decide who is responsible for damage?',
    'home.faqLiabilityA': 'No. Trailase gathers clear, side-by-side evidence. Your team still makes the call — we just make sure you are not guessing.',
    'home.pricingEyebrow': 'Pricing',
    'home.pricingTitle': 'Straightforward pricing that scales with your portfolio.',
    'home.pricingIntro': 'Pricing scales with the number of units you manage, not with how many photos your team takes — from a single pilot building to a national portfolio.',
    'home.pricingFreeNote': 'First 10 inspections free on any plan. No contract, cancel anytime.',
    'home.pricingDisclaimer': 'Starting prices shown for European portfolios. Final pricing depends on portfolio size and rollout scope — talk to us for an exact quote.',
    'home.pricingCta': 'Talk to us about your portfolio',
    'home.pricingIncludedTitle': 'Included in every plan',
    'home.pricingIncludedFeature1': 'Unlimited inspections',
    'home.pricingIncludedFeature2': 'Unlimited team members',
    'home.pricingIncludedFeature3': 'Photo, signature & condition evidence',
    'home.pricingIncludedFeature4': 'Multilingual tenant links (EN, ES, FR, NL)',
    'home.pricingTier1Name': 'Pilot',
    'home.pricingTier1Range': 'Up to 25 units',
    'home.pricingTier1Price': '€29',
    'home.pricingTier1Period': '/month',
    'home.pricingTier1Tagline': 'For a single building or a first pilot.',
    'home.pricingTier2Name': 'Starter',
    'home.pricingTier2Range': '26–100 units',
    'home.pricingTier2Price': '€79',
    'home.pricingTier2Period': '/month',
    'home.pricingTier2Tagline': 'For growing teams standardizing their first process.',
    'home.pricingTier3Badge': 'Most popular',
    'home.pricingTier3Name': 'Growth',
    'home.pricingTier3Range': '101–300 units',
    'home.pricingTier3Price': '€199',
    'home.pricingTier3Period': '/month',
    'home.pricingTier3Tagline': 'For multi-property teams scaling handovers.',
    'home.pricingTier4Name': 'Scale',
    'home.pricingTier4Range': '301–1,000 units',
    'home.pricingTier4Price': '€449',
    'home.pricingTier4Period': '/month',
    'home.pricingTier4Tagline': 'For regional portfolios with dedicated ops staff.',
    'home.pricingTier5Name': 'Portfolio',
    'home.pricingTier5Range': '1,001–5,000 units',
    'home.pricingTier5Price': '€899',
    'home.pricingTier5Period': '/month',
    'home.pricingTier5Tagline': 'For large portfolios needing priority support.',
    'home.pricingTier6Name': 'Enterprise',
    'home.pricingTier6Range': '5,000+ units',
    'home.pricingTier6Price': 'Custom',
    'home.pricingTier6Period': '',
    'home.pricingTier6Tagline': 'For national platforms and franchise networks.',
    'home.trustEyebrow': 'Trust & data',
    'home.trustTitle': 'No tenant accounts. No data for sale.',
    'home.trustIntro': 'Trailase is built to collect evidence, not a personal-data footprint. Here is exactly what that means today.',
    'home.trustPoint1Title': 'No tenant accounts',
    'home.trustPoint1Text': 'Tenants complete their inspection through a single link. No account, password, or app to create, remember, or lose.',
    'home.trustPoint2Title': 'Single-purpose links',
    'home.trustPoint2Text': 'Each tenant link is an unguessable token scoped to one inspection. It cannot be browsed or reused for anything else.',
    'home.trustPoint3Title': 'Session-scoped operator access',
    'home.trustPoint3Text': 'Your team’s inspection queue is only visible from your own operator session. Other visitors cannot see your properties or records.',
    'home.trustPoint4Title': 'Never sold, never shared',
    'home.trustPoint4Text': 'Trailase does not sell tenant data or share it with advertisers or unrelated third parties.',
    'home.trustScope': 'Trailase gathers evidence. It does not assign blame, determine liability, or calculate a deposit deduction — that decision stays with your team.',
    'home.founderHook': 'A dispute like this costs weeks of back-and-forth. A single photo can settle it in minutes.',
    'story.eyebrow': 'See the difference clarity makes',
    'story.title': 'From scattered details to a record your team can trust.',
    'story.intro': 'Scroll to turn every inspection detail into one decision-ready record.',
    'story.phase.scattered': 'Capture',
    'story.phase.structured': 'Structure',
    'story.phase.comparison': 'Compare',
    'story.photos': 'Photographs',
    'story.damage': 'Existing damage',
    'story.inventory': 'Inventory items',
    'story.meter': 'Meter reading',
    'story.keys': 'Keys received',
    'story.signed': 'Signed',
    'story.report': 'Condition report',
    'story.damageNote': 'Existing wall mark · tenant confirmed',
    'story.moveIn': 'Move-in',
    'story.moveOut': 'Move-out',
    'story.potentialChange': 'Potential change',
    'story.evidenceNote': 'See both moments side by side. Spot what changed. Make the call with confidence.',
    'contact.redirectTitle': 'Open your email service?',
    'contact.redirectText': 'You are about to leave Trailase and open a prepared email in a new tab.',
    'contact.cancel': 'Stay here',
    'contact.continue': 'Open email',
    'operator.eyebrow': 'Trailase · live product demo',
    'operator.title': 'See a clear handover take shape.',
    'operator.intro': 'Start one guided inspection, share the tenant link, and watch every detail return in one complete record.',
    'operator.prototypeNote': 'You’re in the live demo. Use the sample data to experience the complete handover flow.',
    'operator.create': 'Start the Room 4B handover',
    'operator.creating': 'Creating…',
    'operator.queue': 'Evidence queue',
    'operator.recent': 'Recent inspections',
    'operator.refresh': 'Refresh',
    'operator.paginationLabel': 'Inspection queue pages',
    'operator.previous': 'Previous',
    'operator.next': 'Next',
    'operator.pageOf': 'Page {page} of {pages}',
    'operator.completed': 'Completed',
    'operator.awaiting': 'Awaiting tenant',
    'operator.loading': 'Loading local inspection records…',
    'operator.tryAgain': 'Try again',
    'operator.empty': 'No inspections yet.',
    'operator.emptyText': 'Create a Room 4B link to start the demo.',
    'operator.created': 'Created {date}',
    'operator.photos': 'Photos',
    'operator.status': 'Status',
    'operator.completedAt': 'Completed',
    'operator.copy': 'Copy link',
    'operator.open': 'Open tenant view',
    'operator.latest': 'Latest share link',
    'operator.createSuccess': 'A new Room 4B inspection is ready to share.',
    'operator.copySuccess': 'Inspection link copied.',
    'operator.copyError': 'Copy was blocked. Select the link to copy it manually.',
    'operator.delete': 'Delete',
    'operator.deleting': 'Deleting…',
    'operator.deleteConfirm': 'Delete this inspection from your session?',
    'operator.deleteSuccess': 'Inspection deleted.',
    'operator.deleteError': 'The inspection could not be deleted. Try again.',
    'inspection.steps.condition': 'Condition',
    'inspection.steps.photos': 'Photos',
    'inspection.steps.notes': 'Notes',
    'inspection.steps.signature': 'Signature',
    'inspection.steps.review': 'Review',
    'inspection.good': 'Good',
    'inspection.attention': 'Needs attention',
    'inspection.damage': 'Damage noted',
    'inspection.required': 'Required',
    'inspection.optionalNote': 'Optional note',
    'inspection.loading': 'Preparing your Room 4B inspection…',
    'inspection.linkTitle': 'This link needs another look.',
    'inspection.linkUnavailable': 'This inspection link is not available.',
    'inspection.recoveryHelp': 'Try again to reload the inspection, or return to Trailase. If the link still does not work, ask the person who sent it for a new one.',
    'inspection.tryAgain': 'Try again',
    'inspection.return': 'Return to Trailase',
    'inspection.complete': 'Inspection complete',
    'inspection.already': 'Already submitted',
    'inspection.thanks': 'Thank you. The handover is on record.',
    'inspection.alreadyTitle': 'This handover is already on record.',
    'inspection.submittedText': 'Your condition notes, photos, and signature for {room} have been securely handed back to the operator.',
    'inspection.alreadyText': 'This link has already been completed, so it cannot accept another submission.',
    'inspection.close': 'You can close this page now.',
    'inspection.eyebrow': 'Trailase · move-in record',
    'inspection.intro': 'A few minutes to make the room’s starting point clear.',
    'inspection.stepProgress': 'Step {current} of {total}',
    'inspection.conditionTitle': 'How does each area look?',
    'inspection.conditionText': 'Choose the closest description. Add a short note where it helps.',
    'inspection.photosTitle': 'Capture photo evidence',
    'inspection.photosText': 'Use the camera on this page to capture a wide view and any close-up that helps explain the condition.',
    'inspection.ready': 'Ready when you are',
    'inspection.cameraText': 'The rear-facing camera opens only after you tap the button.',
    'inspection.openCamera': 'Open camera',
    'inspection.photosCaptured8': '8 photos captured',
    'inspection.openingCamera': 'Opening your camera…',
    'inspection.allowCamera': 'Allow access when asked.',
    'inspection.livePreview': 'Rear camera · live preview',
    'inspection.takePhoto': 'Take photo',
    'inspection.photoPreview': 'Photo preview',
    'inspection.previewText': 'Check the frame before adding it to your evidence.',
    'inspection.retake': 'Retake',
    'inspection.usePhoto': 'Use photo',
    'inspection.cameraUnavailable': 'Camera unavailable',
    'inspection.cameraFailed': 'The camera could not be opened.',
    'inspection.cameraAgain': 'Try camera again',
    'inspection.demoCamera': 'Use demo camera capture',
    'inspection.capturedEvidence': 'Captured evidence',
    'inspection.photosReady': '{count} of 8 photos ready for the record.',
    'inspection.cameraOnly': 'Camera only',
    'inspection.demoCapture': 'Demo capture',
    'inspection.captured': 'Captured',
    'inspection.readyStatus': 'Ready',
    'inspection.remove': 'Remove',
    'inspection.notesTitle': 'Anything else to note?',
    'inspection.notesText': 'Share context the photos cannot. This is optional, but useful for the record.',
    'inspection.notesLabel': 'Inspection notes',
    'inspection.notesPlaceholder': 'For example: two keys left on the entry shelf…',
    'inspection.signatureTitle': 'Sign the handover',
    'inspection.signatureText': 'Your signature confirms you reviewed this move-in record.',
    'inspection.consent': 'I confirm this inspection reflects the condition I found in Room 4B.',
    'inspection.reviewTitle': 'One last look',
    'inspection.reviewText': 'Review your record before sending it back to the operator.',
    'inspection.areasChecked': 'Areas checked',
    'inspection.photosAdded': 'Photos added',
    'inspection.yes': 'Yes',
    'inspection.no': 'No',
    'inspection.signatureReady': 'Signature ready',
    'inspection.noNotes': 'No additional notes.',
    'inspection.submitNotice': 'Submitting sends this inspection to the operator and closes the link.',
    'inspection.photoEvidence': 'Photo evidence being sent',
    'inspection.capturedCount': '{count} captured',
    'inspection.cameraIncluded': 'These camera captures will be included with your submission.',
    'inspection.back': 'Back',
    'inspection.continue': 'Continue',
    'inspection.sending': 'Sending…',
    'inspection.submit': 'Submit inspection',
    'inspection.draw': 'Draw with your finger or mouse.',
    'inspection.undo': 'Undo',
    'inspection.clear': 'Clear',
    'inspection.area.walls': 'Walls',
    'inspection.area.floor': 'Floor',
    'inspection.area.furniture': 'Furniture',
    'inspection.area.windows': 'Windows',
    'og.eyebrow': 'PROPERTY HANDOVERS',
    'og.headline': 'Clear handovers. Confident decisions.',
    'og.description': 'One guided inspection. One complete record. No loose ends.',
    'og.noApp': 'No tenant app',
    'og.photoFirst': 'Photo-first',
    'og.comparisons': 'Clear comparisons'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/i18n/es.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "messages",
    ()=>messages
]);
const messages = {
    'language.label': 'Idioma',
    'theme.toggle': 'Cambiar entre tema claro y oscuro',
    'nav.how': 'Cómo funciona',
    'nav.for': 'Para quién es',
    'nav.pricing': 'Precios',
    'nav.prototype': 'Demo en vivo',
    'nav.contact': 'Solicitar una demo',
    'nav.openMenu': 'Abrir menú',
    'home.badge': 'Cada entrega. Un registro claro.',
    'home.title': 'Entregas claras. Decisiones con confianza.',
    'home.intro': 'Trailase guía al inquilino durante la inspección de entrada y salida, y reúne cada foto, nota, lectura y firma en un registro listo para revisar.',
    'home.walkthrough': 'Ver Trailase en acción',
    'home.prototype': 'Probar la demo',
    'home.scale': 'Creado para equipos profesionales que gestionan entre 50 y 5.000 habitaciones o unidades.',
    'home.report': 'Informe de estado de entrada',
    'home.photos': 'Fotografías',
    'home.issue': 'Incidencia existente',
    'home.inventory': 'Elementos de inventario',
    'home.keys': 'Llaves recibidas',
    'home.meter': 'Lectura del contador',
    'home.confirmation': 'Confirmación del inquilino',
    'home.completed': 'Completada',
    'home.wall': 'Pared junto a la ventana',
    'home.wallNote': 'Marca superficial existente documentada y confirmada por el inquilino.',
    'home.evidenceRecorded': 'Evidencia registrada',
    'home.workflowEyebrow': 'De perseguir tareas a hacerlas fluir',
    'home.workflowTitle': 'Deja de perseguir detalles. Haz que cada entrega avance.',
    'home.workflowIntro': 'Sustituye formularios en papel, fotos sueltas y conversaciones dispersas por un proceso sencillo que tu equipo pueda repetir con confianza.',
    'home.step1Title': 'Pon en marcha la entrega',
    'home.step1Text': 'Selecciona propiedad, habitación, inquilino y tipo de inspección desde un único espacio de trabajo.',
    'home.step2Title': 'El inquilino hace su parte',
    'home.step2Text': 'Abre un único enlace guiado en su teléfono, sin app, cuenta ni formación.',
    'home.step3Title': 'Revisa un registro completo',
    'home.step3Text': 'Fotos, estado, inventario, llaves, contadores y firmas llegan juntos.',
    'home.evidenceEyebrow': 'Claridad cuando importa',
    'home.evidenceTitle': 'Cuando surgen dudas, todo el contexto ya está ahí.',
    'home.evidenceText': 'Trailase muestra en paralelo la evidencia de entrada y salida para que tu equipo detecte posibles cambios rápidamente y mantenga el control de cada decisión.',
    'home.tenantTitle': 'Fácil de completar',
    'home.tenantText': 'Un recorrido móvil sencillo que el inquilino termina sin cuenta ni app.',
    'home.teamTitle': 'Consistente por defecto',
    'home.teamText': 'El mismo estándar guiado en cada habitación, propiedad y ciudad.',
    'home.readyTitle': 'Claro cuando cuenta',
    'home.readyText': 'Un historial estructurado y revisable, listo cuando surge cualquier duda.',
    'home.portfolioEyebrow': 'Creado para crecer con tu cartera',
    'home.units': 'habitaciones o unidades gestionadas',
    'home.standard': 'Un estándar de entrega fiable en cada propiedad',
    'home.operatorsEyebrow': 'Más consistencia, sin más fricción',
    'home.operatorsTitle': 'Un proceso fiable, desde 50 habitaciones hasta 5.000.',
    'home.operatorsText': 'Trailase ofrece a los equipos inmobiliarios europeos una experiencia profesional que pueden repetir en todas sus ubicaciones sin complicar el recorrido del inquilino.',
    'home.audience.coliving': 'Operadores de coliving',
    'home.audience.student': 'Residencias de estudiantes',
    'home.audience.serviced': 'Apartamentos con servicios',
    'home.audience.btr': 'Vivienda en alquiler institucional',
    'home.audience.managers': 'Gestión inmobiliaria profesional',
    'home.tagline': 'Una entrega más clara empieza aquí',
    'home.contactTitle': 'Haz que tu próxima entrega sea la más sencilla hasta ahora.',
    'home.contactText': 'Cuéntanos dónde frenan a tu equipo las entradas o salidas. Te mostraremos cómo Trailase convierte esos cabos sueltos en un proceso claro.',
    'home.contactTiming': 'Las residencias de estudiantes y los grandes portafolios concentran la mayoría de sus entradas y salidas en pocas semanas al año. Prepárate antes de esa ventana, no durante ella.',
    'home.contactButton': 'Solicitar una demo',
    'home.contactNameLabel': 'Nombre (opcional)',
    'home.contactEmailLabel': 'Correo electrónico',
    'home.contactMessageLabel': '¿Qué ayudaría más a tu equipo?',
    'home.contactMessagePlaceholder': 'Cuéntanos cuándo empieza tu próxima temporada de entradas o salidas y dónde se complica…',
    'home.contactSending': 'Enviando…',
    'home.contactSuccessTitle': 'Mensaje enviado.',
    'home.contactSuccess': 'Gracias — te responderemos por correo en breve.',
    'home.contactError': 'No se pudo enviar. Prueba con el enlace de correo de abajo.',
    'home.contactFallbackText': 'También puedes escribirnos directamente:',
    'home.contactFallbackLink': 'Enviar correo',
    'home.founderTitle': 'Por qué existe esto',
    'home.founderText': 'Trailase surgió al ver el mismo problema repetirse una y otra vez alquilando habitaciones por toda Europa: nunca había una forma consistente de demostrar el estado de una habitación al entrar o salir. En un caso, un propietario alegó que la pintura de una pared se había dañado meses después de la salida. Resolverlo tardó dos meses de idas y venidas, y solo se solucionó porque existían fotos de antes y después. El mismo problema aparece a mayor escala. Un equipo de residencias de estudiantes que vacía 200 habitaciones en la misma semana de agosto rara vez tiene tiempo de documentar cada una correctamente, así que las disputas surgen semanas después sin pruebas de ningún lado. Un portafolio multiciudad con distinto personal en cada entrega termina con un estándar diferente en cada edificio, por lo que nadie puede demostrar que algo fue consistente. Trailase existe para cerrar ese vacío antes de que se convierta en una disputa. Por eso las primeras diez inspecciones son gratuitas: compruébalo en tus propias propiedades antes de decidir nada más.',
    'home.contactFreeTrial': 'Gratis para tus primeras 10 inspecciones. Sin contrato.',
    'home.contactCalLink': '¿Prefieres hablar primero? Reserva un horario en nuestro calendario',
    'home.faqDeviceQ': '¿Qué pasa si un inquilino no tiene smartphone?',
    'home.faqDeviceA': 'Trailase funciona íntegramente en el navegador, así que el inquilino puede completarlo desde un teléfono, tablet o portátil con cámara. No hace falta ninguna app ni cuenta.',
    'home.faqSetupQ': '¿Cuánto tiempo lleva configurarlo?',
    'home.faqSetupA': 'Un operador crea un enlace para compartir en segundos desde un único espacio de trabajo. El inquilino lo completa en su propio dispositivo sin cuenta ni instalación.',
    'home.faqPmsQ': '¿Necesitamos sustituir nuestro software de gestión inmobiliaria?',
    'home.faqPmsA': 'No. Trailase solo se encarga de la inspección y la evidencia. Funciona junto al software que ya usa tu equipo para alquiler, mantenimiento o contabilidad.',
    'home.faqScaleQ': '¿Con qué rapidez podemos implantarlo en una cartera grande?',
    'home.faqScaleA': 'La mayoría de los equipos crean su primer enlace de inspección en minutos. Las carteras grandes pueden implantarlo propiedad por propiedad, ya que no requiere formación ni instalación para inquilinos ni personal.',
    'home.faqLiabilityQ': '¿Trailase decide quién es responsable del daño?',
    'home.faqLiabilityA': 'No. Trailase reúne evidencia clara y comparada. Tu equipo sigue tomando la decisión — nosotros solo evitamos que tengas que adivinar.',
    'home.pricingEyebrow': 'Precios',
    'home.pricingTitle': 'Precios claros que escalan con tu cartera.',
    'home.pricingIntro': 'El precio escala según el número de unidades gestionadas, no según cuántas fotos tome tu equipo — desde un primer edificio piloto hasta una cartera nacional.',
    'home.pricingFreeNote': 'Gratis para tus primeras 10 inspecciones en cualquier plan. Sin contrato, cancela cuando quieras.',
    'home.pricingDisclaimer': 'Precios de partida para carteras europeas. El precio final depende del tamaño de la cartera y del alcance de la implantación — contáctanos para un presupuesto exacto.',
    'home.pricingCta': 'Habla con nosotros sobre tu cartera',
    'home.pricingIncludedTitle': 'Incluido en todos los planes',
    'home.pricingIncludedFeature1': 'Inspecciones ilimitadas',
    'home.pricingIncludedFeature2': 'Miembros de equipo ilimitados',
    'home.pricingIncludedFeature3': 'Evidencia de fotos, firma y estado',
    'home.pricingIncludedFeature4': 'Enlaces multilingües para el inquilino (EN, ES, FR, NL)',
    'home.pricingTier1Name': 'Pilot',
    'home.pricingTier1Range': 'Hasta 25 unidades',
    'home.pricingTier1Price': '29 €',
    'home.pricingTier1Period': '/mes',
    'home.pricingTier1Tagline': 'Para un único edificio o un primer piloto.',
    'home.pricingTier2Name': 'Starter',
    'home.pricingTier2Range': '26–100 unidades',
    'home.pricingTier2Price': '79 €',
    'home.pricingTier2Period': '/mes',
    'home.pricingTier2Tagline': 'Para equipos en crecimiento que estandarizan su primer proceso.',
    'home.pricingTier3Badge': 'Más popular',
    'home.pricingTier3Name': 'Growth',
    'home.pricingTier3Range': '101–300 unidades',
    'home.pricingTier3Price': '199 €',
    'home.pricingTier3Period': '/mes',
    'home.pricingTier3Tagline': 'Para equipos multipropiedad que escalan sus entregas.',
    'home.pricingTier4Name': 'Scale',
    'home.pricingTier4Range': '301–1.000 unidades',
    'home.pricingTier4Price': '449 €',
    'home.pricingTier4Period': '/mes',
    'home.pricingTier4Tagline': 'Para carteras regionales con personal de operaciones dedicado.',
    'home.pricingTier5Name': 'Portfolio',
    'home.pricingTier5Range': '1.001–5.000 unidades',
    'home.pricingTier5Price': '899 €',
    'home.pricingTier5Period': '/mes',
    'home.pricingTier5Tagline': 'Para grandes carteras que necesitan soporte prioritario.',
    'home.pricingTier6Name': 'Enterprise',
    'home.pricingTier6Range': 'Más de 5.000 unidades',
    'home.pricingTier6Price': 'A medida',
    'home.pricingTier6Period': '',
    'home.pricingTier6Tagline': 'Para plataformas nacionales y redes de franquicias.',
    'home.trustEyebrow': 'Confianza y datos',
    'home.trustTitle': 'Sin cuentas para inquilinos. Sin venta de datos.',
    'home.trustIntro': 'Trailase está pensado para recoger evidencia, no una huella de datos personales. Esto es exactamente lo que eso significa hoy.',
    'home.trustPoint1Title': 'Sin cuentas de inquilino',
    'home.trustPoint1Text': 'El inquilino completa su inspección mediante un único enlace. Sin cuenta, contraseña ni app que crear, recordar o perder.',
    'home.trustPoint2Title': 'Enlaces de un solo propósito',
    'home.trustPoint2Text': 'Cada enlace del inquilino es un token imposible de adivinar, limitado a una sola inspección. No se puede navegar ni reutilizar para nada más.',
    'home.trustPoint3Title': 'Acceso de operador limitado a la sesión',
    'home.trustPoint3Text': 'La cola de inspecciones de tu equipo solo es visible desde tu propia sesión de operador. Otros visitantes no pueden ver tus propiedades ni registros.',
    'home.trustPoint4Title': 'Nunca se vende ni se comparte',
    'home.trustPoint4Text': 'Trailase no vende los datos del inquilino ni los comparte con anunciantes o terceros ajenos.',
    'home.trustScope': 'Trailase reúne evidencia. No asigna culpas, no determina responsabilidades ni calcula deducciones del depósito — esa decisión sigue siendo de tu equipo.',
    'home.founderHook': 'Una disputa así cuesta semanas de idas y venidas. Una sola foto puede resolverla en minutos.',
    'story.eyebrow': 'Descubre lo que cambia con claridad',
    'story.title': 'De detalles dispersos a un registro en el que confiar.',
    'story.intro': 'Desplázate para convertir cada detalle de la inspección en un registro listo para decidir.',
    'story.phase.scattered': 'Capturar',
    'story.phase.structured': 'Estructurar',
    'story.phase.comparison': 'Comparar',
    'story.photos': 'Fotografías',
    'story.damage': 'Daño existente',
    'story.inventory': 'Elementos de inventario',
    'story.meter': 'Lectura del contador',
    'story.keys': 'Llaves recibidas',
    'story.signed': 'Firmado',
    'story.report': 'Informe de estado',
    'story.damageNote': 'Marca existente en la pared · confirmada por el inquilino',
    'story.moveIn': 'Entrada',
    'story.moveOut': 'Salida',
    'story.potentialChange': 'Cambio potencial',
    'story.evidenceNote': 'Compara ambos momentos. Detecta qué cambió. Decide con confianza.',
    'contact.redirectTitle': '¿Abrir tu servicio de correo?',
    'contact.redirectText': 'Vas a salir de Trailase para abrir un correo preparado en una pestaña nueva.',
    'contact.cancel': 'Quedarme aquí',
    'contact.continue': 'Abrir correo',
    'operator.eyebrow': 'Trailase · demo del producto',
    'operator.title': 'Descubre cómo toma forma una entrega clara.',
    'operator.intro': 'Inicia una inspección guiada, comparte el enlace y observa cómo cada detalle vuelve en un registro completo.',
    'operator.prototypeNote': 'Estás en la demo: usa los datos de ejemplo para vivir el proceso de entrega completo.',
    'operator.create': 'Iniciar la entrega de la habitación 4B',
    'operator.creating': 'Creando…',
    'operator.queue': 'Cola de evidencias',
    'operator.recent': 'Inspecciones recientes',
    'operator.refresh': 'Actualizar',
    'operator.paginationLabel': 'Páginas de la cola de inspecciones',
    'operator.previous': 'Anterior',
    'operator.next': 'Siguiente',
    'operator.pageOf': 'Página {page} de {pages}',
    'operator.completed': 'Completada',
    'operator.awaiting': 'Esperando al inquilino',
    'operator.loading': 'Cargando inspecciones…',
    'operator.tryAgain': 'Reintentar',
    'operator.empty': 'Aún no hay inspecciones.',
    'operator.emptyText': 'Crea un enlace para la habitación 4B y empieza la demo.',
    'operator.created': 'Creada {date}',
    'operator.photos': 'Fotos',
    'operator.status': 'Estado',
    'operator.completedAt': 'Completada',
    'operator.copy': 'Copiar enlace',
    'operator.open': 'Abrir vista del inquilino',
    'operator.latest': 'Último enlace compartido',
    'operator.createSuccess': 'La nueva inspección de la habitación 4B está lista para compartir.',
    'operator.copySuccess': 'Enlace de inspección copiado.',
    'operator.copyError': 'No se pudo copiar. Selecciona el enlace para copiarlo manualmente.',
    'operator.delete': 'Eliminar',
    'operator.deleting': 'Eliminando…',
    'operator.deleteConfirm': '¿Eliminar esta inspección de tu sesión?',
    'operator.deleteSuccess': 'Inspección eliminada.',
    'operator.deleteError': 'No se pudo eliminar la inspección. Inténtalo de nuevo.',
    'inspection.steps.condition': 'Estado',
    'inspection.steps.photos': 'Fotos',
    'inspection.steps.notes': 'Notas',
    'inspection.steps.signature': 'Firma',
    'inspection.steps.review': 'Revisión',
    'inspection.good': 'Buen estado',
    'inspection.attention': 'Requiere atención',
    'inspection.damage': 'Daño registrado',
    'inspection.required': 'Obligatorio',
    'inspection.optionalNote': 'Nota opcional',
    'inspection.loading': 'Preparando la inspección de la habitación 4B…',
    'inspection.linkTitle': 'Este enlace necesita revisión.',
    'inspection.linkUnavailable': 'Este enlace de inspección no está disponible.',
    'inspection.recoveryHelp': 'Reintenta cargar la inspección o vuelve a Trailase. Si el enlace sigue sin funcionar, pide uno nuevo a la persona que te lo envió.',
    'inspection.tryAgain': 'Reintentar',
    'inspection.return': 'Volver a Trailase',
    'inspection.complete': 'Inspección completada',
    'inspection.already': 'Ya enviada',
    'inspection.thanks': 'Gracias. La entrega ha quedado registrada.',
    'inspection.alreadyTitle': 'Esta entrega ya está registrada.',
    'inspection.submittedText': 'Las notas, fotos y firma de {room} se han enviado de forma segura al operador.',
    'inspection.alreadyText': 'Este enlace ya se ha completado y no admite otro envío.',
    'inspection.close': 'Ya puedes cerrar esta página.',
    'inspection.eyebrow': 'Trailase · registro de entrada',
    'inspection.intro': 'Solo unos minutos para dejar claro el estado inicial de la habitación.',
    'inspection.stepProgress': 'Paso {current} de {total}',
    'inspection.conditionTitle': '¿Qué aspecto tiene cada zona?',
    'inspection.conditionText': 'Elige la descripción más adecuada y añade una nota si ayuda.',
    'inspection.photosTitle': 'Captura evidencia fotográfica',
    'inspection.photosText': 'Usa la cámara para obtener una vista general y los detalles que ayuden a explicar el estado.',
    'inspection.ready': 'Cuando quieras',
    'inspection.cameraText': 'La cámara trasera solo se abrirá cuando pulses el botón.',
    'inspection.openCamera': 'Abrir cámara',
    'inspection.photosCaptured8': '8 fotos capturadas',
    'inspection.openingCamera': 'Abriendo la cámara…',
    'inspection.allowCamera': 'Permite el acceso cuando se solicite.',
    'inspection.livePreview': 'Cámara trasera · vista en directo',
    'inspection.takePhoto': 'Hacer foto',
    'inspection.photoPreview': 'Vista previa',
    'inspection.previewText': 'Comprueba el encuadre antes de añadirlo a la evidencia.',
    'inspection.retake': 'Repetir',
    'inspection.usePhoto': 'Usar foto',
    'inspection.cameraUnavailable': 'Cámara no disponible',
    'inspection.cameraFailed': 'No se pudo abrir la cámara.',
    'inspection.cameraAgain': 'Probar de nuevo',
    'inspection.demoCamera': 'Usar captura de demostración',
    'inspection.capturedEvidence': 'Evidencia capturada',
    'inspection.photosReady': '{count} de 8 fotos listas para el registro.',
    'inspection.cameraOnly': 'Solo cámara',
    'inspection.demoCapture': 'Captura demo',
    'inspection.captured': 'Capturada',
    'inspection.readyStatus': 'Lista',
    'inspection.remove': 'Eliminar',
    'inspection.notesTitle': '¿Algo más que debamos saber?',
    'inspection.notesText': 'Añade el contexto que no muestran las fotos. Es opcional, pero útil.',
    'inspection.notesLabel': 'Notas de inspección',
    'inspection.notesPlaceholder': 'Por ejemplo: dos llaves en la estantería de entrada…',
    'inspection.signatureTitle': 'Firma la entrega',
    'inspection.signatureText': 'Tu firma confirma que has revisado este registro de entrada.',
    'inspection.consent': 'Confirmo que esta inspección refleja el estado en el que encontré la habitación 4B.',
    'inspection.reviewTitle': 'Una última revisión',
    'inspection.reviewText': 'Revisa el registro antes de enviarlo al operador.',
    'inspection.areasChecked': 'Zonas revisadas',
    'inspection.photosAdded': 'Fotos añadidas',
    'inspection.yes': 'Sí',
    'inspection.no': 'No',
    'inspection.signatureReady': 'Firma lista',
    'inspection.noNotes': 'Sin notas adicionales.',
    'inspection.submitNotice': 'Al enviar, la inspección llega al operador y el enlace se cierra.',
    'inspection.photoEvidence': 'Evidencia fotográfica que se enviará',
    'inspection.capturedCount': '{count} capturadas',
    'inspection.cameraIncluded': 'Estas capturas se incluirán en el envío.',
    'inspection.back': 'Atrás',
    'inspection.continue': 'Continuar',
    'inspection.sending': 'Enviando…',
    'inspection.submit': 'Enviar inspección',
    'inspection.draw': 'Firma con el dedo o el ratón.',
    'inspection.undo': 'Deshacer',
    'inspection.clear': 'Borrar',
    'inspection.area.walls': 'Paredes',
    'inspection.area.floor': 'Suelo',
    'inspection.area.furniture': 'Mobiliario',
    'inspection.area.windows': 'Ventanas',
    'og.eyebrow': 'ENTREGAS DE VIVIENDAS',
    'og.headline': 'Entregas claras. Decisiones con confianza.',
    'og.description': 'Una inspección guiada. Un registro completo. Ningún cabo suelto.',
    'og.noApp': 'Sin app para inquilinos',
    'og.photoFirst': 'Fotos primero',
    'og.comparisons': 'Comparaciones claras'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/i18n/fr.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "messages",
    ()=>messages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$es$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/es.ts [app-client] (ecmascript)");
;
const messages = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$es$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["messages"],
    'language.label': 'Langue',
    'theme.toggle': 'Basculer entre les thèmes clair et sombre',
    'nav.how': 'Fonctionnement',
    'nav.for': 'Pour qui',
    'nav.pricing': 'Tarifs',
    'nav.prototype': 'Démo en direct',
    'nav.contact': 'Demander une démo',
    'nav.openMenu': 'Ouvrir le menu',
    'home.badge': 'Chaque état des lieux. Un dossier clair.',
    'home.title': 'Des états des lieux clairs. Des décisions sereines.',
    'home.intro': 'Trailase guide les locataires pendant les états des lieux d’entrée et de sortie, puis réunit chaque photo, note, relevé et signature dans un dossier prêt à être vérifié.',
    'home.walkthrough': 'Voir Trailase en action',
    'home.prototype': 'Essayer la démo',
    'home.scale': 'Conçu pour les équipes professionnelles gérant de 50 à 5 000 chambres ou logements.',
    'home.report': 'Rapport d’état des lieux d’entrée',
    'home.photos': 'Photographies',
    'home.issue': 'Problème existant',
    'home.inventory': 'Éléments d’inventaire',
    'home.keys': 'Clés reçues',
    'home.meter': 'Relevé de compteur',
    'home.confirmation': 'Confirmation du locataire',
    'home.completed': 'Terminé',
    'home.wall': 'Mur près de la fenêtre',
    'home.wallNote': 'Marque de surface existante documentée et confirmée par le locataire.',
    'home.evidenceRecorded': 'Preuve enregistrée',
    'home.workflowEyebrow': 'Des relances à un parcours fluide',
    'home.workflowTitle': 'Fini les détails à réclamer. Chaque remise avance.',
    'home.workflowIntro': 'Remplacez formulaires papier, photos éparses et fils de messages par un processus simple que votre équipe peut répéter en toute confiance.',
    'home.step1Title': 'Lancez la remise',
    'home.step1Text': 'Choisissez le bien, la chambre, le locataire et le type d’inspection depuis un seul espace.',
    'home.step2Title': 'Le locataire fait sa part',
    'home.step2Text': 'Il ouvre un lien guidé sur son téléphone, sans application, compte ni formation.',
    'home.step3Title': 'Vérifiez un dossier complet',
    'home.step3Text': 'Photos, état, inventaire, clés, compteurs et signatures arrivent ensemble.',
    'home.evidenceEyebrow': 'La clarté au bon moment',
    'home.evidenceTitle': 'Quand une question se pose, tout le contexte est déjà là.',
    'home.evidenceText': 'Trailase place les preuves d’entrée et de sortie côte à côte pour aider votre équipe à repérer rapidement les changements possibles, tout en lui laissant chaque décision.',
    'home.tenantTitle': 'Facile à terminer',
    'home.tenantText': 'Un parcours mobile simple, sans compte ni application à installer.',
    'home.teamTitle': 'Cohérent par défaut',
    'home.teamText': 'Le même standard guidé dans chaque chambre, propriété et ville.',
    'home.readyTitle': 'Clair quand cela compte',
    'home.readyText': 'Un historique structuré et vérifiable, prêt dès qu’une question se pose.',
    'home.portfolioEyebrow': 'Conçu pour grandir avec votre portefeuille',
    'home.units': 'chambres ou logements gérés',
    'home.standard': 'Un standard de remise fiable dans chaque propriété',
    'home.operatorsEyebrow': 'Plus de cohérence, sans plus de friction',
    'home.operatorsTitle': 'Un processus fiable, de 50 chambres à 5 000.',
    'home.operatorsText': 'Trailase offre aux équipes immobilières européennes une expérience professionnelle qu’elles peuvent répéter sur tous leurs sites, tout en gardant un parcours locataire simple.',
    'home.audience.coliving': 'Coliving professionnel',
    'home.audience.student': 'Résidences étudiantes',
    'home.audience.serviced': 'Résidences avec services',
    'home.audience.btr': 'Résidences locatives gérées',
    'home.audience.managers': 'Gestion immobilière professionnelle',
    'home.tagline': 'Un état des lieux plus clair commence ici',
    'home.contactTitle': 'Faites de votre prochain état des lieux le plus simple à ce jour.',
    'home.contactText': 'Dites-nous où les entrées ou sorties ralentissent votre équipe. Nous vous montrerons comment Trailase transforme ces détails dispersés en un processus clair.',
    'home.contactTiming': 'Les résidences étudiantes et les grands portefeuilles concentrent l’essentiel de leurs entrées et sorties sur quelques semaines par an. Préparez-vous avant cette période, pas pendant.',
    'home.contactButton': 'Demander une démo',
    'home.contactNameLabel': 'Nom (facultatif)',
    'home.contactEmailLabel': 'E-mail',
    'home.contactMessageLabel': 'Qu’est-ce qui aiderait le plus votre équipe ?',
    'home.contactMessagePlaceholder': 'Dites-nous quand commence votre prochaine saison d’entrées ou sorties, et où ça se complique…',
    'home.contactSending': 'Envoi…',
    'home.contactSuccessTitle': 'Message envoyé.',
    'home.contactSuccess': 'Merci — nous répondrons bientôt par e-mail.',
    'home.contactError': 'L’envoi a échoué. Essayez le lien e-mail ci-dessous.',
    'home.contactFallbackText': 'Vous pouvez aussi nous écrire directement :',
    'home.contactFallbackLink': 'Nous écrire',
    'home.founderTitle': 'Pourquoi cela existe',
    'home.founderText': "Trailase est né en voyant le même problème se répéter en louant des chambres à travers l'Europe : il n'existait jamais de moyen fiable de prouver l'état d'une chambre à l'entrée ou à la sortie. Dans un cas, un propriétaire a prétendu que la peinture d'un mur avait été endommagée des mois après le départ. Il a fallu deux mois d'allers-retours pour régler cela, et cela ne s'est résolu que parce que des photos avant/après existaient. Le même problème apparaît à plus grande échelle. Une équipe de résidence étudiante qui libère 200 chambres la même semaine d'août a rarement le temps de documenter chacune correctement, si bien que des litiges apparaissent des semaines plus tard sans preuve d'aucun côté. Un portefeuille multivilles avec un personnel différent à chaque état des lieux finit par avoir un standard différent dans chaque immeuble, si bien que personne ne peut prouver une quelconque cohérence. Trailase existe pour combler cet écart avant qu'il ne devienne un litige. C'est pourquoi les dix premières inspections sont gratuites : voyez par vous-même sur vos propres biens avant de décider quoi que ce soit d'autre.",
    'home.contactFreeTrial': 'Gratuit pour vos 10 premières inspections. Sans engagement.',
    'home.contactCalLink': "Vous préférez d'abord en parler ? Réservez un créneau dans notre agenda",
    'home.faqDeviceQ': "Que se passe-t-il si un locataire n'a pas de smartphone ?",
    'home.faqDeviceA': "Trailase fonctionne entièrement dans le navigateur : le locataire peut le faire depuis un téléphone, une tablette ou un ordinateur portable avec caméra. Aucune application ni compte n'est nécessaire.",
    'home.faqSetupQ': 'Combien de temps faut-il pour la mise en place ?',
    'home.faqSetupA': 'Un opérateur crée un lien à partager en quelques secondes depuis un seul espace de travail. Le locataire le complète sur son propre appareil, sans compte ni installation.',
    'home.faqPmsQ': 'Devons-nous remplacer notre logiciel de gestion immobilière ?',
    'home.faqPmsA': "Non. Trailase gère uniquement l'état des lieux et la preuve. Il fonctionne aux côtés du logiciel que votre équipe utilise déjà pour la location, la maintenance ou la comptabilité.",
    'home.faqScaleQ': 'À quelle vitesse pouvons-nous déployer cela sur un grand portefeuille ?',
    'home.faqScaleA': "La plupart des équipes créent leur premier lien d'inspection en quelques minutes. Les grands portefeuilles peuvent le déployer propriété par propriété, car aucune formation ni installation n'est requise pour les locataires ou le personnel.",
    'home.faqLiabilityQ': 'Trailase décide-t-il qui est responsable des dégâts ?',
    'home.faqLiabilityA': 'Non. Trailase réunit des preuves claires et comparées. Votre équipe garde la décision finale — nous évitons simplement de deviner.',
    'home.pricingEyebrow': 'Tarifs',
    'home.pricingTitle': 'Des tarifs simples qui évoluent avec votre portefeuille.',
    'home.pricingIntro': "Le tarif évolue selon le nombre de logements gérés, pas selon le nombre de photos prises par votre équipe — d'un premier immeuble pilote à un portefeuille national.",
    'home.pricingFreeNote': 'Gratuit pour vos 10 premières inspections, quelle que soit l’offre. Sans engagement, résiliable à tout moment.',
    'home.pricingDisclaimer': "Tarifs de départ indiqués pour les portefeuilles européens. Le tarif final dépend de la taille du portefeuille et de l'ampleur du déploiement — contactez-nous pour un devis précis.",
    'home.pricingCta': 'Parlez-nous de votre portefeuille',
    'home.pricingIncludedTitle': 'Inclus dans toutes les offres',
    'home.pricingIncludedFeature1': 'Inspections illimitées',
    'home.pricingIncludedFeature2': "Membres d'équipe illimités",
    'home.pricingIncludedFeature3': 'Preuves photo, signature et état',
    'home.pricingIncludedFeature4': 'Liens locataire multilingues (EN, ES, FR, NL)',
    'home.pricingTier1Name': 'Pilot',
    'home.pricingTier1Range': "Jusqu'à 25 logements",
    'home.pricingTier1Price': '29 €',
    'home.pricingTier1Period': '/mois',
    'home.pricingTier1Tagline': 'Pour un seul immeuble ou un premier test.',
    'home.pricingTier2Name': 'Starter',
    'home.pricingTier2Range': '26 à 100 logements',
    'home.pricingTier2Price': '79 €',
    'home.pricingTier2Period': '/mois',
    'home.pricingTier2Tagline': 'Pour les équipes en croissance qui standardisent leur premier processus.',
    'home.pricingTier3Badge': 'Le plus populaire',
    'home.pricingTier3Name': 'Growth',
    'home.pricingTier3Range': '101 à 300 logements',
    'home.pricingTier3Price': '199 €',
    'home.pricingTier3Period': '/mois',
    'home.pricingTier3Tagline': 'Pour les équipes multi-biens qui font évoluer leurs remises.',
    'home.pricingTier4Name': 'Scale',
    'home.pricingTier4Range': '301 à 1 000 logements',
    'home.pricingTier4Price': '449 €',
    'home.pricingTier4Period': '/mois',
    'home.pricingTier4Tagline': 'Pour les portefeuilles régionaux avec du personnel dédié.',
    'home.pricingTier5Name': 'Portfolio',
    'home.pricingTier5Range': '1 001 à 5 000 logements',
    'home.pricingTier5Price': '899 €',
    'home.pricingTier5Period': '/mois',
    'home.pricingTier5Tagline': 'Pour les grands portefeuilles ayant besoin d’un support prioritaire.',
    'home.pricingTier6Name': 'Enterprise',
    'home.pricingTier6Range': 'Plus de 5 000 logements',
    'home.pricingTier6Price': 'Sur mesure',
    'home.pricingTier6Period': '',
    'home.pricingTier6Tagline': 'Pour les plateformes nationales et les réseaux de franchise.',
    'home.trustEyebrow': 'Confiance et données',
    'home.trustTitle': 'Aucun compte locataire. Aucune donnée revendue.',
    'home.trustIntro': "Trailase est conçu pour recueillir des preuves, pas une empreinte de données personnelles. Voici exactement ce que cela signifie aujourd'hui.",
    'home.trustPoint1Title': 'Aucun compte locataire',
    'home.trustPoint1Text': 'Le locataire complète son inspection via un seul lien. Aucun compte, mot de passe ni application à créer, retenir ou perdre.',
    'home.trustPoint2Title': 'Liens à usage unique',
    'home.trustPoint2Text': 'Chaque lien locataire est un jeton impossible à deviner, limité à une seule inspection. Il ne peut être ni parcouru ni réutilisé pour autre chose.',
    'home.trustPoint3Title': 'Accès opérateur limité à la session',
    'home.trustPoint3Text': "La file d'inspections de votre équipe n'est visible que depuis votre propre session opérateur. Aucun autre visiteur ne peut voir vos biens ou dossiers.",
    'home.trustPoint4Title': 'Jamais vendu, jamais partagé',
    'home.trustPoint4Text': 'Trailase ne vend ni ne partage les données des locataires avec des annonceurs ou des tiers non liés.',
    'home.trustScope': "Trailase réunit des preuves. Il n'attribue pas de responsabilité, ne détermine pas de faute et ne calcule pas de retenue sur dépôt de garantie — cette décision reste celle de votre équipe.",
    'home.founderHook': 'Un litige comme celui-ci coûte des semaines d’allers-retours. Une seule photo peut le régler en quelques minutes.',
    'story.eyebrow': 'Voyez ce que la clarté change',
    'story.title': 'Des détails dispersés à un dossier digne de confiance.',
    'story.intro': 'Faites défiler pour transformer chaque détail en un dossier prêt à éclairer vos décisions.',
    'story.phase.scattered': 'Capturer',
    'story.phase.structured': 'Structurer',
    'story.phase.comparison': 'Comparer',
    'story.photos': 'Photographies',
    'story.damage': 'Dommage existant',
    'story.inventory': 'Éléments d’inventaire',
    'story.meter': 'Relevé du compteur',
    'story.keys': 'Clés reçues',
    'story.signed': 'Signé',
    'story.report': 'Rapport d’état',
    'story.damageNote': 'Marque existante sur le mur · confirmée par la locataire',
    'story.moveIn': 'Entrée',
    'story.moveOut': 'Sortie',
    'story.potentialChange': 'Changement potentiel',
    'story.evidenceNote': 'Comparez les deux moments. Repérez ce qui a changé. Décidez sereinement.',
    'contact.redirectTitle': 'Ouvrir votre messagerie ?',
    'contact.redirectText': 'Vous allez quitter Trailase pour ouvrir un e-mail préparé dans un nouvel onglet.',
    'contact.cancel': 'Rester ici',
    'contact.continue': 'Ouvrir l’e-mail',
    'operator.eyebrow': 'Trailase · démo du produit',
    'operator.title': 'Voyez un état des lieux clair prendre forme.',
    'operator.intro': 'Lancez une inspection guidée, partagez le lien et voyez chaque détail revenir dans un dossier complet.',
    'operator.prototypeNote': 'Vous êtes dans la démo : utilisez les exemples pour vivre tout le parcours de remise.',
    'operator.create': 'Lancer la remise de la chambre 4B',
    'operator.creating': 'Création…',
    'operator.queue': 'File des preuves',
    'operator.recent': 'Inspections récentes',
    'operator.refresh': 'Actualiser',
    'operator.paginationLabel': 'Pages de la file d’inspections',
    'operator.previous': 'Précédente',
    'operator.next': 'Suivante',
    'operator.pageOf': 'Page {page} sur {pages}',
    'operator.completed': 'Terminée',
    'operator.awaiting': 'En attente du locataire',
    'operator.loading': 'Chargement des inspections…',
    'operator.tryAgain': 'Réessayer',
    'operator.empty': 'Aucune inspection pour le moment.',
    'operator.emptyText': 'Créez un lien pour la chambre 4B afin de commencer.',
    'operator.created': 'Créée le {date}',
    'operator.photos': 'Photos',
    'operator.status': 'Statut',
    'operator.completedAt': 'Terminée',
    'operator.copy': 'Copier le lien',
    'operator.open': 'Ouvrir la vue locataire',
    'operator.latest': 'Dernier lien partagé',
    'operator.createSuccess': 'La nouvelle inspection de la chambre 4B est prête à être partagée.',
    'operator.copySuccess': 'Lien d’inspection copié.',
    'operator.copyError': 'La copie a été bloquée. Sélectionnez le lien pour le copier manuellement.',
    'operator.delete': 'Supprimer',
    'operator.deleting': 'Suppression…',
    'operator.deleteConfirm': 'Supprimer cette inspection de votre session ?',
    'operator.deleteSuccess': 'Inspection supprimée.',
    'operator.deleteError': 'Impossible de supprimer l’inspection. Réessayez.',
    'inspection.steps.condition': 'État',
    'inspection.steps.photos': 'Photos',
    'inspection.steps.notes': 'Notes',
    'inspection.steps.signature': 'Signature',
    'inspection.steps.review': 'Vérification',
    'inspection.good': 'Bon état',
    'inspection.attention': 'À surveiller',
    'inspection.damage': 'Dommage signalé',
    'inspection.required': 'Obligatoire',
    'inspection.optionalNote': 'Note facultative',
    'inspection.loading': 'Préparation de l’inspection de la chambre 4B…',
    'inspection.linkTitle': 'Ce lien doit être vérifié.',
    'inspection.linkUnavailable': 'Ce lien d’inspection n’est pas disponible.',
    'inspection.recoveryHelp': 'Réessayez de charger l’inspection ou revenez à Trailase. Si le lien ne fonctionne toujours pas, demandez-en un nouveau à la personne qui vous l’a envoyé.',
    'inspection.tryAgain': 'Réessayer',
    'inspection.return': 'Retour à Trailase',
    'inspection.complete': 'Inspection terminée',
    'inspection.already': 'Déjà envoyée',
    'inspection.thanks': 'Merci. La remise est enregistrée.',
    'inspection.alreadyTitle': 'Cette remise est déjà enregistrée.',
    'inspection.submittedText': 'Les notes, photos et la signature pour {room} ont été transmises à l’opérateur.',
    'inspection.alreadyText': 'Ce lien a déjà été complété et ne peut accepter un nouvel envoi.',
    'inspection.close': 'Vous pouvez maintenant fermer cette page.',
    'inspection.eyebrow': 'Trailase · état des lieux d’entrée',
    'inspection.intro': 'Quelques minutes suffisent pour établir clairement l’état initial de la chambre.',
    'inspection.stepProgress': 'Étape {current} sur {total}',
    'inspection.conditionTitle': 'Quel est l’état de chaque zone ?',
    'inspection.conditionText': 'Choisissez la description la plus proche et ajoutez une note si nécessaire.',
    'inspection.photosTitle': 'Capturez les preuves photographiques',
    'inspection.photosText': 'Utilisez l’appareil photo pour saisir une vue générale et les détails utiles.',
    'inspection.ready': 'Quand vous êtes prêt',
    'inspection.cameraText': 'La caméra arrière ne s’ouvre qu’après votre action.',
    'inspection.openCamera': 'Ouvrir la caméra',
    'inspection.photosCaptured8': '8 photos prises',
    'inspection.openingCamera': 'Ouverture de la caméra…',
    'inspection.allowCamera': 'Autorisez l’accès lorsque demandé.',
    'inspection.livePreview': 'Caméra arrière · aperçu en direct',
    'inspection.takePhoto': 'Prendre une photo',
    'inspection.photoPreview': 'Aperçu de la photo',
    'inspection.previewText': 'Vérifiez le cadrage avant de l’ajouter aux preuves.',
    'inspection.retake': 'Reprendre',
    'inspection.usePhoto': 'Utiliser la photo',
    'inspection.cameraUnavailable': 'Caméra indisponible',
    'inspection.cameraFailed': 'Impossible d’ouvrir la caméra.',
    'inspection.cameraAgain': 'Réessayer la caméra',
    'inspection.demoCamera': 'Utiliser la capture de démonstration',
    'inspection.capturedEvidence': 'Preuves capturées',
    'inspection.photosReady': '{count} photos sur 8 prêtes pour le dossier.',
    'inspection.cameraOnly': 'Caméra uniquement',
    'inspection.demoCapture': 'Capture démo',
    'inspection.captured': 'Capturée',
    'inspection.readyStatus': 'Prête',
    'inspection.remove': 'Supprimer',
    'inspection.notesTitle': 'Autre chose à signaler ?',
    'inspection.notesText': 'Ajoutez le contexte que les photos ne montrent pas. C’est facultatif mais utile.',
    'inspection.notesLabel': 'Notes d’inspection',
    'inspection.notesPlaceholder': 'Par exemple : deux clés sur l’étagère de l’entrée…',
    'inspection.signatureTitle': 'Signez la remise',
    'inspection.signatureText': 'Votre signature confirme que vous avez vérifié cet état des lieux.',
    'inspection.consent': 'Je confirme que cette inspection reflète l’état dans lequel j’ai trouvé la chambre 4B.',
    'inspection.reviewTitle': 'Une dernière vérification',
    'inspection.reviewText': 'Vérifiez votre dossier avant de l’envoyer à l’opérateur.',
    'inspection.areasChecked': 'Zones vérifiées',
    'inspection.photosAdded': 'Photos ajoutées',
    'inspection.yes': 'Oui',
    'inspection.no': 'Non',
    'inspection.signatureReady': 'Signature prête',
    'inspection.noNotes': 'Aucune note supplémentaire.',
    'inspection.submitNotice': 'L’envoi transmet l’inspection à l’opérateur et ferme le lien.',
    'inspection.photoEvidence': 'Preuves photographiques envoyées',
    'inspection.capturedCount': '{count} capturées',
    'inspection.cameraIncluded': 'Ces captures seront incluses dans votre envoi.',
    'inspection.back': 'Retour',
    'inspection.continue': 'Continuer',
    'inspection.sending': 'Envoi…',
    'inspection.submit': 'Envoyer l’inspection',
    'inspection.draw': 'Signez avec votre doigt ou votre souris.',
    'inspection.undo': 'Annuler',
    'inspection.clear': 'Effacer',
    'inspection.area.walls': 'Murs',
    'inspection.area.floor': 'Sol',
    'inspection.area.furniture': 'Mobilier',
    'inspection.area.windows': 'Fenêtres',
    'og.eyebrow': 'ÉTATS DES LIEUX',
    'og.headline': 'Des états des lieux clairs. Des décisions sereines.',
    'og.description': 'Une inspection guidée. Un dossier complet. Aucun détail perdu.',
    'og.noApp': 'Sans appli locataire',
    'og.photoFirst': 'Axé sur la photo',
    'og.comparisons': 'Comparaisons claires'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/i18n/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translate",
    ()=>translate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/en.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$es$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/es.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$fr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/fr.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$nl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/nl.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/config.ts [app-client] (ecmascript)");
;
;
;
;
;
const additions = {
    en: {
        'error.notFound': 'This page does not exist.',
        'error.home': 'Back to home',
        'error.title': 'Something went wrong',
        'error.text': 'An unexpected error occurred. Please try again.',
        'operator.createError': 'Could not create the inspection.',
        'operator.loadingAria': 'Loading inspections',
        'operator.openLink': 'Open link',
        'inspection.conditionLegend': 'Condition',
        'inspection.photoLimit': 'You can add up to 8 photos.',
        'inspection.cameraPermissionDenied': 'Camera access was blocked. Check your browser permission and try again.',
        'inspection.cameraNotFound': 'No camera was found on this device. You can use the demo camera capture below.',
        'inspection.cameraBusy': 'The camera is busy in another app. Close it and try again.',
        'inspection.cameraUnsupported': 'Camera capture is not available in this browser or context.',
        'inspection.cameraRequestFailed': 'The camera could not be opened. Try again or use the demo camera capture below.',
        'inspection.cameraPreviewFailed': 'The camera preview could not be prepared. Try again.',
        'inspection.cameraNotReady': 'The camera preview is not ready yet. Try opening it again.',
        'inspection.cameraPhotoFailed': 'This device could not prepare a camera photo. Try again.',
        'inspection.photoTooLarge': 'This photo is too large for the inspection record. Try a closer frame.',
        'inspection.demoCanvasTitle': 'DEMO CAMERA CAPTURE',
        'inspection.demoCanvasCaption': 'Room 4B · sample evidence frame',
        'inspection.livePreviewAria': 'Live rear-facing camera preview',
        'inspection.photoPreviewAlt': 'Preview of the camera photo',
        'inspection.demoPhotoAlt': 'Demo camera capture',
        'inspection.capturedPhotoAlt': 'Captured camera photo',
        'inspection.validation.condition': 'Choose a condition for every area before continuing.',
        'inspection.validation.pendingPhoto': 'Use this photo or retake it before continuing.',
        'inspection.validation.photo': 'Add at least one camera photo so the record has visual evidence.',
        'inspection.validation.notes': 'Keep your notes under 1,200 characters.',
        'inspection.validation.signature': 'Draw your signature and confirm the consent checkbox.',
        'inspection.submitError': 'Could not submit this inspection. Please try again.',
        'inspection.area.entryway': 'Entryway & keys',
        'inspection.area.living-room': 'Living room',
        'inspection.area.kitchen': 'Kitchen',
        'inspection.area.bathroom': 'Bathroom',
        'inspection.area.bedroom': 'Bedroom'
    },
    es: {
        'error.notFound': 'Esta página no existe.',
        'error.home': 'Volver al inicio',
        'error.title': 'Algo ha salido mal',
        'error.text': 'Se produjo un error inesperado. Inténtalo de nuevo.',
        'operator.createError': 'No se pudo crear la inspección.',
        'operator.loadingAria': 'Cargando inspecciones',
        'operator.openLink': 'Abrir enlace',
        'inspection.conditionLegend': 'Estado',
        'inspection.photoLimit': 'Puedes añadir hasta 8 fotos.',
        'inspection.cameraPermissionDenied': 'El acceso a la cámara está bloqueado. Revisa los permisos del navegador e inténtalo de nuevo.',
        'inspection.cameraNotFound': 'No se encontró ninguna cámara en este dispositivo. Puedes usar la captura de demostración.',
        'inspection.cameraBusy': 'Otra aplicación está usando la cámara. Ciérrala e inténtalo de nuevo.',
        'inspection.cameraUnsupported': 'La captura con cámara no está disponible en este navegador o contexto.',
        'inspection.cameraRequestFailed': 'No se pudo abrir la cámara. Inténtalo de nuevo o usa la captura de demostración.',
        'inspection.cameraPreviewFailed': 'No se pudo preparar la vista previa de la cámara. Inténtalo de nuevo.',
        'inspection.cameraNotReady': 'La vista previa aún no está lista. Intenta abrir la cámara de nuevo.',
        'inspection.cameraPhotoFailed': 'Este dispositivo no pudo preparar la foto. Inténtalo de nuevo.',
        'inspection.photoTooLarge': 'La foto es demasiado grande para el registro. Prueba con un encuadre más cercano.',
        'inspection.demoCanvasTitle': 'CAPTURA DE CÁMARA DEMO',
        'inspection.demoCanvasCaption': 'Habitación 4B · ejemplo de evidencia',
        'inspection.livePreviewAria': 'Vista en directo de la cámara trasera',
        'inspection.photoPreviewAlt': 'Vista previa de la foto de la cámara',
        'inspection.demoPhotoAlt': 'Captura de cámara de demostración',
        'inspection.capturedPhotoAlt': 'Foto capturada con la cámara',
        'inspection.validation.condition': 'Elige un estado para cada zona antes de continuar.',
        'inspection.validation.pendingPhoto': 'Usa esta foto o repítela antes de continuar.',
        'inspection.validation.photo': 'Añade al menos una foto como evidencia visual.',
        'inspection.validation.notes': 'Limita las notas a 1.200 caracteres.',
        'inspection.validation.signature': 'Dibuja tu firma y confirma el consentimiento.',
        'inspection.submitError': 'No se pudo enviar la inspección. Inténtalo de nuevo.',
        'inspection.area.entryway': 'Entrada y llaves',
        'inspection.area.living-room': 'Salón',
        'inspection.area.kitchen': 'Cocina',
        'inspection.area.bathroom': 'Baño',
        'inspection.area.bedroom': 'Dormitorio'
    },
    fr: {
        'error.notFound': 'Cette page n’existe pas.',
        'error.home': 'Retour à l’accueil',
        'error.title': 'Un problème est survenu',
        'error.text': 'Une erreur inattendue s’est produite. Réessayez.',
        'operator.createError': 'Impossible de créer l’inspection.',
        'operator.loadingAria': 'Chargement des inspections',
        'operator.openLink': 'Ouvrir le lien',
        'inspection.conditionLegend': 'État',
        'inspection.photoLimit': 'Vous pouvez ajouter jusqu’à 8 photos.',
        'inspection.cameraPermissionDenied': 'L’accès à la caméra est bloqué. Vérifiez les autorisations du navigateur et réessayez.',
        'inspection.cameraNotFound': 'Aucune caméra n’a été détectée. Vous pouvez utiliser la capture de démonstration.',
        'inspection.cameraBusy': 'La caméra est utilisée par une autre application. Fermez-la et réessayez.',
        'inspection.cameraUnsupported': 'La capture photo n’est pas disponible dans ce navigateur ou ce contexte.',
        'inspection.cameraRequestFailed': 'Impossible d’ouvrir la caméra. Réessayez ou utilisez la capture de démonstration.',
        'inspection.cameraPreviewFailed': 'Impossible de préparer l’aperçu. Réessayez.',
        'inspection.cameraNotReady': 'L’aperçu n’est pas encore prêt. Rouvrez la caméra.',
        'inspection.cameraPhotoFailed': 'Cet appareil n’a pas pu préparer la photo. Réessayez.',
        'inspection.photoTooLarge': 'Cette photo est trop volumineuse pour le dossier. Essayez un cadrage plus rapproché.',
        'inspection.demoCanvasTitle': 'CAPTURE PHOTO DE DÉMONSTRATION',
        'inspection.demoCanvasCaption': 'Chambre 4B · exemple de preuve',
        'inspection.livePreviewAria': 'Aperçu en direct de la caméra arrière',
        'inspection.photoPreviewAlt': 'Aperçu de la photo prise',
        'inspection.demoPhotoAlt': 'Capture photo de démonstration',
        'inspection.capturedPhotoAlt': 'Photo prise avec la caméra',
        'inspection.validation.condition': 'Choisissez un état pour chaque zone avant de continuer.',
        'inspection.validation.pendingPhoto': 'Utilisez cette photo ou reprenez-la avant de continuer.',
        'inspection.validation.photo': 'Ajoutez au moins une photo comme preuve visuelle.',
        'inspection.validation.notes': 'Limitez vos notes à 1 200 caractères.',
        'inspection.validation.signature': 'Signez et confirmez le consentement.',
        'inspection.submitError': 'Impossible d’envoyer l’inspection. Réessayez.',
        'inspection.area.entryway': 'Entrée et clés',
        'inspection.area.living-room': 'Séjour',
        'inspection.area.kitchen': 'Cuisine',
        'inspection.area.bathroom': 'Salle de bain',
        'inspection.area.bedroom': 'Chambre'
    },
    nl: {
        'error.notFound': 'Deze pagina bestaat niet.',
        'error.home': 'Terug naar home',
        'error.title': 'Er is iets misgegaan',
        'error.text': 'Er is een onverwachte fout opgetreden. Probeer opnieuw.',
        'operator.createError': 'De inspectie kon niet worden gemaakt.',
        'operator.loadingAria': 'Inspecties laden',
        'operator.openLink': 'Link openen',
        'inspection.conditionLegend': 'Conditie',
        'inspection.photoLimit': 'Je kunt maximaal 8 foto’s toevoegen.',
        'inspection.cameraPermissionDenied': 'Cameratoegang is geblokkeerd. Controleer je browserrechten en probeer opnieuw.',
        'inspection.cameraNotFound': 'Er is geen camera gevonden op dit apparaat. Je kunt de democamera gebruiken.',
        'inspection.cameraBusy': 'De camera wordt door een andere app gebruikt. Sluit die app en probeer opnieuw.',
        'inspection.cameraUnsupported': 'Foto’s maken is niet beschikbaar in deze browser of context.',
        'inspection.cameraRequestFailed': 'De camera kon niet worden geopend. Probeer opnieuw of gebruik de democamera.',
        'inspection.cameraPreviewFailed': 'Het cameravoorbeeld kon niet worden voorbereid. Probeer opnieuw.',
        'inspection.cameraNotReady': 'Het cameravoorbeeld is nog niet klaar. Open de camera opnieuw.',
        'inspection.cameraPhotoFailed': 'Dit apparaat kon de camerafoto niet voorbereiden. Probeer opnieuw.',
        'inspection.photoTooLarge': 'Deze foto is te groot voor het inspectiedossier. Probeer een kleinere uitsnede.',
        'inspection.demoCanvasTitle': 'DEMO-CAMERAOPNAME',
        'inspection.demoCanvasCaption': 'Kamer 4B · voorbeeld van bewijs',
        'inspection.livePreviewAria': 'Livevoorbeeld van de camera aan de achterzijde',
        'inspection.photoPreviewAlt': 'Voorbeeld van de camerafoto',
        'inspection.demoPhotoAlt': 'Demo-cameraopname',
        'inspection.capturedPhotoAlt': 'Vastgelegde camerafoto',
        'inspection.validation.condition': 'Kies voor elk onderdeel een conditie voordat je doorgaat.',
        'inspection.validation.pendingPhoto': 'Gebruik deze foto of maak hem opnieuw voordat je doorgaat.',
        'inspection.validation.photo': 'Voeg ten minste één foto toe als visueel bewijs.',
        'inspection.validation.notes': 'Houd je notities onder 1.200 tekens.',
        'inspection.validation.signature': 'Zet je handtekening en bevestig de toestemming.',
        'inspection.submitError': 'De inspectie kon niet worden verzonden. Probeer opnieuw.',
        'inspection.area.entryway': 'Entree en sleutels',
        'inspection.area.living-room': 'Woonkamer',
        'inspection.area.kitchen': 'Keuken',
        'inspection.area.bathroom': 'Badkamer',
        'inspection.area.bedroom': 'Slaapkamer'
    }
};
const catalogs = {
    en: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["messages"],
        ...additions.en
    },
    es: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$es$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["messages"],
        ...additions.es
    },
    fr: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$fr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["messages"],
        ...additions.fr
    },
    nl: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$nl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["messages"],
        ...additions.nl
    }
};
function translate(locale, key, variables = {}) {
    const template = catalogs[locale][key] ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["messages"][key] ?? key;
    return Object.entries(variables).reduce((value, [name, replacement])=>value.replaceAll(`{${name}}`, String(replacement)), template);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/i18n/nl.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "messages",
    ()=>messages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$es$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/es.ts [app-client] (ecmascript)");
;
const messages = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$es$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["messages"],
    'language.label': 'Taal',
    'theme.toggle': 'Wissel tussen licht en donker thema',
    'nav.how': 'Zo werkt het',
    'nav.for': 'Voor wie',
    'nav.pricing': 'Prijzen',
    'nav.prototype': 'Live demo',
    'nav.contact': 'Plan een demo',
    'nav.openMenu': 'Menu openen',
    'home.badge': 'Elke oplevering. Eén helder dossier.',
    'home.title': 'Helder opleveren. Zeker beslissen.',
    'home.intro': 'Trailase begeleidt huurders door in- en uitcheckinspecties en brengt elke foto, notitie, meterstand en handtekening samen in één dossier dat direct klaar is voor controle.',
    'home.walkthrough': 'Bekijk Trailase in actie',
    'home.prototype': 'Probeer de live demo',
    'home.scale': 'Gemaakt voor professionele teams met 50–5.000 kamers of woningen.',
    'home.report': 'Conditierapport bij intrek',
    'home.photos': 'Foto’s',
    'home.issue': 'Bestaand probleem',
    'home.inventory': 'Inventarisitems',
    'home.keys': 'Ontvangen sleutels',
    'home.meter': 'Meterstand',
    'home.confirmation': 'Bevestiging huurder',
    'home.completed': 'Voltooid',
    'home.wall': 'Muur bij het raam',
    'home.wallNote': 'Bestaande oppervlaktemarkering vastgelegd en bevestigd door de huurder.',
    'home.evidenceRecorded': 'Bewijs vastgelegd',
    'home.workflowEyebrow': 'Van najagen naar doorpakken',
    'home.workflowTitle': 'Stop met details najagen. Houd elke oplevering in beweging.',
    'home.workflowIntro': 'Vervang papieren formulieren, losse foto’s en berichtendiscussies door één eenvoudig proces dat je team met vertrouwen kan herhalen.',
    'home.step1Title': 'Zet de oplevering in gang',
    'home.step1Text': 'Kies pand, kamer, huurder en inspectietype vanuit één werkruimte.',
    'home.step2Title': 'Laat de huurder zijn deel doen',
    'home.step2Text': 'De huurder opent één begeleide link op de telefoon, zonder app, account of training.',
    'home.step3Title': 'Controleer één compleet dossier',
    'home.step3Text': 'Foto’s, conditie, inventaris, sleutels, meterstanden en handtekeningen komen samen binnen.',
    'home.evidenceEyebrow': 'Duidelijkheid wanneer het telt',
    'home.evidenceTitle': 'Als er vragen ontstaan, staat de volledige context al klaar.',
    'home.evidenceText': 'Trailase zet het bewijs van in- en uitcheck naast elkaar, zodat je team mogelijke veranderingen snel ziet en zelf iedere beslissing blijft nemen.',
    'home.tenantTitle': 'Makkelijk af te ronden',
    'home.tenantText': 'Een eenvoudige mobiele route die huurders zonder account of app voltooien.',
    'home.teamTitle': 'Standaard consistent',
    'home.teamText': 'Dezelfde begeleide bewijsstandaard in elke kamer, elk pand en elke stad.',
    'home.readyTitle': 'Helder wanneer het telt',
    'home.readyText': 'Een gestructureerde, controleerbare historie staat klaar zodra er een vraag ontstaat.',
    'home.portfolioEyebrow': 'Gebouwd om met je portefeuille mee te groeien',
    'home.units': 'kamers of woningen in beheer',
    'home.standard': 'Eén betrouwbare opleverstandaard voor ieder pand',
    'home.operatorsEyebrow': 'Meer consistentie, zonder extra gedoe',
    'home.operatorsTitle': 'Eén betrouwbaar proces, van 50 kamers tot 5.000.',
    'home.operatorsText': 'Trailase geeft Europese vastgoedteams een professionele opleverervaring die ze op elke locatie kunnen herhalen, terwijl de route voor huurders eenvoudig blijft.',
    'home.audience.coliving': 'Professionele coliving',
    'home.audience.student': 'Studentenhuisvesting',
    'home.audience.serviced': 'Serviceappartementen',
    'home.audience.btr': 'Professionele huurwooncomplexen',
    'home.audience.managers': 'Professioneel vastgoedbeheer',
    'home.tagline': 'Een heldere oplevering begint hier',
    'home.contactTitle': 'Maak je volgende oplevering de eenvoudigste tot nu toe.',
    'home.contactText': 'Vertel waar in- of uitchecken je team vertraagt. We laten zien hoe Trailase die losse eindjes omzet in één helder proces.',
    'home.contactTiming': 'Studentenhuisvesting en grote portefeuilles zien het meeste verloop in een paar drukke weken per jaar. Regel dit vóór die periode, niet erdoorheen.',
    'home.contactButton': 'Plan een demo',
    'home.contactNameLabel': 'Naam (optioneel)',
    'home.contactEmailLabel': 'E-mail',
    'home.contactMessageLabel': 'Waar heeft uw team het meeste aan?',
    'home.contactMessagePlaceholder': 'Vertel ons wanneer je volgende in- of uitcheckseizoen begint, en waar het lastig wordt…',
    'home.contactSending': 'Verzenden…',
    'home.contactSuccessTitle': 'Bericht verzonden.',
    'home.contactSuccess': 'Bedankt — we reageren binnenkort per e-mail.',
    'home.contactError': 'Dat is niet gelukt. Probeer de e-maillink hieronder.',
    'home.contactFallbackText': 'U kunt ons ook rechtstreeks bereiken:',
    'home.contactFallbackLink': 'Mail ons',
    'home.founderTitle': 'Waarom dit bestaat',
    'home.founderText': 'Trailase ontstond na het steeds weer zien van hetzelfde probleem bij het huren van kamers door heel Europa: er was nooit een consistente manier om de staat van een kamer bij in- of uitcheck aan te tonen. In één geval beweerde een verhuurder maanden na vertrek dat de verf van een muur was beschadigd. Het oplossen kostte twee maanden heen-en-weer, en lukte alleen omdat er foto’s van voor en na bestonden. Hetzelfde probleem speelt op grotere schaal. Een team van studentenhuisvesting dat in dezelfde augustusweek 200 kamers oplevert, heeft zelden tijd om elke kamer goed te documenteren, waardoor geschillen weken later ontstaan zonder bewijs aan beide kanten. Een portefeuille in meerdere steden met wisselend personeel per oplevering eindigt met een andere standaard per gebouw, waardoor niemand consistentie kan aantonen. Trailase bestaat om dat gat te dichten voordat het een geschil wordt. Daarom zijn de eerste tien inspecties gratis: zie het zelf werken op uw eigen panden voordat u iets anders beslist.',
    'home.contactFreeTrial': 'Gratis voor je eerste 10 inspecties. Geen contract.',
    'home.contactCalLink': 'Liever eerst praten? Boek een moment in onze agenda',
    'home.faqDeviceQ': 'Wat als een huurder geen smartphone heeft?',
    'home.faqDeviceA': 'Trailase werkt volledig in de browser, dus een huurder kan het invullen op een telefoon, tablet of laptop met camera. Geen app of account nodig.',
    'home.faqSetupQ': 'Hoeveel tijd kost het opzetten?',
    'home.faqSetupA': 'Een operator maakt in enkele seconden een deellink vanuit één werkruimte. De huurder rondt het af op zijn eigen apparaat, zonder account of installatie.',
    'home.faqPmsQ': 'Moeten we ons vastgoedbeheersysteem vervangen?',
    'home.faqPmsA': 'Nee. Trailase regelt alleen de inspectie en het bewijs. Het werkt naast de software die je team al gebruikt voor verhuur, onderhoud of boekhouding.',
    'home.faqScaleQ': 'Hoe snel kunnen we dit uitrollen over een grote portefeuille?',
    'home.faqScaleA': 'De meeste teams maken hun eerste inspectielink binnen enkele minuten aan. Grote portefeuilles kunnen pand voor pand uitrollen, omdat er geen training of installatie nodig is voor huurders of personeel.',
    'home.faqLiabilityQ': 'Bepaalt Trailase wie verantwoordelijk is voor schade?',
    'home.faqLiabilityA': 'Nee. Trailase verzamelt helder, naast elkaar geplaatst bewijs. Je team neemt nog steeds de beslissing — wij zorgen er alleen voor dat je niet hoeft te gokken.',
    'home.pricingEyebrow': 'Prijzen',
    'home.pricingTitle': 'Heldere prijzen die meegroeien met je portefeuille.',
    'home.pricingIntro': 'De prijs schaalt met het aantal beheerde units, niet met hoeveel foto’s je team maakt — van een eerste pilotpand tot een landelijke portefeuille.',
    'home.pricingFreeNote': 'Gratis voor je eerste 10 inspecties op elk plan. Geen contract, altijd opzegbaar.',
    'home.pricingDisclaimer': 'Startprijzen voor Europese portefeuilles. De uiteindelijke prijs hangt af van portefeuillegrootte en uitrolomvang — neem contact op voor een exacte offerte.',
    'home.pricingCta': 'Praat met ons over je portefeuille',
    'home.pricingIncludedTitle': 'Inbegrepen bij elk plan',
    'home.pricingIncludedFeature1': 'Onbeperkt inspecties',
    'home.pricingIncludedFeature2': 'Onbeperkt teamleden',
    'home.pricingIncludedFeature3': 'Foto-, handtekening- en conditiebewijs',
    'home.pricingIncludedFeature4': 'Meertalige huurderlinks (EN, ES, FR, NL)',
    'home.pricingTier1Name': 'Pilot',
    'home.pricingTier1Range': 'Tot 25 units',
    'home.pricingTier1Price': '€29',
    'home.pricingTier1Period': '/maand',
    'home.pricingTier1Tagline': 'Voor één pand of een eerste pilot.',
    'home.pricingTier2Name': 'Starter',
    'home.pricingTier2Range': '26–100 units',
    'home.pricingTier2Price': '€79',
    'home.pricingTier2Period': '/maand',
    'home.pricingTier2Tagline': 'Voor groeiende teams die hun eerste proces standaardiseren.',
    'home.pricingTier3Badge': 'Meest gekozen',
    'home.pricingTier3Name': 'Growth',
    'home.pricingTier3Range': '101–300 units',
    'home.pricingTier3Price': '€199',
    'home.pricingTier3Period': '/maand',
    'home.pricingTier3Tagline': 'Voor teams met meerdere panden die opleveringen opschalen.',
    'home.pricingTier4Name': 'Scale',
    'home.pricingTier4Range': '301–1.000 units',
    'home.pricingTier4Price': '€449',
    'home.pricingTier4Period': '/maand',
    'home.pricingTier4Tagline': 'Voor regionale portefeuilles met toegewijde operationele staf.',
    'home.pricingTier5Name': 'Portfolio',
    'home.pricingTier5Range': '1.001–5.000 units',
    'home.pricingTier5Price': '€899',
    'home.pricingTier5Period': '/maand',
    'home.pricingTier5Tagline': 'Voor grote portefeuilles die voorrangsondersteuning nodig hebben.',
    'home.pricingTier6Name': 'Enterprise',
    'home.pricingTier6Range': '5.000+ units',
    'home.pricingTier6Price': 'Op maat',
    'home.pricingTier6Period': '',
    'home.pricingTier6Tagline': 'Voor landelijke platforms en franchisenetwerken.',
    'home.trustEyebrow': 'Vertrouwen en data',
    'home.trustTitle': 'Geen huurdersaccounts. Geen dataverkoop.',
    'home.trustIntro': 'Trailase is gebouwd om bewijs te verzamelen, geen persoonlijke data-voetafdruk. Dit is precies wat dat vandaag betekent.',
    'home.trustPoint1Title': 'Geen huurdersaccounts',
    'home.trustPoint1Text': 'Huurders ronden hun inspectie af via één link. Geen account, wachtwoord of app om aan te maken, te onthouden of kwijt te raken.',
    'home.trustPoint2Title': 'Links met één doel',
    'home.trustPoint2Text': 'Elke huurderlink is een niet te raden token, beperkt tot één inspectie. Hij kan niet worden doorzocht of voor iets anders hergebruikt.',
    'home.trustPoint3Title': 'Operatortoegang beperkt tot de sessie',
    'home.trustPoint3Text': 'De inspectiewachtrij van je team is alleen zichtbaar vanuit je eigen operatorsessie. Andere bezoekers kunnen je panden of dossiers niet zien.',
    'home.trustPoint4Title': 'Nooit verkocht, nooit gedeeld',
    'home.trustPoint4Text': 'Trailase verkoopt huurdersdata niet en deelt deze niet met adverteerders of onverwante derde partijen.',
    'home.trustScope': 'Trailase verzamelt bewijs. Het wijst geen schuld toe, bepaalt geen aansprakelijkheid en berekent geen inhouding op de borg — die beslissing blijft bij je team.',
    'home.founderHook': 'Zo’n geschil kost weken heen-en-weer. Eén foto kan het in enkele minuten oplossen.',
    'story.eyebrow': 'Zie wat duidelijkheid verandert',
    'story.title': 'Van losse details naar een dossier waarop je kunt vertrouwen.',
    'story.intro': 'Scroll om elk inspectiedetail om te zetten in één dossier dat klaar is voor beslissingen.',
    'story.phase.scattered': 'Vastleggen',
    'story.phase.structured': 'Structureren',
    'story.phase.comparison': 'Vergelijken',
    'story.photos': 'Foto’s',
    'story.damage': 'Bestaande schade',
    'story.inventory': 'Inventarisitems',
    'story.meter': 'Meterstand',
    'story.keys': 'Ontvangen sleutels',
    'story.signed': 'Ondertekend',
    'story.report': 'Conditierapport',
    'story.damageNote': 'Bestaande plek op de muur · bevestigd door de huurder',
    'story.moveIn': 'Intrek',
    'story.moveOut': 'Vertrek',
    'story.potentialChange': 'Mogelijke verandering',
    'story.evidenceNote': 'Vergelijk beide momenten. Zie wat veranderde. Beslis met vertrouwen.',
    'contact.redirectTitle': 'Je e-maildienst openen?',
    'contact.redirectText': 'Je verlaat Trailase om een voorbereide e-mail in een nieuw tabblad te openen.',
    'contact.cancel': 'Hier blijven',
    'contact.continue': 'E-mail openen',
    'operator.eyebrow': 'Trailase · live productdemo',
    'operator.title': 'Zie hoe een heldere oplevering vorm krijgt.',
    'operator.intro': 'Start één begeleide inspectie, deel de huurderslink en zie elk detail terugkomen in één compleet dossier.',
    'operator.prototypeNote': 'Je bent in de live demo: gebruik de voorbeeldgegevens om de complete oplevering te ervaren.',
    'operator.create': 'Start de oplevering van kamer 4B',
    'operator.creating': 'Bezig met maken…',
    'operator.queue': 'Bewijswachtrij',
    'operator.recent': 'Recente inspecties',
    'operator.refresh': 'Vernieuwen',
    'operator.paginationLabel': 'Pagina’s van de inspectiewachtrij',
    'operator.previous': 'Vorige',
    'operator.next': 'Volgende',
    'operator.pageOf': 'Pagina {page} van {pages}',
    'operator.completed': 'Voltooid',
    'operator.awaiting': 'Wacht op huurder',
    'operator.loading': 'Inspecties laden…',
    'operator.tryAgain': 'Opnieuw proberen',
    'operator.empty': 'Nog geen inspecties.',
    'operator.emptyText': 'Maak een link voor kamer 4B om de demo te starten.',
    'operator.created': 'Aangemaakt {date}',
    'operator.photos': 'Foto’s',
    'operator.status': 'Status',
    'operator.completedAt': 'Voltooid',
    'operator.copy': 'Link kopiëren',
    'operator.open': 'Huurdersweergave openen',
    'operator.latest': 'Nieuwste deellink',
    'operator.createSuccess': 'De nieuwe inspectie voor kamer 4B is klaar om te delen.',
    'operator.copySuccess': 'Inspectielink gekopieerd.',
    'operator.copyError': 'Kopiëren is geblokkeerd. Selecteer de link om hem handmatig te kopiëren.',
    'operator.delete': 'Verwijderen',
    'operator.deleting': 'Verwijderen…',
    'operator.deleteConfirm': 'Deze inspectie uit je sessie verwijderen?',
    'operator.deleteSuccess': 'Inspectie verwijderd.',
    'operator.deleteError': 'De inspectie kon niet worden verwijderd. Probeer opnieuw.',
    'inspection.steps.condition': 'Conditie',
    'inspection.steps.photos': 'Foto’s',
    'inspection.steps.notes': 'Notities',
    'inspection.steps.signature': 'Handtekening',
    'inspection.steps.review': 'Controle',
    'inspection.good': 'Goed',
    'inspection.attention': 'Aandacht nodig',
    'inspection.damage': 'Schade gemeld',
    'inspection.required': 'Verplicht',
    'inspection.optionalNote': 'Optionele notitie',
    'inspection.loading': 'Inspectie van kamer 4B voorbereiden…',
    'inspection.linkTitle': 'Deze link moet worden gecontroleerd.',
    'inspection.linkUnavailable': 'Deze inspectielink is niet beschikbaar.',
    'inspection.recoveryHelp': 'Probeer de inspectie opnieuw te laden of ga terug naar Trailase. Werkt de link nog steeds niet? Vraag de afzender om een nieuwe link.',
    'inspection.tryAgain': 'Opnieuw proberen',
    'inspection.return': 'Terug naar Trailase',
    'inspection.complete': 'Inspectie voltooid',
    'inspection.already': 'Al verzonden',
    'inspection.thanks': 'Bedankt. De overdracht is vastgelegd.',
    'inspection.alreadyTitle': 'Deze overdracht is al vastgelegd.',
    'inspection.submittedText': 'Je conditienotities, foto’s en handtekening voor {room} zijn veilig naar de beheerder gestuurd.',
    'inspection.alreadyText': 'Deze link is al voltooid en kan geen nieuwe inzending accepteren.',
    'inspection.close': 'Je kunt deze pagina nu sluiten.',
    'inspection.eyebrow': 'Trailase · intrekregistratie',
    'inspection.intro': 'Een paar minuten om de beginsituatie van de kamer duidelijk vast te leggen.',
    'inspection.stepProgress': 'Stap {current} van {total}',
    'inspection.conditionTitle': 'Hoe ziet elk onderdeel eruit?',
    'inspection.conditionText': 'Kies de beste omschrijving en voeg waar nodig een korte notitie toe.',
    'inspection.photosTitle': 'Fotobewijs vastleggen',
    'inspection.photosText': 'Gebruik de camera voor een overzicht en close-ups die de conditie verduidelijken.',
    'inspection.ready': 'Wanneer jij klaar bent',
    'inspection.cameraText': 'De camera aan de achterkant opent pas nadat je op de knop tikt.',
    'inspection.openCamera': 'Camera openen',
    'inspection.photosCaptured8': '8 foto’s gemaakt',
    'inspection.openingCamera': 'Camera openen…',
    'inspection.allowCamera': 'Geef toegang wanneer daarom wordt gevraagd.',
    'inspection.livePreview': 'Camera achter · livebeeld',
    'inspection.takePhoto': 'Foto maken',
    'inspection.photoPreview': 'Fotovoorbeeld',
    'inspection.previewText': 'Controleer het beeld voordat je het aan het bewijs toevoegt.',
    'inspection.retake': 'Opnieuw',
    'inspection.usePhoto': 'Foto gebruiken',
    'inspection.cameraUnavailable': 'Camera niet beschikbaar',
    'inspection.cameraFailed': 'De camera kon niet worden geopend.',
    'inspection.cameraAgain': 'Camera opnieuw proberen',
    'inspection.demoCamera': 'Demo-opname gebruiken',
    'inspection.capturedEvidence': 'Vastgelegd bewijs',
    'inspection.photosReady': '{count} van 8 foto’s klaar voor het dossier.',
    'inspection.cameraOnly': 'Alleen camera',
    'inspection.demoCapture': 'Demo-opname',
    'inspection.captured': 'Vastgelegd',
    'inspection.readyStatus': 'Klaar',
    'inspection.remove': 'Verwijderen',
    'inspection.notesTitle': 'Nog iets om te melden?',
    'inspection.notesText': 'Deel context die niet op de foto’s staat. Optioneel, maar nuttig.',
    'inspection.notesLabel': 'Inspectienotities',
    'inspection.notesPlaceholder': 'Bijvoorbeeld: twee sleutels op het plankje bij de ingang…',
    'inspection.signatureTitle': 'Onderteken de overdracht',
    'inspection.signatureText': 'Je handtekening bevestigt dat je dit intrekdossier hebt gecontroleerd.',
    'inspection.consent': 'Ik bevestig dat deze inspectie de toestand weergeeft waarin ik kamer 4B aantrof.',
    'inspection.reviewTitle': 'Nog één controle',
    'inspection.reviewText': 'Controleer je dossier voordat je het naar de beheerder stuurt.',
    'inspection.areasChecked': 'Onderdelen gecontroleerd',
    'inspection.photosAdded': 'Foto’s toegevoegd',
    'inspection.yes': 'Ja',
    'inspection.no': 'Nee',
    'inspection.signatureReady': 'Handtekening klaar',
    'inspection.noNotes': 'Geen aanvullende notities.',
    'inspection.submitNotice': 'Na verzenden gaat de inspectie naar de beheerder en wordt de link gesloten.',
    'inspection.photoEvidence': 'Fotobewijs dat wordt verzonden',
    'inspection.capturedCount': '{count} vastgelegd',
    'inspection.cameraIncluded': 'Deze camera-opnamen worden met je inzending meegestuurd.',
    'inspection.back': 'Terug',
    'inspection.continue': 'Doorgaan',
    'inspection.sending': 'Verzenden…',
    'inspection.submit': 'Inspectie verzenden',
    'inspection.draw': 'Teken met je vinger of muis.',
    'inspection.undo': 'Ongedaan maken',
    'inspection.clear': 'Wissen',
    'inspection.area.walls': 'Muren',
    'inspection.area.floor': 'Vloer',
    'inspection.area.furniture': 'Meubilair',
    'inspection.area.windows': 'Ramen',
    'og.eyebrow': 'WONINGOVERDRACHTEN',
    'og.headline': 'Helder opleveren. Zeker beslissen.',
    'og.description': 'Eén begeleide inspectie. Eén compleet dossier. Geen losse eindjes.',
    'og.noApp': 'Geen huurdersapp',
    'og.photoFirst': 'Foto’s centraal',
    'og.comparisons': 'Heldere vergelijkingen'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/nav.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navItems",
    ()=>navItems
]);
const navItems = [
    {
        label: 'How it works',
        translationKey: 'nav.how',
        href: '/#how-it-works',
        group: 'primary'
    },
    {
        label: 'Who it’s for',
        translationKey: 'nav.for',
        href: '/#operators',
        group: 'primary'
    },
    {
        label: 'Pricing',
        translationKey: 'nav.pricing',
        href: '/#pricing',
        group: 'primary'
    },
    {
        label: 'Live demo',
        translationKey: 'nav.prototype',
        href: '/operator/inspections',
        group: 'primary'
    },
    {
        label: 'Book a walkthrough',
        translationKey: 'nav.contact',
        href: 'mailto:k3y.fl0ws@gmail.com',
        group: 'secondary'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/site.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteUrl",
    ()=>siteUrl
]);
// Centralized site identity for the SEO metadata routes (robots.ts, sitemap.ts,
// manifest.ts) and the root layout's default Open Graph / Twitter / canonical
// metadata. One source of truth so the OG siteName, the manifest name, and the
// <title> template can't drift apart.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/env.ts [app-client] (ecmascript)");
// Brand identity (name + description) is USER-OWNED — the agent sets it per app
// in src/lib/brand.ts. Re-exported here so the SEO plumbing (layout/manifest) and
// every existing `@/lib/site` import keep a single entry point. `siteUrl` above
// stays framework-owned (it's the deploy origin, not a brand string).
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/brand.ts [app-client] (ecmascript)");
;
const siteUrl = (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000').replace(/\/+$/, '');
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
// shadcn standard cn() helper. Every shadcn primitive imports this.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0gs-jy9._.js.map