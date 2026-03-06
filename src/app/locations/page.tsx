import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { locations } from "@/data/locations";
import { MAP_EMBED_URLS } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";
import { TrackedButton } from "@/components/analytics/TrackedButton";

export const metadata: Metadata = buildPageMetadata(
  "Our Locations · Men's Lounge Barbershop",
  "Visit us at Norterra (Phoenix) or Peoria. Walk-ins welcome. See hours, directions, and contact info for both locations.",
  "/locations",
);

export default function LocationsPage() {
  return (
    <>
      <section className="bg-brand-dark py-14 md:py-20">
        <div className="container-shell">
          <MotionReveal>
            <SectionHeading
              eyebrow="Two Phoenix-Area Shops"
              title="Both Locations on Happy Valley Road"
              description="Choose the location that's easiest for you. Both shops welcome walk-ins during business hours."
              centered
            />
          </MotionReveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {locations.map((location, index) => (
              <MotionReveal key={location.slug} delayMs={index * 70}>
                <article className="motion-surface overflow-hidden rounded-xl2 border border-brand-gold/20 bg-brand-dark-alt shadow-card">
                  <div className="relative aspect-[16/9]">
                    {/* PLACEHOLDER: Replace with owner-supplied location photo. */}
                    <Image
                      src={location.image}
                      alt={`${location.title} location`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading="lazy"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
                  </div>

                  <div className="space-y-5 p-6">
                    <div>
                      <h2 className="text-2xl font-bold text-brand-cream">{location.title}</h2>
                      <p className="mt-2 text-sm text-brand-slate">{location.addressLine1}</p>
                      <p className="text-sm text-brand-slate">{location.addressLine2}</p>
                      <a href={location.phoneHref} className="motion-link mt-1 inline-block text-sm font-semibold text-brand-gold">
                        {location.phoneDisplay}
                      </a>
                    </div>

                    <div className="rounded-lg border border-brand-gold/20 bg-brand-dark p-4 text-sm">
                      {location.hours.map((hour) => (
                        <div key={hour.day} className="flex justify-between gap-3 border-b border-brand-gold/10 py-1 last:border-b-0">
                          <span className="font-semibold text-brand-cream">{hour.day}</span>
                          <span className="text-right text-brand-slate">{hour.hours}</span>
                        </div>
                      ))}
                    </div>

                    <MapEmbed
                      src={MAP_EMBED_URLS[location.slug]}
                      title={`Map for ${location.title}`}
                      className="h-56"
                    />

                    <div className="grid gap-3 sm:grid-cols-2">
                      <TrackedButton
                        href={location.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        eventName="book_now_click"
                        eventParams={{ source: "location_card", location: location.slug }}
                      >
                        {location.slug === "norterra" ? "Book at Norterra" : "Book at Peoria"}
                      </TrackedButton>
                      <TrackedButton
                        href={location.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                        eventName="directions_click"
                        eventParams={{ location: location.slug }}
                      >
                        Get Directions
                      </TrackedButton>
                    </div>

                    <Link href={`/locations/${location.slug}`} className="motion-link inline-block text-sm font-semibold text-brand-gold underline-offset-4">
                      View full location details →
                    </Link>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
