import type { ReactNode } from 'react';
import { AmbientVideo } from '@/components/custom/ambient-video';
import { useLanguage } from '@/components/i18n/language-provider';
import { type BackgroundVideo, backgroundPoster, backgroundVideo } from '@/lib/background-videos';
import { cn } from '@/lib/utils';

// The clips are landscape and this panel crops them, so keep each subject in frame.
const framing: Partial<Record<BackgroundVideo, string>> = {
  demoCondition: 'object-[55%_center]',
  demoPhotos: 'object-[30%_center]',
  demoNotes: 'object-[45%_center]',
  demoReview: 'object-[42%_center]',
};

export function DemoLayout({
  video,
  intro,
  children,
}: {
  video: BackgroundVideo;
  intro?: ReactNode;
  children: ReactNode;
}) {
  const { t } = useLanguage();
  return (
    <main className="min-h-[calc(100dvh-3.5rem)] bg-background lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <aside className="relative isolate flex min-h-48 flex-col justify-end overflow-hidden bg-brand-navy px-gutter pb-6 pt-20 text-white sm:min-h-64 lg:sticky lg:top-14 lg:h-[calc(100dvh-3.5rem)] lg:self-start lg:p-10">
        <AmbientVideo
          key={video}
          src={backgroundVideo(video)}
          poster={backgroundPoster(video)}
          controlLabels={{ pause: t('video.pause'), play: t('video.play') }}
          controlClassName="right-4 top-4"
          className={cn(
            'pointer-events-none absolute inset-0 -z-20 size-full object-cover',
            framing[video],
          )}
        />
        {intro && (
          <>
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-brand-navy/90 via-brand-navy/70 via-80% to-brand-navy/10 lg:from-brand-navy/95 lg:via-35% lg:to-transparent lg:to-70%" />
            {intro}
          </>
        )}
      </aside>
      <div className="min-w-0 px-gutter py-6 md:py-10">
        <div className="mx-auto w-full max-w-2xl">{children}</div>
      </div>
    </main>
  );
}
