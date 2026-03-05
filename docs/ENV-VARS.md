# Environment Variables

## Required
- None required for the site to render and export.

## Optional

### `NEXT_PUBLIC_SQUIRE_NORTERRA_URL`
- **Default:** `https://getsquire.com/booking/book/mens-lounge-barbershop-norterra-phoenix`
- **Used for:** Primary booking link across the site.
- **Source:** Owner-provided Squire URL.

### `NEXT_PUBLIC_SQUIRE_PEORIA_URL`
- **Default:** falls back to `NEXT_PUBLIC_SQUIRE_NORTERRA_URL`
- **Used for:** Peoria-specific booking button destination.
- **Source:** Owner-provided Squire URL for Peoria location.

### `NEXT_PUBLIC_GA_ID`
- **Default:** empty (analytics no-op)
- **Used for:** Google Analytics page tracking/events.
- **Source:** Google Analytics 4 property Measurement ID.

### `NEXT_PUBLIC_SITE_URL`
- **Default:** `https://mensloungebarbershop.com`
- **Used for:** Metadata base URL and schema absolute image URLs.
- **Source:** Production domain.
