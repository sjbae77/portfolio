Vue.component('layout-footer', {
  // 컴포넌트 내용
  template: `<footer class="naracha-footer">
              <div class= "l-center" >
              <div class="img-wrap">
                <a href="../index.html">
                  <img src="../assets/images/logo/logo-wh.svg" alt="나라차 로고" class="logo-img" />
                </a>
              </div>
              <div class="txt-wrap">
                <p class="biz-name">
                  <b class="bold-txt">나라차태권도</b>
                </p>
                <p class="biz-info">
                  <a href="guide.html" class="info terms">
                    이용약관
                  </a>
                  <a href="privacy.html" class="info privacy">
                    개인정보처리방침
                  </a>
                  <br />
                  <span class="info copyright">Copyright 2021 Naracha</span>
                </p>
              </div>
            </div>
          </footer>`
})

new Vue({
  el: '#app'
})