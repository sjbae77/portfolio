// scroll event
$(window).scroll(function () {
  var winTop = window.scrollY;
  const searchTop = $(".main-search-wrap .desc-wrap").offset().top - 100;
  if(winTop >= searchTop) {
    $(".hd-search-wrap").addClass("is-active");
    $(".main-search-inp-wrap").css({"opacity": 0});
  } else {
    $(".hd-search-wrap").removeClass("is-active");
    $(".main-search-inp-wrap").css({"opacity": 1});
  }
})

//
$("#mainpage-search").focusout(function () {
  $(this).siblings(".keyword-box").removeClass("open");
});

$("#mainpage-search").keydown(function () {
  $(this).siblings(".keyword-box").addClass("open");
})