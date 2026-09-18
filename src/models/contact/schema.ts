// Runtime contract for the marketing Contact form.
import { z } from 'zod';

export const unitsRanges = [
  'up-to-25',
  '26-100',
  '101-300',
  '301-1000',
  '1001-5000',
  '5000-plus',
] as const;

export const ContactMessageCreate = z.object({
  name: z.string().max(120).optional(),
  email: z.string().email('Enter a valid email address').max(200),
  unitsRange: z.enum(unitsRanges).optional(),
  message: z
    .string()
    .min(10, 'Add a few words about your handover process')
    .max(2000, 'Keep the message under 2000 characters'),
});
export type ContactMessageCreateType = z.infer<typeof ContactMessageCreate>;

export const ContactMessageResponse = z.object({ sent: z.literal(true) });
export type ContactMessageResponseType = z.infer<typeof ContactMessageResponse>;
