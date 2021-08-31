// 요소 복사하기
// cloneNode 함수 사용
var olEl = document.querySelector("ol");

var cloned = document.querySelector("ol li:first-child").cloneNode();
olEl.append(cloned);

// 내부 요소들까지 복사하려면 인자로 true를 넣어줌
var clonedAll = document.querySelector("ol li:first-child").cloneNode(true);
olEl.append(clonedAll);

// 요소 내 요소 선택하기
var olEl = document.querySelector("ol");
var clonedAll = olEl.querySelector("li:first-child").cloneNode(true);
olEl.append(clonedAll);
