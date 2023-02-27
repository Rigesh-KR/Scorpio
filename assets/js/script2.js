ScrollTrigger.defaults({
    markers:false
  })
  
  var points = gsap.utils.toArray('.slides');
  // var indicators = gsap.utils.toArray('.indicator');
  
  var height = 100 * points.length;
  
  // gsap.set('.indicators', {display: "flex"});
  
  var tl = gsap.timeline({
    duration: points.length,
    scrollTrigger: {
      trigger: ".transition",
      start: "top bottom",
      end: "+="+height+"%",
      scrub: true,
      id: "points",
    }
  })
  
  var pinner = gsap.timeline({
    scrollTrigger: {
      trigger: ".transition .transition-in",
      start: "top top",
      end: "+="+height+"%",
      scrub: true,
      pin: ".transition .transition-in",
      pinSpacing: true,
      // id: "pinning",
      // markers: true
    }
  })
  
  
  
  points.forEach(function(elem, i) {
    gsap.set(elem, {position: "absolute", top: 0});
  
    // tl.to(indicators[i], {backgroundColor: "orange", duration: 0.25}, i)
    tl.from(elem.querySelector('video'), {autoAlpha:0}, i)
    tl.from(elem.querySelector('.heading'), {autoAlpha:0, translateY: 100}, i)
    
    if (i != points.length-1) {
      // tl.to(indicators[i], {backgroundColor: "#adadad", duration: 0.25}, i+0.75)
      tl.to(elem.querySelector('.heading'), {autoAlpha:0, translateY: -100}, i + 0.75)
      tl.to(elem.querySelector("video"), { autoAlpha: 0, scale: 1.5 }, i + 0.90);
    }
    
  });