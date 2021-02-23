//섹션4의 버튼 이벤트 함수  
	function urlFn(z){

		location.href='http://www.baskinrobbins.co.kr/menu/list.php?top=' + z;


		// if( z == 'A' ){
			// location.href='http://www.baskinrobbins.co.kr/menu/list.php?top=A';
		// }
		// else if( z == 'B' ){
			// location.href='http://www.baskinrobbins.co.kr/menu/list.php?top=B';
		// }
		// else if( z == 'C' ){
			// location.href='http://www.baskinrobbins.co.kr/menu/list.php?top=C';
		// }
		// else if( z == 'D' ){
			// location.href='http://www.baskinrobbins.co.kr/menu/list.php?top=D';
		// }
		// else if( z == 'E' ){
			// location.href='http://www.baskinrobbins.co.kr/menu/list.php?top=E';
		// }
	
	}
	
window.onload = function(){
	//모달창 열기 이벤트
	$('.s4IceBtn').on({
		click: function(){
			$('#modal').show();
			$('html').addClass('addScroll');
		}
	});
	
	//모달창 닫기 이벤트
	$('.mCloseBtn').on({
		click: function(){
			$('#modal').hide();
			$('html').removeClass('addScroll');
		}
	});
	
}	




	
	// $(function(){
		// $('.s4IceBtn').on({
			// click: function(){
				// alert();
			// }
		// });
	// });
	
	
	
	