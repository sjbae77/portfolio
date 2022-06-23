const sections = document.querySelectorAll("section");
const nav = document.querySelector("nav");
const ul = nav.querySelector("ul");
const lis = ul.querySelectorAll("li");
const lis_arr = Array.from(lis);
const len = sections.length;
let posArr = null;
let enableClick = true;
let base = -300;

//브라우저 로딩시 섹션 세로위치값 구하기
setPos();

sections.forEach((section, index) => {
  section.addEventListener(
    "mousewheel",
    (e) => {
      e.preventDefault();

      let activeS = document.querySelector("section.on");
      let arrS = Array.from(sections);
      let activeSIndex = arrS.indexOf(activeS);
      if (enableClick) {
        enableClick = false;

        if (e.deltaY < 0) {
          if (activeSIndex == 0) {
            enableClick = true;
            return;
          }
          moveScroll(activeSIndex - 1);
        } else {
          if (activeSIndex == len - 1) {
            enableClick = true;
            return;
          }
          moveScroll(activeSIndex + 1);
        }
      }
    },
    { passive: false }
  );
});

window.addEventListener("resize", () => {
  setPos();
  //resize시 버튼과 섹션 매칭이 안되는 문제
  //현재 활성화 버튼의 순번구하기
  //브라우저를 활성화섹션의 위치로 고정해서 이동
  const active = ul.querySelector("li.on");
  const active_index = lis_arr.indexOf(active);
  window.scroll(0, posArr[active_index]);
});

lis.forEach((li, index) => {
  li.addEventListener("click", (e) => {
    let isOn = e.currentTarget.classList.contains("on");
    if (isOn) return;

    if (enableClick) {
      enableClick = false;
      moveScroll(index);
    }
  });
});

//브라우저 스크롤시 현재의 스크롤 거리값 출력
window.addEventListener("scroll", (e) => {
  let scroll = window.scrollY || window.pageYOffset;
  activation(scroll);
});

function setPos() {
  posArr = [];
  //각섹션 세로위치값 구해서 저장
  for (let section of sections) {
    posArr.push(section.offsetTop);
  }
}

function moveScroll(index) {
  new Anime(window, {
    prop: "scroll",
    value: posArr[index],
    duration: 700,
    callback: () => {
      enableClick = true;
    },
  });
}

function activation(scroll) {
  sections.forEach((el, index) => {
    if (scroll >= posArr[index] + base) {
      for (const el of lis) el.classList.remove("on");
      lis[index].classList.add("on");

      for (const section of sections) section.classList.remove("on");
      sections[index].classList.add("on");
    }
  });
}
