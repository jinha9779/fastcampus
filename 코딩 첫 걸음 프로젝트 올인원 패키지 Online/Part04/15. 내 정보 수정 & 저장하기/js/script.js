// 메뉴 이동
function setMenu(_menu) {
  var filterButtons = document.querySelectorAll("nav li");
  filterButtons.forEach(function (filterButton) {
    filterButton.classList.remove("on");
  });
  document.querySelector("nav li." + _menu).classList.add("on");
  document.querySelector("main").className = _menu;
}

// 사진올리기의 사진설명 길이 표시
function setDescLength () {
  document.querySelector(".descLength").innerHTML =
    document.querySelector("input.description").value.length + "/20";
}

// data의 내 정보대로 내용 채우기
function showMyInfo () {
  // 텍스트 항목들 내용 채우기
  document.querySelector("#myInfoId").innerHTML = my_info.id;
  document.querySelector("#myInfoUserName").innerHTML = my_info.user_name;
  document.querySelector("#sp-intro").innerHTML = my_info.introduction;
  document.querySelector("#ip-intro").value = my_info.introduction;
  // radio 타입 input 체크 설정
  document.querySelector("#myinfo input[type=radio][value=" + my_info.as + "]").checked = true;
  // checkbox 타입 input 체크 설정
  document.querySelectorAll("#myinfo input[type=checkbox]")
    .forEach(function(checkbox) {
    checkbox.checked = false;
  });
  my_info.interest.forEach(function (interest) {
    document.querySelector(
      "#myinfo input[type=checkbox][value=" + interest + "]"
      ).checked = true;
  });
}

// 수정 모드 켜고 끄기
// 버튼틀에 설정
function setEditMyInfo (on) {
  document.querySelector("#myinfo > div").className = on ? "edit" : "non-edit"
  // input들의 활성화 설정
  document.querySelectorAll("#myinfo input").forEach(function (input) {
    input.disabled = !on;
  })
  // 수정하다 취소시 입력창 원상복구
  showMyInfo();
}

// 수정 모드 켜고 끄기
// on 여부를 true, false 인자로 넣어줌
// on일 시 보기 전용, !on일 시 입력 전용 요소들을 감춤
// on 여부에 따라 각 input 요소들의 disabled여부 설정
function setEditMyInfo (on) {
  // 요소들을 포함하는 div 요소의 클래스 설정
  document.querySelector("#myinfo > div").className = on ? "edit" : "non-edit"
  // input 들의 활성화 설정
  document.querySelectorAll("#myinfo input").forEach(function (input) {
    input.disabled = !on;
  });
  // 수정하다 취소시 입력창 원상복구
  showMyInfo();
}

// 입력한 내용 저장하기
// 각 input 요소들의 값 또는 체크 여부에 따라 my_info 내용 수정
// 수정 모드 종료 : setEditMyInfo 사용
// 수정된 my_info 내용에 따라 요소들 새로 채우기 : showMyInfo 재실행
function updateMyInfo () {
  // my_info 내용 수정
  my_info.introduction = document.querySelector("#ip-intro").value;
  my_info.as = document.querySelector("#myinfo input[type=radio]:checked").value;
  var interests = [];
  document.querySelectorAll("#myinfo input[type=checkbox]:checked").forEach(function (checked) {
    interests.push(checked.value);
  });
  my_info.interest = interests;
  // 변경한 내용 반영
  setEditMyInfo(false);
  showMyInfo();
}


// init 함수 : 페이지가 모두 로드되면 실행되는 함수
function init() {
  showMyInfo();
}
