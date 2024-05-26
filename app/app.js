$(document).ready(function() {
    var NavY = $('#header').offset().top;

    var stickyNav = function(){
        var ScrollY = $(window).scrollTop();
        ScrollY > NavY ?  $('#header').addClass('sticky') : $('#header').removeClass('sticky');
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });
});




var  body = document.querySelector("body"),
navbar = document.getElementById("#header"),
//toggle = body.querySelector(".toggle"),
modeSw = body.querySelector(".toggle-sw");
//modeText = body.querySelector(".mode-text");
//main = body.querySelector("#main-doc");

// toggle.addEventListener("click", () =>{
//   navbar.classList.toggle("close");
//   main.classList.toggle("toggle-main");
// })


modeSw.addEventListener("click", () =>{
  body.classList.toggle("white");
 // body.classList.contains("white") ? modeText.innerText ="Light Mode" : modeText.innerText ="Dark Mode"
 })

window.addEventListener('load',function(){
    $('.navbar li a').click(function () {
        $('.navbar li a').removeClass('active');
  
      $(this).addClass('active');
    })
  })

// get the actual pathname:
var path = location.pathname;
// filter menu items to find one that has anchor tag with matching href:
$('.navbar li a').filter(function(){
    return '/' + $('a', this).attr('href') === path;
// add class active to the item:
}).addClass('active');
