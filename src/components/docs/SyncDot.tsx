import { cn } from "@/lib/cn";

type SyncDotSize = "sm" | "md" | "lg";

const SIZE: Record<SyncDotSize, string> = {
  sm: "size-1.5",
  md: "size-2.5",
  lg: "size-3",
};

/** Reader-facing red dot for pages/sections updated in the current sync batch. */
export function SyncDot({
  className,
  label = "本次同步有更新",
  size = "md",
}: {
  className?: string;
  label?: string;
  /** Sidebar uses large; TOC/headings use medium; banner uses medium. */
  size?: SyncDotSize;
}) {
  return (
    <span
      className={cn("inline-block shrink-0 rounded-full bg-destructive", SIZE[size], className)}
      title={label}
      aria-label={label}
    />
  );
}
