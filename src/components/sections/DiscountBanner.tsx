import { ShieldCheck } from "lucide-react";
import { MotionReveal } from "@/components/motion/MotionReveal";

export function DiscountBanner() {
  return (
    <section className="bg-brand-navy py-10 text-white">
      <MotionReveal className="container-shell">
        <div className="motion-surface flex flex-col gap-4 rounded-xl2 border border-brand-gold/35 bg-brand-navy px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-brand-gold" aria-hidden />
            <div>
              <h2 className="text-2xl font-bold text-white">We Appreciate Those Who Serve</h2>
              <p className="mt-2 text-sm text-white/90 md:text-base">
                $3 off any haircut for active military, firefighters, police officers, and school teachers. Just show your ID.
              </p>
            </div>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}

