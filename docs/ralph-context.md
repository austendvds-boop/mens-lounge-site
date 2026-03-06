# Ralph Context

## Batch 1 Motion Design Pass — 2026-03-06

### Files created/modified
- `src/app/globals.css`
- `src/components/motion/MotionReveal.tsx`
- `src/app/page.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/LocationCards.tsx`
- `src/components/sections/ServiceTeaser.tsx`
- `src/components/sections/Testimonials.tsx`
- `src/components/sections/DiscountBanner.tsx`
- `src/components/sections/CTABanner.tsx`
- `src/app/booking/page.tsx`
- `src/app/locations/page.tsx`
- `src/app/locations/norterra/page.tsx`
- `src/app/locations/peoria/page.tsx`
- `src/app/services/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/faq/page.tsx`
- `src/components/layout/Header.tsx`
- `src/components/layout/MobileNav.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/ui/Button.tsx`
- `src/components/ui/Card.tsx`
- `src/components/ui/MapEmbed.tsx`
- `src/components/sections/FAQAccordion.tsx`

### Key exports
- `MotionReveal` from `src/components/motion/MotionReveal.tsx`
- Motion utility classes/tokens in `src/app/globals.css` (`motion-link`, `motion-surface`, `motion-fade-up`, `motion-reveal`)

### Gotchas for next batch
- Keep motion behavior CSS-first and preserve reduced-motion fallbacks.
- Preserve existing `CSSProperties` delay typing where reveal delays are inlined.

## Batch 1 V2 Dark/Gold Design Reset + Homepage Rebuild — 2026-03-06

### Files created/modified
- `tailwind.config.ts`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/app/page.tsx`
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/MobileNav.tsx`
- `src/components/ui/Button.tsx`
- `src/components/ui/Card.tsx`
- `src/components/ui/Badge.tsx`
- `src/components/ui/SectionHeading.tsx`
- `src/components/ui/MapEmbed.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/LeadCapture.tsx`
- `src/components/sections/ServiceTeaser.tsx`
- `src/components/sections/Testimonials.tsx`
- `src/components/sections/LocationCards.tsx`
- `src/components/sections/DiscountBanner.tsx`
- `src/components/sections/CTABanner.tsx`

### Key exports
- `LeadCapture` from `src/components/sections/LeadCapture.tsx`
- Updated design token usage through Tailwind theme + `font-display` typography support

### Gotchas for next batch
- Keep dark/gold token usage consistent; avoid reintroducing legacy navy/green classes.
- Hero remains high-priority image section; preserve performance/a11y behavior.

## Batch 0 Critical Fixes + Hero Copy — 2026-03-06

### Files created/modified
- `src/components/sections/Hero.tsx`
- `docs/ralph-context.md`

### Key exports
- No new exports.
- Updated `Hero` section copy and responsive heading scale only.

### Gotchas for next batch
- Hero heading sizing now uses `text-3xl sm:text-4xl md:text-5xl lg:text-7xl`; keep this to avoid 375px over-wrapping.
- Confirmed `next.config.js` still includes `images: { unoptimized: true }` for static export compatibility.
