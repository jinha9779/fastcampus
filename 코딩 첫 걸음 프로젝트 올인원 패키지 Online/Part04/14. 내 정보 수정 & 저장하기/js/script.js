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

// init 함수 : 페이지가 모두 로드되면 실행되는 함수
function init() {
  showMyInfo();
}
