"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

/**
 * Traction now lives on the home page as #traction.
 *
 * `next.config.ts` uses `output: "export"`, where Next's `redirects()` does not
 * run, so this route redirects client-side with a `meta refresh` fallback for
 * clients that do not execute the router effect.
 */
export default function TractionRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#traction");
  }, [router]);

  return (
    <>
      <meta name="robots" content="noindex, follow" />
      <meta httpEquiv="refresh" content="0; url=/#traction" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-muted-foreground">
          Traction has moved to the home page.{" "}
          <Link
            href="/#traction"
            className="rounded-sm font-medium text-foreground underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Continue to Traction
          </Link>
          .
        </p>
      </div>
    </>
  );
}
