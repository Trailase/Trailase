// /robots.txt — standard Next 16 metadata route. Indexing is OPT-IN: only a
// deploy that sets SEO_INDEXABLE=true (the production deploy) is crawlable.
// Previews, staging, and local builds leave it unset and return Disallow: / so
// non-production deploys are never indexed. NODE_ENV is intentionally NOT the
// signal — `next build` sets NODE_ENV=production for preview builds too, so it
// can't tell a preview from prod; an explicit env can. Fail-closed: an
// unconfigured deploy is hidden from search, not accidentally indexed.
import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';

const indexable = process.env.SEO_INDEXABLE === 'true';

export default function robots(): MetadataRoute.Robots {
  if (!indexable) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
