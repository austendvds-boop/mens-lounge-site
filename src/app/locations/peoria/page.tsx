import type { Metadata } from "next";
import { TrackedButton } from "@/components/analytics/TrackedButton";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { locations } from "@/data/locations";
import { MAP_EMBED_URLS, NORTERRA_BOOKING_URL, PEORIA_BOOKING_URL } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";

const peoria = locations.find((location) => location.slug === "peoria")!;
const isPeoriaFallbackLink = PEORIA_BOOKING_URL === NORTERRA_BOOKING_URL;

export const metadata: Metadata = buildPageMetadata(
  "Peoria Location · Men's Lounge Barbershop",
  "Men's Lounge Barbershop Peoria — 6791 W Happy Valley Rd. Professional haircuts, shaves, and beard trims. Walk-ins welcome.",
  "/locations/peoria",
);

export default function PeoriaLocationPage() {
  return (
    <>
      <LocalBusinessSchema locationSlug="peoria" />

      <section className="bg-brand-dark py-14 md:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <MotionReveal>
            <div>
              <SectionHeading
                eyebrow="Peoria"
                title="Your Peoria Barbershop"
                description="Professional cuts, clean fades, and straight-razor shaves in a relaxed shop."
              />

              <div className="motion-surface mt-8 space-y-6 rounded-xl2 border border-brand-gold/20 bg-brand-dark-alt p-6">
                <div>
                  <h2 className="text-xl font-bold text-brand-cream">Address</h2>
                  <p className="mt-2 text-brand-slate">6791 W Happy Valley Rd, Suite 105</p>
                  <p className="text-brand-slate">Peoria, AZ 85383</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-brand-cream">Contact</h2>
                  <a href={peoria.phoneHref} className="motion-link mt-2 block w-fit font-semibold text-brand-gold">
                    {peoria.phoneDisplay}
                  </a>
                  <a href={`mailto:${peoria.email}`} className="motion-link inline-block text-brand-slate">
                    {peoria.email}
                  </a>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-brand-cream">Hours</h2>
                  <div className="mt-2 space-y-2 text-sm">
                    {peoria.hours.map((hour) => (
                      <div key={hour.day} className="flex justify-between gap-4 border-b border-brand-gold/10 pb-1 last:border-b-0">
                        <span className="font-semibold text-brand-cream">{hour.day}</span>
                        <span className="text-right text-brand-slate">{hour.hours}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-sm font-semibold text-brand-gold">Sunday: Closed at this location.</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-brand-cream">Amenities</h2>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-brand-slate">
                    <li>Walk-ins welcome all business hours</li>
                    <li>Wheelchair accessible</li>
                    <li>Family-friendly seating area</li>
                    <li>Convenient parking near the shop entrance</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-brand-cream">Popular Services at Peoria</h2>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-brand-slate">
                    <li>Men&apos;s Haircut - $23</li>
                    <li>Straight Edge Skin Fade - $28</li>
                    <li>Man of the Hour package - $75</li>
                  </ul>
                </div>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delayMs={90}>
            <div className="space-y-6">
              <MapEmbed src={MAP_EMBED_URLS.peoria} title="Map for Men's Lounge Peoria" className="h-80" />

              <div className="motion-surface rounded-xl2 border border-brand-gold/20 bg-brand-dark-alt p-6">
                <h3 className="text-2xl font-bold text-brand-cream">Book at Peoria</h3>
                <p className="mt-2 text-sm text-brand-slate">Choose your barber and reserve your spot online.</p>
                {isPeoriaFallbackLink ? (
                  <p className="mt-2 rounded-lg border border-brand-gold/45 bg-brand-gold/10 px-3 py-2 text-sm text-brand-cream">
                    Online booking for Peoria opens in our shared booking page right now.
                  </p>
                ) : null}
                <div className="mt-4 space-y-3">
                  <TrackedButton
                    href={peoria.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                    eventName="book_now_click"
                    eventParams={{ source: "location_page", location: "peoria" }}
                  >
                    Book at Peoria
                  </TrackedButton>
                  <TrackedButton
                    href={peoria.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                    variant="secondary"
                    eventName="directions_click"
                    eventParams={{ location: "peoria" }}
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
