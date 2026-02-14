export const SITE_URL = "https://blomso.com";
export const SITE_NAME = "Blomso";

/**
 * Build page-level OG, Twitter, and canonical metadata.
 * `path` must start with "/" (or be "" for the homepage).
 */
export function pageOG(path: string, title: string, description: string) {
  const url = path === "" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  const fullTitle = path === "" ? title : `${title} | ${SITE_NAME}`;

  return {
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website" as const,
      locale: "en_US",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — A Biospheric Operating System rooted in the soil`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: fullTitle,
      description,
      images: ["/twitter-image"],
    },
    alternates: {
      canonical: url,
    },
  };
}
