'use client';

import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import type { Translate } from '@/lib/i18n';
import type { PhotoPayload } from '@/models/inspections/schema';

export type CameraStatus = 'idle' | 'requesting' | 'ready' | 'preview' | 'unavailable';

function cameraErrorKey(error: unknown) {
  const name =
    error && typeof error === 'object' && 'name' in error && typeof error.name === 'string'
      ? error.name
      : '';
  if (name === 'NotAllowedError' || name === 'SecurityError')
    return 'inspection.cameraPermissionDenied';
  if (name === 'NotFoundError' || name === 'DevicesNotFoundError')
    return 'inspection.cameraNotFound';
  if (name === 'NotReadableError' || name === 'TrackStartError') return 'inspection.cameraBusy';
  if (name === 'TypeError') return 'inspection.cameraUnsupported';
  return 'inspection.cameraRequestFailed';
}

type Options = {
  active: boolean;
  photos: PhotoPayload[];
  setPhotos: Dispatch<SetStateAction<PhotoPayload[]>>;
  t: Translate;
};

export function useCamera({ active, photos, setPhotos, t }: Options) {
  const [status, setStatus] = useState<CameraStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const [pendingPhoto, setPendingPhoto] = useState<PhotoPayload | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const stop = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => {
      track.stop();
    });
    streamRef.current = null;
    if (videoRef.current) videoRef.current.srcObject = null;
  }, []);

  useEffect(() => {
    if (!active) {
      stop();
      setStatus('idle');
      setPendingPhoto(null);
    }
  }, [active, stop]);
  useEffect(() => () => stop(), [stop]);

  function guardLimit() {
    if (photos.length < 8) return false;
    setPhotoError(t('inspection.photoLimit'));
    return true;
  }

  async function open() {
    setPhotoError(null);
    setError(null);
    if (guardLimit()) return;
    if (!navigator.mediaDevices?.getUserMedia) {
      setStatus('unavailable');
      setError(t('inspection.cameraUnsupported'));
      return;
    }
    stop();
    setStatus('requesting');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
        audio: false,
      });
      if (!active) {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
        return;
      }
      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
      streamRef.current = stream;
      if (!videoRef.current) throw new Error('Camera preview unavailable');
      videoRef.current.srcObject = stream;
      await videoRef.current.play();
      setStatus('ready');
    } catch (requestError) {
      stop();
      setStatus('unavailable');
      setError(t(cameraErrorKey(requestError)));
    }
  }

  function capture() {
    setPhotoError(null);
    if (guardLimit()) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || video.videoWidth === 0 || video.videoHeight === 0) {
      setStatus('unavailable');
      setError(t('inspection.cameraNotReady'));
      return stop();
    }
    const scale = Math.min(1, 1280 / video.videoWidth, 960 / video.videoHeight);
    canvas.width = Math.max(1, Math.round(video.videoWidth * scale));
    canvas.height = Math.max(1, Math.round(video.videoHeight * scale));
    const context = canvas.getContext('2d');
    if (!context) return setError(t('inspection.cameraPhotoFailed'));
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    let dataUrl = '';
    for (const quality of [0.72, 0.6, 0.48, 0.36]) {
      dataUrl = canvas.toDataURL('image/jpeg', quality);
      if (dataUrl.length <= 560_000) break;
    }
    if (!dataUrl || dataUrl.length > 600_000) {
      setStatus('unavailable');
      setError(t('inspection.photoTooLarge'));
      return stop();
    }
    setPendingPhoto(createPhoto(dataUrl, 'camera'));
    stop();
    setStatus('preview');
  }

  function demo() {
    setPhotoError(null);
    setError(null);
    if (guardLimit() || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const styles = getComputedStyle(document.documentElement);
    canvas.width = 960;
    canvas.height = 720;
    const context = canvas.getContext('2d');
    if (!context) return;
    context.fillStyle = styles.getPropertyValue('--brand-50').trim() || 'Canvas';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = styles.getPropertyValue('--brand-600').trim() || 'Highlight';
    context.fillRect(0, 0, canvas.width, 92);
    context.font = '600 34px sans-serif';
    context.fillStyle = styles.getPropertyValue('--foreground').trim() || 'CanvasText';
    context.fillText(t('inspection.demoCanvasTitle'), 48, 58);
    context.strokeStyle = styles.getPropertyValue('--brand-600').trim() || 'Highlight';
    context.lineWidth = 8;
    context.strokeRect(112, 174, 736, 388);
    context.font = '500 30px sans-serif';
    context.fillText(t('inspection.demoCanvasCaption'), 174, 648);
    setPendingPhoto(createPhoto(canvas.toDataURL('image/jpeg', 0.72), 'demo-camera'));
    setStatus('preview');
  }

  function accept() {
    if (!pendingPhoto || guardLimit()) return;
    setPhotos((current) => [...current, pendingPhoto]);
    setPendingPhoto(null);
    setStatus('idle');
  }

  function retake() {
    setPendingPhoto(null);
    setError(null);
    setPhotoError(null);
    setStatus('idle');
  }

  return {
    status,
    error,
    photoError,
    setPhotoError,
    pendingPhoto,
    videoRef,
    canvasRef,
    open,
    capture,
    demo,
    accept,
    retake,
  };
}

function createPhoto(dataUrl: string, prefix: string): PhotoPayload {
  const capturedAt = new Date().toISOString();
  return {
    id: crypto.randomUUID(),
    filename: `${prefix}-${capturedAt.replaceAll(':', '-').replace('.', '-')}.jpg`,
    dataUrl,
    capturedAt,
  };
}
