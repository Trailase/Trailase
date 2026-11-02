'use client';

import { Contact } from './sections/contact';
import { Evidence } from './sections/evidence';
import { Faq } from './sections/faq';
import { Founder } from './sections/founder';
import { Hero } from './sections/hero';
import { Operators } from './sections/operators';
import { Pricing } from './sections/pricing';
import { StickyCta } from './sections/sticky-cta';
import { Story } from './sections/story';
import { Trust } from './sections/trust';
import { Workflow } from './sections/workflow';

export function Landing() {
  return (
    <main>
      <Hero />
      <Workflow />
      <Story />
      <Evidence />
      <Operators />
      <Founder />
      <Pricing />
      <Trust />
      <Faq />
      <Contact />
      <StickyCta />
    </main>
  );
}
