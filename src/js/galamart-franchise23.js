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