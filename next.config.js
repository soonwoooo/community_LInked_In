/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["upload.wikimedia.org"], // 이미지를 불러올 도메인을 추가합니다.
  },
};

module.exports = nextConfig;
