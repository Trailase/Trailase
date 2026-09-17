# Trailase background video candidates

Each of the 15 folders contains ten silent, ten-second, 1280×720 MP4
alternatives. Every candidate now comes from a different source clip: no source
is reused within a category or anywhere else in the library.

The complete source-to-section map lives in `sources.tsv`. Its final column
describes the intended sales-story beat. A source can be opened at:

`https://www.pexels.com/video/{pexels_id}/`

The site currently uses `01.mp4`. Choose any candidate from `1` through `10`
for each section in `src/lib/background-videos.ts`.

`home-story-combined` is the exception: it isn't built by the manifest below.
Each variant there is a `-c copy` concatenation of one already-approved clip
each from `home-story-capture`, `home-story-structure`, and
`home-story-compare`, so the Capture → Structure → Compare scroll story plays
as one continuous 30-second clip instead of cutting between three `<video>`
elements. `01.mp4` pairs `capture/01 + structure/01 + compare/01`; `02.mp4`
pairs `capture/03 + structure/02 + compare/04`; `03.mp4` pairs
`capture/05 + structure/06 + compare/03`; `04.mp4` pairs
`capture/07 + structure/04 + compare/07`. No new source footage — all four use
clips already credited in `ATTRIBUTION.md`.

## Visual direction

- `home-hero`: people-free apartment atmosphere and professional presentation.
- `home-workflow`: guided tasks, digital checklists, and repeatable process.
- `home-story-capture`: photographing rooms, belongings, and useful details;
  selfie footage is intentionally excluded.
- `home-story-structure`: files becoming organized, searchable records.
- `home-story-compare`: inspection, measurement, repair, and human review.
- `home-evidence`: confirmations, signatures, and dependable documentation.
- `home-operators`: residential portfolios and multi-building scale.
- `home-contact`: packed boxes and an active move, not packing preparation.
- `demo-operator`: a professional team setting the handover in motion.
- `demo-condition`: room-by-room walkthrough and condition assessment.
- `demo-photos`: field inspection and property documentation, never selfies.
- `demo-notes`: concise written, typed, tablet, and voice context.
- `demo-signature`: explicit approval and lease/document confirmation.
- `demo-review`: cross-checking records and making an informed decision.
- `demo-complete`: keys physically passing between tenant and operator/owner.

The concepts deliberately range beyond literal page copy. Together they tell a
broader sales story about ease, order, accountability, scale, and confidence.

## Rebuilding

Run `./scripts/build-video-candidates.sh`. The script rejects duplicate source
IDs, requires exactly 150 manifest entries, downloads the licensed Pexels
sources, and embeds each source ID into the output file. Existing outputs are
kept only when that embedded ID still matches the manifest, so changing a source
automatically rebuilds the correct candidate.

All footage is used under the Pexels license and is cropped, color-balanced,
muted, compressed for web delivery, and given fast-start metadata.
