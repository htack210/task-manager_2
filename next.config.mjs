/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "localhost",
      "https://img.clerk.com",
      "img.clerk.com",
      "https://unsplash.com/",
    ],
  },
};

export default nextConfig;
