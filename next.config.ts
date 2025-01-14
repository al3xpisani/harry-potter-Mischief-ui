import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'hp-api.onrender.com' },
      { hostname: 'ik.imagekit.io' },
    ],
  },
};

export default nextConfig;
