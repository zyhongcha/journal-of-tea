require('dotenv').config()

module.exports = {
    env: {
        API_URL: process.env.API_URL,
        AMAZON_S3_IMAGES_URI: process.env.AMAZON_S3_IMAGES_URI,
        AMAZON_S3_IMAGES_DOMAIN: process.env.AMAZON_S3_IMAGES_DOMAIN
    },
    images: {
        domains: [ process.env.AMAZON_S3_IMAGES_DOMAIN ],
        imageSizes: [152, 500, 750, 1000]
    }
}