/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "doodleipsum.com",
      "media.graphcms.com",
      "media.graphassets.com",
      "viget.imgix.net",
    ],
  },
};

module.exports = nextConfig;
