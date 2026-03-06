import { MotionReveal } from "@/components/motion/MotionReveal";

export function LeadCapture() {
  return (
    <section className="border-t-2 border-brand-gold bg-brand-dark-alt py-16 md:py-20">
      <MotionReveal className="container-shell">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-cream md:text-4xl">
            New to Men&apos;s Lounge? We&apos;ll take care of you.
          </h2>
          <p className="mt-3 text-base text-brand-slate md:text-lg">
            15% off your first cut. We&apos;ll send it to your inbox.
          </p>

          <form action="#" method="POST" className="mt-8 grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-brand-cream">Name</span>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-xl border border-brand-charcoal bg-brand-dark px-4 py-3 text-brand-cream placeholder:text-brand-slate focus:border-brand-gold focus:outline-none"
                placeholder="Your name"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-brand-cream">Email</span>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-xl border border-brand-charcoal bg-brand-dark px-4 py-3 text-brand-cream placeholder:text-brand-slate focus:border-brand-gold focus:outline-none"
                placeholder="you@example.com"
              />
            </label>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="motion-surface inline-flex items-center justify-center rounded-md bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-gold-light"
              >
                Send My Discount
              </button>
            </div>
          </form>
        </div>
      </MotionReveal>
    </section>
  );
}
