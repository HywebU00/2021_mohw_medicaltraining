// 自行加入的JS請寫在這裡
$(function() {
    // 首頁輪播
    $('.mpSlider').slick({
        mobileFirst: true,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        customPaging: function(slider, i) {
            var title = $(slider.$slides[i]).find('img').attr('alt').trim();
            return $('<button type="button" aria-label="' + title + '"/>').text(title);
        }
    });
    // 廣告輪播
    $('.adSlider').slick({
        mobileFirst: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });

    $('.cp_slider').slick({
        mobileFirst: true,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        customPaging: function(slider, i) {
            var title = $(slider.$slides[i]).find('img').attr('alt').trim();
            return $('<button type="button" aria-label="' + title + '"/>').text(title);
        }
    });

    $('.cppic_slider').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        // pauseOnHover: true,
        // pauseOnFocus: true,
        // focusOnSelect: true,
        // accessibility: true,
        // lazyLoad: 'ondemand',
        // ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
            }
        }]
    });
    $('.photo_slider').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    // cp_photo
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true
    });
    $('.Slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true
    });

    // password_toggle
    var passShow = false;
    $('.password_toggle').each(function(index, el) {
        $(this).find('.btn-icon').off().click(function(e) {
            if (!passShow) {
                $(this).children('i').removeClass().addClass('i_show');
                $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
                passShow = true;
                // console.log(passShow);
            } else {
                $(this).children('i').removeClass().addClass('i_hide');
                $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
                passShow = false;
                // console.log(passShow);
            }
            e.preventDefault();
        });
    });

    // search開關
    $('.btn-toggle').click(function(e) {
        $('.search_form').stop(true, true).slideToggle(function() {
            if ($(this).is(':visible')) {
                $('.btn-toggle').html("CLOSE");
                $('.btn-toggle').attr('name', 'CLOSE');
            } else {
                $('.btn-toggle').html("SEARCH");
                $('.btn-toggle').attr('name', 'SEARCH');
            }
        });
        $(this).stop(true, true).toggleClass('close');
    });

    // hide/show personal info
    $('.btn-hideInfo').click(function(e) {
        $(this).stop(true, true).toggleClass('hide');
        $('.search_form').stop(true, true).slideToggle(function() {
            if ($(this).is(':visible')) {
                $('.btn-toggle').html("CLOSE");
                $('.btn-toggle').attr('name', 'CLOSE');
            } else {
                $('.btn-toggle').html("SEARCH");
                $('.btn-toggle').attr('name', 'SEARCH');
            }
        });

    });

    // function deIdentification(str) {
    //     const showLen = Math.round(str.length / 2); // 顯示幾個
    //     const markLen = str.length - showLen; // 要隱藏幾個
    //     const showStart = Math.round((str.length - showLen) / 2); // 從哪開始隱
    //     return str.replace(str.substr(showStart, markLen), '*'.repeat(markLen));
    // }
    // var mask_text = $(".mask_text")
    // mask_text.each(function() {
    //     var new_text = $(this).text()
    //     var inntext = deIdentification(new_text)
    //     $(this).text(inntext)
    // })



});

//svg 變色

jQuery('img.svg').each(function() {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function(data) {
        var $svg = jQuery(data).find('svg');
        if (typeof imgID !== 'undefined') { $svg = $svg.attr('id', imgID); }
        if (typeof imgClass !== 'undefined') { $svg = $svg.attr('class', imgClass + ' replaced-svg'); } $svg = $svg.removeAttr('xmlns:a');
        $img.replaceWith($svg);
    }, 'xml');
});

//fancybox
$('[data-fancybox="images"]').fancybox({
    buttons: [
        'slideShow',
        'zoom',
        'fullScreen',
        'download',
        'close'

    ],
    thumbs: {
        autoStart: true,
    }
});