import { MotionReveal } from "@/components/motion/MotionReveal";
import { Button } from "@/components/ui/Button";

export function DiscountBanner() {
  return (
    <section className="bg-brand-dark py-10">
      <MotionReveal className="container-shell">
        <div className="motion-surface flex flex-col gap-4 border-l-4 border-brand-gold bg-brand-dark-alt px-6 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-lg font-semibold text-brand-cream md:text-xl">
            New clients: 15% off your first visit
          </p>
          <Button href="/booking" className="w-fit">
            Book Now
          </Button>
        </div>
      </MotionReveal>
    </section>
  );
}
