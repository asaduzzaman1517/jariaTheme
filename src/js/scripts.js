"use strict";

(function($) {
  //Hamburger Menu
  $(".hamburger").on("click", function() {
    $(this).toggleClass("hamburger--cross");
    $(".primary-nav").toggleClass("primary-nav--open");
  });

  //Menu Active on Click
  $(".portfolio-menu__item").on("click", function() {
    $("li.active").removeClass("active");
    $(this).addClass("active");
  });
})(jQuery);

//Preloader
$(window).on("load", function() {
  $(".preloader").fadeOut(500);
});
