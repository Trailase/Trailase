# Marketing image candidates

Five/three/three alternative background stills for the sections that use a
static image instead of a background video. Source credits are in
`ATTRIBUTION.md`. All are 1280×720, color-treated to match the rest of the
site.

## How to use

Workflow, Evidence, and Contact currently render with no background image
(plain `bg-background`, matching Contact's original look). Preview a
candidate at `/marketing/candidates/<name>.jpg` in the dev server; to bring
one back as a section background, copy it into `public/marketing/section-<name>.jpg`
and add a `next/image fill` background to that section the way `workflow.tsx`
and `evidence.tsx` used to (see git history).

## Visual direction

- **Workflow** — digital checklists and guided task planning; hands and tablets
  only, no faces.
- **Evidence** — reviewing and comparing records side by side; documents,
  laptops, and reports, no faces.
- **Contact** — closing-CTA mood: residential scale, a key handover, and a
  move in progress; no faces.
