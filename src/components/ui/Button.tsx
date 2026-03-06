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
  type?: "button" | "submit" | "reset";
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-gold text-brand-dark hover:bg-brand-gold-hover hover:shadow-gold-glow focus-visible:ring-brand-gold focus-visible:ring-offset-brand-dark",
  secondary:
    "border border-brand-gold text-brand-gold hover:bg-brand-gold/15 hover:text-brand-cream focus-visible:ring-brand-gold focus-visible:ring-offset-brand-dark",
  ghost:
    "rounded-none px-0 py-0 text-brand-cream hover:text-brand-gold focus-visible:ring-brand-gold focus-visible:ring-offset-brand-dark",
};

const baseClasses =
  "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.99]";

const interactiveVariants = new Set<ButtonVariant>(["primary", "secondary"]);

export function Button({
  href,
  children,
  variant = "primary",
  className,
  target,
  rel,
  onClick,
  ariaLabel,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    interactiveVariants.has(variant) && "motion-surface",
    className,
  );

  if (!href) {
    return (
      <button
        type={type}
        className={classes}
        onClick={onClick}
        aria-label={ariaLabel}
      >
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
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
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

