@@include('./partials/swiper-bundle.min.js')

const swiperReviews = new Swiper('.swiper-reviews', {
    slidesPerView: 1,
    spaceBetween: 85,
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
            slidesPerView: 2.5,
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

