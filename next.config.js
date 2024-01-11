/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wowslider.com",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
      },
      {
        protocol: "https",
        hostname: "cdn.britannica.com",
      },
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "ayatrio-images.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "http",
        hostname:"localhost:5173"
      },
      {
        protocol: "https",
        hostname: "wellgroomedgentleman.com"
      }
    ],
  },
};

module.exports = nextConfig;
