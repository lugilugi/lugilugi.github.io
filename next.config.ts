import type { NextConfig } from "next";

// The deploy workflow sets NEXT_PUBLIC_BASE_PATH from GitHub Pages. For this user site
// (https://lugilugi.github.io/) it is empty; it would be "/<repo>" for a project-page repo.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export", // static HTML in ./out — GitHub Pages can only host static files
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
