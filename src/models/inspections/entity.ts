import type {
  ConditionArea,
  InspectionCreate,
  InspectionStatus,
  InspectionSubmission,
} from './schema';

export type InspectionRecord = {
  id: string;
  token: string;
  ownerSessionId: string;
  roomLabel: InspectionCreate['roomLabel'];
  status: InspectionStatus;
  createdAt: string;
  completedAt: string | null;
  areas: ConditionArea[];
  photos: InspectionSubmission['photos'];
  notes: string;
  signature: InspectionSubmission['signature'] | null;
};

export const defaultInspectionAreas = (): ConditionArea[] => [
  { id: 'entryway', label: 'Entryway & keys', status: 'good', note: '' },
  { id: 'living-room', label: 'Living room', status: 'good', note: '' },
  { id: 'kitchen', label: 'Kitchen', status: 'good', note: '' },
  { id: 'bathroom', label: 'Bathroom', status: 'good', note: '' },
  { id: 'bedroom', label: 'Bedroom', status: 'good', note: '' },
];
