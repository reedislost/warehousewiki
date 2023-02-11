/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        destination: "https://cdn.splitbee.io/sb.js",
        source: "/sb.js",
      },
      {
        destination: "https://hive.splitbee.io/:slug",
        source: "/sb-api/:slug",
      },
    ];
  },
};
