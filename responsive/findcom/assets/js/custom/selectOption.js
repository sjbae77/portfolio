$(document).ready(function () { 
  // 조건검색 - 지역
  var local = ["전체","서울","부산","대구","인천","광주","대전","울산","강원","경기","경남","경북","전남","전북","제주","충남","충북","세종"];

  $('#local-slt').each(function() {
    $local = $(this);
    $.each(eval(local), function() {
      $local.append("<option value='"+this+"'>"+this+"</option>");
    });
  });

  // 조건검색 - 주생산품
  var prdt = ["전체","이동전화기제조업","부동산 임대업","가전제품 소매업","그 외 기타 가정용품 소매업","그 외 기타 특정 상품 중개업","기타 간이 음식점업","그 외 기타 전자부품 제조업",
  "그 외 기타 분류 안된 운송관련 서비스업","콜센터 및 텔레마케팅 서비스업","화물운송 중개, 대리 및 관련 서비스업","그 외 기타 협회 및 단체","가전제품 수리업","커피 가공업",
  "가전제품 및 부품 도매업","일반 통신 공사업","증권 중개업","그 외 기타 금융업","기타 엔지니어링 서비스업","자동차 임대업","승용차 및 기타 여객용 자동차 제조업"];

  $('#main-prdt-slt').each(function() {
    $prdt = $(this);
    $.each(eval(prdt), function() {
      $prdt.append("<option value='"+this+"'>"+this+"</option>");
    });
  });
  
  // 기업발굴 - 지역(본사)
  var area0 = ["전체","서울","인천","대전","광주","대구","울산","부산","경기","강원","충북","충남","전북","전남","경북","경남","제주"];
  var area1 = ["전체"]
  var area2 = ["전체","강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"];
  var area3 = ["전체","계양구","남구","남동구","동구","부평구","서구","연수구","중구","강화군","옹진군"];
  var area4 = ["전체","대덕구","동구","서구","유성구","중구"];
  var area5 = ["전체","광산구","남구","동구","북구","서구"];
  var area6 = ["전체","남구","달서구","동구","북구","서구","수성구","중구","달성군"];
  var area7 = ["전체","남구","동구","북구","중구","울주군"];
  var area8 = ["전체","강서구","금정구","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구","연제구","영도구","중구","해운대구","기장군"];
  var area9 = ["전체","고양시","과천시","광명시","광주시","구리시","군포시","김포시","남양주시","동두천시","부천시","성남시 분당구","성남시 수정구","성남시 중원구","수원시 권선구","수원시 영통구","수원시 장안구","수원시 팔달구","시흥시","안산시 단원구","안산시 상록구","안성시","안양시 동안구","안양시 만안구","양주시","오산시","용인시 기흥구","용인시 수지구","용인시 처인구","의왕시","의정부시","이천시","파주시","평택시","포천시","하남시","화성시","가평군","양평군","여주군","연천군"];
  var area10 = ["전체","강릉시","동해시","삼척시","속초시","원주시","춘천시","태백시","고성군","양구군","양양군","영월군","인제군","정선군","철원군","평창군","홍천군","화천군","횡성군"];
  var area11 = ["전체","제천시","청주시 상당구","청주시 서원구","청주시 청원구","청주시 흥덕구","충주시","괴산군","단양군","보은군","영동군","옥천군","음성군","증평군","진천군","청원군"];
  var area12 = ["전체","계룡시","공주시","논산시","보령시","서산시","아산시","천안시 동남구","천안시 서북구","금산군","당진군","부여군","서천군","연기군","예산군","청양군","태안군","홍성군"];
  var area13 = ["전체","군산시","김제시","남원시","익산시","전주시 덕진구","전주시 완산구","정읍시","고창군","무주군","부안군","순창군","완주군","임실군","장수군","진안군"];
  var area14 = ["전체","광양시","나주시","목포시","순천시","여수시","강진군","고흥군","곡성군","구례군","담양군","무안군","보성군","신안군","영광군","영암군","완도군","장성군","장흥군","진도군","함평군","해남군","화순군"];
  var area15 = ["전체","경산시","경주시","구미시","김천시","문경시","상주시","안동시","영주시","영천시","포항시","고령군","군위군","봉화군","성주군","영덕군","영양군","예천군","울릉군","울진군","의성군","청도군","청송군","칠곡군"];
  var area16 = ["전체","거제시","김해시","마산시","밀양시","사천시","양산시","진주시","진해시","창원시 마산합포구","창원시 마산회원구","창원시 성산구","창원시 의창구","창원시 진해구","통영시","거창군","고성군","남해군","산청군","의령군","창녕군","하동군","함안군","함양군","합천군"];
  var area17 = ["전체","서귀포시","제주시","남제주군","북제주군"];
  
  
  // 시/도 선택 박스 초기화
  $("select[name^=sido]").each(function() {
    $selsido = $(this);
    $.each(eval(area0), function() {
      $selsido.append("<option value='"+this+"'>"+this+"</option>");
    });
    $selsido.next().append("<option value=''>시구군</option>");
  });
  
  
  // 시/도 선택시 구/군 설정
  $("select[name^=sido]").change(function() {
    var area = "area"+$("option",$(this)).index($("option:selected",$(this))); // 선택지역의 구군 Array
    var $gugun = $(this).next(); // 선택영역 군구 객체
    $("option",$gugun).remove(); // 구군 초기화
  
    if(area == "area0")
      $gugun.append("<option value=''>구/군 선택</option>");
    else {
      $.each(eval(area), function() {
        $gugun.append("<option value='"+this+"'>"+this+"</option>");
      });
    }
  });

  // 기업발굴 - 기업 재무정보 (자산총계/부채총계/자본총계/자본금/매출액/영업이익/당기순이익)
  var financial01 = ["선택","5천만원 이하","5천만원~ 1억","1억 ~ 5억","5억 ~ 10억","10억 ~ 100억","100억 ~ 500억","500억 ~ 1000억","1000억~ 5000억","5000억이상"]
  
  $('.finance_01').each(function() {
    $finance_01 = $(this);
    $.each(eval(financial01), function() {
      $finance_01.append("<option value='"+this+"'>"+this+"</option>");
    });
  });

  // 기업발굴 - 기업 재무정보 (자기자본비율/매출액증가율/부채비율/영업이익증가율/순이익증가율/총자산증가율/총자산회전율/유동비율/차입금의존도/재고자산회전율/ROE/영업이익율/이자보상배수
  var financial02 = ["선택","0% 미만","0% ~ 5%","5% ~ 10%","10% ~ 15%","15% ~ 20%","20% ~ 25%","25% ~ 30%","30% ~ 50%","50% ~ 100%","100% 이상"]

  $('.finance_02').each(function() {
    $finance_02 = $(this);
    $.each(eval(financial02), function() {
      $finance_02.append("<option value='"+this+"'>"+this+"</option>");
    });
  });
});