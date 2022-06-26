



$(document).ready(function () {  
  
    // start rating
    
  


 
$(".bar").click(function(){
    $('.nav_item').toggleClass("open");
    $('body').toggleClass("open");
    // $("body").css("overflow","hidden");
});

$(".dash_bar").click(function(){
  $('.left_panel').toggleClass("open");
});




});




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView:2 ,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },}
  });

























    
