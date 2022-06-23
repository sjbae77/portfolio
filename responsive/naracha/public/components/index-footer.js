Vue.component("index-footer", {
  // 컴포넌트 내용
  template: `<footer class="naracha-footer">
              <div class= "inner" >
              <div class="img-wrap">
                <a href="./index.html">
                  <img src="./assets/images/logo/logo-wh.svg" alt="naracha logo" class="logo-img" />
                </a>
              </div>
              <div class="txt-wrap">
                <p class="biz-name">
                  <b class="bold-txt word-ko">나라차태권도</b>
                  <b class="bold-txt word-en">naracha Taekwondo</b>
                </p>
                <p class="biz-info">
                  <a href="pages/guide.html" class="info terms">
                    <span class="word-ko">이용약관</span>
                    <span class="word-en">Terms of service</span>
                  </a>
                  <a href="pages/privacy.html" class="info privacy">
                    <span class="word-ko">개인정보처리방침</span>
                    <span class="word-en">Privacy Policy</span>
                  </a>
                  <br />
                  <span class="info copyright">Copyright 2021 Naracha</span>
                </p>
              </div>
            </div>
          </footer>`,
});

new Vue({
  el: "#app",
});
