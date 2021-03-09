require("dotenv").config()

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    AMAZON_S3_IMAGES_URI: process.env.AMAZON_S3_IMAGES_URI,
    AMAZON_S3_IMAGES_DOMAIN: process.env.AMAZON_S3_IMAGES_DOMAIN,
  },
  images: {
    domains: [process.env.AMAZON_S3_IMAGES_DOMAIN],
    imageSizes: [152, 500, 750, 1222],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  async redirects() {
    return [
      
      {
        source: "/article",
        destination: "/",
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      
      {
        source: "/articles",
        destination: "/",
      },
    ]
  },
}
