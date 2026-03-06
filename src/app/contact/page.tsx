import type { Metadata } from "next";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { locations } from "@/data/locations";
import { CONTACT_FORM_ENDPOINT, MAP_EMBED_URLS } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Contact Us · Men's Lounge Barbershop",
  "Get in touch with Men's Lounge Barbershop. Two Phoenix-area locations. Call, email, or visit us.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-dark py-14 md:py-20">
        <div className="container-shell">
          <MotionReveal>
            <SectionHeading
              eyebrow="Contact"
              title="Get in Touch"
              description="Visit us, call us, or drop us a line."
              centered
            />
          </MotionReveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {locations.map((location, index) => (
              <MotionReveal key={location.slug} delayMs={index * 70}>
                <article className="motion-surface space-y-4 rounded-xl2 border border-brand-gold/20 bg-brand-dark-alt p-6">
                  <h2 className="text-2xl font-bold text-brand-cream">{location.title}</h2>
                  <p className="text-sm text-brand-slate">{location.addressLine1}</p>
                  <p className="text-sm text-brand-slate">{location.addressLine2}</p>
                  <a href={location.phoneHref} className="motion-link block w-fit font-semibold text-brand-gold">
                    {location.phoneDisplay}
                  </a>
                  <a href={`mailto:${location.email}`} className="motion-link inline-block text-sm text-brand-slate">
                    {location.email}
                  </a>

                  <MapEmbed src={MAP_EMBED_URLS[location.slug]} title={`Map for ${location.title}`} className="h-64" />
                </article>
              </MotionReveal>
            ))}
          </div>

          <MotionReveal delayMs={140}>
            <div className="motion-surface mt-12 rounded-xl2 border border-brand-gold/20 bg-brand-dark-alt p-6 md:p-8">
              <h2 className="text-2xl font-bold text-brand-cream">Send Us a Message</h2>
              <p className="mt-2 text-sm text-brand-slate">We usually respond within one business day.</p>

              <form action={CONTACT_FORM_ENDPOINT} method="POST" className="mt-6 grid gap-4">
                <label className="text-sm font-semibold text-brand-cream" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="rounded-lg border border-brand-gold/20 bg-brand-dark-alt px-4 py-3 text-sm text-brand-cream placeholder:text-brand-slate/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                />

                <label className="text-sm font-semibold text-brand-cream" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="rounded-lg border border-brand-gold/20 bg-brand-dark-alt px-4 py-3 text-sm text-brand-cream placeholder:text-brand-slate/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                />

                <label className="text-sm font-semibold text-brand-cream" htmlFor="phone">
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  className="rounded-lg border border-brand-gold/20 bg-brand-dark-alt px-4 py-3 text-sm text-brand-cream placeholder:text-brand-slate/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                />

                <label className="text-sm font-semibold text-brand-cream" htmlFor="location">
                  Location
                </label>
                <select
                  id="location"
                  name="location"
                  className="rounded-lg border border-brand-gold/20 bg-brand-dark-alt px-4 py-3 text-sm text-brand-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                  defaultValue="General"
                >
                  <option>Norterra</option>
                  <option>Peoria</option>
                  <option>General</option>
                </select>

                <label className="text-sm font-semibold text-brand-cream" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="rounded-lg border border-brand-gold/20 bg-brand-dark-alt px-4 py-3 text-sm text-brand-cream placeholder:text-brand-slate/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                />

                <button
                  type="submit"
                  className="motion-surface mt-2 inline-flex w-fit items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-gold-hover active:scale-[0.99]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </MotionReveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
