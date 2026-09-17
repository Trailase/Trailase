# Marketing image candidates

Five/three/three alternative background stills for the sections that use a
static image instead of a background video. Source credits are in
`ATTRIBUTION.md`. All are 1280×720, color-treated to match the rest of the
site.

## How to use

Preview a candidate at `/marketing/candidates/<name>.jpg` in the dev server,
then promote your pick by copying it over the live asset:

```sh
cp public/marketing/candidates/workflow-03.jpg public/marketing/section-workflow.jpg
cp public/marketing/candidates/evidence-02.jpg public/marketing/section-evidence.jpg
```

The Contact section (`src/views/marketing/sections/contact.tsx`) currently has
no background image. To use one of the `contact-*.jpg` candidates, copy it to
`public/marketing/section-contact.jpg` and add a `next/image` background the
same way `workflow.tsx` and `evidence.tsx` already do.

## Visual direction

- **Workflow** — digital checklists and guided task planning; hands and tablets
  only, no faces.
- **Evidence** — reviewing and comparing records side by side; documents,
  laptops, and reports, no faces.
- **Contact** — closing-CTA mood: residential scale, a key handover, and a
  move in progress; no faces.
