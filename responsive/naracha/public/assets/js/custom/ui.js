
// 아이디, 비밀번호 찾기 팝업창
$(function () {


  $(".id-find-btn").click(function () {
    $(".id-find").show();
  });
  $(".pw-find-btn").click(function () {
    $(".pw-find").show();
  });

  $(".close-btn").click(function () {
    $(".find-popup-wrap").hide();
  });

  // 모바일 메뉴
  $(".mo-menu-btn").click(function () {
    $(".mo-menu-wrap").show();
    $(".cover").show();
  });
  $(".menu-clse-btn").click(function () {
    $(".mo-menu-wrap").hide();
    $(".cover").hide();
  });

  // 스크롤 막기
  $('.mo-menu-wrap, .cover').on('scroll touchmove mousewheel', function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  });

});