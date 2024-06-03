var  body = document.querySelector("body"),
navbar = body.querySelector("#header"),
modeSw = body.querySelector(".toggle-sw"),
img = navbar.querySelector("img"),
menu = document.getElementById("nav-bar"),
toggle =  body.querySelector(".toggle"),
navlink= document.querySelectorAll('.nav-link'),
closee =  body.querySelector(".close");
//modeText = body.querySelector(".mode-text");
//main = body.querySelector("#main-doc");
// toggle.addEventListener("click", () =>{
//   navbar.classList.toggle("close");
//   main.classList.toggle("toggle-main");
// })


modeSw.addEventListener("click", () =>{
  body.classList.toggle("white");
  body.classList.contains("white") ? img.src="img/logo-dark.png" : img.src="img/logo.png";
 // body.classList.contains("white") ? modeText.innerText ="Light Mode" : modeText.innerText ="Dark Mode"
 });


if(toggle){
 toggle.addEventListener("click",()=>{
  menu.classList.toggle('show-menu');
  toggle.classList.toggle('hidden');
  closee.classList.toggle('see');
  //add x 
 
 });
};


if(closee){
  closee.addEventListener("click",()=>{
   menu.classList.remove('show-menu');
   //add menu 
   toggle.classList.remove('hidden');
   closee.classList.remove('see');
  });
 };
/*Remove menu on click link */ 
function linkNav(){
  const menu = document.getElementById("nav-bar")
  menu.classList.remove('show-menu');
  toggle.classList.remove('hidden');
  closee.classList.remove('see');
}
navlink.forEach(e => e.addEventListener('click',linkNav));

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
