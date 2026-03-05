# Coder Context

## 2026-03-05 � Batch 1 Foundation

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

## 2026-03-05 — Batch 1 Retry + Git Remote Repair

### What changed
- Fixed `SectionHeading` prop compatibility so sections using `description` and `centered` build correctly.
- Corrected visible UI text issues:
  - Restored testimonial star row to `★★★★★`.
  - Updated service teaser link copy to `Learn More →`.
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
