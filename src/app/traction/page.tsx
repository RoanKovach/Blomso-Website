import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getTractionClaims } from "@/content/claims";
import { externalLinks } from "@/content/links";
import { SourceLabel } from "@/components/source-label";
import { SupportStrip } from "@/components/support-strip";
import { TechstarsTimelineItem } from "@/components/techstars-timeline-item";
import { CompanyFoundedTimelineItem } from "@/components/company-founded-timeline-item";

export const metadata: Metadata = {
  title: "Traction",
  description:
    "Soil intelligence metrics and timeline from Blomso. Every number traces to its source.",
};

export default function TractionPage() {
  const milestones = getTractionClaims("milestone");
  const press = getTractionClaims("press");

  const hasProof = milestones.length > 0 || press.length > 0;

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Traction
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Every number traces to its source. Nothing projected, nothing estimated.
        </p>
      </div>

      {/* ── Partners & Programs (same full-width strip as homepage) ── */}
      <SupportStrip />

      {/* ── Take a deeper dive strip ─────────────────────────────── */}
      <section className="border-y border-border/60 bg-muted/40 px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Take a deeper dive
          </span>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="outline" size="sm">
              <a
                href={externalLinks.demo.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {externalLinks.demo.label}
                <svg aria-hidden="true" className="ml-1 inline-block h-3 w-3 opacity-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a
                href={externalLinks.roadmap.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {externalLinks.roadmap.label}
                <svg aria-hidden="true" className="ml-1 inline-block h-3 w-3 opacity-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a
                href={externalLinks.feedback.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {externalLinks.feedback.label}
                <svg aria-hidden="true" className="ml-1 inline-block h-3 w-3 opacity-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      {!hasProof && (
        <p className="mt-12 text-muted-foreground">
          No verified proof data available yet. Claims will appear here once
          they are added to the claims registry with verification.
        </p>
      )}

      {/* ── Timeline ───────────────────────────────────────────── */}
      {milestones.length > 0 && (
        <section aria-labelledby="timeline-heading" className="mt-12">
          <h2 id="timeline-heading" className="text-2xl font-bold tracking-tight">
            Timeline
          </h2>
          <Separator className="mt-4" />
          <div className="relative mt-8">
            {/* Line: through circle centers, starts at first circle top, ends at last circle bottom */}
            <div
              className="absolute bottom-[6px] left-[11px] top-[6px] w-0.5 -translate-x-1/2 bg-border"
              aria-hidden="true"
            />
            <ol className="space-y-6 pl-6">
              {milestones.map((m) => {
                if (m.id === "founded") {
                  return <CompanyFoundedTimelineItem key={m.id} milestone={m} />;
                }
                if (m.id === "techstars-2024") {
                  return <TechstarsTimelineItem key={m.id} milestone={m} />;
                }
                return (
                  <li key={m.id} className="relative">
                    <span
                      className="absolute top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-primary"
                      style={{ left: "-13px" }}
                      aria-hidden="true"
                    />
                    <div className="space-y-4">
                      <p className="font-semibold">
                        {m.value ?? ""} &mdash; {m.headline}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>
      )}

      {/* ── Press ─────────────────────────────────────────────── */}
      {press.length > 0 && (
        <section aria-labelledby="press-heading" className="mt-12">
          <h2 id="press-heading" className="text-2xl font-bold tracking-tight">
            Press
          </h2>
          <Separator className="mt-4" />
          <ul className="mt-8 space-y-4">
            {press.map((p) => (
              <li key={p.id}>
                <p className="font-medium">{p.headline}</p>
                {p.detail && (
                  <p className="text-sm text-muted-foreground">{p.detail}</p>
                )}
                <SourceLabel claim={p} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="mt-10 text-center sm:mt-12">
        <h2 className="text-2xl font-bold tracking-tight">
          Want the full picture?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Request investor materials for a closer look at the soil data
          and field evidence behind these numbers.
        </p>
        <Button asChild size="lg" className="mt-8 w-full sm:w-auto">
          <Link href="/contact">Request materials</Link>
        </Button>
      </section>
      </div>
    </>
  );
}
