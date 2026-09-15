import Image from 'next/image';
import type { RefObject } from 'react';
import { useLanguage } from '@/components/i18n/language-provider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { CameraStatus } from '@/controllers/inspections/useCamera';
import type { PhotoPayload } from '@/models/inspections/schema';

type Props = {
  photos: PhotoPayload[];
  pending: PhotoPayload | null;
  status: CameraStatus;
  error: string | null;
  photoError: string | null;
  videoRef: RefObject<HTMLVideoElement | null>;
  canvasRef: RefObject<HTMLCanvasElement | null>;
  className: string;
  onOpen: () => void;
  onCapture: () => void;
  onDemo: () => void;
  onAccept: () => void;
  onRetake: () => void;
  onRemove: (id: string) => void;
};

export function Photos(props: Props) {
  const { t } = useLanguage();
  return (
    <Card className={props.className}>
      <CardHeader>
        <CardTitle className="font-display text-h3 tracking-tight">
          {t('inspection.photosTitle')}
        </CardTitle>
        <CardDescription>{t('inspection.photosText')}</CardDescription>
      </CardHeader>
      <CardContent>
        {props.status === 'idle' && <Idle count={props.photos.length} open={props.onOpen} />}
        {(props.status === 'requesting' || props.status === 'ready') && (
          <Camera status={props.status} videoRef={props.videoRef} capture={props.onCapture} />
        )}
        {props.status === 'preview' && props.pending && (
          <Preview photo={props.pending} accept={props.onAccept} retake={props.onRetake} />
        )}
        {props.status === 'unavailable' && (
          <Unavailable error={props.error} retry={props.onOpen} demo={props.onDemo} />
        )}
        <canvas ref={props.canvasRef} className="hidden" />
        {props.photoError && (
          <p role="alert" className="mt-3 text-sm text-destructive">
            {props.photoError}
          </p>
        )}
        {props.photos.length > 0 && <Gallery photos={props.photos} remove={props.onRemove} />}
      </CardContent>
    </Card>
  );
}

function Idle({ count, open }: { count: number; open: () => void }) {
  const { t } = useLanguage();
  return (
    <div className="border border-brand-300 bg-brand-50/60 p-5 dark:border-brand-700 dark:bg-brand-900/20">
      <p className="text-sm font-semibold">{t('inspection.ready')}</p>
      <p className="mt-1 text-sm text-muted-foreground">{t('inspection.cameraText')}</p>
      <Button
        type="button"
        className="mt-5 h-12 w-full rounded-sm sm:w-auto sm:px-8"
        onClick={open}
        disabled={count >= 8}
      >
        {count >= 8 ? t('inspection.photosCaptured8') : t('inspection.openCamera')}
      </Button>
    </div>
  );
}

function Camera({
  status,
  videoRef,
  capture,
}: {
  status: CameraStatus;
  videoRef: RefObject<HTMLVideoElement | null>;
  capture: () => void;
}) {
  const { t } = useLanguage();
  return (
    <div className="border-2 border-foreground bg-foreground p-2 shadow-xl">
      <div className="relative overflow-hidden bg-foreground">
        <video
          ref={videoRef}
          aria-label={t('inspection.livePreviewAria')}
          autoPlay
          muted
          playsInline
          className="aspect-[4/3] w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-5 border border-background/70 sm:inset-8" />
      </div>
      <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-3">
        {status === 'requesting' ? (
          <>
            <p className="text-xs text-background/70">{t('inspection.openingCamera')}</p>
            <p className="text-xs text-background/70">{t('inspection.allowCamera')}</p>
          </>
        ) : (
          <>
            <p className="text-xs text-background/70">{t('inspection.livePreview')}</p>
            <Button
              type="button"
              variant="secondary"
              className="h-11 rounded-sm px-5"
              onClick={capture}
            >
              {t('inspection.takePhoto')}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

function Preview({
  photo,
  accept,
  retake,
}: {
  photo: PhotoPayload;
  accept: () => void;
  retake: () => void;
}) {
  const { t } = useLanguage();
  return (
    <div className="border border-brand-300 bg-brand-50/50 p-3 dark:border-brand-700 dark:bg-brand-900/15">
      <div className="overflow-hidden border-2 border-foreground bg-foreground p-2">
        <Image
          src={photo.dataUrl}
          alt={t('inspection.photoPreviewAlt')}
          width={960}
          height={720}
          unoptimized
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold">{t('inspection.photoPreview')}</p>
          <p className="mt-1 text-xs text-muted-foreground">{t('inspection.previewText')}</p>
        </div>
        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            className="h-11 flex-1 rounded-sm sm:flex-none"
            onClick={retake}
          >
            {t('inspection.retake')}
          </Button>
          <Button type="button" className="h-11 flex-1 rounded-sm sm:flex-none" onClick={accept}>
            {t('inspection.usePhoto')}
          </Button>
        </div>
      </div>
    </div>
  );
}

function Unavailable({
  error,
  retry,
  demo,
}: {
  error: string | null;
  retry: () => void;
  demo: () => void;
}) {
  const { t } = useLanguage();
  return (
    <div className="border-l-2 border-destructive bg-destructive/10 p-4" role="alert">
      <p className="text-sm font-semibold">{t('inspection.cameraUnavailable')}</p>
      <p className="mt-1 text-sm text-muted-foreground">{error ?? t('inspection.cameraFailed')}</p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <Button type="button" variant="outline" className="h-11 rounded-sm" onClick={retry}>
          {t('inspection.cameraAgain')}
        </Button>
        <Button type="button" variant="secondary" className="h-11 rounded-sm" onClick={demo}>
          {t('inspection.demoCamera')}
        </Button>
      </div>
    </div>
  );
}

function Gallery({ photos, remove }: { photos: PhotoPayload[]; remove: (id: string) => void }) {
  const { t } = useLanguage();
  return (
    <div className="mt-7 border-t border-border pt-5">
      <div className="flex items-baseline justify-between gap-3">
        <div>
          <p className="text-sm font-semibold">{t('inspection.capturedEvidence')}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            {t('inspection.photosReady', { count: photos.length })}
          </p>
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-700 dark:text-brand-300">
          {t('inspection.cameraOnly')}
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} remove={() => remove(photo.id)} />
        ))}
      </div>
    </div>
  );
}

function Photo({ photo, remove }: { photo: PhotoPayload; remove: () => void }) {
  const { t } = useLanguage();
  const demo = photo.filename.startsWith('demo-camera-');
  return (
    <div className="relative border border-border bg-muted/30 p-2">
      <Image
        src={photo.dataUrl}
        alt={demo ? t('inspection.demoPhotoAlt') : t('inspection.capturedPhotoAlt')}
        width={320}
        height={200}
        unoptimized
        className="aspect-[4/3] w-full object-cover"
      />
      <div className="mt-2 flex items-center justify-between gap-2">
        <Badge variant="outline" className="rounded-sm px-1.5 py-0 text-[10px]">
          {demo ? t('inspection.demoCapture') : t('inspection.captured')}
        </Badge>
        <span className="text-[10px] text-muted-foreground">{t('inspection.readyStatus')}</span>
      </div>
      <Button
        type="button"
        variant="secondary"
        size="sm"
        className="mt-2 w-full rounded-sm"
        onClick={remove}
      >
        {t('inspection.remove')}
      </Button>
    </div>
  );
}
