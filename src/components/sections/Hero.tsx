import Image from "next/image";
import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-dark py-28 md:py-36">
      {/* PLACEHOLDER: Replace with owner-supplied photo. Source: https://www.pexels.com/photo/the-interior-of-a-barber-shop-7518728/ */}
      <Image
        src="/images/hero/barbershop-interior-01.jpg"
        alt="Interior of Men's Lounge Barbershop"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="container-shell relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p
            className="motion-fade-up text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold"
            style={{ "--reveal-delay": "40ms" } as CSSProperties}
          >
            MEN&apos;S LOUNGE BARBERSHOP
          </p>
          <h1
            className="motion-fade-up mt-5 font-display text-3xl font-bold leading-tight text-brand-cream sm:text-4xl md:text-5xl lg:text-7xl"
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
          >
            Where Phoenix men get their edge back.
          </h1>
          <p
            className="motion-fade-up mx-auto mt-6 max-w-2xl text-lg text-brand-cream/90"
            style={{ "--reveal-delay": "190ms" } as CSSProperties}
          >
            Classic cuts, hot towel shaves, and precision beard work — at two Valley locations.
          </p>
          <div
            className="motion-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ "--reveal-delay": "260ms" } as CSSProperties}
          >
            <Button href="/booking" className="min-w-48">
              Book Your Cut
            </Button>
            <Button href="/services" variant="secondary" className="min-w-44">
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

