import Image from "next/image";
import Link from "next/link";
import { externalLinks } from "@/content/links";

/** SVG arrow-up-right icon for external links */
function ExternalIcon() {
  return (
    <svg
      aria-hidden="true"
      className="ml-1 inline-block h-3 w-3 opacity-50"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  );
}

const linkClass =
  "rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

const externalLinkClass = `inline-flex items-center ${linkClass}`;

const columnHeadingClass =
  "text-xs font-semibold uppercase tracking-wide text-muted-foreground";

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between sm:gap-12">
          {/* ── Identity ──────────────────────────────────────────── */}
          <div className="max-w-xs">
            <Link
              href="/"
              className="inline-flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              aria-label="Blomso home"
            >
              <Image
                src="/logo-mark.png"
                alt=""
                width={28}
                height={23}
                className="h-5 w-auto"
                unoptimized
              />
              <span className="text-sm font-semibold tracking-tight">Blomso</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              The decision layer agriculture is missing.
            </p>
          </div>

          {/* ── Link columns ──────────────────────────────────────── */}
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12"
          >
            {/* Company */}
            <div>
              <p className={columnHeadingClass}>Company</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/#platform" className={linkClass}>
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href="/#traction" className={linkClass}>
                    Story
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={linkClass}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Product */}
            <div>
              <p className={columnHeadingClass}>Product</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href={externalLinks.portal.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={externalLinkClass}
                  >
                    {externalLinks.portal.label}
                    <ExternalIcon />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
                <li>
                  <a
                    href={externalLinks.roadmap.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={externalLinkClass}
                  >
                    {externalLinks.roadmap.label}
                    <ExternalIcon />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
                <li>
                  <a
                    href={externalLinks.feedback.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={externalLinkClass}
                  >
                    {externalLinks.feedback.label}
                    <ExternalIcon />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect — only channels that exist in the repo's content */}
            <div>
              <p className={columnHeadingClass}>Connect</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/contact" className={linkClass}>
                    Contact form
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* ── Bottom row ──────────────────────────────────────────── */}
        <div className="mt-8 flex flex-col gap-3 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Blomso. All rights reserved.
          </p>
          <Link href="/contact" className={`text-xs ${linkClass}`}>
            Request a walkthrough
          </Link>
        </div>
      </div>
    </footer>
  );
}
