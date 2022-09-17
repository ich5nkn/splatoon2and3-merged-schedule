/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? 'https://ich5nkn.github.io/splatoon2and3-merged-schedule' : undefined,
}

module.exports = nextConfig
