(function ($) {
    "use strict";


    var windowOn = $(window);
    // wow loader
    windowOn.on('load', function () {
      wowAnimation();
    });
    

    

    /* text-auto-typing-js-start */
    
        const dynamicTxt = document.querySelector('.sp-dynamic-txt');
        const cursor = document.querySelector('.sp-cursor');
        const words = ["Web Developer", "Web Designer", "Fontent Developer"];
        let wordIndex = 0;
        let letterIndex = 0;

        function type() {
            if (letterIndex < words[wordIndex].length) {
                dynamicTxt.textContent += words[wordIndex].charAt(letterIndex);
                letterIndex++;
                setTimeout(type, 150); // Control typing speed (in ms)
            } else {
                setTimeout(erase, 1500); // Pause before erasing
            }
        }

        function erase() {
            if (letterIndex > 0) {
                dynamicTxt.textContent = words[wordIndex].substring(0, letterIndex - 1);
                letterIndex--;
                setTimeout(erase, 100); // Control erasing speed (in ms)
            } else {
                wordIndex = (wordIndex + 1) % words.length; // Move to the next word
                setTimeout(type, 500); // Pause before typing next word
            }
        }

        // Start typing effect on window load
        window.onload = function() {
            setTimeout(type, 1000); // Start after 1 second delay
        }


        /* text-auto-typing-js-end */


        
     // preloader 
     windowOn.on('load',function() {
      $("#loading").fadeOut(500);
    })
  //  /*======== Preloader ========*/
  //  $(".loader").fadeOut();
  //  $(".preloader").delay(1000).fadeOut();

    // back-to-top
    var btn = $('#back-to-top');
    windowOn.scroll(function() {
      if (windowOn.scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    btn.on('click', function() {
      $('html, body').animate({scrollTop:0}, '300');
    });
    

  // sticky js 
        var windowOn = $(window);
        windowOn.on('scroll', function () {
          var scroll = windowOn.scrollTop();
          if (scroll < 100) {
            $("#tp-header-sticky").removeClass("header-sticky");
          } else {
            $("#tp-header-sticky").addClass("header-sticky");
          }
        });
    
    // mobile menu 
    var tpMenuWrap = $('.tp-mobile-menu-active > ul').clone();
    var tpSideMenu = $('.tp-offcanvas-menu nav');
    tpSideMenu.append(tpMenuWrap);
    if ($(tpSideMenu).find('.sub-menu, .tp-mega-menu').length != 0) {
      $(tpSideMenu).find('.sub-menu, .tp-mega-menu').parent().append('<button class="tp-menu-close"><i class="fas fa-chevron-right"></i></button>');
    }

    var sideMenuList = $('.tp-offcanvas-menu nav > ul > li button.tp-menu-close, .tp-offcanvas-menu nav > ul li.has-dropdown > a');
    $(sideMenuList).on('click', function (e) {
      e.preventDefault();
      if (!($(this).parent().hasClass('active'))) {
        $(this).parent().addClass('active');
        $(this).siblings('.sub-menu, .tp-mega-menu').slideDown();
      } else {
        $(this).siblings('.sub-menu, .tp-mega-menu').slideUp();
        $(this).parent().removeClass('active');
      }
    });


      // offcanvas bar
    $(".tp-offcanvas-toogle").on('click', function(){
      $(".tp-offcanvas").addClass("tp-offcanvas-open");
      $(".tp-offcanvas-overlay").addClass("tp-offcanvas-overlay-open");
    });
    $(".tp-offcanvas-close-toggle,.tp-offcanvas-overlay").on('click', function(){
      $(".tp-offcanvas").removeClass("tp-offcanvas-open");
      $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");
    });

    // Search bar
    $(".tp-search-toggle").on('click', function(){
      $(".tp-header-search-bar").addClass("tp-search-open");
      $(".tp-offcanvas-overlay").addClass("tp-offcanvas-overlay-open");
    });

    $(".tp-search-close,.tp-offcanvas-overlay").on('click', function(){
      $(".tp-header-search-bar").removeClass("tp-search-open");
      $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");
    });

    // data bg img 
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })

    // data bg color
    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })

    // data bg color
    $("[data-color]").each(function () {
        $(this).css("color", $(this).attr("data-color"))
    })

    $('.popup-image').magnificPopup({
        type: 'image'
        // other options
    });
    $('.popup-video').magnificPopup({
        type: 'iframe'
        // other options
    });

    if ($('.grid').length != 0) {  
      var $grid = $('.grid').imagesLoaded( function() {
        $('.grid').isotope({
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: {
            columnWidth: 1
          }
        })

      // filter items on button click
      $('.tp-portfolio-filter').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });
        //for menu active class
        $('.tp-portfolio-filter button').on('click', function (event) {
          $(this).siblings('.active').removeClass('active');
          $(this).addClass('active');
          event.preventDefault();
        });
      });
    }

    // blog slider 
    var swiper = new Swiper(".tp-blog-active", {
        slidesPerView: 1,
        spaceBetween: 0,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".tp-swiper-blog-button-next",
            prevEl: ".tp-swiper-blog-button-prev",
        },
    });

    // testimonial slider 
    var swiper = new Swiper(".tp-testimonial-active", {
        slidesPerView: 1,
        spaceBetween: 30,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".tp-swiper-test-button-next",
            prevEl: ".tp-swiper-test-button-prev",
        },
    });

    // tp-test-active slider 
    var swiper = new Swiper(".tp-test-active", {
        slidesPerView: 4,
        spaceBetween: 30,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".tp-review-button-next",
            prevEl: ".tp-review-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          }
      },
    });

    // testimonial with thumb slider 
    var swiper_thumb = new Swiper(".tp-testimonial-thumb-active", {
        loop: true,
        // spaceBetween: 10,
        slidesPerView: 3,
        centeredSlides: true,
        // freeMode: true,
        watchSlidesProgress: true,
      });

      var swiper_content = new Swiper(".tp-testimonial-content-active", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper_thumb,
        },
      });

    // brand slider 
    var swiper = new Swiper(".tp-brand-top-active", {
        slidesPerView: 'auto',
        spaceBetween: 80,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 4000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
          },
    });

    // brand slider  
    var swiper = new Swiper(".tp-brand-bottom-active", {
        slidesPerView: 'auto',
        spaceBetween: 80,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 4000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });

    // brand title slider  
    var swiper = new Swiper(".tp-brand-title-active", {
        slidesPerView: 'auto',
        spaceBetween: 40,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 4000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });


    // brand normal slider 
    var swiper = new Swiper(".tp-brand-nromal-active", {
        slidesPerView: 5,
        spaceBetween: 30,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".tp-swiper-team-button-next",
            prevEl: ".tp-swiper-team-button-prev",
        },
        breakpoints: {
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 5,
            }
        },
    });

    // team slider 
    var swiper = new Swiper(".tp-team-active", {
        slidesPerView: 4,
        spaceBetween: 30,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".tp-swiper-team-button-next",
            prevEl: ".tp-swiper-team-button-prev",
        },
        breakpoints: {
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            }
          },
    });

    // project slider 
    var swiper = new Swiper(".tp-project-active", {
        slidesPerView: 4,
        spaceBetween: 30,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".tp-swiper-team-button-next",
            prevEl: ".tp-swiper-team-button-prev",
        },
        breakpoints: {
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            }
          },
    });

	//  Wow Js
 // wow
    function wowAnimation() {
      var wow = new WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: true,
          live: true
      });
      wow.init();
    }
	// 21. Counter Js
	// $('.count').counterUp({
	// 	delay: 10,
	// 	time: 1000
	// });
    // drak-mood-js
    document.addEventListener('DOMContentLoaded', () => {
      const themeToggler = document.getElementById('themeToggler');
      themeToggler.addEventListener('click', () => {
          document.body.classList.toggle('dark-theme-variables');
          themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
          themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
      });
    });
    // drak-mood-js

     // jarallax
  if($('.jarallax').length){
    $('.jarallax').jarallax({
      speed: 0.2,
    });
  }



})(jQuery);