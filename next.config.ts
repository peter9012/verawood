import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Ready for Cloudflare R2 or other external domains when real photos arrive
    remotePatterns: [],
  },
  // Strict mode catches subtle React bugs early
  reactStrictMode: true,
};

export default nextConfig;
