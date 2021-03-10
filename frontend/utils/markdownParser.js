import { theme } from "./theme-styles"


export const md = require("markdown-it")({

  html:true,
  typographer: true,
    modifyToken: function (token, env) {
      switch (token.type) {
        case "image":
          // Split between the Img Slug and AWS S3 URI to accomodate responsive images
  
          let imgSrcPath = token.attrObj.src.split(
            process.env.AMAZON_S3_IMAGES_URI
          )
          let fileExtension = imgSrcPath[1].split('.')[1]
          if (!fileExtension.includes("jpg", "jpeg")) break
          let imgSrcSet = {
            small: `small_${imgSrcPath[1]}`,
            medium: `medium_${imgSrcPath[1]}`,
            large: `large_${imgSrcPath[1]}`,
          }
          token.attrObj.srcset =
            `${process.env.AMAZON_S3_IMAGES_URI}${imgSrcSet.small} 500w, ` +
            `${process.env.AMAZON_S3_IMAGES_URI}${imgSrcSet.medium} 750w `
          token.attrObj.sizes = "(min-width: 750px) 750px"
          token.attrObj.loading = "lazy"
          
          token.attrObj.style = `padding: calc(2 * ${theme.gap}) 0 0`
          break

      }
    },
  }).use(require("markdown-it-modify-token"))
  