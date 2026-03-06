# UI-VERIFICATION.md — Men's Lounge Barbershop

**Purpose:** Post-deploy visual QA checklist for Steve screenshots.
**Breakpoints:** 375px (mobile) + 1440px (desktop) for every page.

---

## Global Elements (Check on Every Page)

### Header
- [ ] Logo visible top-left, links to home
- [ ] Nav links visible on desktop: Home, Locations, Services, Booking, Contact, FAQ
- [ ] "Book Now" button visible in header (green, high contrast)
- [ ] Header is sticky on scroll
- [ ] Mobile (375px): hamburger icon replaces nav links
- [ ] Mobile: hamburger opens drawer with all nav links + Book Now CTA
- [ ] Mobile: drawer closes on link click and overlay click

### Footer
- [ ] Three-column layout on desktop (logo+tagline, quick links, contact info)
- [ ] Stacked on mobile
- [ ] Phone numbers are clickable (tel: links)
- [ ] Instagram icon links to correct URL
- [ ] Copyright line: "© 2026 Men's Lounge Barbershop"

### CTAs
- [ ] All "Book Now" / "Book Your Cut" / "Book at [Location]" buttons are green (`#1A7A4C`)
- [ ] All booking CTAs link to Squire (open in new tab)
- [ ] All phone numbers are click-to-call links
- [ ] All "Get Directions" links open Google Maps

---

## Page-by-Page Verification

### 1. Home (`/`)

**Desktop (1440px):**
- [ ] Hero: full-viewport height, dark overlay on background image
- [ ] Hero: headline "Phoenix's Premier Men's Barbershop" clearly readable
- [ ] Hero: subhead visible below headline
- [ ] Hero: two buttons side-by-side ("Book Your Cut" green, "View Services" outline)
- [ ] Location cards: two cards side-by-side with addresses, hours, phone, CTAs
- [ ] Service teasers: 4-card grid (Men's Haircut, Hot Towel Shave, Beard Trim, Man of the Hour)
- [ ] Each service card shows name, price badge, one-line description
- [ ] Testimonials: 5 reviews visible in grid layout, star ratings shown
- [ ] Discount banner: shield icon, "$3 off" messaging, mentions military/fire/police/teachers
- [ ] CTA banner at bottom: "Ready for a Fresh Cut?" with Book Now + phone numbers
- [ ] Alternating section backgrounds (white / cream)

**Mobile (375px):**
- [ ] Hero: buttons stacked vertically
- [ ] Location cards stacked (Norterra above Peoria)
- [ ] Service teasers: 1-column stack or 2-column grid
- [ ] Testimonials: scrollable or stacked
- [ ] All text readable without horizontal scroll
- [ ] No content overflow or clipping

### 2. Locations Overview (`/locations`)

**Desktop:**
- [ ] Headline: "Both Locations on Happy Valley Road" or similar
- [ ] Two location cards with embedded Google Maps
- [ ] Each card: address, full hours table, phone, email, Book CTA, Get Directions
- [ ] CTA banner at bottom

**Mobile:**
- [ ] Cards stacked vertically
- [ ] Maps render and are interactive (pinch-zoom)
- [ ] Hours table readable without truncation

### 3. Norterra Detail (`/locations/norterra`)

**Desktop:**
- [ ] Location name prominent: "Norterra — Phoenix"
- [ ] Full address, phone, email displayed
- [ ] Hours table with all days (Mon-Sun)
- [ ] Sunday shows "10:00 AM – 3:00 PM (Walk-ins Only)"
- [ ] Amenities list (walk-ins, wheelchair, Apple Pay, credit cards)
- [ ] Embedded Google Map
- [ ] "Book at Norterra" CTA (green, prominent)
- [ ] Page-specific meta title in browser tab

**Mobile:**
- [ ] All info readable, no horizontal scroll
- [ ] CTA button full-width

### 4. Peoria Detail (`/locations/peoria`)

**Desktop:**
- [ ] Same structure as Norterra
- [ ] Sunday shows "Closed"
- [ ] Peoria phone: (623) 440-9412
- [ ] Peoria email: Mensloungepeoria@gmail.com

**Mobile:**
- [ ] Same checks as Norterra mobile

### 5. Services (`/services`)

**Desktop:**
- [ ] Four grouped tables: Haircuts, Shaves & Skin Care, Color, Packages
- [ ] Each row: service name left, price right-aligned
- [ ] Package cards show included items
- [ ] Discount banner visible: "$3 off for military, firefighters, police, teachers"
- [ ] "Book Now" CTA after each section group
- [ ] CTA banner at bottom

**Mobile:**
- [ ] Tables readable — service names don't truncate
- [ ] Prices clearly visible and aligned
- [ ] No horizontal scrolling required

### 6. Booking (`/booking`)

**Desktop:**
- [ ] Headline: "Book Your Appointment"
- [ ] Two large location cards side-by-side
- [ ] Each card: location name, address snippet, phone, "Book at [Location]" CTA
- [ ] CTAs are clearly buttons (not just links)
- [ ] Walk-in messaging below cards
- [ ] Phone numbers displayed with click-to-call

**Mobile:**
- [ ] Cards stacked
- [ ] CTAs full-width, easy to tap (min 48px height)
- [ ] Phone numbers easily tappable

### 7. Contact (`/contact`)

**Desktop:**
- [ ] Two-column layout: Norterra left, Peoria right
- [ ] Each has: address, phone (clickable), email (mailto), embedded Google Map
- [ ] Contact form below: Name, Email, Phone (optional), Location dropdown, Message, Submit
- [ ] Form submit button styled as primary CTA
- [ ] "We usually respond within one business day" note visible

**Mobile:**
- [ ] Columns stacked (Norterra above Peoria)
- [ ] Form fields full-width
- [ ] Submit button full-width, 48px+ height

### 8. FAQ (`/faq`)

**Desktop:**
- [ ] All 10 FAQ items displayed as expandable accordion
- [ ] Click on question expands answer, collapses others (or toggle)
- [ ] Answers contain the exact copy from blueprint
- [ ] "Still have questions?" section at bottom with phone numbers + link to /contact
- [ ] CTA banner at bottom

**Mobile:**
- [ ] Accordion works via tap
- [ ] Questions and answers readable without truncation
- [ ] Touch targets for expand/collapse are large enough (full row clickable)

### 9. 404 Page

- [ ] Branded design (not default Next.js 404)
- [ ] Shows "Page not found" messaging
- [ ] "Back to Home" link
- [ ] "Book Now" CTA

---

## Visual Standards

### Colors
- [ ] Navy (`#1B2A4A`) used for header, text headings
- [ ] Gold (`#C8A96E`) used for accent borders, highlights
- [ ] Cream (`#FAF7F2`) used for alternating section backgrounds
- [ ] Green (`#1A7A4C`) used exclusively for primary CTA buttons
- [ ] No color clashes or low-contrast text

### Typography
- [ ] Inter font loads correctly (check network tab — Google Fonts or next/font)
- [ ] Headings are clearly hierarchical (H1 > H2 > H3)
- [ ] Body text is 16px, readable
- [ ] No font fallback flash (FOUT) — Inter preloaded

### Images
- [ ] Hero background image renders (placeholder or real)
- [ ] All placeholder images have `<!-- PLACEHOLDER -->` comments in source
- [ ] No broken image icons
- [ ] Images have alt text
- [ ] Images don't cause layout shift on load

### Spacing
- [ ] Sections have consistent vertical padding (~80px desktop, ~48px mobile)
- [ ] Cards have consistent internal padding (~24px)
- [ ] No elements touching viewport edges on mobile (minimum 16px horizontal padding)

---

## Functional Checks

- [ ] All internal links navigate correctly (no 404s within site)
- [ ] All external links (Squire, Google Maps, Instagram) open in new tabs
- [ ] Phone number tel: links trigger phone dialer on mobile
- [ ] Email mailto: links trigger email client
- [ ] Contact form submits (or shows placeholder message if endpoint not configured)
- [ ] FAQ accordions expand/collapse
- [ ] Mobile nav opens and closes
- [ ] Page loads under 2 seconds on 3G throttle (Lighthouse)
- [ ] No console errors in browser dev tools
- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] `sitemap.xml` accessible at `/sitemap.xml`
- [ ] JSON-LD schema present in page source (check via View Source or Rich Results Test)

---

**End of UI Verification Spec**

---

## 2026-03-05 Hotfix Regression Checks (Batch 1)

- [ ] `/booking`: no internal/TODO copy appears in the Peoria booking notice.
- [ ] `/locations/peoria`: no internal/TODO copy appears in the booking panel.
- [ ] `/locations` (mobile + desktop): both location map cards render with visible map content (no empty panel).
- [ ] `/locations/norterra` mobile: map panel renders with visible map content.
- [ ] `/locations/peoria` mobile: map panel renders with visible map content.
- [ ] `/contact` mobile: Peoria map panel renders with visible map content.

## 2026-03-06 Motion Regression Checks (Batch 1 Motion Pass)

### Reduced Motion (required)
- [ ] Enable `prefers-reduced-motion` in dev tools and verify motion effects stop on all updated pages.
- [ ] Confirm no section/card enters with translate/fade when reduced motion is on.
- [ ] Confirm nav, button, and FAQ interactions still work with reduced motion enabled.

### Home (`/`)
- [ ] Hero eyebrow/headline/subhead/buttons fade in smoothly (no bounce, no large movement).
- [ ] Location cards reveal with subtle stagger as they scroll into view.
- [ ] Service cards reveal with subtle stagger as they scroll into view.
- [ ] Testimonial cards reveal smoothly; no layout shift during reveal.
- [ ] FAQ preview cards and CTA panel reveal smoothly.

### Interior Routes
- [ ] `/booking`: heading, location booking cards, and walk-in panel reveal smoothly.
- [ ] `/locations`: each location card reveals smoothly and map cards remain responsive on mobile.
- [ ] `/locations/norterra`: content column + map/CTA column reveal smoothly.
- [ ] `/locations/peoria`: content column + map/CTA column reveal smoothly.
- [ ] `/services`: heading and each service category panel reveal smoothly.
- [ ] `/contact`: location contact cards + form panel reveal smoothly.
- [ ] `/faq`: heading, accordion block, and support panel reveal smoothly.

### Navigation + Micro-Interactions
- [ ] Desktop header links show subtle underline motion on hover/focus.
- [ ] Footer links show subtle underline motion on hover/focus.
- [ ] Buttons and cards lift subtly on hover without jitter.
- [ ] Mobile menu controls animate in smoothly when opened.
