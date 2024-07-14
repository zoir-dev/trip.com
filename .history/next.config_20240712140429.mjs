/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['uz','en','ru'],
    defaultLocale: 'uz'
  },
  images: {
    domains: ['static.tripcdn.com'],
  },
};

export default nextConfig;
