# Implementation Plan

## Batch 1 — Foundation + Home Page (Clean Start)

- [x] Clean start reset (`fetch`, `checkout -B main origin/main`, `reset --hard`, `clean -fd`)
- [x] Read blueprint and research docs before implementation
- [x] Validate static export config (`next.config.js`)
- [x] Confirm Tailwind brand tokens and global styles
- [x] Build/verify shared layout shell (header, footer, mobile nav)
- [x] Build/verify reusable UI primitives (`Button`, `Card`, `SectionHeading`, `Badge`)
- [x] Build/verify data layer (`locations`, `services`, `faqs`, `testimonials`)
- [x] Build/verify home page sections (hero, locations, services, testimonials, discount, CTA)
- [x] Add placeholder assets in `public/` and placeholder comments in components
- [x] Add robots + baseline sitemap
- [x] Add analytics helper and GA script loader
- [x] Run final verification (`npm run build`, home render check, CTA URL validation)
- [x] Update docs (`CODER-CONTEXT`, `ralph-context`, `UI-VERIFICATION`)
- [x] Commit and push to `origin/main`

## Batch 2 — Interior Pages + SEO

- [x] Read blueprint before implementation
- [x] Build interior routes (`/locations`, `/locations/norterra`, `/locations/peoria`, `/services`, `/booking`, `/contact`, `/faq`)
- [x] Add per-page metadata titles/descriptions from blueprint SEO table
- [x] Add location schema output for detail pages and FAQPage schema on `/faq`
- [x] Add map embeds for locations overview, location detail pages, and contact page
- [x] Add FAQ accordion interactions with analytics `faq_expand` hook
- [x] Add booking selector with Squire links and Peoria fallback TODO notice
- [x] Verify build and route/link/phone CTA checks
- [x] Update docs (`CODER-CONTEXT`, `ralph-context`, `UI-VERIFICATION`, `ENV-VARS`)
- [x] Commit and push to `origin/main`


