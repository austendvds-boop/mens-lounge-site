export function TrustBar() {
  return (
    <section className="border-t border-brand-gold/20 bg-brand-dark-alt py-4">
      <div className="container-shell">
        <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-0">
          <span className="text-sm text-brand-cream/80">
            <span className="text-brand-gold">★★★★★</span> 300+ five-star reviews
          </span>
          <span className="hidden px-4 text-brand-gold/40 sm:inline">·</span>
          <span className="text-sm text-brand-cream/80">Two Valley Locations</span>
          <span className="hidden px-4 text-brand-gold/40 sm:inline">·</span>
          <span className="text-sm text-brand-cream/80">Walk-ins Welcome</span>
        </div>
      </div>
    </section>
  );
}
