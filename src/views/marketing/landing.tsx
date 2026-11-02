'use client';

import { Contact } from './sections/contact';
import { Evidence } from './sections/evidence';
import { Faq } from './sections/faq';
import { Founder } from './sections/founder';
import { Hero } from './sections/hero';
import { Pricing } from './sections/pricing';
import { StickyCta } from './sections/sticky-cta';
import { Trust } from './sections/trust';
import { Workflow } from './sections/workflow';

export function Landing() {
  return (
    <main>
      <Hero />
      <Workflow />
      <Evidence />
      <Founder />
      <Pricing />
      <Trust />
      <Faq />
      <Contact />
      <StickyCta />
    </main>
  );
}
