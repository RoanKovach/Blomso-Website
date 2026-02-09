"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const trailSteps = [
  { label: "Origin", value: "Lab report, Brookside Laboratories, sample #BL-4471" },
  { label: "Timestamp", value: "2026-02-03 14:22 UTC" },
  { label: "Validation", value: "Anomaly check: passed (within expected range)" },
  { label: "Included in", value: "Soil Health Report → Section 2" },
] as const;

export function TraceNumberDemo() {
  const [open, setOpen] = useState(false);
  const panelId = "trace-demo-trail";

  return (
    <div className="mt-8 rounded-lg border border-border/60 bg-background p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="outline" className="text-xs font-normal">
          Sample
        </Badge>
        <span className="text-sm font-medium">
          Organic carbon: 2.1 %
        </span>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((prev) => !prev)}
          className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-border bg-muted px-3 py-1.5 text-xs font-medium transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <svg
            aria-hidden="true"
            className={cn(
              "h-3.5 w-3.5 transition-transform motion-reduce:transition-none",
              open && "rotate-90",
            )}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          Trace
        </button>
      </div>

      <div
        id={panelId}
        role="region"
        aria-label="Provenance trail for Organic carbon metric"
        className={cn(
          "grid transition-[grid-template-rows] motion-reduce:transition-none",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <ol className="mt-4 space-y-2 border-l-2 border-border/60 pl-4">
            {trailSteps.map((s) => (
              <li key={s.label} className="text-sm">
                <span className="font-medium">{s.label}:</span>{" "}
                <span className="text-muted-foreground">{s.value}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
