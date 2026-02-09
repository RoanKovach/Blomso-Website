"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { Supporter } from "@/content/supporters";

interface PartnerLogoCarouselProps {
  partners: Supporter[];
}

/**
 * Horizontally scrollable logo carousel with scroll-snap, arrow navigation,
 * and edge-fade affordances. No auto-rotation. Keyboard and screen-reader
 * accessible. Respects prefers-reduced-motion.
 */
export function PartnerLogoCarousel({ partners }: PartnerLogoCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      ro.disconnect();
    };
  }, [checkScroll]);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }, []);

  return (
    <div className="relative w-full">
      {/* Left fade affordance (hidden on mobile where logos wrap) */}
      <div
        className={cn(
          "pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-10 bg-gradient-to-r from-white/80 to-transparent transition-opacity sm:block",
          canScrollLeft ? "opacity-100" : "opacity-0",
        )}
        aria-hidden="true"
      />

      {/* Right fade affordance (hidden on mobile where logos wrap) */}
      <div
        className={cn(
          "pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-10 bg-gradient-to-l from-white/80 to-transparent transition-opacity sm:block",
          canScrollRight ? "opacity-100" : "opacity-0",
        )}
        aria-hidden="true"
      />

      {/* Left arrow (hidden on mobile where logos wrap) */}
      <button
        type="button"
        onClick={() => scroll("left")}
        aria-label="Scroll partners left"
        className={cn(
          "absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-border/60 bg-background p-1.5 shadow-sm sm:block",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
          "motion-safe:transition-opacity",
          canScrollLeft
            ? "opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <svg
          aria-hidden="true"
          className="h-4 w-4 text-muted-foreground"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {/* Right arrow (hidden on mobile where logos wrap) */}
      <button
        type="button"
        onClick={() => scroll("right")}
        aria-label="Scroll partners right"
        className={cn(
          "absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-border/60 bg-background p-1.5 shadow-sm sm:block",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
          "motion-safe:transition-opacity",
          canScrollRight
            ? "opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <svg
          aria-hidden="true"
          className="h-4 w-4 text-muted-foreground"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="scrollbar-hide flex flex-wrap items-center justify-center gap-x-6 gap-y-4 px-2 py-2 sm:flex-nowrap sm:gap-10 sm:overflow-x-auto sm:px-10 sm:snap-x sm:snap-mandatory"
        role="list"
        aria-label="Partner logos"
        tabIndex={0}
      >
        {partners.map((s) => {
          const img = (
            <img
              src={s.logo}
              alt={`${s.name} logo`}
              className={cn(
                "h-7 w-auto max-w-[140px] object-contain sm:h-8 sm:max-w-[160px]",
                "motion-safe:transition-[filter,opacity] duration-200",
                "grayscale opacity-60",
                "group-hover:grayscale-0 group-hover:opacity-100",
                "group-focus-visible:grayscale-0 group-focus-visible:opacity-100",
                s.invertOnLight && "invert",
              )}
              loading="lazy"
              draggable={false}
            />
          );

          return s.href ? (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group shrink-0 px-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:snap-start"
              role="listitem"
              aria-label={`${s.name} (opens in a new tab)`}
            >
              {img}
            </a>
          ) : (
            <span
              key={s.id}
              className="group shrink-0 px-2 sm:snap-start"
              role="listitem"
              aria-label={s.ariaLabel}
            >
              {img}
            </span>
          );
        })}
      </div>
    </div>
  );
}
