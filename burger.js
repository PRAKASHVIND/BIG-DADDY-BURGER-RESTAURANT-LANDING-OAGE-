
 var span22=document.querySelector("#part1text #span22");

timeout = setTimeout(function (){
    span22.style.color= "white"
},2000)



function call(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}

call()

    var swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
    });
    gsap.from("#nevtext1 h2",{
        stagger:0.2,
        x:80,
        ease:"Expo.easeInOut",
        opacity:0
    })
    gsap.from("#part1text h1",{
        x:300,
        duration:2,
        ease:"Expo.easeInOut",
        opacity:0
    })
    gsap.from("#left",{
      scrollTrigger:{
       trigger:"#left",
       start:"top 80%",
       end:"top 40%",
       scroller:"#main",
       scrub:1
      },
      y:80,
      opacity:0,
      ease:"Expo.easeInOut",
    })

    gsap.from(".card1",{
      scrollTrigger:{
       trigger:".card1",
       start:"top 80%",
       end:"top 40%",
       scroller:"#main",
       scrub:2
      },
      stagger:1.5,
      x:80,
      ease:"Expo.easeInOut",
      opacity:0
    })
    gsap.from("#eating-right",{
      scrollTrigger:{
       trigger:"#eating-right",
       start:"top 60%",
       end:"top 30%",
       scroller:"#main",
       scrub:2
      },
      stagger:1.5,
      x:200,
      ease:"Expo.easeInOut",
      opacity:0
    })

    gsap.from("#part5top h2",{
      scrollTrigger:{
       trigger:"#part5top h2",
       start:"top 60%",
       end:"top 30%",
       scroller:"#main",
       scrub:2
      },
      stagger:1.5,
      y:80,
      ease:"Expo.easeInOut",
      opacity:0
    })
    gsap.from("#part6containerA",{
      scrollTrigger:{
       trigger:"#part6containerA",
       start:"top 60%",
       end:"top 30%",
       scroller:"#main",
       scrub:2
      },
      stagger:0.5,
      y:100,
      ease:"Expo.easeInOut",
      opacity:0
    })
    gsap.from(".part6containerB",{
      scrollTrigger:{
       trigger:".part6containerB",
       start:"top 50%",
       end:"top 30%",
       scroller:"#main",
       scrub:2
      },
      stagger:0.5,
      x:100,
      ease:"Expo.easeInOut",
      opacity:0
    })
    

    