import Image from "next/image";
import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy py-28 text-white md:py-36">
      {/* PLACEHOLDER: Replace with owner-supplied photo. Source: https://www.pexels.com/photo/the-interior-of-a-barber-shop-7518728/ */}
      <Image
        src="/images/hero/barbershop-interior-01.jpg"
        alt="Interior of Men's Lounge Barbershop"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-navy/70" />

      <div className="container-shell relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="motion-fade-up text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold"
            style={{ "--reveal-delay": "40ms" } as CSSProperties}
          >
            Men&apos;s Lounge Barbershop
          </p>
          <h1
            className="motion-fade-up mt-4 text-4xl font-extrabold leading-tight text-white md:text-6xl"
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
          >
            Phoenix&apos;s Premier Men&apos;s Barbershop
          </h1>
          <p
            className="motion-fade-up mt-5 text-lg text-white/90 md:text-xl"
            style={{ "--reveal-delay": "190ms" } as CSSProperties}
          >
            Classic cuts. Hot towel shaves. Two locations. Walk-ins welcome.
          </p>
          <div
            className="motion-fade-up mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ "--reveal-delay": "260ms" } as CSSProperties}
          >
            <Button href="/booking" className="min-w-44">
              Book Your Cut
            </Button>
            <Button
              href="/services"
              variant="secondary"
              className="min-w-44 border-white bg-white/10 text-white hover:bg-white hover:text-brand-navy"
            >
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
