$(function(){
	var winW = $(window).innerWidth();
	var clickNum = 0;
	var cnt=0;
	var num = 0; 
	
	navBtnFn(3);

	function navBtnFn(z){
		$('.sec3NavBtn-wrap').empty();  //초기화
		for(i=0; i<z; i++){
			$('.sec3NavBtn-wrap').append("<span><a href='javascript:' class='sec3NavBtn blind'>네비게이션 버튼1</a></span>");			
		}
		
		$('.sec3NavBtn-wrap span').eq(0).addClass('addNavRound');
		
		function navigationFn(x){
			$('.sec3NavBtn-wrap span').removeClass('addNavRound');
			$('.sec3NavBtn-wrap span').eq(x).addClass('addNavRound');			
		}
		
		
		$('.sec3NavBtn').each(function(idx){
			$(this).on({
				click:	function(){
					$('.sec3-slide-wrap').stop().animate({left: -(1216*idx) });
					navigationFn(idx);
				}
			});
		});	

		

		
	}

	$('.sec3-slide-container').on({
		swipeleft:	function(){
			cnt++;
			if( cnt < num ){ //0 1 2 3 < 4 
				$('.sec3-slide-wrap').stop().animate({left: -(winW*cnt) });									
			}   //5 6 7 8 ....
			else{
				cnt = num-1; //마지막 슬라이드 포지션
			}
			$('.sec3NavBtn-wrap span').removeClass('addNavRound');
			$('.sec3NavBtn-wrap span').eq(cnt).addClass('addNavRound');
			
		},
		swiperight:	function(){
			cnt--;
			if( cnt >= 0 ){
				$('.sec3-slide-wrap').stop().animate({left: -(winW*cnt) });									
			}
			else{
				cnt = 0;  //첫번재 슬라이드
			}

			$('.sec3NavBtn-wrap span').removeClass('addNavRound');
			$('.sec3NavBtn-wrap span').eq(cnt).addClass('addNavRound');
			
		}
	});

	
	//반응형 슬라이드
	//창너비
	//li너비

		resizeFn();
		
		$(window).resize(function(){
			$('.sec3NavBtn-wrap').empty();  //초기화
			
			resizeFn();

		});
	
		function resizeFn(){	
			winW = $(window).innerWidth();

			
			
			
			if( winW > 1216){ 
				//네비버튼 3
				navBtnFn(3);
				num=3;
				
				$('.sec3-slide-wrap>li').css({width: 304 });
				$('.sec3-slide-wrap').css({width: 304*11 }); //전체이미지 길이
				$('.sec3-slide-container').css({width: 1216 }); //한화면너비 view				
			}
			else if( winW >= 800 && winW <= 1216){ //760 ~ 1216
				//네비버튼 4
				navBtnFn(4);
				num=4;
				
				$('.sec3-slide-wrap>li').css({width: winW/3 });
				$('.sec3-slide-wrap').css({width: winW/3*11 }); //전체이미지 길이
				$('.sec3-slide-container').css({width: winW }); //한화면너비 view				
			}
			else if( winW >= 480 && winW < 800){ //480 ~ 760
				//네비버튼 6
				navBtnFn(6);
				num=6;
				
				$('.sec3-slide-wrap>li').css({width: winW/2 });
				$('.sec3-slide-wrap').css({width: winW/2*11 }); //전체이미지 길이
				$('.sec3-slide-container').css({width: winW }); //한화면너비 view				
			}
			else {  // 0 ~ 480
				//네비버튼 11
				navBtnFn(11);
				num=11;
				
				$('.sec3-slide-wrap>li').css({width: winW/1 });
				$('.sec3-slide-wrap').css({width: winW/1*11 }); //전체이미지 길이
				$('.sec3-slide-container').css({width: winW }); //한화면너비 view				
			}
		}
	
});//sec3Slide.js