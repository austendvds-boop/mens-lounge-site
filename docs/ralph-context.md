# Ralph Context

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

## Batch 0 Critical Fixes + Hero Copy — Retry Commit/Verification — 2026-03-06

### Files created/modified
- `docs/ralph-context.md`

### Key exports
- No new exports.
- Verified `src/components/sections/Hero.tsx` already contains:
  - Headline: `Where Phoenix men get their edge back.`
  - Subhead: `Classic cuts, hot towel shaves, and precision beard work — at two Valley locations.`
  - Heading classes: `font-display text-3xl font-bold leading-tight text-brand-cream sm:text-4xl md:text-5xl lg:text-7xl`
- Verified `next.config.js` still contains `images: { unoptimized: true }`.

### Gotchas for next batch
- Keep the responsive hero heading scale as-is to prevent extra wrapping on 375px-width screens.
- For Windows builds, if `next build` throws transient `.next\server\pages\_app.js.nft.json` ENOENT, clear `.next` and rerun build.
