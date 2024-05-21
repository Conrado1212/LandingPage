$(document).ready(function() {
    var NavY = $('.top-menu').offset().top;

    var stickyNav = function(){
        var ScrollY = $(window).scrollTop();
        ScrollY > NavY ?  $('.top-menu').addClass('sticky') : $('.top-menu').removeClass('sticky');
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });
});
