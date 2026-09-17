# Contact section — remaining setup

The Contact section now has: a real form (email + message, name optional)
that sends via Resend, a seasonal-timing line, an anonymous founder note
(real story: living across Europe as a digital nomad, a two-month deposit
dispute over wall paint resolved only because of before/after photos), a
"free for your first 10 inspections, no contract" line, and an optional
Cal.com/Calendly link that only renders once `NEXT_PUBLIC_CAL_LINK` is set.
Two things are still outstanding — one setup task, one open decision.

## 1. Resend (email delivery) — see previous setup notes

`POST /api/contact` returns 503 until `RESEND_API_KEY` and `CONTACT_TO_EMAIL`
are set (locally in `.env.local`, and in Railway → service → Variables for
production). Steps:

1. Sign up at resend.com (free tier: 3,000 emails/month, 100/day).
2. No custom domain yet → skip domain setup, use the shared
   `onboarding@resend.dev` sender (already the code's default).
3. Resend → API Keys → Create API Key → copy it (`re_...`).
4. Add to `.env.local` and Railway:
   ```text
   RESEND_API_KEY=re_your_key_here
   CONTACT_TO_EMAIL=k3y.fl0ws@gmail.com
   ```
5. Send a real test submission through the live form before calling this done.

## 2. Cal.com (booking link) — not set up yet

A real calendar with open slots is more persuasive than a form that goes into
a queue — that's the reason for doing this, not just to have a link.

1. Sign up at cal.com (free plan is enough — 1 event type, unlimited
   bookings). Calendly works the same way if preferred; steps below are
   Cal.com-specific.
2. Set your availability (which days/hours you're bookable).
3. Create an event type, e.g. "Trailase walkthrough" (30 min is standard).
4. Cal.com → Availability/Event → copy the public booking link. It looks
   like `https://cal.com/your-username/trailase-walkthrough`.
5. Add it as an env var (public — no API key needed, it's just a link):
   ```text
   NEXT_PUBLIC_CAL_LINK=https://cal.com/your-username/trailase-walkthrough
   ```
   Set it locally in `.env.local` and in Railway → service → Variables. Once
   set, `src/views/marketing/sections/contact.tsx` automatically shows
   "Prefer to talk first? Book a slot on our calendar" under the form — no
   further code change needed.
6. Once it's live, decide whether the calendar link should stay secondary
   (current: form first, calendar as an alternative) or become the primary
   CTA — worth revisiting after seeing which one people actually use.

## Open decision: what "free for your first 10 inspections" means operationally

The copy commits to this now, but nothing enforces it yet — there's no
tracking of who's used how many "free" inspections, no invoicing, no plan
system. That's fine while there's no paying customer yet, but before the
first real signup happens, decide: is this tracked manually for now (fine at
low volume), or does it need to be built into the product before anyone can
actually hit the limit?
