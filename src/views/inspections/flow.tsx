'use client';

import { toast } from 'sonner';
import { useLanguage } from '@/components/i18n/language-provider';
import { useFlow } from '@/controllers/inspections/useFlow';
import { DemoLayout } from './layout';
import { Header, Navigation, revealMessage, Steps } from './tenant/chrome';
import { Condition } from './tenant/condition';
import { Notes } from './tenant/notes';
import { Photos } from './tenant/photos';
import { Review } from './tenant/review';
import { Signing } from './tenant/signing';
import { Complete, Failure, Loading } from './tenant/states';

const cardClass = 'overflow-hidden rounded-2xl border-border bg-card shadow-sm';

const phaseVideos = [
  'demoCondition',
  'demoPhotos',
  'demoNotes',
  'demoSignature',
  'demoReview',
] as const;

export function InspectionFlow({ token }: { token: string }) {
  const { t } = useLanguage();
  const flow = useFlow(token, t, toast);
  if (flow.status === 'loading') return <Loading />;
  if (flow.status === 'not-found' || flow.status === 'error') {
    return <Failure error={flow.error} retry={() => void flow.retry()} />;
  }
  const room = flow.inspection?.roomLabel ?? '';
  if (flow.status === 'submitted' || flow.status === 'already-completed') {
    return <Complete status={flow.status} room={room} />;
  }

  return (
    <DemoLayout video={phaseVideos[flow.step] ?? 'demoCondition'} intro={<Header room={room} />}>
      <Steps step={flow.step} labels={flow.steps} />
      {flow.error && (
        <p
          ref={revealMessage}
          role="alert"
          className="mb-4 rounded-xl border-l-2 border-destructive bg-destructive/10 px-4 py-3 text-sm text-destructive"
        >
          {flow.error}
        </p>
      )}
      {flow.step === 0 && (
        <Condition areas={flow.condition} onChange={flow.updateCondition} className={cardClass} />
      )}
      {flow.step === 1 && (
        <Photos
          photos={flow.photos}
          pending={flow.camera.pendingPhoto}
          status={flow.camera.status}
          error={flow.camera.error}
          photoError={flow.camera.photoError}
          videoRef={flow.camera.videoRef}
          canvasRef={flow.camera.canvasRef}
          className={cardClass}
          onOpen={() => void flow.camera.open()}
          onCapture={flow.camera.capture}
          onDemo={flow.camera.demo}
          onAccept={flow.camera.accept}
          onRetake={flow.camera.retake}
          onRemove={(id) => flow.setPhotos((current) => current.filter((photo) => photo.id !== id))}
        />
      )}
      {flow.step === 2 && (
        <Notes value={flow.notes} onChange={flow.setNotes} className={cardClass} />
      )}
      {flow.step === 3 && (
        <Signing
          signature={flow.signature}
          consent={flow.consent}
          onSignature={flow.setSignature}
          onConsent={flow.setConsent}
          room={room}
          className={cardClass}
        />
      )}
      {flow.step === 4 && (
        <Review
          condition={flow.condition}
          photos={flow.photos}
          notes={flow.notes}
          signed={Boolean(flow.signature)}
          className={cardClass}
        />
      )}
      <Navigation
        step={flow.step}
        total={flow.steps.length}
        submitting={flow.submitting}
        previous={flow.previous}
        next={flow.next}
        submit={() => void flow.submit()}
      />
    </DemoLayout>
  );
}
