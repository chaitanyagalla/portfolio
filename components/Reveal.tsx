"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

/**
 * Quiet fade-up reveal — small travel, quick, once.
 * Respects prefers-reduced-motion.
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
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const shouldReduce = mounted && Boolean(reduce);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      className={className}
      initial={shouldReduce ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
