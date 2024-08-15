var crsr = document.querySelector("#cursor")   //searches and selects the selector(which is used to target elements in css) from html document. The selector is given inside ("") 
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){   //document means HTML document
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-175+"px"
    blur.style.top = dets.y-175+"px"
})

gsap.to("#nav",{
    backgroundColor: "#000",   //We cam access any properties of CSS, we just have to write them in Camel Case instead
    duration: 0.5,
    height: "80px",
    scrollTrigger:{   //We have opened ScrollTrigger
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1    //repeat mai chalane ke liye
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})