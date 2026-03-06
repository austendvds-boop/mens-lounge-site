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
        <div
          className={`mb-4 flex items-center gap-3 ${resolvedAlign === "center" ? "justify-center" : "justify-start"}`}
        >
          <span className="h-px w-6 bg-brand-gold/40" />
          <p
            className="text-[11px] font-medium tracking-[0.25em] text-brand-gold"
            style={{ fontVariant: "small-caps" }}
          >
            {eyebrow.toLowerCase()}
          </p>
          <span className="h-px w-6 bg-brand-gold/40" />
        </div>
      ) : null}
      <h2 className="font-display text-3xl font-bold text-brand-cream md:text-4xl">{title}</h2>
      {supportingText ? (
        <p className="mt-4 text-base text-brand-slate md:text-lg">{supportingText}</p>
      ) : null}
    </div>
  );
}
