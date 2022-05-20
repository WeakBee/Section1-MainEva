// SECTION 1-1--------------------------------
function scrollWin() {
    window.scrollBy(0, window.innerHeight);
  }
  gsap.registerPlugin(ScrollTrigger);

//we set the backface
gsap.set(".cardBack", {rotationY:-180});

$.each($(".cardCont"), function(i,element) {
  
  var frontCard = $(this).children(".cardFront"),
      backCard = $(this).children(".cardBack"),
      cardflipping = gsap.timeline({repeat:-1,repeatDelay:7,yoyo: true,delay:7});

  cardflipping
    .to(frontCard, 1, {rotationY:180})
    .to(backCard, 1, {rotationY:0},0)
    .to(element, .5, {z:50},0)
    .to(element, .5, {z:0},.5);
  
  cardflipping.resume();
  
});

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

    var changetext = gsap.timeline({repeat: -1});
    changetext.to("#section1-1 .changetext1", {
      text: {
        value: "Perkenalkan Cindy,",
      },
      yoyo: true,
      repeat:1,
      repeatDelay:4,
      duration: 2,
    },0).to("#section1-1 .changetext1_2", {
      text: {
        value: "Cindy di sini sedang melamar menjadi seorang Marketing",
      },
      yoyo: true,
      repeat:1,
      repeatDelay:4,
      duration: 2,
    },0).to("#section1-1 .changetext2", {
      text: {
        value: "Keahlian Cindy,",
      },
      yoyo: true,
      repeat:1,
      repeatDelay:4,
      duration: 2,
      delay: 7,
    },1).to("#section1-1 .changetext2_2", {
      text: {
        value: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      yoyo: true,
      repeat:1,
      repeatDelay:4,
      duration: 2,
      delay: 7,
    },1);

    changetext.resume();
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