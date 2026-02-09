/**
 * External product links — single source of truth.
 *
 * Internal redirect routes (/demo, /feedback, /roadmap) 302 to these
 * URLs so we can swap destinations or add tracking without changing
 * every reference.
 */

export const externalLinks = {
  demo: {
    href: "https://blomsoconsulting.com/",
    label: "Demo",
    description: "Try the live product",
  },
  feedback: {
    href: "https://blomso.featurebase.app/",
    label: "Feedback",
    description: "Share ideas and vote on features",
  },
  roadmap: {
    href: "https://blomso.featurebase.app/roadmap",
    label: "Roadmap",
    description: "See what we're building next",
  },
} as const;

export type ExternalLinkKey = keyof typeof externalLinks;
