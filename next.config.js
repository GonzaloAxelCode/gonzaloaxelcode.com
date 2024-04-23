/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.builder.io",
      },
      {
        protocol: "https",
        port: "",
        hostname: "www.notion.so",
      },
    ],
    domains: [
      "www.notion.so",
      "lh3.googleusercontent.com",
      "cdn.builder.io",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
