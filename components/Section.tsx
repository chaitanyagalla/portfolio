import { ReactNode } from "react";

/**
 * Ledger section shell: full-width hairline rule on top, a narrow
 * left gutter with a sticky mono label, content in the right column.
 */
export default function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-8 px-6 py-20 sm:py-24 lg:grid-cols-[180px_1fr]">
        <div className="self-start lg:sticky lg:top-24">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-dim">
            {label}
          </h2>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
