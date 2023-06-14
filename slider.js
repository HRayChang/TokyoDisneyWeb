const swiper1 = new Swiper(".slider-1", {
    autoplay: {
        delay: 34000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
});

const swiper2 = new Swiper(".slider-2", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
});

const swiper3 = new Swiper(".slider-3", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    autoHeight: true,
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
    },
    pagination: {
        el: ".custom-pagination",
    }
});