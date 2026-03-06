import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-brand-dark py-20 md:py-28">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl rounded-xl2 border border-brand-gold/20 bg-brand-dark-alt p-8 text-center shadow-card md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">Page not found</p>
          <h1 className="mt-4 text-3xl font-extrabold text-brand-cream md:text-4xl">That page is not here.</h1>
          <p className="mt-3 text-brand-slate">
            The page may have moved. Use the buttons below to get back on track.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/booking" className="min-w-40">
              Book Your Cut
            </Button>
            <Button href="/" variant="secondary" className="min-w-40">
              Back to Home
            </Button>
          </div>

          <p className="mt-6 text-sm text-brand-slate">
            Need help right away? Call Norterra at{" "}
            <a className="font-semibold text-brand-gold underline-offset-4 hover:underline" href="tel:+16235563193">
              (623) 556-3193
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
