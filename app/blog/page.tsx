import Link from "next/link";
import { blogs } from "@/lib/blogs";

export const metadata = {
  title: "Blog - Chaitanya Galla",
  description:
    "Clean technical notes on full-stack development, AI agent workflows, and product engineering.",
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <Link href="/" className="u-link font-mono text-sm text-mist">
        Back Home
      </Link>
      <header className="mt-12 border-b border-line pb-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-dim">
          Blog
        </p>
        <h1 className="mt-6 max-w-3xl text-3xl font-semibold leading-tight tracking-display sm:text-5xl">
          Notes on building useful software.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-mist sm:text-lg">
          Minimal writing about agent systems, backend decisions, product
          quality, and the loops that make software dependable.
        </p>
      </header>

      <div className="py-14">
        {blogs.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-md border border-transparent transition-colors hover:border-line hover:bg-well/45"
          >
            <article className="border-b border-line px-0 py-10 first:pt-0 last:border-b-0 sm:px-4">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h2 className="text-xl font-semibold tracking-display text-fog transition-colors hover:text-amber sm:text-2xl">
                  {post.title}
                </h2>
                <time className="tnum font-mono text-xs text-dim">{post.date}</time>
              </div>
              <p className="mt-4 max-w-2xl text-base leading-8 text-mist">
                {post.excerpt}
              </p>
              <p className="mt-4 font-mono text-[11px] text-dim">
                {post.tag} / {post.readTime}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
