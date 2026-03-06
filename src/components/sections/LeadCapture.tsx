import { LEAD_CAPTURE_ENDPOINT } from "@/lib/constants";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Button } from "@/components/ui/Button";

export function LeadCapture() {
  return (
    <section className="bg-brand-dark py-12 md:py-16">
      <MotionReveal className="container-shell">
        <div className="motion-surface rounded-xl2 border border-brand-gold/25 bg-brand-dark-alt p-6 md:p-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">First Visit Offer</p>
            <h2 className="mt-3 font-display text-4xl text-brand-cream md:text-5xl">25% Off Your First Cut</h2>
            <p className="mt-3 text-base text-brand-slate md:text-lg">
              New here? Get 25% off — just tell us where to send it.
            </p>
          </div>

          <form
            action={LEAD_CAPTURE_ENDPOINT}
            method="POST"
            className="mx-auto mt-7 max-w-3xl"
          >
            <input type="hidden" name="source" value="homepage-offer" />
            <label htmlFor="lead-contact" className="sr-only">
              Email or phone number
            </label>
            <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <input
                id="lead-contact"
                name="contact"
                required
                className="min-h-12 rounded-full border border-brand-gold/30 bg-brand-dark px-5 text-base text-brand-cream placeholder:text-brand-slate/70"
                placeholder="Email or phone number"
              />
              <Button type="submit" className="w-full sm:w-auto">
                Claim My 25% Off
              </Button>
            </div>
            <p className="mt-3 text-center text-sm text-brand-slate">
              We only use this to send your first-visit offer.
            </p>
          </form>
        </div>
      </MotionReveal>
    </section>
  );
}

