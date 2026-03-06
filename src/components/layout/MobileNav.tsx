"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
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
        className="motion-surface rounded-md border border-brand-gold/40 bg-brand-dark-alt p-2 text-brand-gold"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-brand-dark/80"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          />
          <div
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
            className="fixed right-0 top-0 z-50 h-full w-[82%] max-w-sm border-l border-brand-gold/20 bg-brand-dark p-6 shadow-2xl"
          >
            <div className="mb-8 flex items-center justify-between">
              <p className="text-lg font-semibold text-brand-cream">Menu</p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="motion-surface rounded-md border border-brand-gold/40 bg-brand-dark-alt p-2 text-brand-gold"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="space-y-5" aria-label="Mobile navigation">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="motion-link block w-fit text-base font-semibold text-brand-cream"
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

