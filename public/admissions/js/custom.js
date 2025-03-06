
$("#core-slider").owlCarousel({
        autoplay: true,
        items: 4, //Set Testimonial items
        loop: false,
        margin: 0,
        singleItem: true,
        touchDrag: false,
        mouseDrag: false,
        pagination: false,
        nav: false,
        dots: true,
        navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
             singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        480:{
            items:2,
             singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        568:{
            items:2,
             singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        600:{
            items:2,
             singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        667:{
            items:3,
        },
        1000:{
            items:4
        }
    }   
        
    });




$("#students-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: false,
        //smartSpeed: 2000, // Default is 250
        items: 2, //Set Testimonial items
        loop: false,
        margin: 50,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        nav: true,
        dots: true,
        navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav: false,
        },
        480:{
            items:1,
            nav: false,
        },
        568:{
            items:1,
            nav: false,
        },
        600:{
            items:1,
            nav: false,
        },
        667:{
            items:1,
        },
        1000:{
            items:2
        }
    }   
        
    });



//rank-slider
$("#rank-slider").owlCarousel({
  //autoPlay: 5000, //Set AutoPlay to 5 seconds
  autoplay: false,
  //smartSpeed: 2000, // Default is 250
  items: 5, //Set Testimonial items
  loop: false,
  margin: 15,
  singleItem: true,
  touchDrag: true,
  mouseDrag: true,
  pagination: false,
  nav: false,
  dots: true,
  navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
  responsiveClass:true,
  responsive:{
    0:{
        items:2,
        autoplay: true,
    },
    480:{
        items:2,
        autoplay: true,
    },
    568:{
        items:2,
        autoplay: true,
    },
    600:{
        items:3,
        autoplay: true,
    },
    667:{
        items:3,
        autoplay: true,
    },
    1000:{
        items:5
    }
  }   
  
}); 

//recruiters-slider
$("#recruiters-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: true,
        //smartSpeed: 2000, // Default is 250
        items: 6, //Set Testimonial items
        loop: false,
        margin: 0,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        nav: false,
        dots: true,
        navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },
        480:{
            items:2,
        },
        568:{
            items:3,
        },
        600:{
            items:3,
        },
        667:{
            items:3,
        },
        1000:{
            items:6
        }
    }   
        
    }); 


$('#pgdm-slider, #pgdm-slider1').owlCarousel({
             autoplay: true,
        autoplayTimeout: 2000,
            loop: false,
            nav: false,
            dots: true,
            smartSpeed: 2000,
            margin: 2,
            autoplayHoverPause: true,
            autoplay: true,
            navText: [
                "<i class='flaticon-left-arrow-1'></i>",
                "<i class='flaticon-right-arrow-1'></i>"
            ],
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 2,
                }
            }
        });




$('#step-slides').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            smartSpeed: 2000,
            margin: 0,
            autoplayHoverPause: true,
            autoplay: true,
            navText: [
                "<i class='flaticon-left-arrow-1'></i>",
                "<i class='flaticon-right-arrow-1'></i>"
            ],
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                1200: {
                    items: 3,
                }
            }
        });


 var owl = $('#gallery-slides');
    owl.owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: true,
        stagePadding: 100,
        smartSpeed: 2000, // Default is 250
        items: 3, //Set Testimonial items
        loop: true,
        margin: 20,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        nav: true,
        dots: false,
        navText: ["<i class='fas fa-caret-left'></i>", "<i class='fas fa-caret-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            stagePadding: 50,
        },
        480:{
            items:1,
            stagePadding: 50,
        },
        568:{
            items:1,
            stagePadding: 30,
        },
        600:{
            items:1,
            stagePadding: 30,
        },
        667:{
            items:4,
            stagePadding: 30,
        },
        1000:{
            items:3
        }
    }  

});

 $.scrollIt({
        upKey: 38,             // key code to navigate to the next section
        downKey: 40,           // key code to navigate to the previous section
        easing: 'linear',      // the easing function for animation
        scrollTime: 600,       // how long (in ms) the animation takes
        activeClass: 'is-active-top-nav__1level', // class given to the active nav element
        onPageChange: null,    // function(pageIndex) that is called when page is changed
        topOffset: -63           // offset (in px) for fixed top navigation
    });

 // Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').on('click', function () {
$('.navbar-collapse').collapse('hide');
});

/* -------------------------------  
         WOW ANIMATED JS START
/* ----------------------------- */

// Elements Animation
    if($('.wow').length){
        var wow = new WOW(
          {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true       // act on asynchronously loaded content (default is true)
          }
        );
        wow.init();
    }


/* -------------------------------	
		INPUT PLACEHOLDER
/* ----------------------------- */

$('input,textarea').focus(function(){

   $(this).data('placeholder',$(this).attr('placeholder'))

          .attr('placeholder','');

}).blur(function(){

   $(this).attr('placeholder',$(this).data('placeholder'));

});

/* ---------------------	
		back-top
/* --------------------- */

if ($('#back-top').length) {

    var scrollTrigger = 100, // px

        backToTop = function () {

            var scrollTop = $(window).scrollTop();

            if (scrollTop > scrollTrigger) {

                $('#back-top').addClass('show');

            } else {

                $('#back-top').removeClass('show');

            }

        };

    backToTop();

    $(window).on('scroll', function () {

        backToTop();

    });

    $('#back-top').on('click', function (e) {

        e.preventDefault();

        $('html,body').animate({

            scrollTop: 0

        }, 700);

    });

}


if ($('#sticky').length) { // make sure "#sticky" element exists
      var el = $('#sticky');
      var stickyTop = $('#sticky').offset().top; // returns number
      var stickyHeight = $('#sticky').height();

      $(window).scroll(function() { // scroll event
          var limit = $('#footer').offset().top - stickyHeight - 1;

          var windowTop = $(window).scrollTop(); // returns number

          if (stickyTop < windowTop) {
              el.css({
                  position: 'fixed',
                  top: '85px',
                  right: '7rem',
              });
          } else {
              el.css('position', 'static');
          }

          if (limit < windowTop) {
              var diff = limit - windowTop;
              el.css({
                  top: diff
              });
          }
      });
  }

var stickyNavTop = $('#header').offset().top;
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
if (scrollTop > stickyNavTop) { 

    $('#header').addClass('sticky1');

} else {

    $('#header').removeClass('sticky1'); 

}

};

stickyNav();

 

$(window).scroll(function() {

    stickyNav();

});

$('a[href^="#applyBox"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 300) {
        $('#sideNavi').fadeIn();
    } else {
        $('#sideNavi').fadeOut();
    }

});