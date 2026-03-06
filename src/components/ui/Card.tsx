import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <article
      className={cn(
        "motion-surface rounded-xl border border-brand-charcoal bg-brand-dark-alt p-6 text-brand-cream hover:border-brand-gold/40",
        className,
      )}
    >
      {children}
    </article>
  );
}
