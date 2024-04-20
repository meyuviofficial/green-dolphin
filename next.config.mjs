/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/green-dolphin",
  output: "export",
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
