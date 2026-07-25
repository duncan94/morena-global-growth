import type { NextConfig } from "next";

// Set automatically in GitHub Actions for project Pages URL:
// https://duncan94.github.io/morena-global-growth/
const basePath = process.env.GITHUB_PAGES === "true" ? "/morena-global-growth" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
