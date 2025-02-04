$(function () {

    $('input[name=phone]').mask('+7 (999) 999-99-99');

    $('.table-item .table-title').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().toggleClass('active');
    });


    // $('.sidebar-item .item-btn').on('click', function (e) {
    //     // e.preventDefault();
    //     $('.item-btn').removeClass('active');
    //     $(this).addClass('active');
    //     $(this).parent('.sidebar-item').siblings().removeClass('active');
    //     $(this).parent('.sidebar-item').addClass('active');
    // });

    var swiper1 = new Swiper(".history-slide", {
        slidesPerView: 4,
        spaceBetween: 15,
        loop: true,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1.2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        },
    });

});

