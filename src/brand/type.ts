/**
 * blomso typography
 *
 * Two font-pair options optimized for credibility and readability.
 * Pick ONE pair and apply consistently across the product.
 *
 * Both pairs follow the same principle:
 *   headline → authoritative serif or geometric sans
 *   body     → high-x-height humanist sans for long-form clarity
 */

// ── Option A: "Institutional" ────────────────────────────────────────
// Signals trust and financial seriousness.
// Headline: DM Serif Display — sharp contrast serif, reads as modern finance.
// Body:     Inter — neutral, highly legible, excellent at small sizes.

export const optionA = {
  name: "Institutional",
  headline: {
    family: "'DM Serif Display', Georgia, serif",
    weights: [400] as const,
    usage: "h1–h3, hero statements, investor-facing callouts",
  },
  body: {
    family: "'Inter', system-ui, sans-serif",
    weights: [400, 500, 600] as const,
    usage: "body text, UI labels, navigation, captions",
  },
} as const;

// ── Option B: "Technical" ────────────────────────────────────────────
// Signals precision and domain expertise.
// Headline: Plus Jakarta Sans — geometric, slightly warm, confident.
// Body:     Source Sans 3 — Adobe's open workhorse, crisp at every size.

export const optionB = {
  name: "Technical",
  headline: {
    family: "'Plus Jakarta Sans', 'Helvetica Neue', sans-serif",
    weights: [600, 700] as const,
    usage: "h1–h3, hero statements, section headers",
  },
  body: {
    family: "'Source Sans 3', system-ui, sans-serif",
    weights: [400, 600] as const,
    usage: "body text, UI labels, navigation, captions",
  },
} as const;

// ── Shared scale ─────────────────────────────────────────────────────
// rem-based, assuming 16px root.

export const scale = {
  xs: "0.75rem",   // 12px — captions, fine print
  sm: "0.875rem",  // 14px — labels, secondary text
  base: "1rem",    // 16px — body
  lg: "1.125rem",  // 18px — lead paragraphs
  xl: "1.25rem",   // 20px — h4
  "2xl": "1.5rem", // 24px — h3
  "3xl": "2rem",   // 32px — h2
  "4xl": "2.5rem", // 40px — h1
  "5xl": "3.25rem",// 52px — hero headline
} as const;

export const lineHeight = {
  tight: 1.15,  // headlines
  normal: 1.5,  // body text
  relaxed: 1.7, // long-form reading
} as const;

export type FontPair = typeof optionA | typeof optionB;
export type TypeScale = typeof scale;
