import type { Metadata } from "next";
import { TrackedButton } from "@/components/analytics/TrackedButton";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { locations } from "@/data/locations";
import { NORTERRA_BOOKING_URL, PEORIA_BOOKING_URL } from "@/lib/constants";

const isPeoriaFallbackLink = PEORIA_BOOKING_URL === NORTERRA_BOOKING_URL;

export const metadata: Metadata = {
  title: "Book Now · Men's Lounge Barbershop",
  description:
    "Book your appointment online at Men's Lounge Barbershop. Pick your location, choose your barber, and skip the wait.",
};

export default function BookingPage() {
  return (
    <>
      <section className="bg-brand-cream py-14 md:py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Booking"
            title="Book Your Appointment"
            description="Pick your location and book in under a minute."
            centered
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {locations.map((location) => (
              <article key={location.slug} className="rounded-xl2 border border-brand-navy/15 bg-white p-6 shadow-card">
                <h2 className="text-2xl font-bold">{location.title}</h2>
                <p className="mt-3 text-sm text-brand-slate">{location.addressLine1}</p>
                <p className="text-sm text-brand-slate">{location.addressLine2}</p>
                <a href={location.phoneHref} className="mt-2 block text-sm font-semibold text-brand-navy hover:underline">
                  {location.phoneDisplay}
                </a>

                {location.slug === "peoria" && isPeoriaFallbackLink ? (
                  <p className="mt-4 rounded-lg border border-brand-gold/45 bg-brand-gold/15 px-3 py-2 text-sm text-brand-charcoal">
                    TODO: This button currently uses Norterra&apos;s booking link until we get Peoria&apos;s direct booking link.
                  </p>
                ) : null}

                <TrackedButton
                  href={location.bookingUrl}
                  className="mt-5 w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="book_now_click"
                  eventParams={{ source: "booking_page", location: location.slug }}
                >
                  {location.slug === "norterra" ? "Book at Norterra" : "Book at Peoria"}
                </TrackedButton>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-xl2 border border-brand-navy/15 bg-white p-6 text-center">
            <p className="text-brand-charcoal">
              Prefer to walk in? We welcome walk-ins at both locations during all business hours.
            </p>
            <p className="mt-2 text-sm text-brand-slate">
              Call us: Norterra (623) 556-3193 · Peoria (623) 440-9412
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

