"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { type CSSProperties, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

type NavLink = {
  label: string;
  href: string;
};

type MobileNavProps = {
  links: NavLink[];
};

export function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-drawer"
        className="motion-surface rounded-md border border-brand-charcoal p-2 text-brand-cream"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-brand-dark/98"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          />
          <div
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
            className="motion-fade-up fixed inset-0 z-50 flex flex-col bg-brand-dark/98 p-6"
            style={{ "--reveal-delay": "40ms" } as CSSProperties}
          >
            <div className="mb-10 flex items-center justify-between">
              <p className="font-display text-2xl text-brand-cream">
                Men&apos;s Lounge <span className="text-xs font-normal tracking-widest text-brand-gold/60">Barbershop</span>
              </p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="motion-surface rounded-md border border-brand-charcoal p-2 text-brand-cream"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="space-y-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="motion-link block w-fit text-xl font-semibold text-brand-cream hover:text-brand-gold"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-10">
              <Button
                href="/booking"
                className="w-full"
                ariaLabel="Book your cut"
                onClick={() => setIsOpen(false)}
              >
                Book Your Cut
              </Button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
