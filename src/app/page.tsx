import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getTractionClaims, getVerifiedClaims } from "@/content/claims";
import { externalLinks } from "@/content/links";
import { SupportStrip } from "@/components/support-strip";
import { HeroBg } from "@/components/hero-bg";
import { TraceNumberDemo } from "@/components/trace-number-demo";
import { TechstarsTimelineItem } from "@/components/techstars-timeline-item";
import { CompanyFoundedTimelineItem } from "@/components/company-founded-timeline-item";

export default function HomePage() {
  const capabilities = getVerifiedClaims("capability");
  const milestones = getTractionClaims("milestone");

  const platformFeatures = [
    {
      id: "management-zones",
      headline: "Management zones from imagery",
      detail:
        "Search and score satellite scenes, generate zones, edit them as real geometry, export to SMS and GIS.",
    },
    ...capabilities.map((c) => ({
      id: c.id,
      headline: c.headline,
      detail: c.detail,
    })),
  ];

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
            A Biospheric Operating System rooted in the soil.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Blomso unifies fragmented agricultural data into data-driven digital twins, so AI can test field decisions before you do, turning biological complexity into practical insight.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a
                href={externalLinks.demo.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the Blomso Portal
                <svg aria-hidden="true" className="ml-1 inline-block h-3 w-3 opacity-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="/contact">Request a walkthrough</Link>
            </Button>
          </div>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            The Portal is the Blomso OS application. It starts with management zones.
          </p>
        </div>
      </section>

      {/* ── Partners & Programs ─────────────────────────────────── */}
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

      {/* ── Traction ─────────────────────────────────────────────── */}
      {milestones.length > 0 && (
        <section
          id="traction"
          aria-labelledby="traction-heading"
          className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12 sm:px-6 sm:py-16"
        >
          <h2
            id="traction-heading"
            className="text-center text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Traction
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Every number traces to its source. Nothing projected, nothing estimated.
          </p>
          <Separator className="mt-8" />
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

      {/* ── Biospheric OS ─────────────────────────────────────────── */}
      <section className="bg-field-map border-t border-border/60 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            We&rsquo;re building a biospheric OS
          </h2>
          <div className="mt-10 grid gap-8 sm:mt-12 md:grid-cols-3">
            <div className="rounded-lg border border-border/60 bg-background p-6">
              <h3 className="text-lg font-semibold text-primary">Done</h3>
              <p className="mt-2 text-sm text-muted-foreground">Ingest → Standardize → QC → Report</p>
              <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Lab and field data ingestion</li>
                <li>QC + anomaly flags + audit trail</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border/60 bg-background p-6">
              <h3 className="text-lg font-semibold text-primary">Now</h3>
              <p className="mt-2 text-sm text-muted-foreground">Baselines → predictions → assistant workflows</p>
              <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Management zones from imagery, in use on real fields</li>
                <li>Field baselines and context modeling</li>
                <li>Simple predictions</li>
                <li>Agronomy assistant workflows</li>
              </ul>
              <p className="mt-4 text-sm italic text-muted-foreground">
                There are steps between these that we are not listing yet.
              </p>
            </div>
            <div className="rounded-lg border border-border/60 bg-background p-6">
              <h3 className="text-lg font-semibold text-primary">Later</h3>
              <p className="mt-2 text-sm text-muted-foreground">Digital twin + in-silico trials</p>
              <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Digital twin across practices</li>
                <li>In-silico trials across biologicals and inputs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Platform ─────────────────────────────────────────────── */}
      <section
        id="platform"
        aria-labelledby="platform-heading"
        className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20"
      >
        <h2
          id="platform-heading"
          className="text-center text-2xl font-bold tracking-tight sm:text-3xl"
        >
          What the platform does
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base text-muted-foreground">
          Audit-ready, source-linked soil and field data for reporting and decisions. Soil is the beachhead. We also ingest sensors, weather, and field notes into the same traceable record, including uploaded PDFs/photos/CSVs that we extract into structured data.
        </p>

        {/* Collect → Link → Model → Prove (compact four step row) */}
        <div className="bg-field-map mt-10 grid gap-6 rounded-lg border border-border/60 p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Collect",
              desc: "Soil lab results, IoT sensor streams, weather data, and field scout notes. Upload PDFs/photos/CSVs or connect sources through the API. We extract key fields into a normalized dataset for aggregation and reporting.",
            },
            {
              step: "02",
              title: "Link",
              desc: "Provenance and integrity: every data point is timestamped at capture, anomaly-flagged against expected ranges, and linked to its original source. Lineage is preserved across transformations (raw → extracted fields → standardized units → aggregated views).",
            },
            {
              step: "03",
              title: "Model (Coming next)",
              desc: "As the verified dataset grows, we build field baselines and early prediction. Scenario testing and simulation on top of your data, later.",
            },
            {
              step: "04",
              title: "Prove",
              desc: "Source-linked reports, dashboards, and alerts with evidence trails, so agronomists and investors can trace any figure back to field-level data.",
            },
          ].map((s) => (
            <div key={s.step}>
              <p className="text-xs font-semibold text-primary">{s.step}</p>
              <h3 className="mt-1 text-base font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm font-medium text-muted-foreground">
          Today: dashboards, reports, and evidence links. Next: baselines, benchmarks, and early prediction. Later: scenario testing, simulation, and ranked recommendations.
        </p>

        {/* Trace a number */}
        <h3 className="mt-12 text-lg font-semibold">Trace a number</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          When you trace a metric, you see its source document, timestamp, QC flags, and the transformation steps used to produce it.
        </p>
        <TraceNumberDemo />

        {/* How data integrity works */}
        <h3 className="mt-12 text-lg font-semibold">How data integrity works</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Source-linked and timestamped.</span>{" "}
            Every metric traces back to a lab report, sensor reading, or field entry, stamped at capture. No orphaned numbers.
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Anomaly flagged.</span>{" "}
            Automated checks catch readings outside expected ranges, for review before they feed into reports or models.
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Export-ready lineage.</span>{" "}
            Reports and exports include source references, so any figure traces back to its field-level source.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {platformFeatures.map((f) => (
            <Card
              key={f.id}
              className="border-border/60 motion-safe:transition-[transform,box-shadow] motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md"
            >
              <CardHeader>
                <CardTitle className="text-lg">{f.headline}</CardTitle>
                {f.detail && <CardDescription>{f.detail}</CardDescription>}
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

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
            <a
              href={externalLinks.demo.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open the Blomso Portal
              <svg aria-hidden="true" className="ml-1 inline-block h-3 w-3 opacity-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
