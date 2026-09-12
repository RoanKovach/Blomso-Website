"use client";

import { useState } from "react";

type StoryTimelineItemProps = {
  milestone: {
    value?: number | null;
    headline: string;
  };
  /** One or two short lines shown when the entry is expanded. */
  story: string;
  /** When set, the program name in the entry line links to this source. */
  href?: string;
};

export const entryLinkClass =
  "rounded-sm underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export const expandToggleClass =
  "rounded-sm text-xs font-normal text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

/**
 * Timeline entry whose expanded content is narrative only, for milestones
 * that carry a story but no photos or supporting detail block.
 */
export function StoryTimelineItem({
  milestone,
  story,
  href,
}: StoryTimelineItemProps) {
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
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={entryLinkClass}
              >
                {milestone.headline}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              milestone.headline
            )}
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
          <p className="max-w-2xl text-sm text-muted-foreground">{story}</p>
        )}
      </div>
    </li>
  );
}
