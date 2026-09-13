import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // /beliefs was merged into /about (2026-09-13) — keep old links working.
    return [
      { source: "/uk/beliefs", destination: "/uk/about#beliefs", permanent: true },
      { source: "/en/beliefs", destination: "/en/about#beliefs", permanent: true },
    ];
  },
};

export default nextConfig;
