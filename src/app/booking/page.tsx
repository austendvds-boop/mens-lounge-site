import type { Metadata } from "next";
import { TrackedButton } from "@/components/analytics/TrackedButton";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { locations } from "@/data/locations";
import { NORTERRA_BOOKING_URL, PEORIA_BOOKING_URL } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";

const isPeoriaFallbackLink = PEORIA_BOOKING_URL === NORTERRA_BOOKING_URL;

export const metadata: Metadata = buildPageMetadata(
  "Book Your Cut · Men's Lounge Barbershop",
  "Book your appointment online at Men's Lounge Barbershop. Pick your location, choose your barber, and skip the wait.",
  "/booking",
);

export default function BookingPage() {
  return (
    <>
      <section className="bg-brand-dark py-14 md:py-20">
        <div className="container-shell">
          <MotionReveal>
            <SectionHeading
              eyebrow="Booking"
              title="Book Your Appointment"
              description="Pick your location and book in under a minute."
              centered
            />
          </MotionReveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {locations.map((location, index) => (
              <MotionReveal key={location.slug} delayMs={index * 70}>
                <article className="motion-surface rounded-xl2 border border-brand-gold/20 bg-brand-dark-alt p-6 shadow-card">
                  <h2 className="text-2xl font-bold text-brand-cream">{location.title}</h2>
                  <p className="mt-3 text-sm text-brand-slate">{location.addressLine1}</p>
                  <p className="text-sm text-brand-slate">{location.addressLine2}</p>
                  <a href={location.phoneHref} className="motion-link mt-2 block w-fit text-sm font-semibold text-brand-gold">
                    {location.phoneDisplay}
                  </a>

                  {location.slug === "peoria" && isPeoriaFallbackLink ? (
                    <p className="mt-4 rounded-lg border border-brand-gold/45 bg-brand-gold/10 px-3 py-2 text-sm text-brand-cream">
                      Online booking for Peoria opens in our shared booking page right now.
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
              </MotionReveal>
            ))}
          </div>

          <MotionReveal delayMs={120}>
            <div className="motion-surface mt-10 rounded-xl2 border border-brand-gold/20 bg-brand-dark-alt p-6 text-center">
              <p className="text-brand-cream">
                Prefer to walk in? We welcome walk-ins at both locations during all business hours.
              </p>
              <p className="mt-2 text-sm text-brand-slate">
                Call us: Norterra (623) 556-3193 · Peoria (623) 440-9412
              </p>
            </div>
          </MotionReveal>
        </div>
      </section>

    </>
  );
}
