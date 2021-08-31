// 함수와 버튼으로 제어하기
function setMenu (_menu) {
    console.log(_menu);
    var filterButtons = document.querySelectorAll("nav li");

    // setMenu 함수 내용부
    // 모든 메뉴 버튼의 on 해제하기
    filterButtons.forEach(function (filterButton) {
        filterButton.classList.remove("on");
    });

    // 선택된 메뉴 버튼 on 으로 설정하기
    document.querySelector("nav li." + _menu).classList.add("on");

    // main 요소 클래스 설정
    document.querySelector("main").className = _menu;
}


