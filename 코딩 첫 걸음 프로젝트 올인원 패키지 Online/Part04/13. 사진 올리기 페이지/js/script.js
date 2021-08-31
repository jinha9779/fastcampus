// 메뉴 이동
function setMenu(_menu) {
  var filterButtons = document.querySelectorAll("nav li");
  filterButtons.forEach(function (filterButton) {
    filterButton.classList.remove("on");
  });
  document.querySelector("nav li." + _menu).classList.add("on");
  document.querySelector("main").className = _menu;
}

// 함수로 설정하여 버튼에 연결
function setDescLength () {
  document.querySelector(".descLength").innerHTML =
    document.querySelector("input.description").value.length + "/20";
}


