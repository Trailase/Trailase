'use client';

import { toast } from 'sonner';
import { DemoBackground } from '@/components/custom/demo-background';
import { useLanguage } from '@/components/i18n/language-provider';
import { useFlow } from '@/controllers/inspections/useFlow';
import { backgroundVideo } from '@/lib/background-videos';
import { Header, Navigation, Steps } from './tenant/chrome';
import { Condition } from './tenant/condition';
import { Notes } from './tenant/notes';
import { Photos } from './tenant/photos';
import { Review } from './tenant/review';
import { Signing } from './tenant/signing';
import { Complete, Failure, Loading } from './tenant/states';

const cardClass =
  'scroll-reveal overflow-hidden border-brand-200/70 bg-card/95 shadow-xl backdrop-blur dark:border-brand-800';

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
    <main className="demo-layout min-h-[calc(100vh-3.5rem)] bg-background px-gutter py-6 pb-28 md:py-12 md:pb-12">
      <DemoBackground
        framing={
          (['condition', 'photos', 'notes', 'signature', 'review'] as const)[flow.step] ??
          'condition'
        }
        src={backgroundVideo(phaseVideos[flow.step] ?? 'demoCondition')}
      />
      <div className="mx-auto w-full max-w-3xl">
        <Header step={flow.step} total={flow.steps.length} room={room} />
        <Steps step={flow.step} labels={flow.steps} />
        {flow.error && (
          <p
            role="alert"
            className="mb-4 border-l-2 border-destructive bg-destructive/10 px-4 py-3 text-sm text-destructive"
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
            onRemove={(id) =>
              flow.setPhotos((current) => current.filter((photo) => photo.id !== id))
            }
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
      </div>
    </main>
  );
}
