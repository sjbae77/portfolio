window.onload=function(){
    const menuActive = (elButton, elMenu) => {
      const button = elButton;
      const menu = elMenu;

      button.addEventListener('click', () => {
        button.classList.toggle('is-active');
        menu.classList.toggle('is-active');
      });
    };

    menuActive(document.getElementById('MenuButton'), document.getElementById('MenuWrap'));
    
    $(".menu-nav__item>a").click(function(){
        $(".menu-button,.menu-nav").removeClass("is-active");
    })
}