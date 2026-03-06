# Environment Variables

## Required
- None required for the site to render and export.

## Optional

### `NEXT_PUBLIC_LEAD_CAPTURE_ENDPOINT`
- **Default:** falls back to `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`
- **Used for:** homepage first-visit offer form (`Claim My 25% Off`).
- **Source:** Form provider endpoint for lead capture submissions.

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

### `NEXT_PUBLIC_GOOGLE_MAPS_NORTERRA`
- **Default:** Embedded map URL for Norterra address.
- **Used for:** iframe embed on `/locations`, `/locations/norterra`, and `/contact`.
- **Source:** Google Maps share/embed URL for Norterra.

### `NEXT_PUBLIC_GOOGLE_MAPS_PEORIA`
- **Default:** Embedded map URL for Peoria address.
- **Used for:** iframe embed on `/locations`, `/locations/peoria`, and `/contact`.
- **Source:** Google Maps share/embed URL for Peoria.

### `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`
- **Default:** `https://formspree.io/f/replace-this-id`
- **Used for:** contact form POST target on `/contact`.
- **Source:** Formspree form endpoint (or equivalent form service endpoint).
