/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "x-hello",
            value: "world",
          },
        ],
      },
    ]
  },
  trailingSlash: true,
}
