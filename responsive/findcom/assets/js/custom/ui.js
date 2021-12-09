$(document).ready(function () {

	// 1. jquery - mainpage menu toggle
	$('.main .menu-btn').click(function () {
		// $('.hd-search-wrap').toggleClass('is-active');
		$('.bg').toggleClass('is-active');
		$('body').toggleClass('hidden');
	});

	// 2. jquery - subpage menu toggle
	$('.menu-btn').click(function () {
		$('.vertical-gnb-wrap').toggleClass('is-active');
		$('.menu-btn').toggleClass('is-active');
		$('.icon-gnb-page').toggleClass('is-active');
		
		if($(window).width() <= 950) {
			$('body').toggleClass('hidden');
		} else {
			$('body').removeClass('hidden');
		}
	});

	// 3. jquery - background click -  menu close
	$('.bg').click(function () {
		$('.vertical-gnb-wrap').removeClass('is-active');
		$('.bg').removeClass('is-active');
		$('.icon-gnb-page').removeClass('is-active');
	});

	// 4. jquery - popup
	$('.popup-btn').click(function () {
		$('.popup-bg').show();
		$('body').addClass('hidden');
	});

	$('.close-btn').click(function () {
		$('.popup').hide();
		$('.popup-bg').hide();
		$('body').removeClass('hidden');
	});

	$('.popup-bg').click(function () {
		$('.popup').hide();
		$('.popup-bg').hide();
		$('body').removeClass('hidden');
	});

	// 버튼별 팝업 띄우기
	$('.popup-code-btn').click(function () {
		$('.popup.code').show();
	});
	$('.popup-employ-btn').click(function () {
		$('.popup.employ').show();
	});
	$('.popup-terms-btn').click(function () {
		$('.popup.terms').show();
	});
	$('.popup-inquire-btn').click(function () {
		$('.popup.inquire').show();
	});
	$('.popup-download-btn').click(function () {
		$('.popup.download').show();
	});
	$('.popup-search-btn').click(function () {
		$('.popup.search').show();
	});
	$('.popup-filter-btn').click(function () {
		$('.popup.filter').show();
	});
	$('.popup-prv-btn').click(function () {
		$('.popup.prv').show();
	});

	// 5. jquery - footer sub menu toggle
	$(".text-link-list .link").click(function () {
		$(".sub-link-wrap").removeClass("is-active");
		$(this).next().addClass("is-active");
	})

	$(".sub-link-close, .page-wrap, .header, .vertical-gnb-wrap, .ft-adress-wrap, .ft-copy, .com-ft .top-blank").click(function () {
		$(".sub-link-wrap").removeClass("is-active");
	})

	// 6. jquery - subpage menu toggle
	$('.view-btn').click(function () {
		$(this).toggleClass('is-active');
	});

	// 7. ie 일때, ie 클래스 추가되며 제어
	var agent = navigator.userAgent.toLowerCase();

	if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
		// ie일 경우
		// document.getElementsByTagName("html").classList.add("ie");
		$("html").addClass("ie");
	}

	// 8. jquery - mobile gnb menu toggle
	$('.gnb-btn').click(function () {
		$(this).toggleClass('is-active');
	});

	// 9. jquery - search keyword box open
	$("#main-search").focusout(function () {
		$(this).siblings(".keyword-box").removeClass("open");
	});

	$("#main-search").keydown(function () {
		$(this).siblings(".keyword-box").addClass("open");
	})

	// 10. jquery - a event prevent
	$("a[href='#']").click(function () {
		event.preventDefault();
	})

});