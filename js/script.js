//Slider settings
jQuery(function ($) {

    $('.parallax_classic_bullets').parallax_classic({
        skin: 'bullets',
        width: 600,
        height: 600,
        defaultEasing: 'easeOutElastic',
        autoPlay: 0,
        responsive: true,
        autoHideBottomNav: false,
        showPreviewThumbs: true,
        showNavArrows: true,
        autoHideNavArrows: false,
        showCircleTimer: false,
        myloaderTime: 3,
        scrollSlideDuration: 1.8,
        scrollSlideEasing: 'easeInQuint',
        thumbsWrapperMarginBottom: 20,
        circleColor: '#F7941D'
    });


//Smooth scrolling of the page when you click on the menu
    $(".smooth-scroll").on("click", function (event) {

        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100 && $(".menu").hasClass("default")) {
            $(".menu").removeClass("default").addClass("fixed");
        } else if ($(this).scrollTop() <= 100 && $(".menu").hasClass("fixed")) {
            $(".menu").removeClass("fixed").addClass("default");
        }


//Back to top button
        if ($(this).scrollTop() > 400) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

// scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


//Slider settings
    var jcarousel = $('.jcarousel');

    jcarousel
        .jcarousel({
            animation: {
                duration: 1000,
                speed: 1000,
                easing: 'linear',
                complete: function () {
                }
            }
        })
        .jcarouselAutoscroll({
            interval: 5000,
            target: '+=1',
            autostart: true,
        })
        .on('mouseover', function (e) {
            $(this).jcarouselAutoscroll('stop');
        })
        .on('mouseout', function (e) {
            $(this).jcarouselAutoscroll('start');
        });

    jcarousel
        .on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();

            if (width >= 900) {
                width = width / 2;
            } else if (width >= 350) {
                width = width / 1;
            }

            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
        .jcarousel({
            wrap: 'circular'
        });

    $('.jcarousel-control-prev')
        .jcarouselControl({
            target: '-=1'
        });

    $('.jcarousel-control-next')
        .jcarouselControl({
            target: '+=1'
        });

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function () {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function () {
            $(this).removeClass('active');
        })
        .on('click', function (e) {
            e.preventDefault();
        })
        .jcarouselPagination({
            perPage: 1,
            item: function (page) {
                return '<a href="#' + page + '">' + page + '</a>';
            }
        });


//Match height
    $(function() {
        $('.item').matchHeight(
            {
                byRow: true,
                property: 'height',
                target: null,
                remove: false
            }
        );
        $('.selebrate-block-item').matchHeight(
            {
                byRow: true,
                property: 'height',
                target: null,
                remove: false
            }
        );
    });

//Code for incrementing up to a certain number
    $(function(){
        var show = true;
        var countbox = "#counts";
        $(window).on("scroll load resize", function(){
            if(!show) return false;
            var w_top = $(window).scrollTop();
            var e_top = $(countbox).offset().top;
            var w_height = $(window).height();
            var d_height = $(document).height();
            var e_height = $(countbox).outerHeight();
            if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
                $(".spincrement").spincrement({
                    thousandSeparator: "",
                    duration: 2500
                });
                show = false;
            }
        });
    });
});


