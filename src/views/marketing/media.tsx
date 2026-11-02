import { AmbientVideo } from '@/components/custom/ambient-video';
import { useLanguage } from '@/components/i18n/language-provider';
import {
  type BackgroundVideo,
  backgroundPoster,
  backgroundVideo,
  backgroundVideoPortrait,
} from '@/lib/background-videos';

type FullBleedVideo = 'homeHero' | 'homeOperators' | 'homeStoryCombined';

function useVideoLabels() {
  const { t } = useLanguage();
  return { pause: t('video.pause'), play: t('video.play') };
}

// Full-width footage behind a section. The parent must be `relative isolate`.
// The scrim is what keeps text readable, so every caller sets its own.
export function SectionVideo({
  video,
  scrim,
  playbackRate,
}: {
  video: FullBleedVideo | 'demoComplete';
  scrim: string;
  playbackRate?: number;
}) {
  const controlLabels = useVideoLabels();
  return (
    <>
      <AmbientVideo
        src={backgroundVideo(video)}
        portraitSrc={video === 'demoComplete' ? undefined : backgroundVideoPortrait(video)}
        poster={backgroundPoster(video)}
        playbackRate={playbackRate}
        controlLabels={controlLabels}
        controlClassName="bottom-4 right-4"
        className="pointer-events-none absolute inset-0 -z-20 size-full object-cover object-center"
      />
      <div className={`pointer-events-none absolute inset-0 -z-10 ${scrim}`} />
    </>
  );
}

export function TileVideo({ video }: { video: BackgroundVideo }) {
  const controlLabels = useVideoLabels();
  return (
    <AmbientVideo
      src={backgroundVideo(video)}
      poster={backgroundPoster(video)}
      controlLabels={controlLabels}
      controlClassName="right-3 top-3"
      className="pointer-events-none absolute inset-0 size-full object-cover object-center"
    />
  );
}
