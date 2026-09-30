// Optional environment configuration. Both Trailase prototypes run without an
// env file; Railway supplies its public domain to the production launcher.

import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    // Contact form email delivery (see src/models/contact/service.ts). Optional:
    // without these the form reports itself as unavailable and the UI falls
    // back to the mailto link instead of pretending to send anything.
    RESEND_API_KEY: z.string().optional(),
    CONTACT_TO_EMAIL: z.string().email().optional(),
    CONTACT_FROM_EMAIL: z.string().optional(),
    // /admin login (see src/lib/require-admin.ts). Optional: until BOTH are set
    // the admin page stays locked and nobody can sign in.
    ADMIN_USERNAME: z.string().min(1).optional(),
    ADMIN_PASSWORD: z.string().min(8).optional(),
  },

  client: {
    NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
    // Base for @/lib/api-client + proxy.ts connect-src. Default-empty
    // (unset) means same-origin `/api`; set only for an external API origin.
    NEXT_PUBLIC_API_URL: z.string().url().optional(),
    // Public Cal.com/Calendly booking link (see contact.tsx). Optional: unset
    // means no calendar link renders, only the contact form.
    NEXT_PUBLIC_CAL_LINK: z.string().url().optional(),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
    CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
    ADMIN_USERNAME: process.env.ADMIN_USERNAME,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_CAL_LINK: process.env.NEXT_PUBLIC_CAL_LINK,
  },
  emptyStringAsUndefined: true,
  // Kept for compatibility with the production Docker build.
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
