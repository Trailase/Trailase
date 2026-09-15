import { apiFetch } from '@/lib/api-client';
import {
  InspectionCompletion,
  type InspectionCreate,
  InspectionCreateResponse,
  InspectionDeletion,
  InspectionOperatorList,
  type InspectionSubmission,
  InspectionTenant,
} from '@/models/inspections/schema';

export const inspectionClient = {
  listOperator: () =>
    apiFetch('/api/operator/inspections', {
      schema: InspectionOperatorList,
    }),

  createOperator: (input: InspectionCreate) =>
    apiFetch('/api/operator/inspections', {
      method: 'POST',
      body: JSON.stringify(input),
      schema: InspectionCreateResponse,
    }),

  deleteOperator: (id: string) =>
    apiFetch(`/api/operator/inspections?id=${encodeURIComponent(id)}`, {
      method: 'DELETE',
      schema: InspectionDeletion,
    }),

  getTenant: (token: string) =>
    apiFetch(`/api/tenant/inspections?token=${encodeURIComponent(token)}`, {
      schema: InspectionTenant,
    }),

  completeTenant: (token: string, submission: InspectionSubmission) =>
    apiFetch(`/api/tenant/inspections?token=${encodeURIComponent(token)}`, {
      method: 'PATCH',
      body: JSON.stringify(submission),
      schema: InspectionCompletion,
    }),
};
