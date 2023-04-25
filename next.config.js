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
      {
        source: "/projects",
        destination: "/api/projects",
        permanent: false,
      }
    ];
  },
};

module.exports = nextConfig;
