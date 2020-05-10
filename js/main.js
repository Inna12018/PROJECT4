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
    asNavFor: ".slider__small-inner",
  });

  $(".slider__small-inner").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".slider__inner",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
  });
});
