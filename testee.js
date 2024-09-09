$(document).ready(function(){
  $('#abrir-form').click(function(){
    $('.formulario').slideToggle();
  });

  $('.astros').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });
})
