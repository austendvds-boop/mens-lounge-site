import { MotionReveal } from "@/components/motion/MotionReveal";
import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <section className="bg-brand-dark py-14">
      <MotionReveal className="container-shell">
        <div className="motion-surface rounded-xl2 border border-brand-gold/35 bg-brand-dark-alt p-8 text-center md:p-12">
          <h2 className="font-display text-4xl text-brand-cream md:text-5xl">Your Chair Is Waiting.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-brand-slate md:text-lg">
            Book in seconds, then show up and leave sharper than you arrived.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/booking" className="min-w-44">
              Book Your Cut
            </Button>
            <Button href="tel:+16235563193" variant="secondary" className="min-w-44">
              Call Norterra
            </Button>
            <Button href="tel:+16234409412" variant="secondary" className="min-w-44">
              Call Peoria
            </Button>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}

