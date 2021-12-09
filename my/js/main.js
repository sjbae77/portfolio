// Init ScrollMagic
// var ctrl = new ScrollMagic.Controller({
//   globalSceneOptions: {
//     triggerHook: "onLeave",
//   },
// });

// Get window height
// var wh = window.innerHeight;

// new ScrollMagic.Scene({
//   offset: wh * 4,
// })
//   .setClassToggle("section#sec4", "is-active")
//   .addTo(ctrl);

// $(window).scroll(function () {
//   if (
//     $(window).scrollTop() + $(window).height() ==
//     $(document).height()
//   ) {
//     //alert("bottom!");
//     $("#sec4").css({
//       background: "#222",
//     });
//   }
// });


// Navigation
$(window).scroll(function () {
  if ($(window).scrollTop() > 800) {
    $(".header").addClass("sticky");
  } else {
    $(".header").removeClass("sticky");
  }
});


// Smooth Scrolling
jQuery(document).ready(function ($) {
  $(".smoothscroll").on("click", function (e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        800,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
  });
});

// function([string1, string2],target id,[color1,color2])
consoleText(["#열정적인", "#퍼블리셔", "#도전적인"], "text", [
  "black",
  "black",
  "black",
]);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ["#fff"];
  var visible = true;
  var con = document.getElementById("console");
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute("style", "color:" + colors[0]);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function () {
    if (visible === true) {
      con.className = "console-underscore hidden";
      visible = false;
    } else {
      con.className = "console-underscore";

      visible = true;
    }
  }, 400);
}

// skill - scrollmagic
(function () {
  var controller = new ScrollMagic.Controller();

  var tween1 = TweenMax.to($("#Skill-HTML"), 1, {
    animation: "Animate-HTML 4s",
  });
  var tween2 = TweenMax.to($("#Skill-CSS"), 1, {
    animation: "Animate-CSS 5s",
  });
  var tween3 = TweenMax.to($("#Skill-js"), 1, {
    animation: "Animate-js 5s",
  });
  var tween4 = TweenMax.to($("#Skill-photoshop"), 1, {
    animation: "Animate-photoshop 4s",
  });

  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#sec2", //시작지점
    duration: "100%", //애니메이션이 얼마나 긴 시간동안 재생될지 (값이 작을수록 더 빨리 끝남), 100%시 뷰포트 높이에 따라 유동적으로 end의 위치가 정해짐
  })
    .setTween(tween1)
    .addTo(controller);
  // .addIndicators({
  //     name: "1"
  // });

  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#sec2", //시작지점
    duration: "100%", //애니메이션이 얼마나 긴 시간동안 재생될지 (값이 작을수록 더 빨리 끝남), 100%시 뷰포트 높이에 따라 유동적으로 end의 위치가 정해짐
  })
    .setTween(tween2)
    .addTo(controller);
  // .addIndicators({
  //     name: "1"
  // });

  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#sec2", //시작지점
    duration: "100%", //애니메이션이 얼마나 긴 시간동안 재생될지 (값이 작을수록 더 빨리 끝남), 100%시 뷰포트 높이에 따라 유동적으로 end의 위치가 정해짐
  })
    .setTween(tween3)
    .addTo(controller);
  // .addIndicators({
  //     name: "1"
  // });

  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#sec2", //시작지점
    duration: "100%", //애니메이션이 얼마나 긴 시간동안 재생될지 (값이 작을수록 더 빨리 끝남), 100%시 뷰포트 높이에 따라 유동적으로 end의 위치가 정해짐
  })
    .setTween(tween4)
    .addTo(controller);
  // .addIndicators({
  //     name: "1"
  // });
})();

// slick slide
$(".slide").slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
});