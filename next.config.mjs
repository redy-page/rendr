/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "redy.page",
      },
    ],
  },
};

export default nextConfig;
