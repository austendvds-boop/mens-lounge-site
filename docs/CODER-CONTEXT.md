# Coder Context

## 2026-03-05 ï¿½ Batch 1 Foundation

### What changed
- Scaffolded a brand-new Next.js 14 App Router + TypeScript + Tailwind project.
- Configured static export for Vercel (`output: "export"`, unoptimized images, trailing slash).
- Added brand design tokens (navy, gold, cream, charcoal, slate, CTA green) in Tailwind config.
- Built foundational layout and home page sections with reusable UI primitives.
- Added structured data component for local business schema on the home page.
- Added analytics helper plus GA script loader that no-ops when GA env var is missing.
- Added placeholder logo and Unsplash placeholder images for hero, service, and location cards.
- Added `robots.txt` and a baseline `sitemap.xml`.

### Key files touched
- `next.config.js`
- `tailwind.config.ts`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`
- `src/components/layout/*`
- `src/components/ui/*`
- `src/components/sections/*`
- `src/components/seo/LocalBusinessSchema.tsx`
- `src/components/analytics/GoogleAnalytics.tsx`
- `src/data/locations.ts`
- `src/data/services.ts`
- `src/data/faqs.ts`
- `src/data/testimonials.ts`
- `src/lib/constants.ts`
- `src/lib/analytics.ts`
- `public/images/*`
- `public/robots.txt`
- `public/sitemap.xml`

### Decisions / notes
- Primary booking CTA uses Norterra Squire URL globally by default.
- Peoria booking URL supports env override and falls back to Norterra if not set.
- FAQ section on home currently surfaces the first four questions as a quick pre-booking friction reducer.

### Build status
- `npm run build` passes in this batch.

## 2026-03-05 â€” Batch 1 Retry + Git Remote Repair

### What changed
- Fixed `SectionHeading` prop compatibility so sections using `description` and `centered` build correctly.
- Corrected visible UI text issues:
  - Restored testimonial star row to `â˜…â˜…â˜…â˜…â˜…`.
  - Updated service teaser link copy to `Learn More â†’`.
  - Escaped apostrophes that were tripping lint in hero/footer copy.
- Verified home page response over local dev server (`http://localhost:3050`) and confirmed booking + phone CTA hrefs are present.
- Repaired GitHub remote setup by creating and wiring `origin` to the project repo.

### Files touched in retry
- `src/components/ui/SectionHeading.tsx`
- `src/components/sections/ServiceTeaser.tsx`
- `src/components/sections/Testimonials.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/layout/Footer.tsx`
- `docs/CODER-CONTEXT.md`
- `docs/ralph-context.md`
- `docs/UI-VERIFICATION.md`

### Verification notes
- `npm run build` passes after retry fixes.
- `GET /` on local dev returned `200`.
- Booking URL appears in rendered home HTML and tel links for both locations are present.

### Git notes
- `origin` now points at: `https://github.com/austendvds-boop/mens-lounge-site.git`
- Branch normalized to `main`.
- Commit pushed to `origin/main` with message: `feat: mens lounge site foundation + home page`.

## 2026-03-05 â€” Batch 1 Clean-Start Rebuild (Subagent pass)

### What changed
- Ran the required clean-start reset against `origin/main` (`fetch`, `checkout -B`, `reset --hard`, `clean -fd`) before implementation.
- Revalidated and tightened foundation config for static export and brand token consistency.
- Expanded `locations` data structure with schema-ready fields (postal code, coordinates, structured hours, schema naming).
- Updated Local Business JSON-LD output to include full `@graph` entries for both locations with opening hours, geo coordinates, and social profile.
- Enforced the required primary booking URL across all home-page booking CTAs.
- Replaced irrelevant placeholder photography with barbershop-specific placeholders and added new location placeholder SVG assets.
- Added task checklist at `docs/implementation-plan.md`.

### Files touched
- `src/lib/constants.ts`
- `src/data/locations.ts`
- `src/components/seo/LocalBusinessSchema.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/LocationCards.tsx`
- `src/components/sections/ServiceTeaser.tsx`
- `public/images/hero/barbershop-interior-01.jpg`
- `public/images/hero/barber-tools-detail-01.jpg`
- `public/images/services/haircut-fade.jpg`
- `public/images/services/hot-towel-shave.jpg`
- `public/images/services/beard-trim.jpg`
- `public/images/services/kids-cut.jpg`
- `public/images/locations/norterra-placeholder.svg`
- `public/images/locations/peoria-placeholder.svg`
- `docs/implementation-plan.md`

### Verification
- `npm run build` passes.
- Local home route verification against dev server (`http://127.0.0.1:3050/`) returned status `200`.
- Verified rendered home HTML includes:
  - Primary booking URL: `https://getsquire.com/booking/book/mens-lounge-barbershop-norterra-phoenix`
  - Norterra phone link: `tel:+16235563193`
  - Peoria phone link: `tel:+16234409412`

## 2026-03-05 — Batch 2 Interior Pages + SEO

### What changed
- Implemented all interior routes:
  - `/locations`
  - `/locations/norterra`
  - `/locations/peoria`
  - `/services`
  - `/booking`
  - `/contact`
  - `/faq`
- Added per-page metadata for every interior page using the blueprint titles/descriptions.
- Added map embeds for locations overview, both location detail pages, and contact page.
- Extended `LocalBusinessSchema` to support single-location output, then applied it on Norterra and Peoria pages.
- Added FAQ accordion interaction tracking (`faq_expand`) with a dedicated client accordion component.
- Added booking selector cards with tracked booking buttons and clear Peoria fallback TODO copy.
- Updated global nav links (header/mobile/footer) to point to interior routes.
- Added reusable `MapEmbed` and `TrackedButton` components for cleaner page composition.

### Key files touched
- `src/app/locations/page.tsx`
- `src/app/locations/norterra/page.tsx`
- `src/app/locations/peoria/page.tsx`
- `src/app/services/page.tsx`
- `src/app/booking/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/faq/page.tsx`
- `src/components/sections/FAQAccordion.tsx`
- `src/components/ui/MapEmbed.tsx`
- `src/components/analytics/TrackedButton.tsx`
- `src/components/seo/LocalBusinessSchema.tsx`
- `src/components/layout/Header.tsx`
- `src/components/layout/MobileNav.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/CTABanner.tsx`
- `src/data/locations.ts`
- `src/lib/constants.ts`
- `docs/implementation-plan.md`

### Verification
- `npm run build` passes.
- Static route checks confirmed all required interior routes render in `out/`.
- Verified booking link and both phone CTA links in built `/booking` output.
- Verified both phone and email CTA links in built `/contact` output.

