const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    autoplay: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 12,
    // Responsive breakpoints
    breakpoints: {
       
        // when window width is >= 992px
        992: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});