// show and hide pop
let headerImgProfile = document.querySelector('.header-img-profile')
let profileimg = document.querySelector('.profileimg')
let headerOverlay = document.querySelector('.header-overlay')

profileimg.addEventListener('click',()=>{
    headerImgProfile.classList.toggle('active')
    headerOverlay.classList.toggle('active')
})

headerOverlay.addEventListener('click',()=>{
    headerImgProfile.classList.toggle('active')
    headerOverlay.classList.toggle('active')
})

//add posts
let posts = document.querySelector('.posts')