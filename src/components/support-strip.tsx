import { supporters } from "@/content/supporters";
import type { Supporter, SupporterBand } from "@/content/supporters";
import { cn } from "@/lib/utils";
import styles from "./support-strip.module.css";

const BAND_LABELS: Record<SupporterBand, string> = {
  partners: "Official Partners",
  programs: "Programs",
  ecosystem: "Ecosystem",
};

const BAND_ORDER: SupporterBand[] = ["partners", "programs", "ecosystem"];

const HEADING_CLASS =
  "text-xs font-semibold uppercase tracking-wide text-muted-foreground";

const LOGO_CLASS = [
  "h-9 w-auto max-w-[180px] object-contain sm:h-11 sm:max-w-[220px]",
  "grayscale opacity-60 transition-[filter,opacity] duration-200",
  "hover:grayscale-0 hover:opacity-100 focus-within:grayscale-0 focus-within:opacity-100",
].join(" ");

/** Bob durations between 4 and 6 seconds, cycled per logo. */
const BOB_DURATIONS = [4.2, 5.4, 4.7, 5.8, 4.4, 5.1, 6.0];

/**
 * Timing for one logo's bob, keyed by its position in the full list rather
 * than by copy, so a logo and its duplicate always share a phase. That keeps
 * the loop free of vertical jumps when the second copy takes over. Negative
 * delays start each logo mid-cycle, so nothing sits still on load.
 */
function bobTiming(phaseIndex: number) {
  return {
    animationDuration: `${BOB_DURATIONS[phaseIndex % BOB_DURATIONS.length]}s`,
    animationDelay: `-${(phaseIndex * 0.7).toFixed(1)}s`,
  };
}

function logoImage(s: Supporter) {
  return (
    <img
      src={s.logo}
      alt={`${s.name} logo`}
      className={cn(LOGO_CLASS, s.invertOnLight && "invert")}
      loading="lazy"
      draggable={false}
    />
  );
}

function linkLabel(s: Supporter) {
  return s.relationshipLabel
    ? `${s.name}, ${s.relationshipLabel} (opens in a new tab)`
    : `${s.name} (opens in a new tab)`;
}

/** One logo. The bob sits inside the link, so the link's box stays still. */
function RibbonLogo({
  supporter,
  phaseIndex,
  duplicate,
}: {
  supporter: Supporter;
  phaseIndex: number;
  duplicate: boolean;
}) {
  const bobbing = (
    <span className={styles.bob} style={bobTiming(phaseIndex)}>
      {logoImage(supporter)}
    </span>
  );

  return supporter.href ? (
    <a
      href={supporter.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      aria-label={linkLabel(supporter)}
      tabIndex={duplicate ? -1 : undefined}
    >
      {bobbing}
    </a>
  ) : (
    <span className="shrink-0" aria-label={supporter.ariaLabel}>
      {bobbing}
    </span>
  );
}

/** A heading with the logos it belongs to, travelling together. */
function RibbonGroup({
  band,
  items,
  phaseOf,
  duplicate,
}: {
  band: SupporterBand;
  items: Supporter[];
  phaseOf: (id: string) => number;
  duplicate: boolean;
}) {
  if (items.length === 0) return null;
  return (
    <div className={styles.group}>
      <p className={HEADING_CLASS}>{BAND_LABELS[band]}</p>
      <div className={styles.groupLogos}>
        {items.map((s) => (
          <RibbonLogo
            key={s.id}
            supporter={s}
            phaseIndex={phaseOf(s.id)}
            duplicate={duplicate}
          />
        ))}
      </div>
    </div>
  );
}

/** The original three-column layout, rendered only when motion is reduced. */
function StaticColumn({
  band,
  items,
}: {
  band: SupporterBand;
  items: Supporter[];
}) {
  if (items.length === 0) return null;
  return (
    <div className="flex min-w-0 w-full flex-col items-center justify-center gap-4 text-center">
      <p className={HEADING_CLASS}>{BAND_LABELS[band]}</p>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {items.map((s) =>
          s.href ? (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              aria-label={linkLabel(s)}
            >
              {logoImage(s)}
            </a>
          ) : (
            <span key={s.id} className="shrink-0" aria-label={s.ariaLabel}>
              {logoImage(s)}
            </span>
          ),
        )}
      </div>
    </div>
  );
}

/**
 * Trust band: Official Partners, Programs, Ecosystem.
 *
 * Travels as a continuous full-width ribbon, with the pre-existing static grid
 * shown instead when the viewer prefers reduced motion.
 *
 * Placement: homepage, below the hero.
 */
export function SupportStrip() {
  const byBand: Record<SupporterBand, Supporter[]> = {
    partners: supporters.filter((s) => s.band === "partners"),
    programs: supporters.filter((s) => s.band === "programs"),
    ecosystem: supporters.filter((s) => s.band === "ecosystem"),
  };

  const ordered = BAND_ORDER.flatMap((band) => byBand[band]);
  const phaseById = new Map(ordered.map((s, i) => [s.id, i]));
  const phaseOf = (id: string) => phaseById.get(id) ?? 0;

  const copy = (duplicate: boolean) =>
    BAND_ORDER.map((band) => (
      <RibbonGroup
        key={`${duplicate ? "dup" : "main"}-${band}`}
        band={band}
        items={byBand[band]}
        phaseOf={phaseOf}
        duplicate={duplicate}
      />
    ));

  return (
    <section
      aria-label="Partners and programs"
      className="border-y border-border/60 bg-muted/40 py-8"
    >
      {/* Full width: outside the content container, so the ribbon runs edge
          to edge instead of clipping at the container's sides. */}
      <div className={styles.viewport}>
        <div className={styles.track}>
          <div className={styles.trackCopy}>{copy(false)}</div>
          <div className={styles.trackCopy} aria-hidden="true">
            {copy(true)}
          </div>
        </div>
      </div>

      <div className={cn(styles.staticFallback, "mx-auto max-w-[100rem] px-4 sm:px-6")}>
        {/* Fluid columns: fixed minimums here overflowed the viewport at
            about 1440 and forced the page to scroll sideways. */}
        <div className="grid justify-items-center gap-8 sm:grid-cols-3">
          <StaticColumn band="partners" items={byBand.partners} />
          <StaticColumn band="programs" items={byBand.programs} />
          <StaticColumn band="ecosystem" items={byBand.ecosystem} />
        </div>
      </div>
    </section>
  );
}
