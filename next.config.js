/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['inflearn-nextjs.vercel.app', 'search.pstatic.net'],
  },
  i18n: {
    locales: ['ko'],
    defaultLocale: 'ko',
  },
};

module.exports = nextConfig;
