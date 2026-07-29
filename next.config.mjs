const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages
  ? process.env.BASE_PATH || "/babyshower/nohelia"
  : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
