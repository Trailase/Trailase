// Brand identity. `site.ts` re-exports
// siteName/siteDescription; `manifest.ts` + `opengraph-image.tsx` read `brandVisual`.

export const siteName = 'Trailase';
export const siteDescription =
  'Clear property handovers, guided tenant inspections, and one complete record from move-in to move-out.';

// PWA + social-share colors. HEX only (the oklch() tokens in globals.css aren't
// readable here) — set to match your brand seed.
export const brandVisual = {
  /** PWA browser-UI / status-bar color. */
  themeColor: '#1766ff',
  /** PWA splash + install background. */
  backgroundColor: '#f5f9ff',
  /** Social-share (OG/Twitter) image. */
  og: {
    background: '#031d4f',
    foreground: '#ffffff',
    /** Second line under the site name; '' hides it. */
    tagline: 'Clear handovers. Confident decisions.',
  },
} as const;
