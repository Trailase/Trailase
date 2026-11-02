// Marketing sections render full-bleed with object-cover, so they need a
// portrait crop (see backgroundVideoPortrait) — the demo flow's videos use
// object-contain instead and never crop, so they don't need one.
const marketingVideos = {
  homeHero: 'hero',
  homeOperators: 'operators',
  homeStoryCombined: 'evidenceStory',
} as const;

const demoVideos = {
  demoOperator: 'operator',
  demoCondition: 'condition',
  demoPhotos: 'photos',
  demoNotes: 'notes',
  demoSignature: 'signature',
  demoReview: 'review',
  demoComplete: 'complete',
} as const;

type MarketingVideo = keyof typeof marketingVideos;
export type BackgroundVideo = MarketingVideo | keyof typeof demoVideos;

function isMarketingVideo(key: BackgroundVideo): key is MarketingVideo {
  return key in marketingVideos;
}

export function backgroundPoster(key: BackgroundVideo): string {
  const name = isMarketingVideo(key) ? marketingVideos[key] : demoVideos[key];
  return `/images/posters/${name}.jpg`;
}

export function backgroundVideo(key: BackgroundVideo): string {
  if (isMarketingVideo(key)) {
    return `/videos/marketing/${marketingVideos[key]}.mp4`;
  }
  return `/videos/demo/${demoVideos[key]}.mp4`;
}

// 720x1280 crop of the same clip, for full-bleed object-cover backgrounds. A
// 1280x720 landscape clip cropped to fill a narrow mobile viewport only shows
// a ~28% center slice of its width; the portrait crop keeps the framing
// recognizable instead. See scripts/build-video-portrait.sh.
export function backgroundVideoPortrait(key: MarketingVideo): string {
  return `/videos/marketing/${marketingVideos[key]}Portrait.mp4`;
}
