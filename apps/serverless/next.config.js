/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/api",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
