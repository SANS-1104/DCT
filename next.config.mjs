// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: ['assets.aceternity.com'],
//     },
// };
// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
