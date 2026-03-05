import type { Metadata } from "next";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { locations } from "@/data/locations";
import { CONTACT_FORM_ENDPOINT, MAP_EMBED_URLS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us · Men's Lounge Barbershop",
  description:
    "Get in touch with Men's Lounge Barbershop. Two Phoenix-area locations. Call, email, or visit us.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-white py-14 md:py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Contact"
            title="Get in Touch"
            description="Visit us, call us, or drop us a line."
            centered
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {locations.map((location) => (
              <article key={location.slug} className="space-y-4 rounded-xl2 border border-brand-navy/15 bg-brand-cream/40 p-6">
                <h2 className="text-2xl font-bold">{location.title}</h2>
                <p className="text-sm text-brand-slate">{location.addressLine1}</p>
                <p className="text-sm text-brand-slate">{location.addressLine2}</p>
                <a href={location.phoneHref} className="block font-semibold text-brand-navy hover:underline">
                  {location.phoneDisplay}
                </a>
                <a href={`mailto:${location.email}`} className="block text-sm text-brand-slate hover:underline">
                  {location.email}
                </a>

                <MapEmbed src={MAP_EMBED_URLS[location.slug]} title={`Map for ${location.title}`} className="h-64" />
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-xl2 border border-brand-navy/15 bg-brand-cream/40 p-6 md:p-8">
            <h2 className="text-2xl font-bold">Send Us a Message</h2>
            <p className="mt-2 text-sm text-brand-slate">We usually respond within one business day.</p>

            <form action={CONTACT_FORM_ENDPOINT} method="POST" className="mt-6 grid gap-4">
              <label className="text-sm font-semibold text-brand-charcoal" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="rounded-lg border border-brand-navy/20 bg-white px-4 py-3 text-sm"
              />

              <label className="text-sm font-semibold text-brand-charcoal" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="rounded-lg border border-brand-navy/20 bg-white px-4 py-3 text-sm"
              />

              <label className="text-sm font-semibold text-brand-charcoal" htmlFor="phone">
                Phone (optional)
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                className="rounded-lg border border-brand-navy/20 bg-white px-4 py-3 text-sm"
              />

              <label className="text-sm font-semibold text-brand-charcoal" htmlFor="location">
                Location
              </label>
              <select
                id="location"
                name="location"
                className="rounded-lg border border-brand-navy/20 bg-white px-4 py-3 text-sm"
                defaultValue="General"
              >
                <option>Norterra</option>
                <option>Peoria</option>
                <option>General</option>
              </select>

              <label className="text-sm font-semibold text-brand-charcoal" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="rounded-lg border border-brand-navy/20 bg-white px-4 py-3 text-sm"
              />

              <button
                type="submit"
                className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-cta-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-cta-green/90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

