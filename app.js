const sun = document.getElementsByClassName('btn-toggle')[0];
const moon = document.getElementsByClassName('btn-toggle')[1];
sun.addEventListener("click", function () {
    document.body.classList.toggle('dark-theme');
    //document.header.classList.toggle('dark-theme');
})
moon.addEventListener("click", function () {
    document.body.classList.toggle('dark-theme');
    // document.body.header.classList.toggle('dark-theme');
})