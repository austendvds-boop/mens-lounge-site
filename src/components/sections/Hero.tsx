import Image from "next/image";
import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative isolate -mt-20 flex min-h-[100svh] items-center overflow-hidden bg-brand-dark py-28 text-brand-cream md:py-36">
      {/* PLACEHOLDER: Replace with owner-supplied photo. Source: https://www.pexels.com/photo/the-interior-of-a-barber-shop-7518728/ */}
      <Image
        src="/images/hero/barbershop-interior-01.jpg"
        alt="Interior of Men's Lounge Barbershop"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-dark/85" />

      <div className="container-shell relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p
            className="motion-fade-up text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold"
            style={{ "--reveal-delay": "0ms" } as CSSProperties}
          >
            Men&apos;s Lounge Barbershop
          </p>
          <h1
            className="motion-fade-up mt-5 font-display text-5xl leading-tight text-brand-cream md:text-7xl"
            style={{ "--reveal-delay": "100ms" } as CSSProperties}
          >
            Where Craft Meets Confidence
          </h1>
          <p
            className="motion-fade-up mx-auto mt-6 max-w-2xl text-xl text-brand-cream/90 md:text-2xl"
            style={{ "--reveal-delay": "200ms" } as CSSProperties}
          >
            Classic cuts. Straight-razor shaves. Two Phoenix locations.
          </p>
          <div
            className="motion-fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ "--reveal-delay": "300ms" } as CSSProperties}
          >
            <Button href="/booking" className="min-w-48">
              Book Your Cut
            </Button>
            <Button href="/services" variant="secondary" className="min-w-48">
              See What We Do
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

