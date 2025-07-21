/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagsapi.com",
        port: "",
        pathname: "/my-bucket/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/photo-1586023492125-27b2c045efd7",
      },
    ],
  },
};

export default nextConfig;
