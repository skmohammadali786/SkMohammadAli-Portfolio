import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: process.env.NEXT_PUBLIC_CDN_URL,
  images: {
    loader: process.env.NEXT_PUBLIC_CDN_URL ? 'custom' : 'default',
    loaderFile: process.env.NEXT_PUBLIC_CDN_URL ? './src/lib/image-loader.ts' : undefined,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
