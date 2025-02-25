import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            // Inclua o domínio ngrok temporariamente para testes
            value: "frame-ancestors 'self' https://admin.nuvemshop.com.br https://*.nuvemshop.com.br https://7c54-2804-7f0-9602-a511-909b-b199-3adb-bb26.ngrok-free.app",
          },
          {
            key: 'X-Frame-Options',
            value: 'ALLOWALL',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
