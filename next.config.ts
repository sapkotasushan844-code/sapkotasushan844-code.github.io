import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  allowedDevOrigins: ["sushansapkota.com", "www.sushansapkota.com"],
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
