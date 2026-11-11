import type { NextConfig } from "next";

// GitHub Pages serves this repo from https://lugilugi.github.io/personal-website/,
// so the deploy workflow sets NEXT_PUBLIC_BASE_PATH=/personal-website.
// Locally (npm run dev) it is empty and the site runs at http://localhost:3000/.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export", // static HTML in ./out — GitHub Pages can only host static files
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
