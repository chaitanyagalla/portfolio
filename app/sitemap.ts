import type { MetadataRoute } from "next";
import { blogs } from "@/lib/blogs";
import { projects } from "@/lib/data";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/blog"].map((path) => ({
    url: new URL(path || "/", siteUrl).toString(),
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((project) => ({
    url: new URL(`/projects/${project.slug}`, siteUrl).toString(),
    lastModified: new Date(),
  }));

  const blogRoutes = blogs.map((post) => ({
    url: new URL(`/blog/${post.slug}`, siteUrl).toString(),
    lastModified: new Date(),
  }));

  return [...routes, ...projectRoutes, ...blogRoutes];
}
