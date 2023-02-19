// scroll section start
$(function () {
  $(window).on('scroll',function () {
    var scrollsize= $(window).scrollTop()

    if (scrollsize > 200) {
      $('#backtotop').show();
       }
    else
    $('#backtotop').hide();
     })

     $('#backtotop').on('click', function () {
      $('html,body').animate({
        scrollTop:0,
      },1000)
     })
     
})
// scroll section end

// sticky menu section start
// $(function () {
//   $(window).on('scroll',function () {
//     var scrollsize= $(window).scrollTop()

//     if(scrollsize > 50) {
//       $('#header').addClass('active')
//     }
//   })

// sticky menu section end
// banner slider section start
   $(function () {
    $('.banner_slider').slick({
      
      dots:true,
      dotsClass:'banner_dots',
      prevArrow:'<i class="banner_icon fa-solid fa-circle-chevron-right"></i>',
      nextArrow:'<i class="banner_icon fa-solid fa-circle-chevron-left"></i>'
    });

    
   }) 
   // banner slider section end
  $(function (){
    $('.achievement_counter').counterUp({
      delay: 50,
    time: 5000,
    });
    
  });

$(function (){
  AOS.init({
    duration:2000,
  });
})
$(function (){
  AOS.init({
    duration:1000,
  });
})