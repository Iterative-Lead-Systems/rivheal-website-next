import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
    // Cloudflare Pages doesn't support Next.js image optimisation at the edge;
    // use unoptimized so next/image still renders but skips the /\_next/image endpoint.
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
