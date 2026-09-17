type VideoVariant = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

const groups = {
  homeHero: 'home-hero',
  homeWorkflow: 'home-workflow',
  homeStoryCapture: 'home-story-capture',
  homeStoryStructure: 'home-story-structure',
  homeStoryCompare: 'home-story-compare',
  homeStoryCombined: 'home-story-combined',
  homeEvidence: 'home-evidence',
  homeOperators: 'home-operators',
  homeContact: 'home-contact',
  demoOperator: 'demo-operator',
  demoCondition: 'demo-condition',
  demoPhotos: 'demo-photos',
  demoNotes: 'demo-notes',
  demoSignature: 'demo-signature',
  demoReview: 'demo-review',
  demoComplete: 'demo-complete',
} as const;

export type BackgroundVideo = keyof typeof groups;

// Change any value to 1–10 to select that section's preferred cut.
export const selectedVideoVariants: Record<BackgroundVideo, VideoVariant> = {
  homeHero: 9,
  homeWorkflow: 10,
  homeStoryCapture: 1,
  homeStoryStructure: 1,
  homeStoryCompare: 1,
  homeStoryCombined: 1,
  homeEvidence: 6,
  homeOperators: 1,
  homeContact: 1,
  demoOperator: 1,
  demoCondition: 1,
  demoPhotos: 3,
  demoNotes: 1,
  demoSignature: 1,
  demoReview: 1,
  demoComplete: 3,
};

export function backgroundVideo(key: BackgroundVideo) {
  const variant = String(selectedVideoVariants[key]).padStart(2, '0');
  return `/videos/candidates/${groups[key]}/${variant}.mp4`;
}

// 720x1280 crop of the same source clip, for full-bleed object-cover
// backgrounds. A 1280x720 landscape clip cropped to fill a narrow mobile
// viewport only shows a ~28% center slice of its width; the portrait crop
// keeps the framing recognizable instead. Only built for groups that render
// full-bleed (home-hero, home-operators, home-story-combined and its three
// phase clips) — see scripts/build-video-portrait.sh.
export function backgroundVideoPortrait(key: BackgroundVideo) {
  const variant = String(selectedVideoVariants[key]).padStart(2, '0');
  return `/videos/candidates-portrait/${groups[key]}/${variant}.mp4`;
}
