$(document).ready(function () {
  $(".carousel-container").slick({
    lazyLoad: "ondemand",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 350,
    dots: true,
    prevArrow:
      " <img src='./assets/arrow.svg'  alt='left-arrow' class='left-arrow'>",
    nextArrow:
      "<img src='./assets/arrow.svg' alt='right-arrow' class='right-arrow'>",
  });
});
