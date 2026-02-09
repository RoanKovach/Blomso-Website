/**
 * Centralized list of confirmed supporters/backers.
 *
 * This is the single source of truth for the "Supported by" section.
 * Every entry here is treated as verified and rendered on public pages.
 */

export interface Supporter {
  id: string;
  name: string;
  /** Optional link to the organisation's homepage. */
  href?: string;
  /** Kind of relationship. */
  kind: "backer" | "program";
  /** Path to logo image served from /public/partners/. */
  logo: string;
  /** True for logos with white/light artwork needing inversion on light backgrounds. */
  invertOnLight?: boolean;
  /** Optional accessible label override (e.g. for founder-affiliation context). */
  ariaLabel?: string;
}

export const supporters: Supporter[] = [
  {
    id: "brookside-laboratories",
    name: "Brookside Laboratories",
    href: "https://www.blinc.com/",
    kind: "backer",
    logo: "/partners/Brookside_Amplify_Horizontal-1920w.png",
  },
  {
    id: "nvidia-inception",
    name: "NVIDIA Inception",
    href: "https://www.nvidia.com/en-us/startups/",
    kind: "program",
    logo: "/partners/NV_Inception_Program_Logo_NV_Inception_Logo_H_CMYK-1080x662.png.webp",
  },
  {
    id: "bayer",
    name: "Bayer",
    href: "https://www.bayer.com/",
    kind: "backer",
    logo: "/partners/Logo_Bayer.png",
  },
  {
    id: "masschallenge-switzerland",
    name: "MassChallenge Switzerland",
    href: "https://masschallenge.org/",
    kind: "program",
    logo: "/partners/mc-logo@2x.png",
  },
  {
    id: "plug-and-play-topeka",
    name: "Plug and Play Topeka",
    href: "https://www.plugandplaytechcenter.com/",
    kind: "program",
    logo: "/partners/pnp-logo.svg",
  },
  {
    id: "techstars",
    name: "Techstars",
    href: "https://www.techstars.com/",
    kind: "program",
    logo: "/partners/logo-dark.png",
    invertOnLight: true,
  },
  {
    id: "ohio-state-university",
    name: "Ohio State University",
    kind: "backer",
    logo: "/partners/ohio-state-university-seal.png",
    invertOnLight: false,
    /** Accessible label preserving the founder-affiliation context. */
    ariaLabel: "Founded by Ohio State alumni",
  },
];
