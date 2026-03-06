# Ralph Context

## Batch 1 Structure Overhaul — 2026-03-06

### Files created/modified
- `src/app/page.tsx`
- `src/components/sections/TrustBar.tsx` (new)
- `src/components/sections/LeadCapture.tsx`
- `src/components/layout/Header.tsx`
- `src/components/layout/MobileNav.tsx`
- `src/components/ui/SectionHeading.tsx`
- `docs/ralph-context.md`

### Key exports
- Added new section export: `TrustBar` from `src/components/sections/TrustBar.tsx`.
- Home page section order now renders as: `Hero → TrustBar → ServiceCards → Testimonials → LocationCards → LeadCapture → CTABanner`.
- Removed `DiscountBanner` from homepage composition.

### Gotchas for next batch
- `SectionHeading` eyebrow text now renders with `eyebrow.toLowerCase()` and `fontVariant: 'small-caps'`; pass plain words/phrases (not intentional mixed-case branding) for predictable display.
- Keep `LeadCapture` button label unchanged for now (`Claim My Discount`) per batch boundary; CTA/button copy updates are deferred to B2.

## Batch 2 Component Polish — 2026-03-06

### Files created/modified
- `src/components/sections/ServiceCards.tsx`
- `src/components/sections/Testimonials.tsx`
- `src/components/ui/Button.tsx`
- `src/components/sections/LeadCapture.tsx`
- `src/components/sections/CTABanner.tsx`
- `docs/ralph-context.md`

### Key exports
- No new exports.
- `Testimonials` now renders:
  - aggregate review stat under the section heading,
  - featured pull-quote from `testimonials[0]`,
  - supporting cards from `testimonials.slice(1, 4)`.

### Gotchas for next batch
- Testimonials intentionally skip the last dataset item (`testimonials[4]`) in the 3-card grid; if all five are needed later, adjust slice logic.
- Shared `Button` component now uses `rounded-md`; check any remaining one-off buttons for visual consistency if more sections are restyled.

## Batch 3 Booking Simplification + Mobile Spacing — 2026-03-06

### Files created/modified
- `src/app/booking/page.tsx`
- `src/components/sections/ServiceCards.tsx`
- `src/components/sections/Testimonials.tsx`
- `src/components/sections/LocationCards.tsx`
- `src/components/sections/LeadCapture.tsx`
- `src/components/sections/Hero.tsx`
- `docs/ralph-context.md`

### Key exports
- No new exports.
- Booking page no longer renders `CTABanner`; location cards and walk-in notice remain unchanged.
- Updated section spacing tokens:
  - `ServiceCards`, `Testimonials`, `LocationCards`: `py-16 md:py-24`
  - `LeadCapture`: `py-16 md:py-20`
  - `Hero`: `py-32 md:py-40`

### Gotchas for next batch
- `MobileNav` close-on-tap behavior is still intact for all nav links and the booking button (`onClick={() => setIsOpen(false)}` present); no changes were required.
- Build/export currently passes with `out/index.html` at 71,711 bytes; if future visual edits reduce payload, keep index output above the >10KB verification threshold used in this batch.
