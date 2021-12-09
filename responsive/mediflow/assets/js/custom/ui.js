// mobile menu
$(".mo-nav").click(function () {
  $(".mo-menu").show();
  $('.cover').show();
});
$(".close-btn").click(function () {
  $(".mo-menu").hide();
  $('.cover').hide();
});
$(".cover").click(function () {
  $(".mo-menu").hide();
  $('.cover').hide();
});

// header
$(document).on("scroll", function () {
  const scTop = $(window).scrollTop();
  const conTop = $(".cons-section").offset().top;

  if (scTop >= conTop - 100) {
    $(".medi-hd").addClass("bk");
    $(".btn-up").css("display", "block");
  } else {
    $(".medi-hd").removeClass("bk");
    $(".btn-up").css("display", "none");
  }
});

// main slide
const swiper = new Swiper(".review-slide-wrap", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  breakpoints: {
    860: {
      slidesPerView: 1,
    },
  },

  pagination: {
    el: ".review-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".review-button-next",
    prevEl: ".review-button-prev",
  },
});

// popup slide
const popupSlide = new Swiper(".popup-slide", {
  loop: true,
  observer: true,
  observeParents: true,
  threshold: 10,
  navigation: {
    nextEl: ".popup-button-next",
    prevEl: ".popup-button-prev",
  },
});

// tab
for (i = 0; i < 4; i++) {
  const tabTit = $("#mPop .tab-title .title-btn").eq(i);
  const tabCont = $("#mPop .tab-content").eq(i);

  $(tabTit).on("click", function () {
    $("#mPop .tab-title").removeClass("active");
    $(this).parent(".tab-title").addClass("active");
    $("#mPop .tab-content").removeClass("active");
    $(tabCont).addClass("active");
  });
}

for (i = 0; i < 4; i++) {
  const tabTit = $("#pPop .tab-title .title-btn").eq(i);
  const tabCont = $("#pPop .tab-content").eq(i);

  $(tabTit).on("click", function () {
    $("#pPop .tab-title").removeClass("active");
    $(this).parent(".tab-title").addClass("active");
    $("#pPop .tab-content").removeClass("active");
    $(tabCont).addClass("active");
  });
}

// visual section height
document.querySelector("#visual-section").style.height = window.innerHeight + 'px';

// interaction
function scrollEvent() {
  var fadeAni = [
    ".cons-title-wrap",
    ".cont-box-wrap",
    ".shortcut-wrap",
    ".slide-section",
    ".str-section",
    "#contact-section",
  ];
  
  for (let i = 0; i < fadeAni.length; i++) {
    var winTop = window.scrollY || window.pageYOffset;
    const scrCon = document.querySelector(fadeAni[i]);

    // cons section의 요소 offset값이 너무 빨라서 분리
    if (i >= 0 && i <= 2) {
      var conScr = scrCon.offsetTop + 400;
    } else {
      var conScr = scrCon.offsetTop - 500;
    }
    
    if (winTop >= conScr) {
      scrCon.classList.add("ani-active");
    }
  }
}

window.addEventListener('scroll', scrollEvent);
window.addEventListener('load', scrollEvent);

// 클릭시 확대
let viewport = document.querySelector("meta[name=viewport]");
if( /Android/i.test(navigator.userAgent)) {
  //android
  viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=100.0');
} else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
  // iphone
  viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0');
} else if(/webOS|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  // else mobile
  viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=100.0');
} else {
  // not mobile
  viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0');
}
