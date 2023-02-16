@@include('./partials/swiper-bundle.min.js')

const swiperReviews = new Swiper('.swiper-reviews', {
    slidesPerView: 1,
    spaceBetween: 93,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
const swiperVideoThumb = new Swiper('.swiper-video-thumb', {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        425: {
            slidesPerView: 2.4,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        }
    }
})

const swiperVideo = new Swiper('.swiper-video', {
    slidesPerView: 1,
    spaceBetween: 85,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: swiperVideoThumb,
    },
})


const showPhone = document.getElementById('js-show-phone')

showPhone.addEventListener('click', function (){
    document.querySelector('.header__alert').classList.toggle('show')
})


const menuShow = document.getElementById('menuShow')

menuShow.addEventListener('click', function (e){
    document.querySelector('.menu-mobile').classList.add('show')
    document.querySelector('.wrp__overlay').classList.add('show')
    document.body.classList.add('lock')
})

const menuClose = document.getElementById('menuclose')

menuClose.addEventListener('click', function (e){
    document.querySelector('.menu-mobile').classList.remove('show')
    document.querySelector('.wrp__overlay').classList.remove('show')
    document.body.classList.remove('lock')
})

const menuItems = document.querySelectorAll('.menu-top__link')

for (let menuItem of menuItems) {
    menuItem.addEventListener('click', function (){
        document.querySelector('.menu-mobile').classList.remove('show')
        document.querySelector('.wrp__overlay').classList.remove('show')
        document.body.classList.remove('lock')
    })
}