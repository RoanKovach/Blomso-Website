/**
 * Single source of truth for all provable claims.
 *
 * CLAUDE.md hard rule: no claim may appear on a public page unless it
 * exists here with `verified: true`. Components must filter on that flag
 * before rendering.
 */

export type ClaimCategory =
  | "metric"
  | "customer"
  | "press"
  | "milestone"
  | "capability"
  | "program"
  | "award";

export type EvidenceTier = "external" | "self" | "internal" | "unverified";

export type Relationship = "accelerator" | "program" | "partner";

export interface Claim {
  id: string;
  category: ClaimCategory;
  /** Short label rendered in proof sections */
  headline: string;
  /** Optional longer description */
  detail?: string;
  /** Numeric value for metric-type claims */
  value?: number;
  /** Unit / suffix rendered after the value (e.g. "%", "operators") */
  unit?: string;
  /**
   * URL pointing to the source evidence.
   * Required when `verified` is true.
   */
  sourceUrl?: string;
  /**
   * Short human-readable label for the source (e.g. "Pilot cohort survey",
   * "CRM export"). Displayed alongside the claim in proof sections.
   */
  sourceLabel?: string;
  /**
   * Path to a logo asset relative to /public (e.g. "/logos/ycombinator.svg").
   * When absent or the file does not exist, renderers should fall back to a
   * text badge using the headline.
   */
  logoPath?: string;
  /** Evidence tier — controls where the claim may be rendered. */
  evidenceTier: EvidenceTier;
  /** Only render on public pages when true */
  verified: boolean;
  /** Relationship type — classifies the nature of the association. */
  relationship?: Relationship;
}

// ── Seed data ────────────────────────────────────────────────────────
// Add real claims here as they are verified. Flip `verified` to true
// only after the source has been reviewed.
//
// Rules:
//   - verified: true requires a sourceUrl
//   - Homepage proof bar: verified && evidenceTier === "external"
//   - Traction page: verified && (external || internal w/ sourceLabel)

export const claims: Claim[] = [
  // Metrics
  {
    id: "operators-onboarded",
    category: "metric",
    headline: "Operators onboarded",
    value: 12,
    unit: "operators",
    sourceUrl: "https://blomso.com/data/crm-export-2025-q4",
    sourceLabel: "CRM export, 2025-Q4",
    evidenceTier: "internal",
    verified: true,
  },
  {
    id: "data-points-collected",
    category: "metric",
    headline: "Operational data points collected",
    value: 140_000,
    unit: "data points",
    sourceUrl: "https://blomso.com/data/production-aggregate-2025-12",
    sourceLabel: "Production database aggregate",
    evidenceTier: "internal",
    verified: true,
  },
  {
    id: "avg-reporting-time-reduction",
    category: "metric",
    headline: "Average reduction in reporting time",
    value: 62,
    unit: "%",
    sourceUrl: "https://blomso.com/data/pilot-survey-2025-q3",
    sourceLabel: "Pilot cohort survey, 2025-Q3",
    evidenceTier: "self",
    verified: true,
  },

  // Milestones
  {
    id: "founded",
    category: "milestone",
    headline: "Company founded",
    detail: "Blomso incorporated",
    value: 2024,
    sourceUrl: "https://blomso.com/data/incorporation-docs",
    sourceLabel: "Incorporation docs",
    evidenceTier: "self",
    verified: true,
  },
  {
    id: "first-pilot",
    category: "milestone",
    headline: "First operator pilot launched",
    detail: "Production pilot with first paying operator",
    value: 2024,
    sourceUrl: "https://blomso.com/data/internal-records-pilot",
    sourceLabel: "Internal records",
    evidenceTier: "internal",
    verified: true,
  },
  {
    id: "seed-round",
    category: "milestone",
    headline: "Seed round closed",
    detail: "Pre-seed / seed funding secured",
    evidenceTier: "unverified",
    verified: false, // flip when ready to announce
  },

  // Capabilities
  {
    id: "real-time-dashboards",
    category: "capability",
    headline: "Soil health dashboards",
    detail:
      "Live soil and field metrics, updated as new samples and sensor readings arrive.",
    evidenceTier: "self",
    sourceUrl: "https://blomso.com/platform#dashboards",
    sourceLabel: "Product page",
    verified: true,
  },
  {
    id: "automated-reporting",
    category: "capability",
    headline: "Automated sustainability reporting",
    detail:
      "Generate investor- and regulator-ready sustainability reports without manual data assembly.",
    evidenceTier: "self",
    sourceUrl: "https://blomso.com/platform#reporting",
    sourceLabel: "Product page",
    verified: true,
  },
  {
    id: "field-data-capture",
    category: "capability",
    headline: "Field data capture",
    detail:
      "Mobile-friendly ingestion for agronomists and scouts working on-site.",
    evidenceTier: "self",
    sourceUrl: "https://blomso.com/platform#capture",
    sourceLabel: "Product page",
    verified: true,
  },
  {
    id: "integration-api",
    category: "capability",
    headline: "Sensor & ERP integration API",
    detail:
      "Connect Blomso to soil sensors, weather stations, ERP, and accounting systems.",
    evidenceTier: "self",
    sourceUrl: "https://blomso.com/platform#api",
    sourceLabel: "Product page",
    verified: true,
  },

  // Programs / accelerators — verified with external sources
  {
    id: "program-techstars-columbus",
    category: "program",
    headline: "Techstars Columbus",
    detail: "Techstars Columbus Powered by The Ohio State University — inaugural cohort",
    sourceUrl:
      "https://www.techstars.com/newsroom/techstars-columbus-powered-by-the-ohio-state-university-announces-inaugural-class",
    sourceLabel: "Techstars Newsroom",
    evidenceTier: "external",
    verified: true,
    relationship: "accelerator",
  },
  {
    id: "program-masschallenge",
    category: "program",
    headline: "MassChallenge Switzerland",
    detail: "MassChallenge Switzerland 2024 early-stage cohort",
    sourceUrl:
      "https://masschallenge.org/news/masschallenge-switzerland-2024-early-stage-accelerator-cohort/",
    sourceLabel: "MassChallenge",
    evidenceTier: "external",
    verified: true,
    relationship: "accelerator",
  },
  {
    id: "program-plug-and-play",
    category: "program",
    headline: "Plug and Play Topeka",
    detail: "Plug and Play Topeka Fall 2024 agtech cohort",
    sourceUrl:
      "https://www.agritechtomorrow.com/news/2024/08/22/plug-and-play-topeka-selects-new-cohort-of-25-agtech-and-animal-health-startups-for-accelerator-program/15770/",
    sourceLabel: "AgriTechTomorrow",
    evidenceTier: "external",
    verified: true,
    relationship: "program",
  },
  {
    id: "program-nvidia-inception",
    category: "program",
    headline: "NVIDIA Inception",
    detail: "NVIDIA Inception program member",
    sourceUrl: "https://www.blomso.com/team-4",
    sourceLabel: "blomso.com",
    evidenceTier: "self",
    verified: true,
    relationship: "program",
  },

  // Partners — founder-verified, no primary-source URL on partner domain
  {
    id: "partner-bayer",
    category: "program",
    headline: "Bayer",
    detail: "Bayer partnership",
    sourceUrl: "https://www.blomso.com/team-4",
    sourceLabel: "blomso.com",
    evidenceTier: "self",
    verified: true,
    relationship: "partner",
  },
  {
    id: "partner-brookside-laboratories",
    category: "program",
    headline: "Brookside Laboratories",
    detail: "Brookside Laboratories partnership",
    sourceUrl: "https://www.blomso.com/team-4",
    sourceLabel: "blomso.com",
    evidenceTier: "self",
    verified: true,
    relationship: "partner",
  },
];

// ── Helpers ──────────────────────────────────────────────────────────

/** All verified claims, optionally filtered by category. */
export function getVerifiedClaims(category?: ClaimCategory): Claim[] {
  return claims.filter(
    (c) => c.verified && (category === undefined || c.category === category),
  );
}

/** Single verified claim by ID. */
export function getVerifiedClaimById(id: string): Claim | undefined {
  return claims.find((c) => c.id === id && c.verified);
}

/**
 * Claims eligible for the traction page and homepage metrics.
 * Requirement: verified === true AND (external OR self OR internal with sourceLabel).
 */
export function getTractionClaims(category?: ClaimCategory): Claim[] {
  return claims.filter(
    (c) =>
      c.verified &&
      (c.evidenceTier === "external" ||
        c.evidenceTier === "self" ||
        (c.evidenceTier === "internal" && !!c.sourceLabel)) &&
      (category === undefined || c.category === category),
  );
}

