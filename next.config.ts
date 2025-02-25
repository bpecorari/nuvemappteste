import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors *;", // 🚨 Permite que qualquer site incorpore via iframe (NÃO USE EM PRODUÇÃO)
          },
          {
            key: "X-Frame-Options",
            value: "ALLOWALL", // Permite iframe de qualquer origem
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // 🚨 Permite requisições de qualquer domínio (NÃO USE EM PRODUÇÃO)
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Requested-With, Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
