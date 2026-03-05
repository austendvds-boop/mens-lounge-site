import Image from "next/image";
import { locations } from "@/data/locations";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LocationCards() {
  return (
    <section id="locations" className="bg-brand-cream py-14 md:py-20">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="Two Convenient Locations"
          title="Find Your Closest Chair"
          description="Both locations are on Happy Valley Road with walk-ins welcome every day we are open."
          centered
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {locations.map((location) => (
            <Card key={location.slug} className="overflow-hidden p-0">
              <div className="relative aspect-[16/9]">
                {/* PLACEHOLDER: Replace with owner-supplied photo */}
                <Image
                  src={location.image}
                  alt={`${location.title} location`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 p-6">
                <div>
                  <h3 className="text-2xl font-bold">{location.title}</h3>
                  <p className="mt-2 text-sm text-brand-slate">{location.addressLine1}</p>
                  <p className="text-sm text-brand-slate">{location.addressLine2}</p>
                  <a
                    href={location.phoneHref}
                    className="mt-1 block text-sm font-semibold text-brand-navy hover:underline"
                  >
                    {location.phoneDisplay}
                  </a>
                </div>

                <Badge>{location.hoursBadge}</Badge>

                <div className="rounded-lg border border-brand-navy/10 bg-brand-cream/70 p-4 text-sm">
                  {location.hours.map((hour) => (
                    <div key={hour.day} className="flex justify-between gap-4 py-1">
                      <span className="font-semibold text-brand-charcoal">{hour.day}</span>
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
          ))}
        </div>
      </div>
    </section>
  );
}

