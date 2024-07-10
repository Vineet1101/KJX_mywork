$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
          $('nav button').addClass('white')
    }

    else {
          $('nav').removeClass('black');
          $('nav button').removeClass('white')
    }
})


function cursorEffect() {
      var hero = document.querySelector("#page1 .hero,nav")
      var cursor = document.querySelector("#cursor")
      hero.addEventListener("mousemove", (events) => {

            gsap.to(cursor, {
                  x: events.x,
                  y: events.y

            })
      })
      hero.addEventListener("mouseenter", (events) => {
            gsap.to(cursor, {
                  scale: 1,
                  opacity: 1
            })

      })
      hero.addEventListener("mouseleave", (events) => {
            gsap.to(cursor, {
                  scale: 0,
                  opacity: 0
            })
      })

}





cursorEffect()




function loaderAnimation(){
      var tl = gsap.timeline()


      tl.from("#loader h3", {
            x: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
      })
      
      
      
      tl.to("#loader h3", {
            opacity: 0,
            x: -10,
            duration: 1,
            stagger: 0.1,
      })
      
      tl.to("#loader", {
            opacity: 0,
      
      })
      tl.to("#loader", {
            display: "none",
      
      })
}
loaderAnimation()