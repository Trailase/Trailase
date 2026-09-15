// Runtime contracts shared by inspection controllers, services, and views.
import { z } from 'zod';

const imageDataUrl = (label: string, maxLength: number) =>
  z
    .string()
    .min(1, `${label} is required`)
    .max(maxLength, `${label} is too large`)
    .refine(
      (value) => value.startsWith('data:image/'),
      `${label} must be an encoded image preview`,
    );

export const InspectionStatus = z.enum(['pending', 'completed']);
export const ConditionValue = z.enum(['good', 'attention', 'damage']);

export const ConditionArea = z.object({
  id: z.enum(['entryway', 'living-room', 'kitchen', 'bathroom', 'bedroom']),
  label: z.string().min(1).max(80),
  status: ConditionValue,
  note: z.string().max(240, 'Keep each note under 240 characters'),
});

export const PhotoPayload = z.object({
  id: z.string().min(1).max(80),
  filename: z.string().min(1).max(120),
  dataUrl: imageDataUrl('Photo', 600_000),
  capturedAt: z.string().datetime(),
});

export const SignaturePayload = z.object({
  dataUrl: imageDataUrl('Signature', 500_000),
  consent: z.literal(true, { invalid_type_error: 'Signature consent is required' }),
});

export const InspectionCreate = z.object({
  roomLabel: z.literal('Room 4B'),
});

export const InspectionTenant = z.object({
  id: z.string(),
  roomLabel: z.literal('Room 4B'),
  status: InspectionStatus,
  createdAt: z.string().datetime(),
  areas: z.array(ConditionArea).length(5),
});

export const InspectionSubmission = z.object({
  condition: z.array(ConditionArea).length(5),
  photos: z
    .array(PhotoPayload)
    .min(1, 'Add at least one photo')
    .max(8, 'Add no more than 8 photos'),
  notes: z.string().max(1_200, 'Keep notes under 1,200 characters'),
  signature: SignaturePayload,
});

export const InspectionOperatorItem = z.object({
  id: z.string(),
  roomLabel: z.literal('Room 4B'),
  status: InspectionStatus,
  createdAt: z.string().datetime(),
  completedAt: z.string().datetime().nullable(),
  photoCount: z.number().int().nonnegative().max(8),
  shareUrl: z.string().url(),
});

export const InspectionOperatorList = z.object({
  items: z.array(InspectionOperatorItem),
});

export const InspectionCreateResponse = InspectionOperatorItem;

export const InspectionCompletion = z.object({
  id: z.string(),
  status: z.literal('completed'),
  completedAt: z.string().datetime(),
});

export const InspectionDeletion = z.object({
  id: z.string(),
  deleted: z.literal(true),
});

export type ConditionArea = z.infer<typeof ConditionArea>;
export type ConditionValue = z.infer<typeof ConditionValue>;
export type InspectionStatus = z.infer<typeof InspectionStatus>;
export type PhotoPayload = z.infer<typeof PhotoPayload>;
export type SignaturePayload = z.infer<typeof SignaturePayload>;
export type InspectionCreate = z.infer<typeof InspectionCreate>;
export type InspectionTenant = z.infer<typeof InspectionTenant>;
export type InspectionSubmission = z.infer<typeof InspectionSubmission>;
export type InspectionOperatorItem = z.infer<typeof InspectionOperatorItem>;
export type InspectionOperatorList = z.infer<typeof InspectionOperatorList>;
export type InspectionCreateResponse = z.infer<typeof InspectionCreateResponse>;
export type InspectionCompletion = z.infer<typeof InspectionCompletion>;
export type InspectionDeletion = z.infer<typeof InspectionDeletion>;
