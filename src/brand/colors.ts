/**
 * blomso brand palette
 *
 * Derived from the three-leaf logo mark.
 * The logo contains three overlapping leaves:
 *   - left leaf:   mid-green  (#6DB344)
 *   - top leaf:    dark green (#3B7D28)
 *   - right leaf:  bright green (#7ED957)
 * Overlap regions produce additional tones used as accent shades.
 */

// ── Primary greens (sampled from logo leaves) ────────────────────────

export const green = {
  900: "#2A5B1A", // deepest shadow (text on light backgrounds)
  800: "#3B7D28", // top leaf — primary brand green
  700: "#4E9433", // overlap: left + top leaves
  600: "#6DB344", // left leaf
  500: "#7ED957", // right leaf — accent / CTA
  400: "#9BE577", // tinted right leaf (hover states)
  300: "#B8EE9D", // light tint (badges, highlights)
  200: "#D7F5C8", // very light fill (cards, wells)
  100: "#EDFBE5", // near-white background wash
  50: "#F7FDF4",  // page background subtle tint
} as const;

// ── Neutrals ─────────────────────────────────────────────────────────

export const neutral = {
  950: "#0F1A0B", // near-black with green undertone
  900: "#1A2414", // primary body text
  800: "#2E3A28", // secondary text
  700: "#4A5544", // muted text, borders
  600: "#6B7566", // placeholder text
  500: "#8E968A", // disabled state
  400: "#ADB5A9", // subtle borders
  300: "#C8CEC5", // dividers
  200: "#E0E4DD", // light borders, rules
  100: "#F0F2EE", // light background
  50: "#F8F9F7",  // page background
  0: "#FFFFFF",   // white
} as const;

// ── Semantic tokens ──────────────────────────────────────────────────

export const semantic = {
  textPrimary: neutral[900],
  textSecondary: neutral[700],
  textOnDark: neutral[0],

  bgPage: neutral[0],
  bgSurface: neutral[50],
  bgMuted: neutral[100],

  brandPrimary: green[800],
  brandAccent: green[500],

  ctaDefault: green[800],
  ctaHover: green[700],
  ctaActive: green[900],

  success: green[600],
  border: neutral[200],
  focusRing: green[500],
} as const;

export type GreenScale = typeof green;
export type NeutralScale = typeof neutral;
export type SemanticTokens = typeof semantic;
