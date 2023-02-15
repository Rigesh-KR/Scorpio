//   Happenig module start
$(".spo-happenings__tile-wrap").slick({
  dots: true,
  infinite: false,
  // speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: null,
  nextArrow: null,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// to prevent the scroll of the page until all tiles shown starts
const slider = $(".spo-happenings__tile-wrap");
const slider_tiles = document.querySelectorAll(".spo-news-tile");

slider.on("wheel", function (e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < slider_tiles.length - 1) {
    !e.preventDefault();
  } else {
    $(this).slick("slickNext");
  }
});
// to prevent the scroll of the page until all tiles shown ends
//  Happenig module end
//   Shop module start
$(".spo-shop__img-wrap").slick({
  dots: true,
  infinite: false,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: null,
  nextArrow: null,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
//   Shop module end

//   main banner start
$(".spo-banner__tile-wrap").slick({
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2800,
  prevArrow: null,
  nextArrow: null,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
//   main banner end
