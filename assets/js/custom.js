(function ($) {
    $(document).ready(function () {
        //hero slider
        $('#hero-slider').owlCarousel({
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: true,
            dots: false,
            mouseDrag: false,
            touchDrag: false,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true
                }
            }
        });
        //slider animation
        $('#hero-slider').on('translate.owl.carousel', function() {
            $('.item-content h2, .item-content p').removeClass('animated fadeInUp').css('opacity', '0');
            $('.hero-cont-btn a').removeClass('animated fadeInLeft').css('opacity', '0');
            $('.hero-order-btn a').removeClass('animated fadeInRight').css('opacity', '0');
        });
        $('#hero-slider').on('translated.owl.carousel', function() {
            $('.item-content h2, .item-content p').addClass('animated fadeInUp').css('opacity', '1');
            $('.hero-cont-btn a').addClass('animated fadeInLeft').css('opacity', '1');
            $('.hero-order-btn a').addClass('animated fadeInRight').css('opacity', '1');
        });

        //testimonials slider
        $('.testimonials').owlCarousel({
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: true
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: true
                }
            }
        });

        //feat-product-slide
        $('.feat-product-slide').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 2,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: true
                },
                1000: {
                    items: 5,
                    nav: true,
                    loop: true
                }
            }
        });

        /*material activation area*/
        $('select').formSelect();
        $('.fixed-action-btn').floatingActionButton();
        $('.dropdown-trigger').dropdown();
        $('.collapsible').collapsible();
        $('.sidenav').sidenav();
        $('#cartnav-out').sidenav();
        $('#filternav-out').sidenav();
    });
})(jQuery);