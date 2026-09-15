'use client';

import { useCallback, useEffect, useState } from 'react';
import type { Translate } from '@/lib/i18n';
import {
  type ConditionArea,
  InspectionSubmission,
  type InspectionTenant,
  type PhotoPayload,
} from '@/models/inspections/schema';
import { inspectionClient } from './client';
import { errorMessage, isNotFound } from './error';
import { useCamera } from './useCamera';

export const stepKeys = [
  'inspection.steps.condition',
  'inspection.steps.photos',
  'inspection.steps.notes',
  'inspection.steps.signature',
  'inspection.steps.review',
] as const;

export type FlowStatus =
  | 'loading'
  | 'ready'
  | 'not-found'
  | 'error'
  | 'submitted'
  | 'already-completed';

type Feedback = { success: (message: string) => void; error: (message: string) => void };

export function useFlow(token: string, t: Translate, feedback: Feedback) {
  const [inspection, setInspection] = useState<InspectionTenant | null>(null);
  const [condition, setCondition] = useState<ConditionArea[]>([]);
  const [photos, setPhotos] = useState<PhotoPayload[]>([]);
  const [notes, setNotes] = useState('');
  const [signature, setSignature] = useState('');
  const [consent, setConsent] = useState(false);
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<FlowStatus>('loading');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const camera = useCamera({ active: step === 1, photos, setPhotos, t });
  const steps = stepKeys.map((key) => t(key));

  const load = useCallback(async () => {
    setStatus('loading');
    setError(null);
    try {
      const response = await inspectionClient.getTenant(token);
      setInspection(response);
      setCondition(response.areas);
      setStatus(response.status === 'completed' ? 'already-completed' : 'ready');
    } catch (requestError) {
      if (isNotFound(requestError)) return setStatus('not-found');
      setStatus('error');
      setError(errorMessage(requestError, t('inspection.linkUnavailable')));
    }
  }, [token, t]);

  useEffect(() => void load(), [load]);

  function updateCondition(id: ConditionArea['id'], update: Partial<ConditionArea>) {
    setCondition((current) =>
      current.map((area) => (area.id === id ? { ...area, ...update } : area)),
    );
  }

  function validStep() {
    if (step === 0 && condition.some((area) => !area.status))
      return fail(t('inspection.validation.condition'));
    if (step === 1 && camera.pendingPhoto) {
      camera.setPhotoError(t('inspection.validation.pendingPhoto'));
      return false;
    }
    if (step === 1 && photos.length === 0) {
      camera.setPhotoError(t('inspection.validation.photo'));
      return false;
    }
    if (step === 2 && notes.length > 1200) return fail(t('inspection.validation.notes'));
    if (step === 3 && (!signature || !consent)) return fail(t('inspection.validation.signature'));
    setError(null);
    return true;
  }

  function fail(message: string) {
    setError(message);
    return false;
  }

  function next() {
    if (validStep()) setStep((current) => Math.min(current + 1, steps.length - 1));
  }

  function previous() {
    setError(null);
    setStep((current) => Math.max(current - 1, 0));
  }

  async function submit() {
    if (!validStep()) return;
    setSubmitting(true);
    try {
      const payload = InspectionSubmission.parse({
        condition,
        photos,
        notes,
        signature: { dataUrl: signature, consent },
      });
      await inspectionClient.completeTenant(token, payload);
      setStatus('submitted');
      feedback.success(t('inspection.complete'));
    } catch (requestError) {
      const message = errorMessage(requestError, t('inspection.submitError'));
      if (message.toLowerCase().includes('already been completed')) setStatus('already-completed');
      else feedback.error(message);
    } finally {
      setSubmitting(false);
    }
  }

  return {
    inspection,
    condition,
    photos,
    setPhotos,
    notes,
    setNotes,
    signature,
    setSignature,
    consent,
    setConsent,
    step,
    steps,
    status,
    error,
    submitting,
    camera,
    updateCondition,
    next,
    previous,
    submit,
    retry: load,
  };
}

export type FlowController = ReturnType<typeof useFlow>;
