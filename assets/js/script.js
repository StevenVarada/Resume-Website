// JavaScript Document
$(document).ready(function() {
    $("#content-slider").lightSlider({
        item: 2,
        autoWidth: false,
        loop:true,
        slideMargin: 10,
        slideMove: 1,
        auto:true,
        speed: 1000,
        pauseOnHover: true,
        pause: 5000,
        keyPress:true
    });
});