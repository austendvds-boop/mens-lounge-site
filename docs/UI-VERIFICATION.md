# UI Verification

## Batch 1 (2026-03-05)

### Route: `/`
- Header is sticky and shows logo, nav links, and Book Now button.
- Mobile menu opens/closes correctly and includes Book Now CTA.
- Hero shows headline/subhead copy exactly:
  - "Phoenix's Premier Men's Barbershop"
  - "Classic cuts. Hot towel shaves. Two locations. Walk-ins welcome."
- Location cards show both Norterra and Peoria with exact addresses, phones, and hours.
- Service teaser shows 4 cards with exact titles/prices/descriptions.
- Testimonials render all 5 quotes with star row.
- Discount banner copy appears with shield icon.
- CTA banner includes Book Now + both click-to-call buttons.
- Footer shows quick links and contact numbers.

### Link checks
- Every "Book" button points to: `https://getsquire.com/booking/book/mens-lounge-barbershop-norterra-phoenix` (Peoria can override via env later).
- Phone links dial correct numbers.
- Direction links open Google Maps for each location.

## Retry Verification Addendum (2026-03-05)
- `SectionHeading` props render correctly on all home sections that pass `description` and `centered`.
- Service teaser card link copy renders as `Learn More →`.
- Testimonial cards render visible 5-star row (`★★★★★`).
- Hero and footer copy render apostrophes correctly after lint-safe escaping.

## Clean-Start Rebuild Addendum (2026-03-05)
- Hero and service images now use barbershop-relevant placeholder photography.
- Location cards now use branded placeholder location artwork (`norterra-placeholder.svg`, `peoria-placeholder.svg`) pending owner-supplied photos.
- All booking CTAs on `/` resolve to:
  - `https://getsquire.com/booking/book/mens-lounge-barbershop-norterra-phoenix`
- Home route smoke test at `http://127.0.0.1:3050/` returned `200` and contained all required booking/call links.

## Batch 2 Interior Routes (2026-03-05)

### Route: `/locations`
- Heading reads "Both Locations on Happy Valley Road".
- Both cards show address, phone, hours table, map embed, booking button, and directions button.
- "View full location details" links go to each location detail route.

### Route: `/locations/norterra`
- Metadata/title matches Norterra SEO copy.
- LocalBusiness schema script is present.
- Address, contact, full hours, amenities, and popular services block render.
- Map embed loads and both CTAs (book + directions) are clickable.

### Route: `/locations/peoria`
- Metadata/title matches Peoria SEO copy.
- LocalBusiness schema script is present.
- Sunday closed note is visible.
- Peoria booking fallback TODO note appears when peoria URL matches norterra URL.
- Map embed loads and both CTAs (book + directions) are clickable.

### Route: `/services`
- All 4 pricing groups render: Haircuts, Shaves & Skin Care, Color, Packages.
- Every service row includes name + price.
- Discount appreciation banner appears below pricing.

### Route: `/booking`
- Heading/subhead copy matches blueprint.
- Two location selector cards render with Squire links opening in a new tab.
- Walk-in note and phone line render under selector cards.

### Route: `/contact`
- Two location blocks render with address, phone, email, and map embeds.
- Contact form fields render: Name, Email, Phone (optional), Location, Message.

### Route: `/faq`
- FAQ accordion includes all 10 questions.
- Expanding a question triggers analytics hook (`faq_expand`).
- FAQ schema script is present.
- "Still have questions?" call links + `/contact` link render.

### Build + link checks
- `npm run build` passes.
- Exported routes present in `out/` for all interior pages.
- `/booking` export contains booking URL + both `tel:` links.
- `/contact` export contains both `tel:` and `mailto:` links.
