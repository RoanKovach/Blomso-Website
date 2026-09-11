"use client";

import { useState } from "react";

type FirstPilotTimelineItemProps = {
  milestone: {
    value?: number | null;
    headline: string;
  };
};

export function FirstPilotTimelineItem({
  milestone,
}: FirstPilotTimelineItemProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li className="relative">
      <span
        className="absolute top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-primary"
        style={{ left: "-13px" }}
        aria-hidden="true"
      />
      <div className="space-y-4">
        <button
          type="button"
          onClick={() => setExpanded((open) => !open)}
          className="flex items-center gap-2 text-left font-semibold"
          aria-expanded={expanded}
        >
          <span>
            {milestone.value ?? ""} &middot; {milestone.headline}
          </span>
          <span className="text-xs font-normal text-muted-foreground">
            {expanded ? "Collapse timeline" : "Expand timeline"}
          </span>
        </button>
        {expanded && (
          <div className="rounded-lg border border-border/60 bg-background p-4 sm:p-5">
            <p className="text-sm font-medium">What the pilot runs on</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Ingest, Standardize, QC, Report
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Lab and field data ingestion</li>
              <li>QC + anomaly flags + audit trail</li>
            </ul>
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
              Real advisors, real fields, real feedback, weekly.
            </p>
          </div>
        )}
      </div>
    </li>
  );
}
