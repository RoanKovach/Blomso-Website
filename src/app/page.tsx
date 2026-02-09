import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
            Proof-grade soil data for operators and investors.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Blomso ingests lab results, sensor feeds, and field observations
            into one traceable record. Every metric links back to its source.
            Operator-ready workflows and faster reporting, today.
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

      {/* ── How it works ────────────────────────────────────────── */}
      <section className="bg-field-map border-t border-border/60 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            How Blomso works
          </h2>
          <div className="mt-10 grid gap-10 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Collect",
                desc: "Labs, sensors, and field notes — ingested through mobile forms or direct API integrations.",
              },
              {
                step: "2",
                title: "Link",
                desc: "Provenance and integrity: timestamps, anomaly flags, and source references on every data point.",
              },
              {
                step: "3",
                title: "Simulate",
                desc: "Digital twins and simulation: coming next. We are building tools to model field baselines and test scenarios before field spend.",
              },
              {
                step: "4",
                title: "Prove",
                desc: "Reports and dashboards where every metric links back to its field-level source.",
              },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center">
                <Badge variant="secondary" className="mb-4 h-10 w-10 items-center justify-center rounded-full text-lg font-bold">
                  {s.step}
                </Badge>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm font-medium text-muted-foreground">
            Today: dashboards, reports, and evidence links. Roadmap: simulation and ranked recommendations.
          </p>
        </div>
      </section>

      {/* ── Platform layers ──────────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Platform layers
        </h2>
        <div className="mt-10 flex flex-col" role="list" aria-label="Blomso platform layers">
          {[
            { layer: "Data ingestion", desc: "Labs, sensors, and field observations arrive continuously." },
            { layer: "Integrity & provenance", desc: "Every value is timestamped and source-linked." },
            { layer: "Digital twins (roadmap)", desc: "Field baselines and context modeling — coming next." },
            { layer: "AI agents (roadmap)", desc: "Trials and outcome comparison — coming next." },
            { layer: "Decision outputs", desc: "Reports and dashboards ship with evidence links today." },
          ].map((l, i) => (
            <div
              key={l.layer}
              role="listitem"
              className={`flex items-baseline gap-4 border-x border-b border-border/60 px-5 py-4 first:rounded-t-lg first:border-t last:rounded-b-lg ${i % 2 === 0 ? "bg-muted/40" : "bg-background"}`}
            >
              <span className="shrink-0 text-xs font-semibold tabular-nums text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <span className="text-sm font-semibold">{l.layer}</span>
                <span className="ml-2 text-sm text-muted-foreground">{l.desc}</span>
              </div>
            </div>
          ))}
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
