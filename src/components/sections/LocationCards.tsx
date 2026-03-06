import Image from "next/image";
import { locations } from "@/data/locations";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LocationCards() {
  return (
    <section id="locations" className="bg-brand-dark py-16 md:py-24">
      <div className="container-shell space-y-10">
        <MotionReveal>
          <SectionHeading
            eyebrow="Two Convenient Locations"
            title="Pick Your Closest Chair"
            description="Both shops are on Happy Valley Road, with walk-ins welcome every day we're open."
            centered
          />
        </MotionReveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {locations.map((location, index) => (
            <MotionReveal key={location.slug} delayMs={index * 100}>
              <Card className="overflow-hidden p-0">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/30 to-transparent" />
                </div>

                <div className="space-y-4 p-6">
                  <div>
                    <h3 className="font-display text-3xl text-brand-cream">{location.title}</h3>
                    <p className="mt-2 text-sm text-brand-slate">{location.addressLine1}</p>
                    <p className="text-sm text-brand-slate">{location.addressLine2}</p>
                    <a
                      href={location.phoneHref}
                      className="motion-link mt-1 block w-fit text-sm font-semibold text-brand-gold"
                    >
                      {location.phoneDisplay}
                    </a>
                  </div>

                  <Badge>{location.hoursBadge}</Badge>

                  <div className="rounded-lg border border-brand-gold/20 bg-brand-dark p-4 text-sm">
                    {location.hours.map((hour) => (
                      <div key={hour.day} className="flex justify-between gap-4 border-b border-brand-gold/10 py-2 last:border-b-0">
                        <span className="font-semibold text-brand-cream">{hour.day}</span>
                        <span className="text-right text-brand-slate">{hour.hours}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button
                      href={location.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      {location.slug === "norterra" ? "Book at Norterra" : "Book at Peoria"}
                    </Button>
                    <Button
                      href={location.directionsUrl}
                      variant="secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      Get Directions
                    </Button>
                  </div>
                </div>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

