$(function() {
    if (!Modernizr.svg) {
        $("#site-logo img").attr("src", "plugins/trt-5/img/TRT-5.png");
    }

    // Carousel de présentation du TRT-5
    // =============================================

    if ($("#carouselPresentation").length) {
        var $nav = $("#carouselNav > a");
        // Un hash trt5-XX peut être dans l'url. 
        // Dans ce cas, on active l'item de navigation du carousel correspondant.
        if (window.location.hash.substr(1).match("^trt5-")) {
            $nav.eq(window.location.hash.substr(6) - 1).addClass("active");
        } else {
            // Sinon le premier item
            $nav.eq(0).addClass("active");
        }
        // initialisation du carousel
        $("#carouselPresentation").owlCarousel({
            items:1,
            center: true,
            dots: false,
            URLhashListener:true,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            themeClass: 'owl-trt5'
        }).on('changed.owl.carousel',function(e){
            if (!e.namespace) return;
            var actif = e.relatedTarget.current();
            $nav.removeClass("active").eq(actif).addClass("active");
        });
    }

    // Carousel actualités

    $("#carouselActus").owlCarousel({
        items:1,
        center: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        //themeClass: 'owl-trt5'
    });

    // Foundation : offcanvas
    // ======================================
    $(document).foundation();

});