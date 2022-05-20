// SECTION 1-1--------------------------------
function scrollWin() {
    window.scrollBy(0, window.innerHeight);
  }
  gsap.registerPlugin(ScrollTrigger);

//we set the backface
gsap.set(".cardBack", {rotationY:-180});

  var changetext = gsap.timeline({repeat: -1});
    changetext.to("#section1-1 .changetext1", {
      text: {
        value: "Perkenalkan Cindy,",
      },
      yoyo: true,
      repeat:1,
      repeatDelay:3,
      duration: 2,
    },0).to("#section1-1 .changetext1_2", {
      text: {
        value: "Cindy di sini sedang melamar menjadi seorang Marketing",
      },
      yoyo: true,
      repeat:1,
      repeatDelay:3,
      duration: 2,
    },0).to(".kart1 .cardFront", 1, {
      yoyo: true,
      rotationY:0,
      repeat:1,
      repeatDelay:3,
      duration: 2,
    },0).to(".kart2 .cardFront", 1, {
      yoyo: true,
      rotationY:0,
      repeat:1,
      repeatDelay:3,
      duration: 2,
      delay:0.1,
    },0).to(".kart3 .cardFront", 1, {
      yoyo: true,
      rotationY:0,
      repeat:1,
      repeatDelay:3,
      duration: 2,
      delay:0.2,
    },0).to(".kart4 .cardFront", 1, {
      yoyo: true,
      rotationY:0,
      repeat:1,
      repeatDelay:3,
      duration: 2,
      delay:0.3,
    },0).to("#section1-1 .changetext2", {
      text: {
        value: "Keahlian Cindy,",
      },
      yoyo: true,
      repeat:1,
      repeatDelay:7.5,
      duration: 2,
      delay: 6,
    },1).to("#section1-1 .changetext2_2", {
      text: {
        value: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      yoyo: true,
      repeat:1,
      repeatDelay:7.5,
      duration: 2,
      delay: 6,
    },1).to(".kart1 .cardFront", 1, {
      yoyo: true,
      rotationY:180,
      repeat:1,
      repeatDelay:9,
      duration: 2,
      delay: 6,
    },1).to(".kart1 .cardBack", 1, {
      yoyo: true,
      rotationY:0,
      repeat:1,
      repeatDelay:9,
      duration: 2,
      delay: 6,
    },1).to(".kart2 .cardFront", 1, {
      yoyo: true,
      rotationY:180,
      repeat:1,
      repeatDelay:9,
      duration: 2,
      delay: 6.1,
    },1).to(".kart2 .cardBack", 1, {
      yoyo: true,
      rotationY:0,
      repeat:1,
      repeatDelay:9,
      duration: 2,
      delay: 6.1,
    },1).to(".kart3 .cardFront", 1, {
      yoyo: true,
      rotationY:180,
      repeat:1,
      repeatDelay:9,
      duration: 2,
      delay: 6.2,
    },1).to(".kart3 .cardBack", 1, {
      yoyo: true,
      rotationY:0,
      repeat:1,
      repeatDelay:9,
      duration: 2,
      delay: 6.2,
    },1).to(".kart4 .cardFront", 1, {
      yoyo: true,
      rotationY:180,
      repeat:1,
      repeatDelay:9,
      duration: 2,
      delay: 6.3,
    },1).to(".kart4 .cardBack", 1, {
      yoyo: true,
      rotationY:0,
      repeat:1,
      repeatDelay:9,
      duration: 2,
      delay: 6.3,
    },1);

    changetext.resume();

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

    gsap.from("#section1-1 .kart,#section1-1 .kart5", { opacity: 0, delay: 1.2, duration: 0.5 });
  });
  
  gsap.to("#section1-1 .kart5", {
    yPercent: -700,
    ease: "none",
    scrollTrigger: {
      trigger: "#section1-1",
      pin:"#section1-1 .row",
      scrub: true
    }, 
  });

  gsap.to("#section1-1 .cardCont", {
    yPercent: -410,
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
  // SECTION 1-1---------------------------