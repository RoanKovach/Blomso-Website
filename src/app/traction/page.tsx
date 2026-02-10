import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getTractionClaims } from "@/content/claims";
import { SourceLabel } from "@/components/source-label";
import { SupportStrip } from "@/components/support-strip";

export const metadata: Metadata = {
  title: "Traction",
  description:
    "Soil intelligence metrics and timeline from Blomso. Every number traces to its source.",
};

export default function TractionPage() {
  const metrics = getTractionClaims("metric");
  const milestones = getTractionClaims("milestone");
  const press = getTractionClaims("press");

  const hasProof = metrics.length > 0 || milestones.length > 0 || press.length > 0;

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

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      {!hasProof && (
        <p className="mt-12 text-muted-foreground">
          No verified proof data available yet. Claims will appear here once
          they are added to the claims registry with verification.
        </p>
      )}

      {/* ── Metrics ───────────────────────────────────────────── */}
      {metrics.length > 0 && (
        <section aria-labelledby="metrics-heading" className="mt-12">
          <h2 id="metrics-heading" className="text-2xl font-bold tracking-tight">
            Key metrics
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            ~10,000 soil samples ingested (and growing ~100/day). Every number traces to its source.
          </p>
          <Separator className="mt-4" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <Card key={m.id}>
                <CardHeader>
                  <CardTitle className="text-3xl tabular-nums">
                    {m.value?.toLocaleString()}
                    {m.unit === "%" ? "%" : ""}
                  </CardTitle>
                  <CardDescription>
                    {m.unit === "%" ? m.headline : (m.unit || m.headline)}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
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
              {milestones.map((m) => (
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
                    {m.id === "techstars-2024" && (
                      <div className="grid gap-4 pt-2 sm:grid-cols-3">
                        <img
                          src="/timeline/cofounders-meet.png"
                          alt="Techstars cohort on a video call"
                          className="h-40 w-full rounded-md object-cover"
                        />
                        <img
                          src="/timeline/cofounders-meet.png"
                          alt="Techstars Columbus cohort group photo"
                          className="h-40 w-full rounded-md object-cover"
                        />
                        <img
                          src="/timeline/cofounders-meet.png"
                          alt="Blomso founding team under Blomso banner"
                          className="h-40 w-full rounded-md object-cover"
                        />
                      </div>
                    )}
                  </div>
                </li>
              ))}
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
