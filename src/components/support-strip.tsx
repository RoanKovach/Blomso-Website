import { supporters } from "@/content/supporters";
import type { Supporter, SupporterBand } from "@/content/supporters";
import { cn } from "@/lib/utils";

const BAND_LABELS: Record<SupporterBand, string> = {
  partners: "Official Partners",
  programs: "Programs",
  ecosystem: "Ecosystem",
};

function TrustColumn({ band, items }: { band: SupporterBand; items: Supporter[] }) {
  if (items.length === 0) return null;
  return (
    <div className="flex min-w-0 flex-col items-center gap-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {BAND_LABELS[band]}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {items.map((s) => {
          const img = (
            <img
              src={s.logo}
              alt={`${s.name} logo`}
              className={cn(
                "h-9 w-auto max-w-[180px] object-contain sm:h-11 sm:max-w-[220px]",
                "grayscale opacity-60 transition-[filter,opacity] duration-200",
                "hover:grayscale-0 hover:opacity-100 focus-within:grayscale-0 focus-within:opacity-100",
                s.invertOnLight && "invert",
              )}
              loading="lazy"
              draggable={false}
            />
          );
          const linkLabel = s.relationshipLabel
            ? `${s.name}, ${s.relationshipLabel} (opens in a new tab)`
            : `${s.name} (opens in a new tab)`;
          return s.href ? (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              aria-label={linkLabel}
            >
              {img}
            </a>
          ) : (
            <span key={s.id} className="shrink-0" aria-label={s.ariaLabel}>
              {img}
            </span>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Trust band with three columns: Official Partners, Programs, Ecosystem.
 *
 * Placement: homepage (below hero) and traction page (top).
 */
export function SupportStrip() {
  const byBand = {
    partners: supporters.filter((s) => s.band === "partners"),
    programs: supporters.filter((s) => s.band === "programs"),
    ecosystem: supporters.filter((s) => s.band === "ecosystem"),
  };

  return (
    <section
      aria-label="Trust"
      className="border-y border-border/60 bg-muted/40 px-4 py-8 sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Trust
        </p>
        <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-[1fr_1.5fr_minmax(480px,1fr)]">
          <TrustColumn band="partners" items={byBand.partners} />
          <TrustColumn band="programs" items={byBand.programs} />
          <TrustColumn band="ecosystem" items={byBand.ecosystem} />
        </div>
      </div>
    </section>
  );
}
