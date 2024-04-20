import { getBlogPosts } from "@/components/utils/mdx";

export const baseUrl = "https://meyuviofficial.github.io/green-dolphin"; // TODO: Should be changed during custom domain

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/blogs"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
