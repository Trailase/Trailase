import 'server-only';
import { inspectionService } from '@/controllers/inspections/container';
import { env } from '@/lib/env';
import { isAdminAuthenticated, isAdminConfigured } from '@/lib/require-admin';

// Everything the /admin page needs. Unauthenticated callers get no data at all,
// only whether the login form can work.
export async function loadAdminPage() {
  if (!(await isAdminAuthenticated())) {
    return { authenticated: false as const, configured: isAdminConfigured() };
  }

  return {
    authenticated: true as const,
    stats: inspectionService.stats(),
    system: {
      nodeVersion: process.version,
      environment: env.NODE_ENV,
      appUrl: env.NEXT_PUBLIC_APP_URL,
      uptimeSeconds: Math.round(process.uptime()),
      contactEmail: Boolean(env.RESEND_API_KEY && env.CONTACT_TO_EMAIL),
      bookingLink: Boolean(env.NEXT_PUBLIC_CAL_LINK),
      indexable: process.env.SEO_INDEXABLE === 'true',
    },
  };
}
