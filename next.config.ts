import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,

  // Static export for shared hosting (public_html)
  output: "export",
  trailingSlash: true,

  // next/image on static hosting
  images: { unoptimized: true },

  // Do not ship browser source maps with the production export
  productionBrowserSourceMaps: false,

  // NOTE: Next "redirects()" does not run on static export.
  // Put redirects in public_html/.htaccess instead.
};

export default nextConfig;
