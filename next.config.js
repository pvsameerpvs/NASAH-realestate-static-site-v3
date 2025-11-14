/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // static export
  images: {
    unoptimized: true
  }
};
module.exports = nextConfig;
