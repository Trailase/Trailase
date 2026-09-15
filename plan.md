# Landing page fixes — plan

Feedback from friends: (1) too much background video, page feels noisy/heavy;
(2) CSS positioning breaks on different screen sizes/resolutions, worst on
mobile and when the browser isn't at 100% zoom.

## 1. Video feedback — what I'd do as a UI/UX call

Every one of the 6 marketing sections (`Hero`, `Workflow`, `EvidenceScrollStory`,
`Evidence`, `Operators`, `Contact`) currently mounts its own full-bleed
autoplaying `<AmbientVideo>`. That's 7 video elements in one scroll (the story
section swaps between 3). Nothing on the page is ever *not* moving — video
stops being a signature moment and becomes wallpaper, which is exactly the
"loaded with video" complaint.

**Decision: keep motion only where it's doing narrative work, cut it everywhere
it's decorative.**

- **Keep:** `Hero` (first impression, sets the tone) and `EvidenceScrollStory`
  (the video *is* the product demo — scroll-driven, actually explains the
  feature). These two justify the motion.
- **Remove the background video from:** `Workflow`, `Evidence`, `Operators`,
  `Contact`. These sections are text + cards; the video added nothing but
  weight and visual competition with the copy sitting on top of it. Replace
  with a static tinted gradient (reusing the existing brand palette) so the
  sections still feel designed, not blank.
- Net effect: autoplaying videos drop from 7 to 2 (well, 2-slots, 3 clips
  cycling in the story). Fewer decoders running at once, fewer
  IntersectionObservers, less battery/data use on mobile, and the hero +
  story motion actually stands out because it's no longer competing with
  five other moving backgrounds.
- Leave `AmbientVideo`'s play/pause-on-visibility and `prefers-reduced-motion`
  handling as-is — that logic is correct and should carry over to the demo
  pages (`DemoBackground`) untouched.

## 2. Responsive / positioning bugs to fix

Found by reading the section components + `custom-style.css` and reasoning
through narrow widths, short viewports, and non-100% browser zoom (zoom
shrinks the effective CSS px viewport the same way a small/high-DPI screen
does, so the two bug classes overlap):

- **`EvidenceScrollStory` (`story.tsx` / `.evidence-story*` rules)** — the
  richest and most fragile part of the page:
  - Evidence cards, report card, and comparison cards are positioned with
    hand-tuned pixel offsets (`item.x`, `item.y`, `targetX`/`targetY`) and a
    single `mobileScale` breakpoint at 640px. Between the `sm` (640px) and
    `md` (768px) breakpoints, and on any width Tailwind's `sm:` step doesn't
    directly cover, spacing was eyeballed rather than derived — cards can
    overlap the heading/phase pills or clip at the section edges.
  - The whole stage uses `top-[58%]`/`top-[59%]` percentage anchors inside a
    `sticky` frame whose height is `calc(100dvh - 3.5rem)`. At high browser
    zoom the *CSS* viewport height shrinks a lot (small `dvh`), so `top-58%`
    plus a `330px`–`860px`-tall stage can push content outside the sticky
    frame, or the heading/phase-pill/stage/footnote stack (each absolutely
    positioned) can overlap. There's already a `max-height: 700px` fallback
    that reflows to static layout — good — but the threshold and the
    percentage anchors above it need tightening so the squeeze doesn't start
    visibly breaking before that fallback kicks in.
  - Fix approach: widen the mobile/tablet scale steps (add an intermediate
    `sm`-range scale instead of one 640px cutoff), and lower the
    `max-height` reflow threshold's neighbor so nothing overlaps in the
    zone just above 700px. Verify at 320px, 375px, 768px, 1024px widths and
    at 500-700px viewport heights.

- **`Hero`** — `min-h-[760px]` on the section is a hard floor. On short mobile
  viewports (landscape, or a tall zoom level) this forces scrolling/clipping
  before the fold even makes sense. The `Card` uses `lg:-ml-8`, a negative
  margin that only appears at `lg`; check it doesn't fight the grid gap and
  cause horizontal overflow at exactly the `lg` breakpoint.

- **General overflow safety** — none of the sections currently guard against
  horizontal scroll from decorative absolutely-positioned blur circles
  (`-right-40`, `-left-24`, etc.) escaping the section on narrow viewports.
  `overflow-hidden`/`isolate` is already on the sections, but should confirm
  the body/html don't get a horizontal scrollbar from any element ignoring
  that.

- **Verification plan:** after fixes, check the page at 320/375/390/430
  (mobile widths), 768/834 (tablet), 1280/1440/1920 (desktop), each at
  100% and simulating ~150%/200% zoom (i.e. shrinking the viewport further),
  and at short heights (~560-700px) to confirm the story section's reflow
  fallback and the hero don't clip or overlap text.

## 3. Order of work

1. Strip background video from `Workflow`, `Evidence`, `Operators`, `Contact`;
   swap in static gradient treatment.
2. Fix `EvidenceScrollStory` responsive math (scale steps, breakpoint
   thresholds, overlap at short viewports).
3. Fix `Hero` min-height / negative-margin overflow risk.
4. Sweep remaining sections for stray horizontal-overflow sources.
5. Manually verify in the browser across the widths/heights above.
