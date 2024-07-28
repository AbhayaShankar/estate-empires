/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
  },
};

module.exports = nextConfig;
