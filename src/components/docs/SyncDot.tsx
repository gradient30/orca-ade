import { cn } from "@/lib/cn";

/** Reader-facing red dot for pages/sections updated in the current sync batch. */
export function SyncDot({
  className,
  label = "本次同步有更新",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <span
      className={cn("inline-block size-1.5 shrink-0 rounded-full bg-destructive", className)}
      title={label}
      aria-label={label}
    />
  );
}
