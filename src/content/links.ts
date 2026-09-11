/**
 * External product links — single source of truth.
 *
 * Referenced by the nav, footer, hero and deeper-dive strip so we can swap
 * destinations or add tracking without changing every reference.
 *
 * `portal` is the one name for the app across the whole site.
 */

export const externalLinks = {
  portal: {
    href: "https://app.blomso.com/",
    label: "Blomso Portal",
    description: "Open the live product",
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
