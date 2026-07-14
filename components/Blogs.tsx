"use client";

import Link from "next/link";
import { PenLine } from "lucide-react";
import Reveal from "./Reveal";
import Section from "./Section";
import { blogs } from "@/lib/blogs";

function BlogList({ limit }: { limit?: number }) {
  const shown = typeof limit === "number" ? blogs.slice(0, limit) : blogs;

  return (
    <div>
      {shown.map((entry, i) => (
        <Reveal key={entry.slug} delay={i * 0.03}>
          <Link
            href={`/blog/${entry.slug}`}
            className="block rounded-md border border-transparent transition-colors hover:border-line hover:bg-well/45"
          >
            <article className="grid gap-x-8 gap-y-2 border-b border-line px-0 py-7 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[110px_1fr] sm:px-4">
              <time className="tnum font-mono text-xs leading-6 text-dim">
                {entry.date}
              </time>
              <div className="min-w-0">
                <h4 className="text-xl font-semibold tracking-tight text-fog transition-colors hover:text-amber">
                  {entry.title}
                </h4>
                <p className="mt-2 max-w-2xl text-base leading-8 text-mist">
                  {entry.excerpt}
                </p>
                <p className="mt-3 font-mono text-[11px] text-dim">
                  {entry.tag} / {entry.readTime}
                </p>
              </div>
            </article>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export function BlogsContent({ limit }: { limit?: number }) {
  return <BlogList limit={limit} />;
}

export default function Blogs({ limit = 2 }: { limit?: number }) {
  const hasMore = blogs.length > limit;

  return (
    <Section
      id="blogs"
      label="Blogs"
      labelTip="Lessons from problems I would prefer to solve only once."
      title="Clean notes from the systems I am building."
      description="Short writing about product engineering, agent workflows, and the practical parts that make software easier to trust."
      icon={<PenLine className="h-5 w-5" />}
      action={
        hasMore ? (
          <Link
            href="/blog"
            className="btn-secondary w-full sm:w-auto"
          >
            <PenLine className="h-4 w-4" />
            All Blogs
          </Link>
        ) : null
      }
    >
      <BlogList limit={limit} />
    </Section>
  );
}
