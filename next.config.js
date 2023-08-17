/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["static.wixstatic.com"],
  },
  compiler: {
    styledComponents: {
      displayName: false,
      ssr: true,
    },
  },
};

module.exports = nextConfig;
