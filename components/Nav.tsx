"use client";

import { useEffect, useState } from "react";
import { links } from "@/lib/data";

const items = [
  { label: "work", href: "#work" },
  { label: "about", href: "#about" },
  { label: "log", href: "#log" },
  { label: "contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-ink/85 backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="text-[15px] font-medium tracking-tight">
          Chaitanya Galla
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="u-link font-mono text-[13px] text-mist transition-colors hover:text-fog"
            >
              {item.label}
            </a>
          ))}
          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-line px-4 py-1.5 font-mono text-[13px] text-mist transition-colors hover:border-amber hover:text-amber"
          >
            resume
          </a>
        </div>

        {/* Mobile: just the resume CTA, sections are one scroll away */}
        <a
          href={links.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-line px-4 py-1.5 font-mono text-[13px] text-mist md:hidden"
        >
          resume
        </a>
      </nav>
    </header>
  );
}
