const themeSwitch = document.getElementById("themeSwitch");
const themeIconPath = themeSwitch.src.split('/')
const themeIconImg = themeIconPath[themeIconPath.length - 1]
console.log(localStorage.getItem('isDark'))
let isDarkTheme = false
if(localStorage.getItem('isDark') === null){
    localStorage.setItem('isDark', 'false')
} else {
    isDarkTheme = JSON.parse(localStorage.getItem('isDark'))
}

if(isDarkTheme){
    themeSwitch.src="images/sun.png"
    document.body.classList.toggle('dark-theme');
}
// const moon = document.getElementsByClassName('btn-toggle')[1];
themeSwitch.addEventListener("click", function () {

    console.log(isDarkTheme)
    isDarkTheme = !isDarkTheme
    localStorage.setItem('isDark',isDarkTheme ? 'true' : 'false')
    isDarkTheme ? themeSwitch.src="images/sun.png" : themeSwitch.src="images/moon.png"

    
    document.body.classList.toggle('dark-theme');
})

const photoGallery = {
    cat : null,
    picture : null,
    sculpture : null
}



/**
 * Build arr of images for gallery.
 * @param {array} list  - The colection of images.
 */
const buildGallery = (list) => {
    console.log(list)
    let result = []
    for (const image of list) {
        result.push(`<a data-fancybox='gallery' href='${image.link}'><img src='${image.link}' alt='${image.title}'></a>`)
    
    }
    return result;
}

fetch("gallery.json")
  .then(response => response.json())
  .then(json => {
      photoGallery.cat = json.cat
      photoGallery.picture = json.picture
      photoGallery.sculpture = json.sculpture
      console.dir(buildGallery(photoGallery.cat));
  });


 
