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
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold text-brand-cream md:text-4xl">{title}</h2>
      {supportingText ? (
        <p className="mt-4 text-base text-brand-slate md:text-lg">{supportingText}</p>
      ) : null}
    </div>
  );
}
