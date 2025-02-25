import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://admin.nuvemshop.com.br https://*.nuvemshop.com.br",
          },
          {
            key: "X-Frame-Options",
            value: "ALLOWALL", // Permitir a incorporação em iframe
          },
        ],
      },
    ];
  },
};

export default nextConfig;
