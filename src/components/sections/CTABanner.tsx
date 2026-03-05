import { Button } from "@/components/ui/Button";
import { PRIMARY_BOOKING_URL } from "@/lib/constants";

export function CTABanner() {
  return (
    <section className="bg-brand-gold/20 py-14">
      <div className="container-shell rounded-xl2 border border-brand-gold/40 bg-white p-8 text-center shadow-card md:p-12">
        <h2 className="text-3xl font-bold md:text-4xl">Ready for a Fresh Cut?</h2>
        <p className="mt-3 text-base text-brand-slate md:text-lg">
          Book online in seconds — or just walk in.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            href={PRIMARY_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-40"
          >
            Book Now
          </Button>
          <Button href="tel:+16235563193" variant="secondary" className="min-w-40">
            Call Norterra: (623) 556-3193
          </Button>
          <Button href="tel:+16234409412" variant="secondary" className="min-w-40">
            Call Peoria: (623) 440-9412
          </Button>
        </div>
      </div>
    </section>
  );
}

