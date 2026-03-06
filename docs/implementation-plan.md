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

## Batch 3 — Polish + Deploy Readiness

- [x] Read blueprint + UI verification spec before final pass
- [x] Add shared OG/social metadata helper and wire into all major routes
- [x] Add skip link, focus-visible styles, and mobile-nav accessibility refinements
- [x] Apply performance polish (hero preload, lazy loaded below-fold images, CLS-safe image sizing)
- [x] Add branded 404 page (`src/app/not-found.tsx`)
- [x] Finalize sitemap/robots generation with `next-sitemap`
- [x] Create/update `docs/UI-VERIFICATION.md` from architect spec
- [x] Update README deploy instructions and smoke-test checklist
- [x] Run verification (`npm run build`, internal link checks, booking CTA checks)
- [x] Update docs (`CODER-CONTEXT`, `ralph-context`) and push `origin/main`

## Batch 3 — Final Polish + Deploy Readiness

- [x] Add reusable page metadata helper with OG + Twitter social cards
- [x] Wire all major routes to shared metadata helper
- [x] Add social image and hero preload
- [x] Improve accessibility (skip link, mobile nav ARIA states/dialog semantics, FAQ ARIA IDs)
- [x] Improve image loading strategy (lazy + responsive sizes + CLS-safe wrappers)
- [x] Add branded `not-found.tsx` page
- [x] Add `next-sitemap` and configure sitemap/robots generation
- [x] Replace docs/UI-VERIFICATION.md with architect verification spec
- [x] Update README with deploy + verification steps
- [x] Run verification (`npm run build`, internal link crawl, booking CTA checks)
- [x] Update docs (`CODER-CONTEXT`, `ralph-context`, `implementation-plan`)
- [x] Commit and push to `origin/main`



## Batch 1 — Hotfix TODO Cleanup + Map Panel Fixes

- [x] Remove customer-facing TODO/internal placeholder text from `/booking` and `/locations/peoria`
- [x] Repair map panel rendering on `/locations`, `/locations/norterra`, `/locations/peoria`, and `/contact`
- [x] Keep all customer-facing copy plain and customer-safe
- [x] Run build and required route checks
- [x] Commit and push to `origin/main`
- [x] Verify production deployment status and smoke-check affected routes

## Batch 1 — Motion Design Pass (Homepage + Interior)

- [x] Add shared motion token system (durations, easing, distances) in global styles
- [x] Add lightweight intersection-observer reveal utility with reduced-motion handling
- [x] Apply subtle hero intro motion and staggered section/card reveals on home page
- [x] Apply subtle reveal + interaction motion on interior routes (`/booking`, `/locations`, `/locations/norterra`, `/locations/peoria`, `/services`, `/contact`, `/faq`)
- [x] Add premium micro-interactions for nav links, cards, buttons, and mobile menu controls
- [x] Respect `prefers-reduced-motion` across animations/transforms/transitions
- [x] Verify build passes (`npm run build`)
- [x] Commit and push to `origin/main`
- [x] Verify production deployment READY and smoke-check required routes

## Batch 1 — Visual System + Homepage Conversion Revamp (V2)

- [x] Read all required references (`docs/V2-BLUEPRINT.md`, `docs/UI-VERIFICATION.md`, creative brief, `docs/ralph-context.md`)
- [x] Replace foundation tokens with dark/gold V2 system in Tailwind + globals
- [x] Upgrade typography to Inter + Playfair pairing
- [x] Replace CTA variants to gold-first hierarchy and remove green CTA usage
- [x] Implement transparent-to-solid header behavior and simplify nav (desktop + mobile)
- [x] Add `LeadCapture` section and wire first-visit offer form endpoint fallback
- [x] Replace `ServiceTeaser` with `ServiceCards` and update homepage order
- [x] Update homepage conversion sections (`Hero`, `Testimonials`, `LocationCards`, `DiscountBanner`, `CTABanner`)
- [x] Reduce featured services to 3 and update copy tone
- [x] Run verification (`npm run build`, homepage desktop+mobile screenshots, scroll-header behavior check)
- [x] Commit and push to `origin/main`

## Batch 2 — Interior Pages Premium Redesign (V2 Alignment Retry)

- [x] Restyle `/services` to full dark/gold premium system (cards, tables, prices, CTA copy)
- [x] Restyle `/booking` cards and walk-in panel to dark/gold surfaces
- [x] Restyle `/locations`, `/locations/norterra`, `/locations/peoria` to dark/gold cards, links, and hours tables
- [x] Restyle `/contact` cards and form controls for dark mode readability and contrast
- [x] Restyle `/faq` and `FAQAccordion` open-state/focus styling for dark/gold treatment
- [x] Run verification (`npm run build`)
- [x] Update docs (`CODER-CONTEXT`, `implementation-plan`, `UI-VERIFICATION`)
- [x] Commit and push to `origin/main`
## Batch 2 — V2 Interior Pages Premium Redesign

- [x] Read required refs (`docs/V2-BLUEPRINT.md`, `docs/UI-VERIFICATION.md`)
- [x] Apply V2 dark/gold treatment to `/services`
- [x] Apply V2 dark/gold treatment to `/booking`
- [x] Apply V2 dark/gold treatment to `/locations`
- [x] Apply V2 dark/gold treatment to `/locations/norterra`
- [x] Apply V2 dark/gold treatment to `/locations/peoria`
- [x] Apply V2 dark/gold treatment to `/contact`
- [x] Apply V2 dark/gold treatment to `/faq`
- [x] Update `src/components/sections/FAQAccordion.tsx` styling to V2
- [x] Run verification (`npm run build`)
- [x] Update docs (`docs/CODER-CONTEXT.md`, `docs/ralph-context.md`, `docs/implementation-plan.md`)
- [x] Commit and push to `origin/main`

## Batch 3 — Polish, Motion Tuning, Conversion Optimization + Final Deploy Verification

- [x] Read required refs (docs/V2-BLUEPRINT.md, docs/UI-VERIFICATION.md)
- [x] Tune motion behavior for mobile and reveal timing (globals.css, MotionReveal.tsx)
- [x] Complete conversion copy consistency pass (Book Your Cut wording sweep)
- [x] Align straggler UI surfaces to V2 dark/gold tokens (MapEmbed, 
ot-found)
- [x] Run build verification (
pm run build)
- [ ] Capture full screenshot set (desktop + mobile) for key routes
- [ ] Commit and push to origin/main
- [ ] Verify production deploy READY and smoke-check impacted routes
