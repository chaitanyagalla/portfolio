"use client";

import { useEffect, useState } from "react";
import {
  Briefcase,
  FileText,
  Folder,
  Home,
  Mail,
  Menu,
  Moon,
  PenLine,
  Sun,
  Wrench,
  X,
} from "lucide-react";
import { links } from "@/lib/data";

const items = [
  { label: "Home", href: "#top", icon: Home },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Tools", href: "#tools", icon: Wrench },
  { label: "Blogs", href: "#blogs", icon: PenLine },
  { label: "Projects", href: "#projects", icon: Folder },
  { label: "Contact", href: "#contact", icon: Mail },
];

type Theme = "dark" | "light";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("theme") as Theme | null;
    const nextTheme = saved === "light" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border border-line-b border border-line-line bg-ink/90 backdrop-blur"
          : "border border-line-b border border-line-transparent bg-ink/75 backdrop-blur-sm"
      }`}
    >
      <nav className="relative mx-auto max-w-5xl px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#top"
            className="shrink-0 text-[15px] font-semibold uppercase tracking-tight text-fog"
            onClick={() => setOpen(false)}
          >
            Chaitanya
          </a>

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={toggleTheme}
              className="grid h-11 w-11 place-items-center rounded-md border border-line border border-line-line bg-well text-mist transition-colors hover:border border-line-amber hover:text-amber"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary min-h-11 px-3 py-2"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="grid h-11 w-11 place-items-center rounded-md border border-line border border-line-line bg-well text-mist transition-colors hover:border border-line-amber hover:text-amber"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="grid h-11 w-11 place-items-center rounded-md border border-line border border-line-line bg-well text-mist transition-colors hover:border border-line-amber hover:text-amber"
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className="pointer-events-none absolute left-1/2 top-3 hidden -translate-x-1/2 rounded-md  bg-well/95 p-1   md:flex">
          {items.slice(0, 5).map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.href}
                href={item.href}
                className="pointer-events-auto inline-flex min-h-10 items-center gap-2 rounded-md px-3 font-mono text-[13px] text-mist transition-colors hover:bg-line hover:text-fog"
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </a>
            );
          })}
        </div>

        {open ? (
          <div className="absolute right-4 top-[68px] w-[min(220px,calc(100vw-2rem))] rounded-md border border-line border border-line-line bg-well/98 p-2 shadow-2xl shadow-black/30 md:hidden">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center gap-3 rounded-md px-4 text-base font-semibold text-mist transition-colors hover:bg-line hover:text-fog"
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </a>
              );
            })}
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 flex min-h-12 items-center gap-3 rounded-md border border-line border border-line-line px-4 text-base font-semibold text-amber transition-colors hover:border border-line-amber hover:bg-line"
            >
              <FileText className="h-5 w-5" />
              Resume
            </a>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
