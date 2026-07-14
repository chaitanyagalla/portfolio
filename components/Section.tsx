import { ReactNode } from "react";
import Tooltip from "./Tooltip";

export default function Section({
  id,
  label,
  labelTip,
  title,
  description,
  icon,
  action,
  children,
}: {
  id: string;
  label: string;
  labelTip?: string;
  title: string;
  description: string;
  icon?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="min-w-0">
          <div className="mb-10">
            <div className="flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-2 text-dim">
                {icon ? <span className="shrink-0 text-dim">{icon}</span> : null}
                <h2 className="font-mono text-sm uppercase tracking-[0.18em]">
                  {labelTip ? (
                    <Tooltip tip={labelTip} align="start">
                      <span className="cursor-help">{label}</span>
                    </Tooltip>
                  ) : (
                    label
                  )}
                </h2>
              </div>
              {action ? <div className="shrink-0">{action}</div> : null}
            </div>

            <div className="mt-7">
              <h3 className="max-w-3xl text-2xl font-semibold leading-tight tracking-display sm:text-[2rem]">
                {title}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-8 text-mist sm:text-lg">
                {description}
              </p>
            </div>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
