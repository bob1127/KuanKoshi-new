/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "inf.fjg.mybluehost.me",
        pathname: "/website_61ba641a/wp-content/uploads/**", // 👈 加上正確的圖片路徑
      },
    ],
  },
};

export default nextConfig;
