$(".food").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 1500,
  dots: true,
});
$(".work-time2").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
autoplaySpeed: 1500,
// dots: true,
});




// $(".said-about-row").slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
// autoplaySpeed: 2500,
// dots: true,
// });
$('.said-about-row').slick({
  dots: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});