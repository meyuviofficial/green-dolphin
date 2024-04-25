import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/green-dolphin",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkParse, remarkRehype],
    rehypePlugins: [rehypeStringify],
  },
});

export default withMDX(nextConfig);
