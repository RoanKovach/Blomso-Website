import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { NavProgress } from "@/components/nav-progress";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Blomso | Operational results, not promises",
    template: "%s | Blomso",
  },
  description:
    "Soil data you can trust, ready for reporting and decisions. Blomso unifies lab results and field context into a source-linked soil record, then automates QC and reporting.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  metadataBase: new URL("https://blomso.com"),
  openGraph: {
    siteName: "Blomso",
    type: "website",
    locale: "en_US",
    title: "Blomso | Operational results, not promises",
    description:
      "Soil data you can trust, ready for reporting and decisions. Blomso unifies lab results and field context into a source-linked soil record, then automates QC and reporting.",
    url: "https://blomso.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blomso | Operational results, not promises",
    description:
      "Soil data you can trust, ready for reporting and decisions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://blomso.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <NavProgress />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <JsonLd />
      </body>
    </html>
  );
}
