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

/**
 * Narrative shown when a timeline entry without photos is expanded, with the
 * source the program name in that entry line links to.
 */
const milestoneStories: Record<string, { story: string; href?: string }> = {
  "cofounders-meet": {
    story:
      "Kalib and Roan both grew up in small rural Ohio communities, Kalib in Baltimore and Roan in Wintersville. As roommates at Ohio State, they spent a lot of time talking about how they could make the world better. Those conversations kept coming back to food: everyone has to eat, yet one of society’s most vital systems remains fragmented, under pressure, and underserved by modern software, data and AI. Building a more resilient agricultural system felt like a problem too important to ignore.",
  },
  "masschallenge-2024": {
    story:
      "MassChallenge Switzerland put us in rooms with agriculture companies, research groups, and investors from outside the Midwest. Over the following year we traveled to New York, Chicago, Switzerland, and England and kept working across Ohio, meeting startups, researchers, and people throughout agriculture. What we found was not a lack of expertise, data, or technology. Much of it was highly specialized and locally distributed, but disconnected. Blomso began focusing on how those pieces could work together, and on building the foundation for what could come next.",
    href:
      "https://masschallenge.org/news/masschallenge-switzerland-2024-early-stage-accelerator-cohort/",
  },
  "plugandplay-2025": {
    story:
      "Plug and Play Topeka continued that work from inside the industry, alongside the companies and growers whose problems we were trying to solve. It is where the shape of Blomso settled: the data and decision layer between what a field records and what an advisor signs off on.",
    href:
      "https://www.prweb.com/releases/plug-and-play-topeka-selects-new-cohort-of-25-agtech-and-animal-health-startups-for-accelerator-program-302228259.html",
  },
  "brookside-2025": {
    story:
      "Brookside Laboratories, one of North America’s longest-running agricultural laboratory and consultant networks, became Blomso’s first major industry partner. Working alongside its agronomists and consultant community grounded our ideas in real fields, real workflows and decades of practical experience, and showed us where technology could actually make a difference.",
    href:
      "https://www.blinc.com/",
  },
  "bayer-lifehub-2026": {
    story:
      "Bayer and AgStart selected Blomso as one of two winners of the global Golden Ticket III program, bringing the company into Bayer’s LifeHub California open innovation ecosystem. Access to scientists, research infrastructure and the wider agricultural R&D community gave Blomso a new environment to test its ideas, and pushed the team from understanding agricultural decisions toward understanding how agricultural innovation itself could be improved.",
  },
};

/** Source link for timeline entries that carry no expand of their own. */
const milestoneLinks: Record<string, string> = {
  "nvidia-2025": "https://www.nvidia.com/en-us/startups/?ncid=no-ncid",
};

/** Matches the entry line link treatment used by the expandable entries. */
const entryLinkClass =
  "rounded-sm underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export default function HomePage() {
  const milestones = getTractionClaims("milestone");

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="bg-field-gradient bg-grain relative overflow-hidden min-h-[400px] sm:min-h-[420px]">
        {/* Background photo, falls back to gradient + grain when image fails */}
        <HeroBg />
        {/* Readability overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-white/90 via-white/70 to-white/60"
          aria-hidden="true"
        />

        <div className="relative z-20 mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:py-28">
          <h1 className="font-bold tracking-tight">
            <span className="block text-[1.375rem] sm:text-4xl lg:text-5xl">
              A Biospheric Operating System
            </span>{" "}
            <span className="mt-1 block text-lg sm:mt-2 sm:text-3xl lg:text-4xl">
              rooted in the soil
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            We connect fragmented field data, help people understand what’s happening and how confident they can be in it, and work toward testing management decisions before putting them into practice.
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
              <Link href="/contact">Talk with us</Link>
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
          Farmers, agronomists and researchers are all trying to answer the same question: how do soil, water and yield potential change across this field, and how should each part of it be managed? Today, much of the information needed to answer it is still disconnected. Three things make that information difficult to connect and carry forward.
        </p>
        <div className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-3">
          {[
            {
              title: "The field is split across systems",
              desc: "Soil tests, imagery, sensors, weather, yield maps and field notes all describe the same acres, but they rarely come together as one usable picture.",
            },
            {
              title: "Data loses its context",
              desc: "A number means little without knowing where it came from, when it was measured, how it was produced and what was happening in the field around it. Without that context, comparison, validation and modeling get harder.",
            },
            {
              title: "Knowledge stays siloed",
              desc: "Much of what is learned about a field stays with the person who worked it or within an individual team’s records. That experience is valuable, but difficult to share, connect with other evidence and build on across people and seasons.",
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

      {/* ── Our approach ─────────────────────────────────────────── */}
      <section
        id="platform"
        aria-labelledby="platform-heading"
        className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20"
      >
        <h2
          id="platform-heading"
          className="text-center text-2xl font-bold tracking-tight sm:text-3xl"
        >
          Our approach
        </h2>
        <div className="mt-10 grid gap-8 sm:mt-12 md:grid-cols-3">
          {[
            {
              title: "Fuse.",
              desc: "We’re building ways to bring lab results, satellite imagery, sensors, weather, yield and field notes together while preserving where they came from, when they were collected and how they were processed.",
            },
            {
              title: "See.",
              desc: "Our approach centers on maps and information people can inspect, question and refine, bringing the evidence alongside their knowledge of the field.",
            },
            {
              title: "Simulate.",
              desc: "The longer-term goal is to use that foundation to compare possible management choices before field implementation, with predictions tested against observed outcomes.",
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
                const entry = milestoneStories[m.id];
                if (entry) {
                  return (
                    <StoryTimelineItem
                      key={m.id}
                      milestone={m}
                      story={entry.story}
                      href={entry.href}
                    />
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
                        {m.value ?? ""} &middot;{" "}
                        {milestoneLinks[m.id] ? (
                          <a
                            href={milestoneLinks[m.id]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={entryLinkClass}
                          >
                            {m.headline}
                            <span className="sr-only"> (opens in a new tab)</span>
                          </a>
                        ) : (
                          m.headline
                        )}
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
            Everyone eats. The goal is agriculture that is more productive, resilient and profitable, without taking from the future. Better data leads to better decisions. Building the future step by step.
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
            <Link href="/contact">Talk with us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
