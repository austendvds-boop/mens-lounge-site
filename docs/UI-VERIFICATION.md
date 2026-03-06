# UI Verification — Men's Lounge V2 (Dark Mode Premium)

**Last Updated:** March 6, 2026 (Batch 2 interior premium alignment pass)
**Design System:** Dark (#0F0F0F) + Gold (#C9A962) + Cream (#F5F5F0)

**Batch 2 Routes Updated:** `/services`, `/booking`, `/locations`, `/locations/norterra`, `/locations/peoria`, `/contact`, `/faq`

---

## Visual Standards

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `brand-dark` | `#0F0F0F` | Page background |
| `brand-dark-alt` | `#1A1A1A` | Card/section surfaces |
| `brand-gold` | `#C9A962` | CTAs, eyebrows, badges, borders |
| `brand-gold-hover` | `#D4B872` | Button hover state |
| `brand-cream` | `#F5F5F0` | Primary text on dark |
| `brand-slate` | `#A0A0A0` | Secondary/body text on dark |

### Typography
| Element | Font | Size | Weight |
|---------|------|------|--------|
| H1 (hero) | Playfair Display | 48px mobile / 72px desktop | 800 |
| H2 (section) | Playfair Display | 36px mobile / 48px desktop | 700 |
| Eyebrow | Inter | 14px | 600, uppercase, tracking 0.2em |
| Body | Inter | 16-18px | 400 |
| CTA button | Inter | 16px | 600 |

### Components
- **CTA buttons:** Gold background (#C9A962), dark text (#0F0F0F), rounded-full, gold glow on hover
- **Secondary buttons:** Gold outline, gold text, transparent bg
- **Cards:** Dark surface (#1A1A1A), gold border (20% opacity)
- **Focus rings:** 3px gold outline, 3px offset

---

## Route Verification Checklist

### `/` — Homepage
**Desktop (1440px):**
- [ ] Hero: full viewport height, transparent header overlays image, "Where Craft Meets Confidence" in Playfair Display, gold "Book Your Cut" CTA
- [ ] Header: transparent over hero, turns solid dark (#0F0F0F/95) on scroll
- [ ] LeadCapture: dark card with gold border, "25% Off Your First Cut" headline, email input, gold CTA
- [ ] ServiceCards: 3-column grid, image cards with gradient overlay, gold prices, "Book This →"
- [ ] Testimonials: dark-alt background, gold stars, cream text, gold "Book Your Cut" CTA below
- [ ] LocationCards: dark surface, gold borders, booking CTAs in gold
- [ ] DiscountBanner: dark bg, gold icon, gold "Book Your Cut" CTA
- [ ] CTABanner: "Your Chair Is Waiting" in Playfair Display, gold CTA, phone numbers as secondary

**Mobile (375px):**
- [ ] Hero readable, CTAs stack vertically, full-width gold buttons
- [ ] Header hamburger menu: dark drawer, gold CTA, cream links
- [ ] All cards stack single-column
- [ ] All CTAs are full-width on mobile
- [ ] No horizontal overflow

### `/services` — Services & Prices
**Desktop (1440px):**
- [ ] Dark background throughout
- [ ] Service categories in dark-alt cards with gold borders
- [ ] Price tables: dark rows, gold prices in right column
- [ ] Gold "Book Your Cut" button per category section
- [ ] DiscountBanner + CTABanner at bottom in V2 style

**Mobile (375px):**
- [ ] Tables don't overflow horizontally
- [ ] Prices visible and aligned
- [ ] CTAs full-width

### `/booking` — Book Now
**Desktop (1440px):**
- [ ] Dark background
- [ ] Two location cards side-by-side, dark surface, gold borders
- [ ] Gold "Book at [Location]" CTAs prominent
- [ ] Walk-in notice card: dark surface with gold border accent

**Mobile (375px):**
- [ ] Cards stack vertically
- [ ] CTAs full-width

### `/locations` — Our Locations
**Desktop (1440px):**
- [ ] Dark background
- [ ] Location cards: dark surface, images with gradient overlay, gold borders
- [ ] Hours tables readable on dark bg
- [ ] Google Maps embeds render
- [ ] Booking + Directions CTAs in V2 style

**Mobile (375px):**
- [ ] Cards stack
- [ ] Maps render
- [ ] Hours table fits without overflow

### `/contact` — Contact Us
**Desktop (1440px):**
- [ ] Dark background
- [ ] Contact info cards: dark surface
- [ ] Form inputs: dark bg (#1A1A1A), gold borders, cream text, visible placeholders
- [ ] Gold "Send Message" submit button
- [ ] Maps render

**Mobile (375px):**
- [ ] Form inputs full-width
- [ ] Keyboard doesn't permanently cover inputs
- [ ] Gold focus states visible

### `/faq` — FAQ
**Desktop (1440px):**
- [ ] Dark background
- [ ] Accordion items: dark surface, gold border on open/active state
- [ ] Summary text: cream
- [ ] Answer text: brand-slate (#A0A0A0)
- [ ] "Still have questions?" card: dark surface, gold accent

**Mobile (375px):**
- [ ] Full-width accordion items
- [ ] Text readable, no clipping

---

## Accessibility Checks (All Routes)
- [ ] Tab navigation: gold focus rings visible on every interactive element
- [ ] Skip-to-content link: visible on first Tab press, jumps to `#main-content`
- [ ] Heading hierarchy: single H1, logical H2→H3 nesting (verify with HeadingsMap)
- [ ] Touch targets: all buttons/links ≥48×48px
- [ ] `prefers-reduced-motion`: all content visible immediately, no positional animation
- [ ] Screen reader: all sections navigable, CTA labels descriptive
- [ ] Form labels: every input has an associated `<label>`

## Performance Checks
- [ ] Lighthouse Performance ≥90 on `/` and `/services`
- [ ] LCP <2.5s (hero image)
- [ ] CLS <0.1
- [ ] Total homepage weight ≤800KB
- [ ] No console errors

## Functional Checks
- [ ] Booking links: Norterra → correct Squire URL
- [ ] Booking links: Peoria → correct Squire URL
- [ ] Contact form: submits to Formspree successfully
- [ ] Lead capture form: submits successfully
- [ ] Google Analytics: CTA click events firing
- [ ] Mobile hamburger: opens/closes, Escape key closes

---

## Breakpoints
| Label | Width | Device Reference |
|-------|-------|-----------------|
| Mobile | 375px | iPhone SE / 13 mini |
| Desktop | 1440px | Standard desktop |

---

*End of UI Verification Spec*

---

## Batch 2 Execution Note (2026-03-06)
Routes updated in this batch:
- `/services`
- `/booking`
- `/locations`
- `/locations/norterra`
- `/locations/peoria`
- `/contact`
- `/faq`

Verification focus for this batch:
- Dark/gold/cream token consistency across all listed interior routes
- Contact form input readability on dark background
- FAQ accordion open-state border contrast
- Gold primary CTA prominence and route-level call-to-action consistency

## Batch 3 Execution Note (2026-03-06)
Routes/components touched in polish pass:
- /booking (metadata copy consistency)
- /contact, /locations, /locations/norterra, /locations/peoria (map iframe V2 border styling via shared MapEmbed)
- 
ot-found route (V2 dark/gold consistency + CTA copy)
- Shared motion system (globals.css, MotionReveal) affecting reveal timing on all major routes

Verification focus for this pass:
- reduced-motion-safe reveal behavior on mobile
- no remaining Book Now copy in user-facing CTAs/metadata
- map embeds visually consistent with V2 palette
