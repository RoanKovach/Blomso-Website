import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getVerifiedClaims } from "@/content/claims";
import { TraceNumberDemo } from "@/components/trace-number-demo";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Audit-ready, source-linked soil and field data for reporting and decisions. Ingestion, QC, provenance, and export today.",
};

export default function PlatformPage() {
  const capabilities = getVerifiedClaims("capability");

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        The platform
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
        Audit-ready, source-linked soil and field data for reporting and decisions. Soil is the beachhead; we also ingest sensors, weather, and field notes into one traceable record.
      </p>
      <p className="mt-6 text-sm font-medium text-muted-foreground">
        Today: dashboards, reports, and evidence links. Next: baselines, benchmarks, and early prediction. Later: scenario testing and simulation on verified data.
      </p>

      {/* ── Pipeline: Collect → Link → Model → Prove ─────────── */}
      <section aria-labelledby="pipeline-heading" className="mt-12 sm:mt-16">
        <h2 id="pipeline-heading" className="text-2xl font-bold tracking-tight">
          Collect &rarr; Link &rarr; Model &rarr; Prove
        </h2>
        <div className="bg-field-map mt-8 grid gap-8 rounded-lg border border-border/60 p-6 sm:grid-cols-2 lg:grid-cols-4 sm:p-8">
          {[
            {
              step: "01",
              title: "Collect",
              desc: "Soil lab results, IoT sensor streams, weather data, and field scout notes. Connect existing sources through the API or enter data through mobile forms.",
            },
            {
              step: "02",
              title: "Link",
              desc: "Provenance and integrity: every data point is timestamped at capture, anomaly-flagged against expected ranges, and linked to its original source.",
            },
            {
              step: "03",
              title: "Model",
              desc: "As the verified dataset grows, we build field baselines and early prediction. Scenario testing and simulation on top of your data, later.",
            },
            {
              step: "04",
              title: "Prove",
              desc: "Source-linked reports, dashboards, and alerts with evidence trails, so agronomists and investors can trace any figure back to field-level data.",
            },
          ].map((s) => (
            <div key={s.step}>
              <p className="text-sm font-semibold text-primary">
                {s.step}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm font-medium text-muted-foreground">
          Today: dashboards, reports, and evidence links. Roadmap: modeling, simulation, and ranked recommendations.
        </p>
      </section>

      {/* ── How we validate ───────────────────────────────────── */}
      <section aria-labelledby="validate-heading" className="mt-16">
        <h2 id="validate-heading" className="text-2xl font-bold tracking-tight">
          How data integrity works
        </h2>
        <Separator className="mt-4" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Source-linked data",
              desc: "Every metric traces back to its original source: a lab report, sensor reading, or field entry. No orphaned numbers.",
            },
            {
              title: "Timestamped ingestion",
              desc: "Each value is timestamped at capture, so you know when it entered the system and where it came from.",
            },
            {
              title: "Anomaly flagging",
              desc: "Automated checks flag readings outside expected ranges. Review before they feed into reports or models.",
            },
            {
              title: "Export-ready reports",
              desc: "Reports and exports include source references and lineage. Trace any figure back to its field-level source.",
            },
          ].map((v) => (
            <Card key={v.title} className="border-border/60 motion-safe:transition-[transform,box-shadow] motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">{v.title}</CardTitle>
                <CardDescription>{v.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* ── Trace a number ─────────────────────────────────── */}
        <h3 className="mt-10 text-lg font-semibold">Trace a number</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          When you trace a metric, you see its source document, timestamp, validation status, and where it appears in reports.
        </p>
        <TraceNumberDemo />
      </section>

      {/* ── Capabilities (verified) ─────────────────────────────── */}
      {capabilities.length > 0 && (
        <section aria-labelledby="capabilities-heading" className="mt-16">
          <h2
            id="capabilities-heading"
            className="text-2xl font-bold tracking-tight"
          >
            Capabilities
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {capabilities.map((c) => (
              <Card key={c.id} className="border-border/60 motion-safe:transition-[transform,box-shadow] motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md">
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
      <section className="mt-16 text-center sm:mt-20">
        <h2 className="text-2xl font-bold tracking-tight">
          See it in action
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Request a walkthrough tailored to your fields.
        </p>
        <Button asChild size="lg" className="mt-8 w-full sm:w-auto">
          <Link href="/contact">Request a walkthrough</Link>
        </Button>
      </section>
    </div>
  );
}
