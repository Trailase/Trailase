// /manifest.webmanifest — colors come from `brandVisual` in src/lib/brand.ts; set them there.
import type { MetadataRoute } from 'next';
import { brandVisual } from '@/lib/brand';
import { siteDescription, siteName } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: siteName,
    description: siteDescription,
    start_url: '/',
    display: 'standalone',
    background_color: brandVisual.backgroundColor,
    theme_color: brandVisual.themeColor,
    icons: [{ src: '/brand/mark.png', type: 'image/png', sizes: '1254x1254' }],
  };
}
