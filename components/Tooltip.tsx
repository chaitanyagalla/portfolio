"use client";

import { cloneElement, isValidElement, ReactElement, ReactNode, useId } from "react";

/**
 * Lightweight hover/focus tooltip. Pure CSS — no positioning library.
 * Wraps any inline element; tip appears above, centered.
 */
export default function Tooltip({
  tip,
  children,
  className = "",
  side = "top",
  align = "center",
  interactive = false,
}: {
  tip: string;
  children: ReactNode;
  className?: string;
  side?: "top" | "bottom";
  align?: "start" | "center" | "end";
  interactive?: boolean;
}) {
  const tooltipId = useId();
  const sideClasses =
    side === "top"
      ? "bottom-full mb-2 translate-y-1 group-hover/tip:translate-y-0 group-focus-within/tip:translate-y-0"
      : "top-full mt-2 -translate-y-1 group-hover/tip:translate-y-0 group-focus-within/tip:translate-y-0";
  const alignClasses = {
    start: "left-0",
    center: "left-1/2 -translate-x-1/2",
    end: "right-0",
  }[align];
  const arrowClasses = {
    start: "left-4",
    center: "left-1/2 -translate-x-1/2",
    end: "right-4",
  }[align];
  const arrowSideClasses =
    side === "top"
      ? "top-full -translate-y-1 border-b border-r"
      : "bottom-full translate-y-1 border-l border-t";

  let trigger = children;

  if (interactive && isValidElement(children)) {
    const child = children as ReactElement<{ "aria-describedby"?: string }>;
    const describedBy = [child.props["aria-describedby"], tooltipId]
      .filter(Boolean)
      .join(" ");

    trigger = cloneElement(child, { "aria-describedby": describedBy });
  }

  return (
    <span
      className={`group/tip relative inline-flex ${className}`}
      tabIndex={interactive ? undefined : 0}
      aria-describedby={interactive ? undefined : tooltipId}
    >
      {trigger}
      <span
        id={tooltipId}
        role="tooltip"
        className={`pointer-events-none absolute z-50 w-max max-w-[240px] rounded-md border border-line bg-well px-3 py-1.5 font-mono text-[11px] leading-snug text-mist opacity-0 shadow-lg transition-all duration-200 group-hover/tip:opacity-100 group-focus-within/tip:opacity-100 ${sideClasses} ${alignClasses}`}
      >
        {tip}
        <span
          className={`absolute h-2 w-2 rotate-45 border-line bg-well ${arrowClasses} ${arrowSideClasses}`}
        />
      </span>
    </span>
  );
}
