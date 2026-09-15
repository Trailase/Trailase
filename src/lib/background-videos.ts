type VideoVariant = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

const groups = {
  homeHero: 'home-hero',
  homeWorkflow: 'home-workflow',
  homeStoryCapture: 'home-story-capture',
  homeStoryStructure: 'home-story-structure',
  homeStoryCompare: 'home-story-compare',
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
  homeHero: 1,
  homeWorkflow: 1,
  homeStoryCapture: 1,
  homeStoryStructure: 1,
  homeStoryCompare: 1,
  homeEvidence: 1,
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
