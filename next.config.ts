import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 70, 75],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  sassOptions: {
    // Module files migrated to @use; silence remaining global @import noise
    silenceDeprecations: ["import", "legacy-js-api"],
  },
  experimental: {
    optimizePackageImports: ["gsap", "swiper", "lenis"],
  },
};

export default nextConfig;
