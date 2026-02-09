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
    "How Blomso unifies soil samples, sensor feeds, and field observations into a single source of agronomic intelligence.",
};

export default function PlatformPage() {
  const capabilities = getVerifiedClaims("capability");

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        The platform
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
        Blomso unifies soil samples, sensor feeds, and field observations
        into one structured record of land health — traceable from source
        to report.
      </p>

      {/* ── Pipeline: Collect → Link → Simulate → Prove ─────── */}
      <section aria-labelledby="pipeline-heading" className="mt-12 sm:mt-16">
        <h2 id="pipeline-heading" className="text-2xl font-bold tracking-tight">
          Collect &rarr; Link &rarr; Simulate &rarr; Prove
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
              title: "Simulate",
              desc: "AI agents test practices, inputs, and strains on digital twins — running trials before committing resources in the field.",
            },
            {
              step: "04",
              title: "Prove",
              desc: "Source-linked reports, dashboards, and alerts with evidence trails — so agronomists and investors can trace any figure back to field-level data.",
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
          Output: ranked recommendations + confidence scores + evidence links.
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
              desc: "Every metric traces back to its original source — a lab report, sensor reading, or field entry. No orphaned numbers.",
            },
            {
              title: "Timestamped ingestion",
              desc: "Incoming data is timestamped at the point of capture, creating a record of when each observation entered the system.",
            },
            {
              title: "Anomaly flagging",
              desc: "Automated checks flag readings outside expected ranges, prompting review before they influence downstream models.",
            },
            {
              title: "Export-ready reports",
              desc: "Generated reports include source references and data lineage, so stakeholders can trace any figure back to field-level data.",
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
