/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.clearvin.com', 'www.chassisvin.com'],
  },
  // Add any other existing configurations here
  experimental: {
    serverComponentsExternalPackages: ['fs', 'path'],
  },
};

export default nextConfig;