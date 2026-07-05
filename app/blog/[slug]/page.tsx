import Link from "next/link";
import { notFound } from "next/navigation";
import { links } from "@/lib/data";
import { blogs, getBlogBySlug } from "@/lib/blogs";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

function renderMdx(content: string) {
  return content
    .trim()
    .split(/\n\n+/)
    .map((block) => {
      if (block.startsWith("## ")) {
        return (
          <h2
            key={block}
            className="mt-12 text-2xl font-semibold leading-tight tracking-display text-fog first:mt-0"
          >
            {block.replace(/^## /, "")}
          </h2>
        );
      }

      return (
        <p key={block} className="mt-5 text-base leading-8 text-mist sm:text-lg">
          {block}
        </p>
      );
    });
}

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    return {
      title: "Blog Post - Chaitanya Galla",
    };
  }

  return {
    title: `${post.title} - Chaitanya Galla`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Link href="/blog" className="u-link font-mono text-sm text-mist">
          Back To Blog
        </Link>

        <article className="mt-12">
          <header className="border-b border-line pb-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-dim">
              {post.tag} / {post.readTime}
            </p>
            <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-display sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-base leading-8 text-mist sm:text-lg">
              {post.excerpt}
            </p>
            <time className="mt-5 block font-mono text-xs text-dim">
              {post.date}
            </time>
          </header>

          <div className="py-12">{renderMdx(post.mdx)}</div>
        </article>

        <footer className="mt-10 flex flex-col gap-5 border-t border-line pt-8 text-[13px] text-dim sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono">Chaitanya Galla</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="u-link text-mist transition-colors hover:text-fog"
            >
              GitHub
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="u-link text-mist transition-colors hover:text-fog"
            >
              LinkedIn
            </a>
            <a
              href={links.x}
              target="_blank"
              rel="noopener noreferrer"
              className="u-link text-mist transition-colors hover:text-fog"
            >
              X
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
