function sum(a, b) {
    return a + b;
  }

/**
 * Build arr of images for gallery.
 * @param {array} list  - The colection of images.
 */  
export const buildGallery = (list) => {
    let result = []
    for (const image of list) {
        result.push(`<div class="m-2"><a data-fancybox='gallery' href='${image.link}'><img src='${image.link}'  alt='${image.title}'></a></div>`)
    }
    return result;
}



export const topFunction = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}
//   module.exports = sum;
//   module.exports = buildGallery;
