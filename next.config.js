/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  rewrites: async () => {
    return [
      {
        source: "/signin",
        destination: "/auth/signin",
      },
    ];
  },
};

module.exports = nextConfig;
