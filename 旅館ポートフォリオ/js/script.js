$(function(){
    $('#rec-slick').slick({
       infinite: true,
       slidesToShow: 3,
       slidesToScroll: 3,
       autoplay: true,
       speed:1000,
       autoplaySpeed: 5000,
       arrows: false,
       centerPadding: '100px',
       centerNode: true,
     });
});
$(function(){
  $('nav-btn').on('click',function(){
    $('this').toggleClass('-active');
    $('.nav').toggleClass('-active');
  });
});