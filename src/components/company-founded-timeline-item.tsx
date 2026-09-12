"use client";

import { useState } from "react";
import { TimelinePhotoGrid } from "./timeline-photo-grid";

type CompanyFoundedTimelineItemProps = {
  milestone: {
    value?: number | null;
    headline: string;
  };
};

/** Ohio State College of Engineering coverage of the scholarship luncheon. */
const OSU_ENGINEERING_ARTICLE =
  "https://engineering.osu.edu/news/2025/04/donors-hear-firsthand-how-scholarships-propel-futures";

/** Local newspaper profile covering Kalib's early venture work. */
const KALIB_PROFILE_ARTICLE =
  "https://www.yahoo.com/news/liberty-union-senior-kalib-riddle-092706220.html";

/** Subtle accent-coloured marker linking out to a supporting source. */
function SourceLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in a new tab)`}
      className="inline-flex rounded-sm align-baseline text-primary opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <svg
        aria-hidden="true"
        className="inline-block h-3 w-3"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    </a>
  );
}

const COMPANY_FOUNDED_PHOTOS = [
  {
    src: "/timeline/company-founded-techstars-post.png",
    alt: "Techstars post about Blomso highlighting sustainable agriculture",
    caption: "Early days: the first Blomso banner and a whiteboard full of plans.",
  },
  {
    src: "/timeline/company-founded-osu-post.png",
    alt: "Ohio State University College of Engineering scholarship luncheon photo",
    caption:
      "At Ohio State’s College of Engineering Scholarship Luncheon, where Roan was invited to speak.",
    captionHref: OSU_ENGINEERING_ARTICLE,
  },
] as const;

export function CompanyFoundedTimelineItem({
  milestone,
}: CompanyFoundedTimelineItemProps) {
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
          <>
            <TimelinePhotoGrid photos={COMPANY_FOUNDED_PHOTOS} />
            <p className="max-w-2xl text-sm text-muted-foreground">
              By the time they founded Blomso, both had already spent years
              building. At Ohio State, Roan worked on DNA nanorobotics for
              targeted drug delivery while also training in research
              commercialization and entrepreneurship. Kalib had been developing
              a carbon-capture concept since eighth grade and spent much of high
              school trying to turn it into a real venture.{" "}
              <SourceLink
                href={KALIB_PROFILE_ARTICLE}
                label="Newspaper profile of Kalib"
              />{" "}
              When they met, they brought those technical and entrepreneurial
              paths together to build Blomso.
            </p>
          </>
        )}
      </div>
    </li>
  );
}

