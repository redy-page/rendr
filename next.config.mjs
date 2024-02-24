/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        hostname: "redy.page",
      },
    ],
  },
};

export default nextConfig;
