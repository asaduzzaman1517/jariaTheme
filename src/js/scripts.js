"use strict";

$(function() {
  //Filterizr
  var filterizd = $(".filtr-container").filterizr({});

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
});
