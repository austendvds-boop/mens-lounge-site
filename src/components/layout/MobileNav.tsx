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
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="rounded-md border border-brand-navy/20 p-2 text-brand-navy"
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
          <div className="fixed right-0 top-0 z-50 h-full w-[82%] max-w-sm bg-white p-6 shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-lg font-bold text-brand-navy">Menu</p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="rounded-md border border-brand-navy/20 p-2 text-brand-navy"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="space-y-5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-base font-semibold text-brand-charcoal"
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

