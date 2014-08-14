$(function() {
    if (!Modernizr.svg) {
        $("#site-logo img").attr("src", "plugins/trt-5/img/TRT-5.png");
    }

    // Carousel de présentation du TRT-5
    // =============================================
    
    if($("#carouselPresentation").length) {
        var presentation = $("#carouselPresentation"), nav = $("#carouselNav > a");
        nav.eq(0).addClass("active");
        presentation.owlCarousel({
            items:1,
            pagination: false
        });
        nav.on("click",function(e){
            e.preventDefault();
            id = this.hash.substr(6) - 1;
            presentation.trigger("owl.goTo",id);
            nav.removeClass("active").eq(id).addClass("active");
        });
    }

    // Carousel actualités
    $("#carouselActus,#carouselPresentation").owlCarousel({
        items:1
    });

    // Foundation : offcanvas
    // ======================================
    $(document).foundation();

});