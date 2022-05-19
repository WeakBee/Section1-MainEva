function scrollWin() {
    window.scrollBy(0, window.innerHeight);
  }
gsap.registerPlugin(ScrollTrigger);
$(document).ready(function () {
  gsap.to("#section1-1 .mask1", {
    scaleY: 0,
    transformOrigin: "top bottom",
    duration: 1,
    delay: 0.5,
  });
  gsap.to("#section1-1 .mask2", {
    scaleY: 0,
    transformOrigin: "top bottom",
    duration: 1,
    delay: 0.5,
  });
  gsap.to("#section1-1 .orang", {
    scale: 0.85,
    transformOrigin: "center bottom",
    duration: 1,
    delay: 0.7,
  });
  gsap.to("#section1-1 .orang", {
    scale: 1,
    transformOrigin: "center bottom",
    duration: 1,
    delay: 1.2,
  });
  gsap.to("#section1-1 .mask3", {
    scaleY: 0,
    transformOrigin: "top bottom",
    duration: 1,
    delay: 1.2,
  });
  gsap.from("#section1-1 .solusibtn", {
    scale: 1.15,
    transformOrigin: "top left",
    duration: 0.5,
    delay: 1.2,
  });
  gsap.from("#section1-1 .kart", { opacity: 0, delay: 1.2, duration: 0.5 });
});
gsap.to("#section1-1 .kart5", {
    yPercent: -600,
    ease: "none",
    scrollTrigger: {
      trigger: "#section1-1",
      pin:"#section1-1 .row",
      scrub: true
    }, 
  });
  
  gsap.to("#section1-1 .bgorang , #section1-1 .mask2", {
    yPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: "#section1-1",
      pin:"#section1-1 .row",
      scrub: true
    }, 
  });
  
  gsap.to("#section1-1 .col1", {
    yPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: "#section1-1",
      pin:"#section1-1 .row",
      scrub:0.01,
    }, 
  });
  
  gsap.to("#section1-1 .panahlingkaran", {
    yPercent: -1700,
    ease: "none",
    scrollTrigger: {
      trigger: "#section1-1",
      pin:"#section1-1 .row",
      scrub:0.01,
    }, 
  });