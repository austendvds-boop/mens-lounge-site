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

## 2026-03-05 — Batch 2 Retry (push gate repair)

### What changed
- Fixed interior-page copy/metadata rendering glitches introduced by prior encoding drift:
  - Restored punctuation on location metadata titles/descriptions (`·` and `—`) for `/locations/norterra` and `/locations/peoria`.
  - Restored Norterra eyebrow copy to `Norterra — Phoenix`.
  - Corrected broken arrow/link copy on `/locations` and `/faq` (`→`).
  - Updated FAQ metadata punctuation to match blueprint style.
- Re-verified fallback TODO messaging for Peoria booking link remains visible when Peoria URL falls back to Norterra URL.

### Files touched in retry
- `src/app/locations/page.tsx`
- `src/app/locations/norterra/page.tsx`
- `src/app/locations/peoria/page.tsx`
- `src/app/faq/page.tsx`
- `docs/CODER-CONTEXT.md`
- `docs/ralph-context.md`
- `docs/UI-VERIFICATION.md`

### Verification rerun
- `npm run build` passes.
- Confirmed exported routes exist for all required interior pages under `out/`.
- Confirmed booking + phone CTA hrefs in `out/booking/index.html`.
- Confirmed phone + email CTA hrefs in `out/contact/index.html`.
- Confirmed FAQ analytics hook bundle includes `faq_expand` in `out/_next/static/chunks/app/faq/page-*.js`.

## 2026-03-05 — Batch 3 Polish + Deploy Readiness (retry completion)

### What changed
- Added shared social metadata builder (`src/lib/metadata.ts`) and applied it across app routes for OG/Twitter coverage.
- Updated root layout metadata and added hero image preload in `<head>`.
- Added accessibility polish:
  - skip-to-content link in `src/app/layout.tsx`
  - global `:focus-visible` treatment in `src/app/globals.css`
  - improved mobile menu semantics/body scroll lock in `src/components/layout/MobileNav.tsx`
  - accordion keyboard/focus semantics in `src/components/sections/FAQAccordion.tsx`
- Applied performance polish by enforcing lazy loading on below-the-fold `next/image` usage while keeping hero image high-priority.
- Added branded `src/app/not-found.tsx` with Home + Book CTAs.
- Finalized sitemap + robots generation using `next-sitemap`:
  - added `next-sitemap.config.js`
  - updated build script to `next build && next-sitemap`
- Updated deployment/readiness docs:
  - refreshed `docs/UI-VERIFICATION.md` from architect verification spec
  - expanded `README.md` deploy/smoke-test instructions
  - marked Batch 3 tasks complete in `docs/implementation-plan.md`

### Key files touched
- `package.json`
- `next-sitemap.config.js`
- `README.md`
- `docs/UI-VERIFICATION.md`
- `docs/implementation-plan.md`
- `src/lib/metadata.ts`
- `src/app/layout.tsx`
- `src/app/not-found.tsx`
- `src/app/globals.css`
- `src/components/layout/MobileNav.tsx`
- `src/components/sections/FAQAccordion.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/LocationCards.tsx`
- `src/components/sections/ServiceTeaser.tsx`
- `src/app/locations/page.tsx`
- `src/app/locations/norterra/page.tsx`
- `src/app/locations/peoria/page.tsx`
- `src/app/services/page.tsx`
- `src/app/booking/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/faq/page.tsx`

### Verification
- `npm run build` passes clean (Next build + `next-sitemap` generation).
- Internal link sweep across exported HTML passed (no broken internal links).
- CTA assertions passed for major sections (`/`, `/booking`, `/locations`, `/services`) including booking URL + phone links.

## 2026-03-05 — Batch 3 Final Polish + Deploy Readiness

### What changed
- Added shared metadata helper at `src/lib/metadata.ts` and wired all major routes to include canonical, Open Graph, and Twitter card metadata with `public/images/og-image.jpg`.
- Added explicit hero image preload in `src/app/layout.tsx` and ensured Inter uses `display: "swap"`.
- Hardened accessibility:
  - Added global `:focus-visible` outline in `src/app/globals.css`.
  - Improved mobile nav semantics (`aria-expanded`, `aria-controls`, dialog role, Escape to close) in `src/components/layout/MobileNav.tsx`.
  - Kept skip-to-content link in layout and ARIA wiring in FAQ accordion.
- Improved image performance hygiene:
  - Added responsive `sizes` and `loading="lazy"` on non-hero `next/image` usages in home/location card sections.
  - Kept aspect-ratio wrappers for CLS-safe rendering.
- Added branded 404 page at `src/app/not-found.tsx` with Home + Booking CTAs.
- Added sitemap automation:
  - Installed `next-sitemap`.
  - Added `next-sitemap.config.js`.
  - Added `postbuild` script in `package.json` so build generates final `out/robots.txt`, `out/sitemap.xml`, `out/sitemap-0.xml`.
- Replaced `docs/UI-VERIFICATION.md` with the architect-provided verification spec.
- Rewrote `README.md` with project-specific build/deploy steps and smoke-test checklist.
- Updated `docs/implementation-plan.md` with a completed Batch 3 checklist.

### Verification
- `npm run build` passes clean (including `next-sitemap` postbuild generation).
- Internal link crawl across exported HTML: `NO_BROKEN_INTERNAL_LINKS`.
- Booking CTA validation across major routes: `BOOKING_CTA_CHECKS_PASS`.
- Verified generated SEO files in build output:
  - `out/robots.txt`
  - `out/sitemap.xml`
  - `out/sitemap-0.xml` (includes all required routes)


## 2026-03-05 — Batch 1 Hotfix TODO Cleanup + Map Panel Repair

### What changed
- Removed customer-facing internal TODO text from:
  - `src/app/booking/page.tsx`
  - `src/app/locations/peoria/page.tsx`
- Hardened env var fallback handling in `src/lib/constants.ts` so blank map or booking env vars now safely fall back to defaults instead of rendering empty values.
- Updated `MapEmbed` in `src/components/ui/MapEmbed.tsx` to eagerly load maps and allow full-screen mode to prevent blank map panels on affected mobile routes.

### Verification
- `npm run build` passes.
- Local route checks return HTTP 200 for:
  - `/booking`
  - `/locations`
  - `/locations/norterra`
  - `/locations/peoria`
  - `/contact`
- Built output checks pass:
  - no public `TODO` text in booking and Peoria location pages
  - map embed URLs are present in `/locations`, `/locations/norterra`, `/locations/peoria`, and `/contact`

## 2026-03-06 — Batch 1 Motion Design Pass (Homepage + Interior)

### What changed
- Added a shared motion token system in `src/app/globals.css`:
  - `--motion-duration-fast/base/slow`
  - `--motion-ease-standard/soft`
  - `--motion-distance-sm/md`
- Added reusable motion utility classes for maintainable animation behavior:
  - `.motion-link` for subtle nav/link underline motion
  - `.motion-surface` for gentle lift/shadow micro-interactions
  - `.motion-fade-up` for hero intro motion
  - `.motion-reveal` for observer-driven section/card reveals
- Added full `prefers-reduced-motion` support in global CSS so transitions/animations cleanly disable.
- Added a lightweight intersection-observer helper at `src/components/motion/MotionReveal.tsx`.
- Applied motion pass across homepage sections and all required interior routes:
  - Home: `src/app/page.tsx`, `Hero`, `LocationCards`, `ServiceTeaser`, `Testimonials`, `DiscountBanner`, `CTABanner`
  - Interior: `src/app/booking/page.tsx`, `src/app/locations/page.tsx`, `src/app/locations/norterra/page.tsx`, `src/app/locations/peoria/page.tsx`, `src/app/services/page.tsx`, `src/app/contact/page.tsx`, `src/app/faq/page.tsx`
- Added nav and interaction polish to layout/ui components:
  - `src/components/layout/Header.tsx`
  - `src/components/layout/MobileNav.tsx`
  - `src/components/layout/Footer.tsx`
  - `src/components/ui/Button.tsx`
  - `src/components/ui/Card.tsx`
  - `src/components/ui/MapEmbed.tsx`
  - `src/components/sections/FAQAccordion.tsx`

### Decisions / notes
- Stayed CSS-first for performance and smooth mobile behavior.
- Avoided adding any heavy animation library.
- Observer reveal logic only runs when needed and exits once content is visible.

### Verification
- `npm run build` passes clean (Next build + `next-sitemap`).

## 2026-03-06 — Batch 1 V2 Dark/Gold Design Reset + Homepage Rebuild

### What changed
- Replaced the Tailwind design token palette with the V2 dark/gold system (`brand-dark`, `brand-dark-alt`, `brand-gold`, `brand-gold-light`, `brand-cream`, `brand-charcoal`, `brand-slate`).
- Added display typography support with Playfair Display in `layout.tsx` and wired `font-display` / `font-sans` CSS variables through Tailwind.
- Reworked global styles in `src/app/globals.css` for dark surfaces, cream foreground text, gold focus states, and preserved motion utility behavior.
- Rebuilt shared layout + UI primitives for dark mode:
  - `Header`, `Footer`, `MobileNav`
  - `Button`, `Card`, `Badge`, `SectionHeading`, `MapEmbed`
- Rebuilt home composition order in `src/app/page.tsx`:
  1) Hero, 2) LeadCapture, 3) ServiceTeaser, 4) Testimonials, 5) LocationCards, 6) DiscountBanner, 7) CTABanner.
- Added new `LeadCapture` section with static POST form placeholder (`action="#"`, `method="POST"`).
- Restyled all homepage sections to the premium dark/gold visual system while preserving `MotionReveal` usage and stagger timing.

### Files touched
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
- `src/components/sections/LeadCapture.tsx` (new)
- `src/components/sections/ServiceTeaser.tsx`
- `src/components/sections/Testimonials.tsx`
- `src/components/sections/LocationCards.tsx`
- `src/components/sections/DiscountBanner.tsx`
- `src/components/sections/CTABanner.tsx`

### Verification
- `npm run build` passes.
- `npx tsc --noEmit` passes.
- Confirmed no old green/navy utility usage remains in updated design-system/homepage files.
