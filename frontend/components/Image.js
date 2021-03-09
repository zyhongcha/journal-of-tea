
const Image = ({ imageObj, className, ...params }) => {
 
  function buildSrcSet() {
    let srcSet = []

    for (let format in imageObj.formats) {
      switch (format) {
        case 'thumbnail':
        srcSet.push(`${imageObj.formats.thumbnail.url} 156w`)
        break;
        case 'small':
        srcSet.push(`${imageObj.formats.small.url} 500w`)
        break;
        case 'medium':
        srcSet.push(`${imageObj.formats.medium.url} 750w`)
        break;
        case 'large':
        srcSet.push(`${imageObj.formats.large.url} 1000w`)
        break; 
      }
    }

    return srcSet.join(', ')
  }
  function buildSizes() {
    // return `(min-width: 1600px) 1200px,
    // (min-width: 1400px) 1100px,
    // (min-width:1000px) 900px,
    // 100vw`   
    
  }


  return (
    <img
      src={imageObj.url}
      srcSet={buildSrcSet()}
      sizes={buildSizes()}
      alt={imageObj.alternativeText || imageObj.name}
      decoding="async"
      loading="lazy"
      importance="low"
      className={className}
      
      {...params}
    />
  );
};
export default Image;