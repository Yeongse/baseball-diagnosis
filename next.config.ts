import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // 静的エクスポート → Cloudflare Pages対応
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
