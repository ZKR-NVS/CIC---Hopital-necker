/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    domains: ['localhost'],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion'],
  },
}

module.exports = nextConfig 