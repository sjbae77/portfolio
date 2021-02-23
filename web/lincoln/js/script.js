//서브메뉴 나타내기
$(function(){
    $('.gnb_down1').mouseover(function(){
        $('.sub_2,.sub_3').stop().hide();
        $('.all').siblings().stop().hide();
        $('.all').stop().fadeIn();
        $('.sub_bar, .sub_1').stop().fadeIn();
        
        $('.gnb_down1>a').addClass('active');
        $('.gnb_down2>a').removeClass('active');
        $('.gnb_down3>a').removeClass('active');
        
        $('.gnb_down1>span>i').addClass('on');
        $('.gnb_down2>span>i').removeClass('on');
        $('.gnb_down3>span>i').removeClass('on');
        
    
        $('.bar_1').css({
           borderBottom: '4px solid #b45f1a'
        });
        $('.bar_1').siblings().css({
           borderBottom: '0'
        });
    });
    $('.sub_1').mouseleave(function(){
        $('.all').stop().fadeOut();
        $('.sub_bar, .sub_1').stop().fadeOut();
        
        $('.gnb_down1>a').removeClass('active');
        
        $('.gnb_down1>span>i').removeClass('on');
        
        $('.bar_1').siblings().css({
           borderBottom: '0'
        });
    });
    
    
    
    $('.bar_1').click(function(){
        $('.all').siblings().stop().hide();
        $('.all').stop().show();
        $('.bar_1').css({
           borderBottom: '4px solid #b45f1a'
        });
        $('.bar_1').siblings().css({
           borderBottom: '0'
        });
    });
    
    $('.bar_2').click(function(){
        $('.auto').siblings().stop().hide();
        $('.auto').stop().show();
        $('.bar_2').css({
           borderBottom: '4px solid #b45f1a'
        });
        $('.bar_2').siblings().css({
           borderBottom: '0'
        });
    });
    
    $('.bar_3').click(function(){
        $('.sed').siblings().stop().hide();
        $('.sed').stop().show();
        $('.bar_3').css({
           borderBottom: '4px solid #b45f1a'
        });
        $('.bar_3').siblings().css({
           borderBottom: '0'
        });
    });
    
    $('.bar_4').click(function(){
        $('.suvs').siblings().stop().hide();
        $('.suvs').stop().show();
        $('.bar_4').css({
           borderBottom: '4px solid #b45f1a'
        });
        $('.bar_4').siblings().css({
           borderBottom: '0'
        });
    });
    
    
    
    
    $('.gnb_down2').mouseover(function(){
        $('.sub_bar,.sub_1,.sub_3').stop().hide();
        $('.sub_2').stop().fadeIn();
        
        $('.gnb_down2>a').addClass('active');
        $('.gnb_down3>a').removeClass('active');
        $('.gnb_down1>a').removeClass('active');
    
        $('.bar_2').css({
           borderBottom: '4px solid #b45f1a'
        });
        
        $('.gnb_down2>span>i').addClass('on');
        $('.gnb_down3>span>i').removeClass('on');
        $('.gnb_down1>span>i').removeClass('on');
        
    });
    $('.sub_2').mouseleave(function(){
        $('.sub_2').stop().fadeOut();
        
        $('.gnb_down2>a').removeClass('active');
        
        $('.bar_2').siblings().css({
           borderBottom: '0'
        });
        
        $('.gnb_down2>span>i').removeClass('on');
    });
    
    
    $('.gnb_down3').mouseover(function(){
        $('.sub_bar,.sub_1,.sub_2').stop().hide();
        $('.sub_3').stop().fadeIn();
        
        $('.gnb_down3>a').addClass('active');
        $('.gnb_down1>a').removeClass('active');
        $('.gnb_down2>a').removeClass('active');
    
        $('.bar_3').css({
           borderBottom: '4px solid #b45f1a'
        });
        
        $('.gnb_down3>span>i').addClass('on');
        $('.gnb_down1>span>i').removeClass('on');
        $('.gnb_down2>span>i').removeClass('on');
        
    });
    $('.sub_3').mouseleave(function(){
        $('.sub_3').stop().fadeOut();
        
        $('.gnb_down3>a').removeClass('active');
        
        $('.bar_3').siblings().css({
           borderBottom: '0'
        });
        
        $('.gnb_down3>span>i').removeClass('on');
    });
    
    
    $('.downbox>a').click(function(e){
        e.preventDefault();
        $('.downbox_txt').stop().slideToggle();
        
        /*
        $('.downbox>span>i').css({
           color: '#b45f1a', transform: 'rotate(180deg)', transition: 'all 0.5s ease'
        });
        */
        $('.downbox>span>i').toggleClass('tog');
       
    });
    
    
});