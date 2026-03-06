import type { Metadata } from "next";
import { TrackedButton } from "@/components/analytics/TrackedButton";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { locations } from "@/data/locations";
import { MAP_EMBED_URLS } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";

const norterra = locations.find((location) => location.slug === "norterra")!;

export const metadata: Metadata = buildPageMetadata(
  "Norterra Location · Men's Lounge Barbershop Phoenix",
  "Men's Lounge Barbershop at Norterra — 2501 W Happy Valley Rd, Phoenix. Walk-ins welcome. Book your cut online.",
  "/locations/norterra",
);

export default function NorterraLocationPage() {
  return (
    <>
      <LocalBusinessSchema locationSlug="norterra" />

      <section className="bg-white py-14 md:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <MotionReveal>
            <div>
              <SectionHeading
                eyebrow="Norterra — Phoenix"
                title="Your Norterra Barbershop"
                description="Classic cuts, old-school shaves, and walk-ins welcome all week."
              />

              <div className="motion-surface mt-8 space-y-6 rounded-xl2 border border-brand-navy/15 bg-brand-cream/60 p-6">
                <div>
                  <h2 className="text-xl font-bold">Address</h2>
                  <p className="mt-2 text-brand-slate">2501 W Happy Valley Rd, Suite #32-1070</p>
                  <p className="text-brand-slate">Phoenix, AZ 85085</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold">Contact</h2>
                  <a href={norterra.phoneHref} className="motion-link mt-2 block w-fit font-semibold text-brand-navy">
                    {norterra.phoneDisplay}
                  </a>
                  <a href={`mailto:${norterra.email}`} className="motion-link inline-block text-brand-slate">
                    {norterra.email}
                  </a>
                </div>

                <div>
                  <h2 className="text-xl font-bold">Hours</h2>
                  <div className="mt-2 space-y-2 text-sm">
                    {norterra.hours.map((hour) => (
                      <div key={hour.day} className="flex justify-between gap-4 border-b border-brand-navy/10 pb-1 last:border-b-0">
                        <span className="font-semibold text-brand-charcoal">{hour.day}</span>
                        <span className="text-right text-brand-slate">{hour.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold">Amenities</h2>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-brand-slate">
                    <li>Walk-ins welcome all business hours</li>
                    <li>Wheelchair accessible</li>
                    <li>Family-friendly seating area</li>
                    <li>Easy parking in the shopping center lot</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold">Popular Services at Norterra</h2>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-brand-slate">
                    <li>Men&apos;s Haircut - $23</li>
                    <li>Old Fashion Hot Towel Shave - $30</li>
                    <li>Beard Trim - $15</li>
                  </ul>
                  <p className="mt-2 text-sm text-brand-slate">See the full menu on our Services & Prices page.</p>
                </div>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delayMs={90}>
            <div className="space-y-6">
              <MapEmbed src={MAP_EMBED_URLS.norterra} title="Map for Men's Lounge Norterra" className="h-80" />

              <div className="motion-surface rounded-xl2 border border-brand-navy/15 bg-brand-cream/50 p-6">
                <h3 className="text-2xl font-bold">Book at Norterra</h3>
                <p className="mt-2 text-sm text-brand-slate">
                  Pick your barber, choose your time, and lock in your appointment in under a minute.
                </p>
                <div className="mt-4 space-y-3">
                  <TrackedButton
                    href={norterra.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                    eventName="book_now_click"
                    eventParams={{ source: "location_page", location: "norterra" }}
                  >
                    Book at Norterra
                  </TrackedButton>
                  <TrackedButton
                    href={norterra.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                    variant="secondary"
                    eventName="directions_click"
                    eventParams={{ location: "norterra" }}
                  >
                    Get Directions
                  </TrackedButton>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

