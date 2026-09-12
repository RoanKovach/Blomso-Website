"use client";

import { useState } from "react";
import { TimelinePhotoGrid } from "./timeline-photo-grid";
import { entryLinkClass, expandToggleClass } from "./story-timeline-item";

/** Ohio State newsroom announcement of the inaugural Techstars Columbus class. */
const TECHSTARS_ANNOUNCEMENT =
  "https://news.osu.edu/techstars-columbus-and-ohio-state-announce-inaugural-class-of-innovators/";

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
        <div className="flex items-center gap-2 text-left font-semibold">
          <span>
            {milestone.value ?? ""} &middot;{" "}
            <a
              href={TECHSTARS_ANNOUNCEMENT}
              target="_blank"
              rel="noopener noreferrer"
              className={entryLinkClass}
            >
              {milestone.headline}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </span>
          <button
            type="button"
            onClick={() => setExpanded((open) => !open)}
            className={expandToggleClass}
            aria-expanded={expanded}
            aria-label={`${expanded ? "Collapse" : "Expand"} timeline for ${milestone.headline}`}
          >
            {expanded ? "Collapse timeline" : "Expand timeline"}
          </button>
        </div>
        {expanded && (
          <>
            <TimelinePhotoGrid />
            <p className="max-w-2xl text-sm text-muted-foreground">
              The program that turned the idea into a company, and where our first advisor at Ohio State signed on.
            </p>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Blomso joined the first Techstars Columbus cohort as its youngest team. The program brought early funding and hands-on training in how companies get built, and it put the idea in front of people who could break it. We spent those months talking with farmers, agronomists, faculty and extension teams across Ohio, while still finishing coursework and undergraduate research at Ohio State.
            </p>
          </>
        )}
      </div>
    </li>
  );
}

