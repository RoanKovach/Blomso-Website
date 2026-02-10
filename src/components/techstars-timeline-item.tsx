"use client";

import { useState } from "react";
import { TimelinePhotoGrid } from "./timeline-photo-grid";

type TechstarsTimelineItemProps = {
  milestone: {
    value?: number | null;
    headline: string;
  };
};

export function TechstarsTimelineItem({ milestone }: TechstarsTimelineItemProps) {
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
            {milestone.value ?? ""} &mdash; {milestone.headline}
          </span>
          <span className="text-xs font-normal text-muted-foreground">
            {expanded ? "Hide photos" : "Show photos"}
          </span>
        </button>
        {expanded && <TimelinePhotoGrid />}
      </div>
    </li>
  );
}

