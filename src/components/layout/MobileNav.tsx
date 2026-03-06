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
        className="motion-surface rounded-md border border-brand-navy/20 p-2 text-brand-navy"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-brand-navy/50"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          />
          <div
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
            className="motion-fade-up fixed right-0 top-0 z-50 h-full w-[82%] max-w-sm bg-white p-6 shadow-2xl"
            style={{ "--reveal-delay": "40ms" } as CSSProperties}
          >
            <div className="mb-8 flex items-center justify-between">
              <p className="text-lg font-bold text-brand-navy">Menu</p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="motion-surface rounded-md border border-brand-navy/20 p-2 text-brand-navy"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="space-y-5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="motion-link block w-fit text-base font-semibold text-brand-charcoal"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8">
              <Button
                href="/booking"
                className="w-full"
                ariaLabel="Book now"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

