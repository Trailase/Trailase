'use client';

import { Contact } from './sections/contact';
import { Evidence } from './sections/evidence';
import { Hero } from './sections/hero';
import { Operators } from './sections/operators';
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
      <Contact />
    </main>
  );
}
