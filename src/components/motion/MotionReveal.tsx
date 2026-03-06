"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealState = "idle" | "hidden" | "visible";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

export function MotionReveal({ children, className, delayMs = 0 }: MotionRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<RevealState>("idle");

  useEffect(() => {
    const element = elementRef.current;

    if (!element || typeof window === "undefined") {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setState("visible");
      return;
    }

    const isAlreadyInView = () => {
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight * 0.92;
    };

    if (isAlreadyInView()) {
      setState("visible");
      return;
    }

    setState("hidden");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setState("visible");
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -5% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={cn("motion-reveal", className)}
      data-state={state}
      style={{ "--reveal-delay": `${delayMs}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
