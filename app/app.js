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
    $('#nav-bar li a').click(function () {
        $('#nav-bar li a').removeClass('active');
  
      $(this).addClass('active');
    })
  })

// get the actual pathname:
var path = location.pathname;
// filter menu items to find one that has anchor tag with matching href:
$('#nav-bar li a').filter(function(){
    return '/' + $('a', this).attr('href') === path;
// add class active to the item:
}).addClass('active');


/*Remove menu on click link */ 
function linkNav(){
  const menu = document.getElementById("nav-bar")
  menu.classList.remove('show-menu');
  toggle.classList.remove('hidden');
  closee.classList.remove('see');
}
navlink.forEach(e => e.addEventListener('click',linkNav));      
/*scroll up */
  function scrollUp(){
    let scroll = document.getElementById('scroll-up');
    this.scrollY >= 200 ? scroll.classList.add('show-scroll') :  scroll.classList.remove('show-scroll');
  }
  window.addEventListener('scroll', scrollUp);
  /*active link scroll */
 var sections = document.querySelectorAll('section[id]');

 function scrollActive(){
   let scrollY = window.pageYOffset;
   sections.forEach(e=>{
    let height = e.offsetHeight;
    let top = e.offsetTop - 50;
     sectionId = e.getAttribute('id');
     scrollY > top && scrollY <=top + height ? document.querySelector('#nav-bar a[href*='+ sectionId + ']').classList.add('active') : document.querySelector('#nav-bar a[href*='+ sectionId + ']').classList.remove('active');
   })

 }
 window.addEventListener('scroll', scrollActive)