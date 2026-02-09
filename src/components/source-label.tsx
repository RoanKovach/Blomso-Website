import type { Claim } from "@/content/claims";

/**
 * Renders a visible source label or link for a claim.
 * If sourceUrl is present, renders as a link; otherwise plain text.
 */
export function SourceLabel({ claim }: { claim: Claim }) {
  if (!claim.sourceLabel) return null;

  if (claim.sourceUrl) {
    return (
      <a
        href={claim.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground"
        aria-label={`Source: ${claim.sourceLabel}`}
      >
        {claim.sourceLabel}
      </a>
    );
  }

  return (
    <span className="text-xs text-muted-foreground">
      {claim.sourceLabel}
    </span>
  );
}
