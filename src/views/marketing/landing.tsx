'use client';

import { Contact } from './sections/contact';
import { Evidence } from './sections/evidence';
import { Hero } from './sections/hero';
import { Operators } from './sections/operators';
import { Pricing } from './sections/pricing';
import { Trust } from './sections/trust';
import { Workflow } from './sections/workflow';
import { EvidenceScrollStory } from './story';

export function Landing() {
  return (
    <main>
      <Hero />
      <Workflow />
      <EvidenceScrollStory />
      <Evidence />
      <Operators />
      <Pricing />
      <Trust />
      <Contact />
    </main>
  );
}
