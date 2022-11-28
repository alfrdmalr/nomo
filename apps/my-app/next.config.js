/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// transpile from our local packages
const withTM = require('next-transpile-modules')(['@pairtreefamily/ui', '@pairtreefamily/utils']);

module.exports = withTM(nextConfig);
