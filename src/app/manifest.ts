import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Blomso",
    short_name: "Blomso",
    description:
      "Soil data you can trust, ready for reporting and decisions.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#3B7D28",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
    ],
  };
}
