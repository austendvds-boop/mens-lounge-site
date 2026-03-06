import Link from "next/link";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { INSTAGRAM_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-brand-gold/20 bg-brand-dark text-brand-cream">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-3">
        <div className="space-y-4">
          <p className="text-xl font-extrabold tracking-wide text-brand-gold">MEN&apos;S LOUNGE</p>
          <p className="max-w-sm text-sm text-brand-slate">
            Classic cuts. Straight-razor shaves. Two Phoenix-area locations.
          </p>
          <Button href="/booking" className="!px-5 !py-2">
            Book Your Cut
          </Button>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-cream/90">
            <li>
              <Link href="/" className="motion-link inline-block">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="motion-link inline-block">
                Services & Prices
              </Link>
            </li>
            <li>
              <Link href="/locations" className="motion-link inline-block">
                Locations
              </Link>
            </li>
            <li>
              <Link href="/booking" className="motion-link inline-block">
                Book Your Cut
              </Link>
            </li>
            <li>
              <Link href="/contact" className="motion-link inline-block">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="motion-link inline-block">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3 text-sm text-brand-cream/90">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">
            Contact
          </h3>
          <p>
            Norterra:{" "}
            <a href="tel:+16235563193" className="motion-link inline-block">
              (623) 556-3193
            </a>
          </p>
          <p>
            Peoria:{" "}
            <a href="tel:+16234409412" className="motion-link inline-block">
              (623) 440-9412
            </a>
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="motion-link inline-flex items-center gap-2 text-brand-cream"
          >
            <Instagram size={16} aria-hidden />
            Instagram
          </a>
        </div>
      </div>
      <div className="border-t border-brand-gold/15 py-4 text-center text-xs text-brand-slate">
        © 2026 Men&apos;s Lounge Barbershop. All rights reserved.
      </div>
    </footer>
  );
}

