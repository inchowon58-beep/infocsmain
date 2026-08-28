import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      { source: "/contact", destination: "https://open.kakao.com/o/sxelLqJi", permanent: false },
      { source: "/services/blog", destination: "/services/ranking", permanent: false },
      { source: "/services/cafe", destination: "/services/ranking", permanent: false },
      { source: "/services/wordpress", destination: "/services/sites", permanent: false },
      { source: "/services/sns", destination: "/services/ranking", permanent: false },
      { source: "/services/kin", destination: "/services/ranking", permanent: false },
      { source: "/services/automation", destination: "/services/ranking", permanent: false },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },
};

export default nextConfig;
