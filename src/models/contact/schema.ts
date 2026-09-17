// Runtime contract for the marketing Contact form.
import { z } from 'zod';

export const ContactMessageCreate = z.object({
  name: z.string().max(120).optional(),
  email: z.string().email('Enter a valid email address').max(200),
  message: z
    .string()
    .min(10, 'Add a few words about your handover process')
    .max(2000, 'Keep the message under 2000 characters'),
});
export type ContactMessageCreateType = z.infer<typeof ContactMessageCreate>;

export const ContactMessageResponse = z.object({ sent: z.literal(true) });
export type ContactMessageResponseType = z.infer<typeof ContactMessageResponse>;
