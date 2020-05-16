$(function () {
  $(".slider__inner").slick({
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="images/next.png" alt="next arrow"></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="images/prev.png" alt="prev arrow"></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".thumbs-inner",

  });

  $(".thumbs-inner").slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: ".slider__inner",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
  });


  $('.header__menu-btn').on('click', function () {
    $('.header__menu > ul').slideToggle();
  });


});


