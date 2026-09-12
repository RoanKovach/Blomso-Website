import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { NavProgress } from "@/components/nav-progress";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Blomso",
    template: "%s | Blomso",
  },
  description:
    "Where does your field vary, and what should each part get? Blomso builds the data, AI and agentic systems that answer it, starting with management zones from satellite imagery.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  metadataBase: new URL("https://blomso.ai"),
  openGraph: {
    siteName: "Blomso",
    type: "website",
    locale: "en_US",
    title: "Blomso",
    description:
      "Where does your field vary, and what should each part get? Blomso builds the data, AI and agentic systems that answer it, starting with management zones from satellite imagery.",
    url: "https://blomso.ai/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blomso",
    description:
      "Where does your field vary, and what should each part get? Blomso builds the data, AI and agentic systems that answer it, starting with management zones from satellite imagery.",
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
    canonical: "https://blomso.ai/",
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
