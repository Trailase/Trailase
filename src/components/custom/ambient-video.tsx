'use client';

import { useEffect, useRef, useState } from 'react';

type AmbientVideoProps = {
  src: string;
  /** 720x1280 crop of the same clip, swapped in below the `sm` (640px) breakpoint. */
  portraitSrc?: string;
  poster?: string;
  className?: string;
  /** Playback speed multiplier: lower than 1 slows the clip down. Defaults to normal speed. */
  playbackRate?: number;
};

export function AmbientVideo({
  src,
  portraitSrc,
  poster,
  className,
  playbackRate = 1,
}: AmbientVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeSrc, setActiveSrc] = useState(src);

  // Portrait viewports get a dedicated 9:16 crop instead of relying on
  // object-cover, which would blow up a 16:9 clip until only a ~28% center
  // slice of its width is visible.
  useEffect(() => {
    if (!portraitSrc) {
      setActiveSrc(src);
      return;
    }
    const portraitMedia = window.matchMedia('(max-width: 640px)');
    const update = () => setActiveSrc(portraitMedia.matches ? portraitSrc : src);
    update();
    portraitMedia.addEventListener('change', update);
    return () => portraitMedia.removeEventListener('change', update);
  }, [src, portraitSrc]);

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
  }, [playbackRate]);

  // Swapping the <source> alone doesn't reload the element; force it, then
  // resume playback the same way the intersection observer above would.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    video.playbackRate = playbackRate;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!reducedMotion.matches && video.getBoundingClientRect().bottom > 0) {
      void video.play().catch(() => undefined);
    }
  }, [activeSrc, playbackRate]);

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
      <source src={activeSrc} type="video/mp4" />
    </video>
  );
}
