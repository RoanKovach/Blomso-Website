"use client";

import { useState, useEffect } from "react";

type Photo = {
  src: string;
  alt: string;
};

const DEFAULT_PHOTOS: readonly Photo[] = [
  { src: "/timeline/zoom-grid.png", alt: "Techstars cohort on a video call" },
  {
    src: "/timeline/techstars-cohort-room.png",
    alt: "Techstars Columbus cohort group photo",
  },
  {
    src: "/timeline/blomso-team-banner.png",
    alt: "Blomso founding team under Blomso banner",
  },
] as const;

export function TimelinePhotoGrid({ photos = DEFAULT_PHOTOS }: { photos?: readonly Photo[] }) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    if (lightboxSrc === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxSrc(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxSrc]);

  return (
    <>
      <div className="grid gap-4 pt-2 sm:grid-cols-3">
        {photos.map(({ src, alt }) => (
          <button
            key={src}
            type="button"
            onClick={() => setLightboxSrc(src)}
            className="group relative block overflow-hidden rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            aria-label={`View full size: ${alt}`}
          >
            <img
              src={src}
              alt={alt}
              className="h-40 w-full object-cover transition-transform duration-200 ease-out group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* Full-screen lightbox */}
      {lightboxSrc !== null && (
        <button
          type="button"
          onClick={() => setLightboxSrc(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 focus:outline-none"
          aria-label="Close full screen view"
        >
          <span className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white backdrop-blur-sm hover:bg-white/20">
            Close
          </span>
          <img
            src={lightboxSrc}
            alt=""
            className="max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
            role="presentation"
          />
        </button>
      )}
    </>
  );
}
