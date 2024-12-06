jQuery(document).ready(function() {
  "use strict";
    $('.gallery-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        autoplaySpeed: 2000,
        arrows: false,
        infinite: false
        // responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 4,
        //       slidesToScroll: 4,
        //       infinite: true,
        //       dots: true
        //     }
        //   },
        //   {
        //     breakpoint: 767,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 3
        //     }
        //   },
        //   {
        //     breakpoint: 575,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 2
        //     }
        //   }
        // ]
    });
    
    $(".navbar-button").click(function(e){
        e.stopPropagation();
        $(".header").toggleClass("open");
        $(".navbar-button").toggleClass("collapsed");
    });

    function closeMenu() {
      $(".header").removeClass("open");
      $(".navbar-button").addClass("collapsed"); 
    }

    $(".navbar .navbar-nav > .nav-item > a.nav-link").click(function(e){
      e.stopPropagation();
      closeMenu();     
    });

    $("html").click(function(e) {
      closeMenu();
    });

    $('.single-page-nav').singlePageNav({
        filter: ':not(.external)',
        updateHash: true
    });
});