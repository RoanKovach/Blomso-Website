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

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
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

          <nav aria-label="Footer navigation" className="flex gap-12">
            {/* Company */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Company
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/traction" className="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                    Traction
                  </Link>
                </li>
                <li>
                  <Link href="/platform" className="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                    Platform
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Product */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Product
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href={externalLinks.demo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {externalLinks.demo.label}
                    <ExternalIcon />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
                <li>
                  <a
                    href={externalLinks.roadmap.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
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
                    className="inline-flex items-center rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {externalLinks.feedback.label}
                    <ExternalIcon />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <p className="mt-8 text-xs text-muted-foreground sm:text-center">
          &copy; {new Date().getFullYear()} Blomso. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
