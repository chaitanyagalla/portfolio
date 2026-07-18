"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Keeps content visible in the server-rendered page and applies only a quiet
 * in-view transition. Essential recruiter content never waits on hydration.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
