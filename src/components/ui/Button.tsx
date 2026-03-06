import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  target?: "_blank" | "_self";
  rel?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-cta-green text-white hover:bg-cta-green/90 focus-visible:ring-cta-green",
  secondary:
    "border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white focus-visible:ring-brand-navy",
  ghost:
    "text-brand-navy underline-offset-4 hover:underline focus-visible:ring-brand-navy",
};

const baseClasses =
  "motion-surface inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.99]";

export function Button({
  href,
  children,
  variant = "primary",
  className,
  target,
  rel,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);

  if (!href) {
    return (
      <button type="button" className={classes} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </button>
    );
  }

  if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

