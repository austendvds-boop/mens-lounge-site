type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
  centered?: boolean;
};

export function SectionHeading({
  title,
  subtitle,
  description,
  eyebrow,
  align = "left",
  centered = false,
}: SectionHeadingProps) {
  const resolvedAlign = centered ? "center" : align;
  const supportingText = description ?? subtitle;

  return (
    <div className={resolvedAlign === "center" ? "text-center" : "text-left"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl text-brand-cream md:text-5xl">{title}</h2>
      {supportingText ? (
        <p className="mt-4 text-base text-brand-slate md:text-lg">{supportingText}</p>
      ) : null}
    </div>
  );
}

