// 시설 popup slide
const swiper = new Swiper('.facility-detail-slide', {
  direction: 'horizontal',
  loop: false,
  observer: true,
  observeParents: true,

  pagination: {
    el: '.facility-detail-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.facility-detail-btn-next',
    prevEl: '.facility-detail-btn-prev',
  },
});

// 시설 popup 열기/닫기 script
const popup = document.querySelector('.popup');
const branchFacList = document.querySelectorAll('.branch-facility-list');
const popupBg = document.querySelector('.popup-bg');
const btnClose = document.querySelector('.btn-close');


// for (let i = 0; i < test.length; i++) {
//   test[i].addEventListener('click', function () {
//     popupOpen(popup);
//   });
// };


popupBg.addEventListener('click', function () {
  popupClose(popup);
});

btnClose.addEventListener('click', function () {
  popupClose(popup);
});

function popupOpen(obj) {
  obj.classList.add('active');
};

function popupClose(obj) {
  obj.classList.remove('active');
}


