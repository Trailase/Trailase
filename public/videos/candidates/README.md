# Trailase background video candidates

Each of the 15 folders contains ten silent, ten-second, 1280×720 MP4
alternatives. Every candidate now comes from a different source clip: no source
is reused within a category or anywhere else in the library.

The complete source-to-section map lives in `sources.tsv`. Its final column
describes the intended sales-story beat. A source can be opened at:

`https://www.pexels.com/video/{pexels_id}/`

The site currently uses `01.mp4`. Choose any candidate from `1` through `10`
for each section in `src/lib/background-videos.ts`.

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
