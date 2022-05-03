import {
    buildGallery,
    topFunction
} from './scripts/functions.js';


const themeSwitch = document.getElementById("themeSwitch");
const themeIconPath = themeSwitch.src.split('/')
const themeIconImg = themeIconPath[themeIconPath.length - 1]
let isDarkTheme = false

if (localStorage.getItem('isDark') === null) {
    localStorage.setItem('isDark', 'false')
} else {
    isDarkTheme = JSON.parse(localStorage.getItem('isDark'))
}

if (isDarkTheme) {
    themeSwitch.src = "images/sun.png"
    document.body.classList.toggle('dark-theme');
}

themeSwitch.addEventListener("click", function () {
    isDarkTheme = !isDarkTheme
    localStorage.setItem('isDark', isDarkTheme ? 'true' : 'false')
    isDarkTheme ? themeSwitch.src = "images/sun.png" : themeSwitch.src = "images/moon.png"
    document.body.classList.toggle('dark-theme');
})

const photoGallery = {
    cat: null,
    picture: null,
    sculpture: null
}

//build picture gallery 
const picturesGallery = document.getElementById('picturesGallery')
const sculptureGallery = document.getElementById('picturesGallery')
const catGallery = document.getElementById('picturesGallery')



const buttonToTop = document.getElementById('myBtn')
buttonToTop.addEventListener('click', topFunction)

const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        buttonToTop.style.display = 'block'
    } else {
        buttonToTop.style.display = 'none'
    }
}


window.onscroll = () => scrollFunction()


fetch("gallery.json")
    .then(response => response.json())
    .then(json => {
        photoGallery.cat = json.cat
        photoGallery.picture = json.picture
        photoGallery.sculpture = json.sculpture
        for (const imgStr of buildGallery(photoGallery.picture)) {
            picturesGallery.innerHTML += imgStr            
        }
        
    });
