// HTML 요소의 클래스 다루기
// 클래스 값 지정 : className 속성 값 대입
document.querySelector("ul li:nth-child(3)").className = "highlighted";
document.querySelector("ul li:nth-child(3)").className = "important";
document.querySelector("ul li:nth-child(3)").className = "highlighted important";

// 클래스 추가 /제거 : classList의 add, remove 사용
document.querySelector("ul li:nth-child(4)").classList.add("highlighted");
document.querySelector("ul li:nth-child(4)").classList.add("important");

// 이미 있는 클래스는 추가되지 않음
document.querySelector("ul li:nth-child(4)").classList.add("important");

document.querySelector("ul li:nth-child(3)").classList.remove("important");
