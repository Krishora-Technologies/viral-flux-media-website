/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.168.1.100"],
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.viralfluxmedia.in",
          },
        ],
        destination: "https://viralfluxmedia.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
