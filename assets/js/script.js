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
//   Happenig module start
$('.spo-happenings__tile-wrap').slick({
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

    // to prevent the scroll of the page until all tiles shown starts
        const slider = $(".spo-happenings__tile-wrap");
        const slider_tiles = document.querySelectorAll(".spo-news-tile")
        
        slider.on('wheel', (function(e) {
            e.preventDefault();
            
            if (e.originalEvent.deltaY < (slider_tiles.length - 1)) {
                !e.preventDefault()
            } else {
                $(this).slick('slickNext');
            }
        }));
    // to prevent the scroll of the page until all tiles shown ends
//  Happenig module end

//   Shop module start
$('.spo-shop__img-wrap').slick({
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
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
var points = gsap.utils.toArray(".items");
  var height = 100 * points.length;
  var tl = gsap.timeline({
    duration: points.length,
    scrollTrigger: {
      trigger: ".spo-VT",
      start: "top bottom",
      end: "+=" + height + "%",
      scrub: true,
      id: "points"
    }
  });
  var pinner = gsap.timeline({
    scrollTrigger: {
      trigger: ".spo-VT .spo-VT-col",
      start: "top top",
      end: "+=" + height + "%",
      scrub: false,
      pin: ".spo-VT .spo-VT-col",
      pinSpacing: true,
      id: "pinning",
    }
  });

  points.forEach(function (elem, i) {
    gsap.set(elem, { position: "absolute", top: 0 });
    tl.from(elem.querySelector("video"), { autoAlpha: 0 }, i);
    if (i != points.length - 1) {
      tl.to(elem.querySelector("video"), { autoAlpha: 0, scale:1.5 }, i + 0.90);
    }
  });
  $('.product-w').slick({
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
 });
// custom dropdown
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("spo-selectBox");
l = x.length;
for (i = 0; i < l; i++) {
   selElmnt = x[i].getElementsByTagName("select")[0];
   ll = selElmnt.length;
   /*for each element, create a new DIV that will act as the selected item:*/
   a = document.createElement("DIV");
   a.setAttribute("class", "select-selected");
   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
   x[i].appendChild(a);
   /*for each element, create a new DIV that will contain the option list:*/
   b = document.createElement("DIV");
   b.setAttribute("class", "select-items select-hide");
   for (j = 1; j < ll; j++) {
      /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
         /*when an item is clicked, update the original select box,
         and the selected item:*/
         var y, i, k, s, h, sl, yl;
         s = this.parentNode.parentNode.getElementsByTagName("select")[0];
         sl = s.length;
         h = this.parentNode.previousSibling;
         for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
               s.selectedIndex = i;
               h.innerHTML = this.innerHTML;
               y = this.parentNode.getElementsByClassName("same-as-selected");
               yl = y.length;
               for (k = 0; k < yl; k++) {
                  y[k].removeAttribute("class");
               }
               this.setAttribute("class", "same-as-selected");
               break;
            }
         }
         h.click();
      });
      b.appendChild(c);
   }
   x[i].appendChild(b);
   a.addEventListener("click", function (e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
   });
}
function closeAllSelect(elmnt) {
   /*a function that will close all select boxes in the document,
   except the current select box:*/
   var x, y, i, xl, yl, arrNo = [];
   x = document.getElementsByClassName("select-items");
   y = document.getElementsByClassName("select-selected");
   xl = x.length;
   yl = y.length;
   for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
         arrNo.push(i)
      } else {
         y[i].classList.remove("select-arrow-active");
      }
   }
   for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
         x[i].classList.add("select-hide");
      }
   }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


