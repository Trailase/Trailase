// Central Next.js and security configuration.

import type { NextConfig } from 'next';
import './src/lib/env';
import { buildPermissionsPolicy } from './src/lib/permissions-policy';

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    localPatterns: [{ pathname: '/**', search: '' }],
    dangerouslyAllowLocalIP: false,
    qualities: [75],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: buildPermissionsPolicy({ camera: true }),
          },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
        ],
      },
    ];
  },
};
export default nextConfig;
