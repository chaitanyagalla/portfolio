"use client";

import { ReactNode } from "react";

/**
 * Lightweight hover/focus tooltip. Pure CSS — no positioning library.
 * Wraps any inline element; tip appears above, centered.
 */
export default function Tooltip({
  tip,
  children,
}: {
  tip: string;
  children: ReactNode;
}) {
  return (
    <span className="group/tip relative inline-flex" tabIndex={0}>
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-[240px] -translate-x-1/2 translate-y-1 rounded-md border border-line bg-well px-3 py-1.5 font-mono text-[11px] leading-snug text-mist opacity-0 shadow-lg transition-all duration-200 group-hover/tip:translate-y-0 group-hover/tip:opacity-100 group-focus-within/tip:translate-y-0 group-focus-within/tip:opacity-100"
      >
        {tip}
        <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 border-b border-r border-line bg-well" />
      </span>
    </span>
  );
}
