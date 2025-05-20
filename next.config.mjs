/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "inf.fjg.mybluehost.me",
      },
    ],
  },
};

export default nextConfig;
