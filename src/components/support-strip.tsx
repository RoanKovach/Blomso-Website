import { supporters } from "@/content/supporters";
import { PartnerLogoCarousel } from "@/components/partner-logo-carousel";

/**
 * A clean "Supported by" strip with partner logos in a scrollable carousel.
 *
 * Placement: homepage (below hero) and traction page (top).
 */
export function SupportStrip() {
  return (
    <section
      aria-label="Supported by"
      className="border-y border-border/60 bg-muted/40 px-4 py-8 sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Supported by
        </p>

        <PartnerLogoCarousel partners={supporters} />
      </div>
    </section>
  );
}
