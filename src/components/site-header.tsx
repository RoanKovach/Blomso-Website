"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { externalLinks } from "@/content/links";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/traction", label: "Traction" },
  { href: "/platform", label: "Platform" },
  { href: "/contact", label: "Contact" },
] as const;

const productDropdownItems = [
  { ...externalLinks.roadmap, external: true },
  { ...externalLinks.feedback, external: true },
] as const;

const linkClass =
  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

/** Normalize pathname by stripping trailing slash (except for root "/") */
function normalizePath(path: string): string {
  if (path === "/") return path;
  return path.endsWith("/") ? path.slice(0, -1) : path;
}

/** SVG arrow-up-right icon for external links */
function ExternalIcon() {
  return (
    <svg
      aria-hidden="true"
      className="ml-1 inline-block h-3 w-3 opacity-50"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  );
}

export function SiteHeader() {
  const rawPathname = usePathname();
  const pathname = normalizePath(rawPathname);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const mobileCloseRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const wasMobileOpen = useRef(false);

  /** Check if a nav link is active */
  function isActive(href: string): boolean {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  /** Check if any product route is active */
  function isProductActive(): boolean {
    return (
      pathname.startsWith("/demo") ||
      pathname.startsWith("/roadmap") ||
      pathname.startsWith("/feedback")
    );
  }

  // Close dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return;
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [dropdownOpen]);

  // Scroll-lock + focus management for mobile menu
  useEffect(() => {
    if (mobileOpen) {
      wasMobileOpen.current = true;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      mobileCloseRef.current?.focus();
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      if (wasMobileOpen.current) {
        hamburgerRef.current?.focus();
        wasMobileOpen.current = false;
      }
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Focus trap: cycle Tab within mobile menu panel
  useEffect(() => {
    if (!mobileOpen || !mobileMenuRef.current) return;
    const panel = mobileMenuRef.current;
    function handleTab(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    panel.addEventListener("keydown", handleTab);
    return () => panel.removeEventListener("keydown", handleTab);
  }, [mobileOpen]);

  // Scroll-aware shadow for glass effect
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 4);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on Escape
  const handleDropdownKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        triggerRef.current?.focus();
      }
    },
    [],
  );

  // Close mobile menu on Escape
  const handleMobileKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    },
    [],
  );

  const productActive = isProductActive();

  const header = (
    <header className={cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur transition-shadow duration-200 supports-[backdrop-filter]:bg-background/60", scrolled && "shadow-sm")}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          aria-label="blomso home"
        >
          <Image
            src="/logo-mark.png"
            alt=""
            width={32}
            height={26}
            className="h-6 w-auto"
            unoptimized
          />
          <span className="text-lg font-bold tracking-tight">blomso</span>
        </Link>

        {/* ── Desktop nav ─────────────────────────────────────── */}
        <div className="hidden items-center gap-2 lg:flex">
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-1">
              {navLinks.map(({ href, label }) => {
                const active = isActive(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={cn(
                        linkClass,
                        active
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}

              {/* Demo — external */}
              <li>
                <a
                  href={externalLinks.demo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(linkClass, "text-muted-foreground inline-flex items-center")}
                >
                  {externalLinks.demo.label}
                  <ExternalIcon />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>

              {/* Product dropdown */}
              <li
                ref={dropdownRef}
                className="relative"
                onKeyDown={handleDropdownKeyDown}
              >
                <button
                  ref={triggerRef}
                  type="button"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className={cn(
                    linkClass,
                    "inline-flex items-center gap-1",
                    productActive
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  Product
                  <svg
                    aria-hidden="true"
                    className={cn(
                      "h-3.5 w-3.5 transition-transform",
                      dropdownOpen && "rotate-180",
                    )}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {dropdownOpen && (
                  <ul
                    role="menu"
                    className="absolute right-0 top-full mt-1 w-52 rounded-md border bg-background p-1 shadow-md motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-150"
                  >
                    {productDropdownItems.map((item) => (
                      <li key={item.label} role="none">
                        <a
                          role="menuitem"
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-sm px-3 py-2 text-sm transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <span className="inline-flex items-center font-medium">
                            {item.label}
                            <ExternalIcon />
                          </span>
                          <span className="sr-only"> (opens in a new tab)</span>
                          <span className="mt-0.5 block text-xs text-muted-foreground">
                            {item.description}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </nav>

          {/* Persistent CTA — desktop only */}
          <Button asChild size="sm">
            <Link href="/contact">Request a walkthrough</Link>
          </Button>
        </div>

        {/* ── Mobile hamburger button ─────────────────────────── */}
        <button
          ref={hamburgerRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Open navigation menu"
          onClick={() => setMobileOpen(true)}
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

    </header>
  );

  /* ── Mobile menu overlay (portalled to body to escape header stacking context) ── */
  const mobileOverlay = mobileOpen
    ? createPortal(
        <div
          className="fixed inset-0 z-[60] lg:hidden"
          onKeyDown={handleMobileKeyDown}
        >
          {/* Backdrop — covers entire viewport including header */}
          <div
            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm motion-safe:animate-in motion-safe:fade-in motion-safe:duration-150"
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
          />

          {/* Panel */}
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="absolute inset-y-0 right-0 flex w-[min(92vw,420px)] flex-col border-l bg-background shadow-xl pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] motion-safe:animate-in motion-safe:slide-in-from-right motion-safe:duration-200"
          >
            <div className="flex items-center justify-between border-b px-4 py-4">
              <span className="text-sm font-semibold">Menu</span>
              <button
                ref={mobileCloseRef}
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                aria-label="Close navigation menu"
                onClick={() => setMobileOpen(false)}
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-4 py-4">
              <ul className="space-y-1">
                {navLinks.map(({ href, label }) => {
                  const active = isActive(href);
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={cn(
                          "flex min-h-[44px] items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                          active
                            ? "bg-muted text-foreground"
                            : "text-muted-foreground",
                        )}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setMobileOpen(false)}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}

                {/* Demo — external */}
                <li>
                  <a
                    href={externalLinks.demo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[44px] items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    onClick={() => setMobileOpen(false)}
                  >
                    {externalLinks.demo.label}
                    <ExternalIcon />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>

                {/* Product links — flat in mobile */}
                <li className="pt-3">
                  <p className={cn(
                    "px-3 text-xs font-semibold uppercase tracking-wide",
                    productActive
                      ? "text-foreground"
                      : "text-muted-foreground",
                  )}>
                    Product
                  </p>
                  <ul className="mt-1 space-y-1">
                    {productDropdownItems.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex min-h-[44px] items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                          <ExternalIcon />
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>

            {/* Mobile CTA */}
            <div className="border-t px-4 py-4">
              <Button asChild size="lg" className="w-full min-h-[44px]">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  Request a walkthrough
                </Link>
              </Button>
            </div>
          </div>
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      {header}
      {mobileOverlay}
    </>
  );
}
