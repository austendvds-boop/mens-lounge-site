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
        "motion-surface rounded-xl border border-brand-gold/20 bg-white p-6 shadow-md",
        className
      )}
    >
      {children}
    </article>
  );
}

