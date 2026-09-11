"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

/**
 * The platform section now lives on the home page as #platform.
 *
 * `next.config.ts` uses `output: "export"`, where Next's `redirects()` does not
 * run, so this route redirects client-side with a `meta refresh` fallback for
 * clients that do not execute the router effect.
 */
export default function PlatformRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#platform");
  }, [router]);

  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/#platform" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-muted-foreground">
          The platform section has moved to the home page.{" "}
          <Link
            href="/#platform"
            className="rounded-sm font-medium text-foreground underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Continue to Platform
          </Link>
          .
        </p>
      </div>
    </>
  );
}
