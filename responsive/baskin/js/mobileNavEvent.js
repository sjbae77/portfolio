$(function(){
	var t = 0;
	
	//appbar 버튼을 클릭하면 모달창이 보이고,
	//우측에서 좌측으로 슬라이딩 되면서 모바일 메뉴 박스가 나타난다.
	
	$('.appbarBtn').on({
		click:	function(){
			$('#mobile-modal-nav').show();
			$('.mobile-nav-wrap').stop().animate({right:0},500);
		}	
	});
	
	//모달 모바일 서브메뉴 닫기
	$('.mCloseBtn').on({
		click:	function(){			
			// $('.mobile-nav-wrap').stop().animate({right:'-100%'}, 200, function(){
				// $('#mobile-modal-nav').hide();
			// });
			
			$('.mobile-nav-wrap').stop().animate({right:'-100%'}, 500);
			$('#mobile-modal-nav').delay(500).hide(0);
		}
	});
	
	//모바일 메인메뉴 버튼 클릭시
	//모바일 서브메뉴 슬라이드 다운
	//클릭한 버튼의 이미지가 변경
	//클릭한 버튼의 span 아이콘 이미지 변경
	//클릭한 버튼의 span 회전 추가 클래스 addClass
	$('.mNavBtn').on({
		click: function(){
			$(this).next().stop().slideToggle(300);
			
			if(t==0){
				t = 1;
				
				//경로와 파일이름 그리고 확장명 까지 가져오기
				pathImageName = $(this).children('img').attr('src');  //경로와 파일이름 img/m/nav_menu.png
				
				//가져온 변수에 들어있는 파일이름모두를 읽어서 . 확장명구분 표시 . 의 위치를 알아낸다. indexOf() 
				n = $(this).children('img').attr('src').indexOf('.');  // '.'의 위치
				
				//마침표 전까지 경로와 파일이름만 잘라서 가져온다.
				imgName = pathImageName.slice(0,n); 
				console.log(imgName);
				
				$(this).children('img').attr('src', imgName + '_on.png');  //Attribute(어트리뷰트:속성)
			
				//우측 아이콘 변경
				$(this).children('span').children('img').attr('src','img/m/ico_nav_on.png');
				
				
			
			}
			else{  //t가 1이면 다시 처음 이미지로 변경
				t=0;  //초기화
				$(this).children('img').attr('src', imgName + '.png');
				$(this).children('span').children('img').attr('src','img/m/ico_nav.png')
			}
		
		}
	});
	
});//mobileNavEvent.js






