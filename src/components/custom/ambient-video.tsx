'use client';

import { useEffect, useRef } from 'react';

type AmbientVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  /** Playback speed multiplier: lower than 1 slows the clip down. Defaults to normal speed. */
  playbackRate?: number;
};

export function AmbientVideo({ src, poster, className, playbackRate = 1 }: AmbientVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = playbackRate;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePlayback = (visible: boolean) => {
      if (visible && !reducedMotion.matches) {
        video.playbackRate = playbackRate;
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => updatePlayback(Boolean(entry?.isIntersecting)),
      { rootMargin: '120px 0px' },
    );
    const handleMotionChange = () => updatePlayback(video.getBoundingClientRect().bottom > 0);

    observer.observe(video);
    reducedMotion.addEventListener('change', handleMotionChange);
    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener('change', handleMotionChange);
      video.pause();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      aria-hidden="true"
      className={className}
      loop
      muted
      playsInline
      poster={poster}
      preload="metadata"
      tabIndex={-1}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
