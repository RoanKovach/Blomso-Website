import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getTractionClaims } from "@/content/claims";
import { externalLinks } from "@/content/links";
import { SupportStrip } from "@/components/support-strip";
import { HeroBg } from "@/components/hero-bg";
import { TechstarsTimelineItem } from "@/components/techstars-timeline-item";
import { CompanyFoundedTimelineItem } from "@/components/company-founded-timeline-item";
import { FirstPilotTimelineItem } from "@/components/first-pilot-timeline-item";
import { StoryTimelineItem } from "@/components/story-timeline-item";

/** Narrative shown when a timeline entry without photos is expanded. */
const milestoneStories: Record<string, string> = {
  "cofounders-meet":
    "Two Ohio State students, both in research and both building things on the side, end up roommates and start arguing about which system is worth fixing.",
  "brookside-2025":
    "A soil lab with decades of ground truth and agronomists who do the work. Our first partner with real fields.",
  "bayer-lifehub-2026": "A bigger room for the same idea.",
};

export default function HomePage() {
  const milestones = getTractionClaims("milestone");

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
            Where does your field vary, and what should each part of it get?
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Blomso is building a biospheric operating system, starting in the soil. Everything that describes a field is fused into one record, so the variation can be seen, decided on, and in time simulated. It starts with management zones, in use on real fields today.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a
                href={externalLinks.portal.href}
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
        </div>
      </section>

      {/* ── Partners & Programs ─────────────────────────────────── */}
      <SupportStrip />

      {/* ── What gets in the way today ───────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          What gets in the way today
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Farmers, agronomists and ag researchers ask the same question of a field. Blomso builds the data, AI and agentic systems that answer it. Three things get in the way today.
        </p>
        <div className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-3">
          {[
            {
              title: "Data that never meets.",
              desc: "Soil labs, satellites, sensors, weather, yield monitors and field notes describe the same acre in different files. Blomso brings them into one working record per field.",
            },
            {
              title: "Numbers you cannot trace.",
              desc: "A value with no source, no date and no method cannot be defended. Every number in Blomso keeps where it came from and what was done to it.",
            },
            {
              title: "Work that does not carry over.",
              desc: "The farmer wants to know what to do on this field. The agronomist has to sign the plan. The researcher has to show why it worked. Each rebuilds the same record from scratch, and what one learns rarely reaches the next. Blomso keeps one record all three can work from.",
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

      {/* ── How it works ─────────────────────────────────────────── */}
      <section
        id="platform"
        aria-labelledby="platform-heading"
        className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20"
      >
        <h2
          id="platform-heading"
          className="text-center text-2xl font-bold tracking-tight sm:text-3xl"
        >
          How it works
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base text-muted-foreground">
          Everything that describes a field is fused into one common format, so it can be seen, and in time simulated.
        </p>
        <div className="mt-10 grid gap-8 sm:mt-12 md:grid-cols-3">
          {[
            {
              title: "Fuse.",
              desc: "Lab results, satellite imagery, sensors, weather, yield and field notes are brought onto one grid in one format, and every value keeps its source and what was done to it.",
            },
            {
              title: "See.",
              desc: "The fused record becomes maps a person can read and edit: management zones, band views, terrain in 3D, legends that say exactly what they measure.",
            },
            {
              title: "Simulate.",
              desc: "On that record we build field baselines, then prediction, then simulation, so a practice can be tested before it is planted.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-lg border border-border/60 bg-background p-6"
            >
              <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Every number can be traced back to where it came from.
        </p>
      </section>

      {/* ── The story so far ─────────────────────────────────────── */}
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
            The story so far
          </h2>
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
                if (m.id === "first-pilot") {
                  return <FirstPilotTimelineItem key={m.id} milestone={m} />;
                }
                const story = milestoneStories[m.id];
                if (story) {
                  return (
                    <StoryTimelineItem key={m.id} milestone={m} story={story} />
                  );
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
                        {m.value ?? ""} &middot; {m.headline}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>
      )}

      {/* ── Where we are going ───────────────────────────────────── */}
      <section className="bg-field-map border-t border-border/60 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Where we are going
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
            Everyone eats. The goal is agriculture that is more productive, resilient and profitable, without taking from the future. Better data leads to better decisions, which build that future step by step.
          </p>
          <div className="mt-10 grid gap-8 sm:mt-12 md:grid-cols-3">
            {[
              {
                stage: "Now",
                focus: "Map, refine, and export",
                items: [
                  "Management zones from satellite imagery",
                  "Merge, split, cut out, and edit boundaries",
                  "Export shapefiles into the agronomy tools you already use",
                ],
              },
              {
                stage: "Next",
                focus: "Model, predict, and assist",
                items: [
                  "Field baselines and context models",
                  "Practical predictions",
                  "Assistant workflows that support agronomy decisions",
                ],
              },
              {
                stage: "Later",
                focus: "Simulate, test, and optimize",
                items: [
                  "Field-scale digital twins for management scenarios",
                  "In-silico trials of biologicals, inputs, and management strategies",
                ],
              },
            ].map((c) => (
              <div
                key={c.stage}
                className="rounded-lg border border-border/60 bg-background p-6"
              >
                <h3 className="text-lg font-semibold text-primary">
                  {c.stage}: {c.focus}
                </h3>
                <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  {c.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-field-gradient bg-grain border-t border-border/60 px-4 py-16 text-center sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          See it on your fields.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          We will show a walkthrough on your fields, ending in the file your tools already open. Blomso does not replace the tools you run; it hands them better inputs.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a
              href={externalLinks.portal.href}
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
      </section>
    </>
  );
}
