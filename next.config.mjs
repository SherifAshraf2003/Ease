/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows any hostname over HTTPS
      },
      {
        protocol: "http",
        hostname: "**", // Allows any hostname over HTTP
      },
    ],
  },
};

export default nextConfig;
