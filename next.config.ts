import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // KiCad files are plain text; let browsers cache them like other static assets.
  async headers() {
    return [
      {
        source: "/kicad/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=3600" }],
      },
    ];
  },
};

export default nextConfig;
