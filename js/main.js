$(function () {

    $('.main_slide').slick({
        // vertical: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
    });


    $('.m_slide').slick({
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



    $('.direction .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $(' .direction .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });


    $('.arrows .left').on('click', function () {
        $('.m_slide').slick('slickPrev');
    });
    $(' .arrows .right').on('click', function () {
        $('.m_slide').slick('slickNext');
    });

    $('.history_menu li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.history_content li').eq(idx).addClass('on').siblings().removeClass('on');
    })


    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('.quick_btm').addClass('on')
        }
        else {
            $('.quick_btm').removeClass('on')
        }

    });

    $('.bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/7E_lesFFP3E?list=TLGGqu2C9tadMiAxMjA2MjAyMw',
        containment: '.history_content .video1',
        autoPlay: false,
        showControls: false,
        playOnlyIfVisible: true,
    });


    $('.bgndVideo2').YTPlayer({
        videoURL: 'https://youtu.be/bhWTsXI-kOg?list=TLGGkpVsDBWPYEcxMjA2MjAyMw',
        containment: '.history_content .video2',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });


})


