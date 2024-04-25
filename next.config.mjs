import createMDX from "@next/mdx";

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

export default nextConfig;
