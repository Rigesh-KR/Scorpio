//   Happenig module start
$('.spo-happenings__tile-wrap').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
//   Happenig module end

//   Navbar  Start
function openNav() {
  // document.getElementById("mySidenav").style.width = "250px";
  var slide = "right:0; top:0; width:300px;";
  document.getElementById("Sidenav").style = slide;
   document.getElementById("CanvasNav").style.width = "100%";
    document.getElementById("CanvasNav").style.opacity = "1";  
}
function closeNav() {
  document.getElementById("Sidenav").style.right = "-300px";
  document.getElementById("CanvasNav").style.width = "0%";
  document.getElementById("CanvasNav").style.opacity = "0"; 
}
function openOffcanvas() {
  document.getElementById("CanvasNav").style.opacity = "1"; 
}
function closeOffcanvas() {
  document.getElementById("Sidenav").style.right = "-300px";
  document.getElementById("CanvasNav").style.opacity = "0"; 
  document.getElementById("CanvasNav").style.width = "0"; 
}
//   Navbar  End
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 60) {
    $(".spo-header").addClass("sticky");
  } else {
    $(".spo-header").removeClass("sticky");
   // $("body").removeClass("overlay");
  }
});