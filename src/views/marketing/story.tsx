// Scroll-driven marketing view for the inspection evidence story.
'use client';

import {
  AlertCircle,
  Camera,
  Check,
  ClipboardList,
  FileCheck2,
  Gauge,
  KeyRound,
  PenLine,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { AmbientVideo } from '@/components/custom/ambient-video';
import { useLanguage } from '@/components/i18n/language-provider';
import { backgroundVideo, backgroundVideoPortrait } from '@/lib/background-videos';

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const range = (value: number, start: number, end: number) => clamp((value - start) / (end - start));
const smooth = (value: number) => value * value * (3 - 2 * value);

// A single clip covering all three phases back-to-back, so it plays through
// continuously instead of the old approach of swapping between three
// separate <video src> elements, which caused a visible cut/reload at each
// phase boundary.
const storyVideo = backgroundVideo('homeStoryCombined');
const storyVideoPortrait = backgroundVideoPortrait('homeStoryCombined');

const evidence = [
  { key: 'story.photos', value: '12', icon: Camera, x: -330, y: -160, rotate: -7 },
  { key: 'story.damage', value: '1', icon: AlertCircle, x: 325, y: -155, rotate: 6 },
  { key: 'story.inventory', value: '8', icon: ClipboardList, x: -355, y: 45, rotate: 5 },
  { key: 'story.meter', value: '048239', icon: Gauge, x: 350, y: 30, rotate: -5 },
  { key: 'story.keys', value: '5', icon: KeyRound, x: -275, y: 205, rotate: -4 },
  { key: 'story.signed', value: '✓', icon: PenLine, x: 290, y: 205, rotate: 7 },
] as const;

export function EvidenceScrollStory() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const evidenceRefs = useRef<Array<HTMLDivElement | null>>([]);
  const reportRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const phaseRef = useRef(0);
  const noteRef = useRef(false);
  const [activePhase, setActivePhase] = useState(0);
  const [showEvidenceNote, setShowEvidenceNote] = useState(false);

  useEffect(() => {
    // Keep in sync with the `(max-height: 760px)` reflow breakpoint in
    // custom-style.css: this is the JS half that drives the same threshold's
    // scroll-progress math.
    const shortViewportMedia = window.matchMedia('(max-height: 760px)');

    const update = () => {
      frameRef.current = null;
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const shortViewport = shortViewportMedia.matches;
      const distance = Math.max(
        1,
        shortViewport ? rect.height + window.innerHeight : rect.height - window.innerHeight,
      );
      // Reduced-motion is a presentation preference, not a request to disable
      // the story. Keeping progress tied to the document scroll also avoids a
      // common Android failure mode where every Chromium-based browser inherits
      // the device's "Remove animations" setting and the story gets frozen.
      const progress = clamp(
        shortViewport ? (window.innerHeight - rect.top) / distance : -rect.top / distance,
      );
      const assemble = smooth(range(progress, 0.08, 0.48));
      const compare = smooth(range(progress, 0.6, 0.94));
      const evidenceOpacity = 1 - smooth(range(progress, 0.45, 0.64));
      const reportOpacity = smooth(range(progress, 0.24, 0.48));
      // Card size is fixed (138px below the sm breakpoint), so scaling only
      // the assembled *position* by a single 0.42 step still let cards clip
      // on the narrowest phones (~320-360px), where the section's
      // `overflow-hidden` was cutting off the outer edge. Interpolate the
      // scale continuously below 640px instead of a single step, anchored so
      // 375px-wide phones (the common baseline) keep the original 0.42 feel.
      const mobileScale =
        window.innerWidth >= 640
          ? 1
          : clamp(range(window.innerWidth, 320, 375)) * 0.1 + 0.32;

      evidenceRefs.current.forEach((node, index) => {
        const item = evidence[index];
        if (!node || !item) return;
        const x = item.x * mobileScale * (1 - assemble);
        const y = item.y * mobileScale * (1 - assemble);
        const targetX = ((index % 2) * 2 - 1) * (mobileScale === 1 ? 118 : 63);
        const targetY = (Math.floor(index / 2) - 1) * (mobileScale === 1 ? 64 : 50);
        node.style.opacity = String(evidenceOpacity);
        node.style.transform = `translate3d(calc(-50% + ${x + targetX * assemble}px), calc(-50% + ${y + targetY * assemble}px), 0) rotate(${item.rotate * (1 - assemble)}deg) scale(${0.93 + assemble * 0.07})`;
      });

      if (reportRef.current) {
        reportRef.current.style.opacity = String(reportOpacity * (1 - compare));
        reportRef.current.style.transform = `translate3d(-50%, -50%, 0) scale(${0.82 + reportOpacity * 0.18 - compare * 0.08})`;
      }
      if (comparisonRef.current) {
        comparisonRef.current.style.opacity = String(compare);
        comparisonRef.current.style.transform = `translate3d(-50%, -50%, 0) scale(${0.9 + compare * 0.1})`;
      }
      const nextPhase = Math.min(2, Math.floor(progress * 3.05));
      if (nextPhase !== phaseRef.current) {
        phaseRef.current = nextPhase;
        setActivePhase(nextPhase);
      }
      const nextNote = compare > 0.55;
      if (nextNote !== noteRef.current) {
        noteRef.current = nextNote;
        setShowEvidenceNote(nextNote);
      }
    };
    const requestUpdate = () => {
      if (frameRef.current === null) frameRef.current = window.requestAnimationFrame(update);
    };
    const addMediaListener = (media: MediaQueryList) => {
      if (typeof media.addEventListener === 'function') {
        media.addEventListener('change', requestUpdate);
      } else {
        media.addListener(requestUpdate);
      }
    };
    const removeMediaListener = (media: MediaQueryList) => {
      if (typeof media.removeEventListener === 'function') {
        media.removeEventListener('change', requestUpdate);
      } else {
        media.removeListener(requestUpdate);
      }
    };

    update();
    addMediaListener(shortViewportMedia);
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    window.visualViewport?.addEventListener('resize', requestUpdate);
    return () => {
      removeMediaListener(shortViewportMedia);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      window.visualViewport?.removeEventListener('resize', requestUpdate);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <section
      id="evidence-story"
      ref={sectionRef}
      className="evidence-story relative min-h-[1300px] bg-[#eef7ff] text-[#031d4f] transition-colors duration-300 dark:bg-[#03142f] dark:text-white md:min-h-[1500px]"
      aria-labelledby="evidence-story-title"
    >
      <div className="evidence-story-frame sticky top-14 flex min-h-0 items-center overflow-hidden sm:min-h-[650px]">
        <AmbientVideo
          src={storyVideo}
          portraitSrc={storyVideoPortrait}
          className="pointer-events-none absolute inset-0 size-full object-cover object-center motion-reduce:hidden"
        />
        <div className="video-overlay-story absolute inset-0" />
        <div className="absolute inset-x-0 top-0 h-px bg-brand-300/50 dark:bg-white/10" />

        <div className="evidence-story-layout relative mx-auto h-full w-full max-w-[var(--container-page)] px-gutter">
          <div className="evidence-story-heading absolute inset-x-gutter top-7 z-30 text-center md:top-10">
            <p className="text-caption font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-200">
              {t('story.eyebrow')}
            </p>
            <h2
              id="evidence-story-title"
              className="mx-auto mt-3 max-w-3xl font-display text-[clamp(2rem,4vw,3.7rem)] font-semibold leading-[1.04] tracking-[-0.04em]"
            >
              {t('story.title')}
            </h2>
          </div>

          <div className="evidence-story-phases absolute inset-x-gutter top-[27%] z-20 mx-auto flex max-w-2xl justify-center gap-2 md:top-[25%]">
            {[
              t('story.phase.scattered'),
              t('story.phase.structured'),
              t('story.phase.comparison'),
            ].map((label, index) => {
              const active = activePhase === index;
              return (
                <span
                  key={label}
                  className={`rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 sm:text-xs ${
                    active
                      ? 'border-brand-500 bg-brand-500 text-white shadow-brand dark:border-brand-300 dark:bg-brand-400 dark:text-[#071126]'
                      : 'border-brand-200 bg-white/55 text-brand-800 dark:border-white/15 dark:bg-white/[0.04] dark:text-white/45'
                  }`}
                >
                  {label}
                </span>
              );
            })}
          </div>

          <div className="evidence-story-stage absolute left-1/2 top-[58%] h-[330px] w-[min(330px,90vw)] sm:h-[390px] sm:w-[620px] md:top-[59%] md:h-[430px] md:w-[860px]">
            {evidence.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  ref={(node) => {
                    evidenceRefs.current[index] = node;
                  }}
                  key={item.key}
                  className="absolute left-1/2 top-1/2 z-20 flex w-[138px] items-center gap-3 rounded-xl border border-brand-200/80 bg-white/95 p-3 text-foreground opacity-0 shadow-lg will-change-[transform,opacity] dark:border-white/15 dark:bg-[#121e3a]/95 dark:text-white sm:w-[168px] sm:bg-white/90 sm:p-4 sm:shadow-2xl sm:backdrop-blur-xl dark:sm:bg-[#121e3a]/92"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-100 text-brand-700 dark:bg-brand-400/15 dark:text-brand-200">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <span>
                    <strong className="block text-sm text-foreground dark:text-white">
                      {item.value}
                    </strong>
                    <span className="mt-0.5 block text-[10px] leading-4 text-muted-foreground dark:text-white/55 sm:text-xs">
                      {t(item.key)}
                    </span>
                  </span>
                </div>
              );
            })}

            <div
              ref={reportRef}
              className="absolute left-1/2 top-1/2 z-10 w-[260px] overflow-hidden rounded-2xl border border-border bg-card text-card-foreground opacity-0 shadow-lg will-change-[transform,opacity] dark:border-white/15 sm:w-[330px] sm:shadow-[0_30px_100px_rgba(44,61,120,.24)] dark:sm:shadow-[0_30px_100px_rgba(0,0,0,.5)]"
            >
              <div className="flex items-center justify-between border-b border-border p-4 sm:p-5">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                    {t('story.report')}
                  </p>
                  <p className="mt-1 text-lg font-semibold">Room 4B</p>
                </div>
                <span className="grid size-9 place-items-center rounded-full bg-[#e2f8ed] text-[#16704a]">
                  <FileCheck2 className="size-4" aria-hidden />
                </span>
              </div>
              <div className="grid grid-cols-2 gap-px bg-border">
                {evidence.slice(0, 4).map((item) => (
                  <div key={item.key} className="bg-card p-3 sm:p-4">
                    <p className="font-semibold">{item.value}</p>
                    <p className="mt-1 text-[9px] text-muted-foreground sm:text-[10px]">
                      {t(item.key)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 bg-amber-50 p-3 text-[10px] font-medium text-amber-900 dark:bg-amber-950/35 dark:text-amber-200 sm:p-4 sm:text-xs">
                <AlertCircle className="size-4 shrink-0" aria-hidden />
                {t('story.damageNote')}
              </div>
            </div>

            <div
              ref={comparisonRef}
              className="absolute left-1/2 top-1/2 z-30 grid w-[308px] grid-cols-2 gap-2 opacity-0 will-change-[transform,opacity] sm:w-[610px] sm:gap-4"
            >
              {[
                { title: t('story.moveIn'), date: '03 Sep 2026', mark: false },
                { title: t('story.moveOut'), date: '30 Jun 2027', mark: true },
              ].map((card) => (
                <div
                  key={card.title}
                  className="overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-lg dark:border-white/15 sm:shadow-2xl"
                >
                  <div className="relative aspect-[1.3/1] overflow-hidden sm:aspect-[1.55/1]">
                    <Image
                      src="/trailase-inspection-evidence.jpg"
                      alt=""
                      fill
                      sizes="300px"
                      className={`object-cover ${card.mark ? 'object-[62%_center]' : 'object-[38%_center]'}`}
                    />
                    {card.mark ? (
                      <span className="absolute right-[22%] top-[28%] size-10 rounded-full border-2 border-amber-300 bg-amber-300/20 shadow-[0_0_0_5px_rgba(251,191,36,.15)] sm:size-14" />
                    ) : null}
                  </div>
                  <div className="p-3 sm:p-5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs font-semibold sm:text-base">{card.title}</p>
                        <p className="mt-1 text-[9px] text-muted-foreground sm:text-xs">
                          {card.date}
                        </p>
                      </div>
                      {card.mark ? (
                        <span className="rounded-full bg-amber-100 px-2 py-1 text-[8px] font-bold text-amber-900 dark:bg-amber-950/50 dark:text-amber-200 sm:text-[10px]">
                          {t('story.potentialChange')}
                        </span>
                      ) : (
                        <Check className="size-4 text-[#16704a]" aria-hidden />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="evidence-story-note absolute inset-x-gutter bottom-8 mx-auto max-w-xl text-center text-sm leading-6 text-muted-foreground dark:text-white/65 md:bottom-10 md:text-base">
            {showEvidenceNote ? t('story.evidenceNote') : t('story.intro')}
          </p>
        </div>
      </div>
    </section>
  );
}
