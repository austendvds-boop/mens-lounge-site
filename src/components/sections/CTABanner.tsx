import { MotionReveal } from "@/components/motion/MotionReveal";
import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <section className="bg-brand-dark py-16">
      <MotionReveal className="container-shell">
        <div className="motion-surface rounded-2xl border border-brand-gold/40 bg-gradient-to-r from-brand-dark-alt to-brand-dark px-8 py-12 text-center md:px-12">
          <h2 className="font-display text-3xl font-bold text-brand-cream md:text-5xl">
            Your next great cut is one click away.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-brand-slate md:text-lg">
            Lock in your appointment now and walk out with a fresh, confident look.
          </p>

          <div className="mt-8 flex justify-center">
            <Button href="/booking" className="!px-10 !py-4 text-base">
              Book Your Cut
            </Button>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
