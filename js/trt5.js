$(function() {
    if (!Modernizr.svg) {
        $("#site-logo img").attr("src", "plugins/trt-5/img/TRT-5.png");
    }

    // Slider Foundation 
    // ======================================
    // http://foundation.zurb.com/forum/posts/417-orbit-jumps-around-on-load
    $("#orbit").hide(0).fadeIn(2000);

    $(document).foundation({
        orbit: {
            timer_speed: 10000,
            slide_number: false,
            slide_selector: 'li',
            pause_on_hover: false, // Pauses on the current slide while hovering
            //resume_on_mouseout: false, // If pause on hover is set to true, this setting resumes playback after mousing out of slide
            //next_on_click: true, // Advance to next slide on click
            animation_speed: 500
        }
    });
});