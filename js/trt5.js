$(function() {
    if (!Modernizr.svg) {
        $("#site-logo img").attr("src", "plugins/trt-5/img/TRT-5.png");
    }

    // Slider Foundation 
    // ======================================
    // http://foundation.zurb.com/forum/posts/417-orbit-jumps-around-on-load
    //$("#orbit-selection","#orbit-trt5").hide(0).fadeIn(10000);

    $(document).foundation({
        orbit: {
            timer_speed: 10000,
            slide_number: false,
            slide_selector: 'li',
            pause_on_hover: false,
            animation_speed: 500
        }
    });
});