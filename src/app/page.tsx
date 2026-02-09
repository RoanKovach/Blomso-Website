import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { getVerifiedClaims, getTractionClaims } from "@/content/claims";
import { externalLinks } from "@/content/links";
import { SourceLabel } from "@/components/source-label";
import { SupportStrip } from "@/components/support-strip";
import { HeroBg } from "@/components/hero-bg";

export default function HomePage() {
  const metrics = getTractionClaims("metric");
  const capabilities = getVerifiedClaims("capability");

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="bg-field-gradient bg-grain relative overflow-hidden min-h-[400px] sm:min-h-[420px]">
        {/* Background photo — falls back to gradient + grain when image fails */}
        <HeroBg />
        {/* Readability overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-white/90 via-white/70 to-white/60"
          aria-hidden="true"
        />

        <div className="relative z-20 mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:py-28">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Soil data you can actually trust—ready for reporting and decisions.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Blomso unifies lab results and field context into a source-linked soil record, then automates QC and reporting—so you spend less time cleaning spreadsheets and more time acting.
          </p>
          <ul className="mx-auto mt-6 max-w-lg list-inside list-disc space-y-2 text-left text-sm text-muted-foreground sm:text-base">
            <li>Ingest lab PDFs/CSVs + normalize results into one schema</li>
            <li>QC + anomaly flags + audit trail (every value traceable)</li>
            <li>Auto-generate reports + exports (investor, sustainability, agronomy)</li>
          </ul>
          <p className="mx-auto mt-6 max-w-xl text-sm italic text-muted-foreground">
            Next: As this record grows, we layer soil intelligence—benchmarked predictions and scenario testing—on top of your verified data.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/contact">Request a walkthrough</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="/platform">See the platform</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Partners & Programs ─────────────────────────────────── */}
      <SupportStrip />

      {/* ── Evidence ──────────────────────────────────────────── */}
      {metrics.length > 0 && (
        <section
          aria-label="Evidence"
          className="border-y border-border/60 bg-muted/40"
        >
          <div className="mx-auto grid max-w-6xl gap-px sm:grid-cols-3">
            {metrics.map((m) => (
              <div
                key={m.id}
                className="flex flex-col items-center gap-1 bg-background px-6 py-6 sm:py-8"
              >
                <span className="text-3xl font-bold tabular-nums">
                  {m.value?.toLocaleString()}
                  {m.unit === "%" ? "%" : ""}
                </span>
                <span className="text-sm text-muted-foreground">
                  {m.unit === "%" ? m.headline : m.unit}
                </span>
                <SourceLabel claim={m} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── What it replaces ──────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          What it replaces
        </h2>
        <div className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-3">
          {[
            {
              title: "Fragmented field truth",
              desc: "One structured record across labs, sensors, and field notes.",
            },
            {
              title: "Unverifiable claims",
              desc: "Every metric traceable back to its source.",
            },
            {
              title: "Slow, manual reporting",
              desc: "Automated report generation with full provenance.",
            },
          ].map((p) => (
            <Card
              key={p.title}
              className="border-border/60 motion-safe:transition-[transform,box-shadow] motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md"
            >
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
                <CardDescription>{p.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Now / Next / Later ────────────────────────────────────── */}
      <section className="bg-field-map border-t border-border/60 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Now / Next / Later
          </h2>
          <div className="mt-10 grid gap-8 sm:mt-12 md:grid-cols-3">
            <div className="rounded-lg border border-border/60 bg-background p-6">
              <h3 className="text-lg font-semibold text-primary">Now (Track A)</h3>
              <p className="mt-2 text-sm text-muted-foreground">Ingest → Standardize → QC → Report</p>
              <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Lab and field data ingestion</li>
                <li>Normalization into one schema</li>
                <li>QC + anomaly flags + audit trail</li>
                <li>Automated reports and exports</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border/60 bg-background p-6">
              <h3 className="text-lg font-semibold text-primary">Next (early Track B)</h3>
              <p className="mt-2 text-sm text-muted-foreground">Baselines → predictions → assistant workflows</p>
              <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Field baselines and context modeling</li>
                <li>Simple predictions</li>
                <li>Agronomy assistant workflows</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border/60 bg-background p-6">
              <h3 className="text-lg font-semibold text-primary">Later (full Track B)</h3>
              <p className="mt-2 text-sm text-muted-foreground">Digital twin + in-silico trials</p>
              <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Digital twin across practices</li>
                <li>In-silico trials across biologicals and inputs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Live product strip ──────────────────────────────────── */}
      <section className="border-y border-border/60 bg-muted/40 px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Live product
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

      {/* ── Capabilities (from verified claims) ─────────────────── */}
      {capabilities.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            What the platform does
          </h2>
          <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2">
            {capabilities.map((c) => (
              <Card
                key={c.id}
                className="border-border/60 motion-safe:transition-[transform,box-shadow] motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{c.headline}</CardTitle>
                  {c.detail && <CardDescription>{c.detail}</CardDescription>}
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-field-gradient bg-grain border-t border-border/60 px-4 py-16 text-center sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          See it on your data.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          We&rsquo;ll show a walkthrough tailored to your fields and the
          evidence you already have.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/contact">Request a walkthrough</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link href="/traction">View evidence</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
