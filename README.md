# Men's Lounge Barbershop Website

Marketing site for Men's Lounge Barbershop (Norterra + Peoria), built with Next.js 14 App Router + TypeScript + Tailwind.

## Tech Stack
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Static export (`next build` -> `out/`)

## Local Development
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Build
```bash
npm run build
```
This runs:
1. `next build`
2. `next-sitemap` (postbuild) to generate sitemap/robots in `out/`

## Environment Variables
Create `.env.local` as needed:

```bash
NEXT_PUBLIC_SITE_URL=https://mensloungebarbershop.com
NEXT_PUBLIC_SQUIRE_NORTERRA_URL=https://getsquire.com/booking/book/mens-lounge-barbershop-norterra-phoenix
NEXT_PUBLIC_SQUIRE_PEORIA_URL=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_GOOGLE_MAPS_NORTERRA=
NEXT_PUBLIC_GOOGLE_MAPS_PEORIA=
```

If `NEXT_PUBLIC_SQUIRE_PEORIA_URL` is empty, Peoria booking falls back to Norterra.

## Deploy (Vercel)
1. Push changes to `main`.
2. Vercel auto-deploys from GitHub.
3. Confirm deploy is green in Vercel.
4. Smoke test these routes:
   - `/`
   - `/locations`
   - `/locations/norterra`
   - `/locations/peoria`
   - `/services`
   - `/booking`
   - `/contact`
   - `/faq`
   - missing route -> branded 404
5. Verify SEO files:
   - `/robots.txt`
   - `/sitemap.xml`

## Notes
- Social sharing image: `public/images/og-image.jpg`
- Global metadata + OG/Twitter tags are defined via `src/lib/metadata.ts`
- Replace placeholder images/logo when owner assets are available
