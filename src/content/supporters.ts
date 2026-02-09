/**
 * Centralized list of partners and program relationships.
 *
 * This is the single source of truth for the "Trust" band.
 * Band: partners (official), programs (membership), ecosystem (accelerators).
 */

export type SupporterBand = "partners" | "programs" | "ecosystem";

export interface Supporter {
  id: string;
  name: string;
  /** Optional link to the organisation's homepage. */
  href?: string;
  /** Band for three-column layout: partners | programs | ecosystem */
  band: SupporterBand;
  /** Path to logo image served from /public/partners/. */
  logo: string;
  /** True for logos with white/light artwork needing inversion on light backgrounds. */
  invertOnLight?: boolean;
  /** Optional accessible label override (e.g. for founder-affiliation context). */
  ariaLabel?: string;
  /** Short relationship label (e.g. "Lab partner", "Program member"). */
  relationshipLabel?: string;
}

export const supporters: Supporter[] = [
  {
    id: "brookside-laboratories",
    name: "Brookside Laboratories",
    href: "https://www.blinc.com/",
    band: "partners",
    logo: "/partners/Brookside_Amplify_Horizontal-1920w.png",
    relationshipLabel: "Lab partner",
  },
  {
    id: "ohio-state-university",
    name: "Ohio State University",
    href: "https://www.osu.edu/",
    band: "partners",
    logo: "/partners/ohio-state-university-seal.png",
    invertOnLight: false,
    ariaLabel: "University partner — founded by Ohio State alumni",
    relationshipLabel: "University partner",
  },
  {
    id: "nvidia-inception",
    name: "NVIDIA Inception",
    href: "https://www.nvidia.com/en-us/startups/",
    band: "programs",
    logo: "/partners/NV_Inception_Program_Logo_NV_Inception_Logo_H_CMYK-1080x662.png.webp",
    relationshipLabel: "Program member",
  },
  {
    id: "bayer",
    name: "Bayer",
    href: "https://www.bayer.com/",
    band: "programs",
    logo: "/partners/Logo_Bayer.png",
    relationshipLabel: "Program member",
  },
  {
    id: "techstars",
    name: "Techstars",
    href: "https://www.techstars.com/",
    band: "programs",
    logo: "/partners/logo-dark.png",
    invertOnLight: true,
    relationshipLabel: "Accelerator alumni",
  },
  {
    id: "masschallenge-switzerland",
    name: "MassChallenge Switzerland",
    href: "https://masschallenge.org/",
    band: "ecosystem",
    logo: "/partners/mc-logo@2x.png",
    relationshipLabel: "Program participant",
  },
  {
    id: "plug-and-play-topeka",
    name: "Plug and Play Topeka",
    href: "https://www.plugandplaytechcenter.com/",
    band: "ecosystem",
    logo: "/partners/pnp-logo.svg",
    relationshipLabel: "Program participant",
  },
];
