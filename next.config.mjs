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
    ],
  },
};

export default nextConfig;
