/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  compiler: {
    styledComponents: true,
  },
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "**.example.com",
    //   },
    // ],
    domains: [
      "littledeep.com",
      "picsum.photos",
      "loremflickr.com",
      "upload.wikimedia.org",
      "cdn.dtnews24.com",
      "mblogthumb-phinf.pstatic.net",
      "images.unsplash.com",
      "static.wixstatic.com",
      "search.pstatic.net",
      "avatars.githubusercontent.com",
      "cloudflare-ipfs.com",
      "",
    ],
  },
};

module.exports = nextConfig;
