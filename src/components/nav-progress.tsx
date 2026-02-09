"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

/**
 * Global navigation progress bar.
 *
 * Shows a thin animated bar at the top of the viewport while the app is
 * transitioning between routes. Works on static hosting — no server
 * dependency.
 */
export function NavProgress() {
  const pathname = usePathname();
  const [navigating, setNavigating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startRef = useRef<number>(0);

  /* Minimum visible duration so the bar is perceptible but not annoying. */
  const MIN_DURATION_MS = 300;

  /* ── Clear navigating state after minimum duration ─────────────── */
  const clearNavigating = useCallback(() => {
    const elapsed = Date.now() - startRef.current;
    const remaining = Math.max(0, MIN_DURATION_MS - elapsed);

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setNavigating(false);
      timerRef.current = null;
    }, remaining);
  }, []);

  /* ── Intercept same-origin link clicks ─────────────────────────── */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      /* Only left-click, no modifier keys */
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
        return;

      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      /* Skip external, new-tab, and download links */
      if (
        anchor.target === "_blank" ||
        anchor.hasAttribute("download") ||
        anchor.origin !== window.location.origin
      )
        return;

      /* Skip hash-only links on the same page */
      if (
        anchor.pathname === window.location.pathname &&
        anchor.hash !== ""
      )
        return;

      startRef.current = Date.now();
      setNavigating(true);
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () =>
      document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  /* ── Pathname change = navigation finished ─────────────────────── */
  useEffect(() => {
    if (navigating) clearNavigating();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  /* ── Cleanup timer on unmount ──────────────────────────────────── */
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (!navigating) return null;

  return (
    <div
      className="fixed inset-x-0 top-0 z-[9999] h-0.5 overflow-hidden bg-primary/20"
      role="presentation"
      aria-hidden="true"
    >
      <div className="h-full w-1/3 bg-primary animate-nav-progress motion-reduce:animate-none motion-reduce:w-full motion-reduce:opacity-60" />
    </div>
  );
}
