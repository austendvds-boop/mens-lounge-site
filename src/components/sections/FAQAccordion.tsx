"use client";

import { useState } from "react";
import type { FAQ } from "@/data/faqs";
import { trackEvent } from "@/lib/analytics";

type FAQAccordionProps = {
  items: FAQ[];
};

function slugifyQuestion(question: string) {
  return question
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `faq-answer-${index}`;

        return (
          <div key={item.question} className="motion-surface rounded-xl border border-brand-navy/15 bg-white p-5 shadow-sm">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => {
                const nextOpen = isOpen ? null : index;
                setOpenIndex(nextOpen);

                if (nextOpen !== null) {
                  trackEvent("faq_expand", { question: slugifyQuestion(item.question) });
                }
              }}
            >
              <span className="text-base font-semibold text-brand-navy md:text-lg">{item.question}</span>
              <span
                className={`text-2xl leading-none text-brand-gold transition-transform duration-300 ease-out ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
                aria-hidden
              >
                +
              </span>
            </button>

            <div
              className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out ${
                isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
              }`}
            >
              <p id={answerId} className="overflow-hidden text-sm text-brand-slate md:text-base">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

