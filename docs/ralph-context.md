# Ralph Context

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

## Batch 0 Critical Fixes + Hero Copy — Retry 2 Build Gate Pass — 2026-03-06

### Files created/modified
- `docs/ralph-context.md`

### Key exports
- No new exports.
- Re-verified `src/components/sections/Hero.tsx` is correct with the requested copy and heading class scale.
- Re-verified `next.config.js` still includes `images: { unoptimized: true }`.

### Gotchas for next batch
- Transient Next.js ENOENT build errors for missing `.next\\server\\pages-manifest.json`/`_app.js.nft.json` can occur on this Windows setup; deleting `.next` (and optionally `out`) before rebuild resolves it.
- No additional Hero or config edits were needed in this retry; avoid unnecessary churn in those files.
