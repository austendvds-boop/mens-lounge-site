import { cn } from "@/lib/utils";

type MapEmbedProps = {
  src: string;
  title: string;
  className?: string;
};

export function MapEmbed({ src, title, className }: MapEmbedProps) {
  return (
    <iframe
      title={title}
      src={src}
      loading="eager"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      className={cn("motion-surface h-72 w-full rounded-xl border border-brand-navy/15", className)}
    />
  );
}

