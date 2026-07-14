"use client";

import { useEffect, useState } from "react";
import {
  Briefcase,
  FileText,
  Folder,
  Mail,
  Menu,
  Moon,
  PenLine,
  Sun,
  X,
} from "lucide-react";
import Tooltip from "./Tooltip";
import { links } from "@/lib/data";

const items = [
  { label: "Work", href: "#projects", icon: Folder },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Log", href: "#blogs", icon: PenLine },
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
          ? "border-b border-line bg-ink/90 backdrop-blur"
          : "border-b border-transparent bg-ink/80 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex w-full items-center justify-between gap-4 lg:w-auto">
          <Tooltip
            tip="Built by Chaitanya: one product decision and several browser tabs at a time."
            side="bottom"
            align="start"
            interactive
          >
            <a
              href="#top"
              className="shrink-0 text-[15px] font-medium tracking-tight text-fog"
              onClick={() => setOpen(false)}
            >
              Chaitanya Galla
            </a>
          </Tooltip>

          <div className="flex items-center gap-2 lg:hidden">
            <Tooltip
              tip="Change the lighting. The bugs remain equally accountable."
              side="bottom"
              align="end"
              interactive
            >
              <button
                type="button"
                onClick={toggleTheme}
                className="grid h-11 w-11 place-items-center rounded-md border border-line bg-well text-mist transition-colors hover:border-amber hover:text-amber"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </Tooltip>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="grid h-11 w-11 place-items-center rounded-md border border-line bg-well text-mist transition-colors hover:border-amber hover:text-amber"
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-1 rounded-md bg-well/70 p-1">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-10 items-center gap-2 rounded-md px-3 font-mono text-[13px] text-mist transition-colors hover:bg-line hover:text-fog"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </a>
              );
            })}
          </div>

          <Tooltip
            tip="Change the lighting. The bugs remain equally accountable."
            side="bottom"
            align="end"
            interactive
          >
            <button
              type="button"
              onClick={toggleTheme}
              className="grid h-11 w-11 place-items-center rounded-md border border-line bg-well text-mist transition-colors hover:border-amber hover:text-amber"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </Tooltip>
          <Tooltip
            tip="The formal version of me, with fewer side quests."
            side="bottom"
            align="end"
            interactive
          >
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary min-h-11 px-4 py-2"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </Tooltip>
        </div>

        {open ? (
          <div className="absolute right-4 top-[68px] w-[min(220px,calc(100vw-2rem))] rounded-md border border-line bg-well p-2 shadow-2xl shadow-black/30 lg:hidden">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.href}
                  onClick={() => setOpen(false)}
                  href={item.href}
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
              className="btn-primary mt-2 flex min-h-12 items-center justify-start gap-3 px-4 text-base font-semibold"
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
