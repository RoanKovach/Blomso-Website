export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <div
        className="flex items-center gap-1.5"
        role="status"
        aria-label="Loading"
      >
        <span className="motion-safe:animate-bounce inline-block h-2 w-2 rounded-full bg-primary [animation-delay:0ms]" />
        <span className="motion-safe:animate-bounce inline-block h-2 w-2 rounded-full bg-primary [animation-delay:150ms]" />
        <span className="motion-safe:animate-bounce inline-block h-2 w-2 rounded-full bg-primary [animation-delay:300ms]" />
      </div>
      <p className="text-sm text-muted-foreground">Loading…</p>
    </div>
  );
}
