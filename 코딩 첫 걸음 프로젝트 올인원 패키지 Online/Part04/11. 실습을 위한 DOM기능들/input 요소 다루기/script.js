// input 요소 다루기
// text 타입 값 지정
var textValue = document.querySelector("#ip-text").value;
console.log(textValue);

document.querySelector("#ip-text").value = "반갑습니다.";
document.querySelector("#ip-text").value = "";

// text 타입 키 입력 리스너
function printTextInputVal () {
    console.log(document.querySelector("#ip-text").value);
}

// checkbox 타입 값 지정
var checked = document.querySelector("#ip-checkbox").checked;
console.log(checked);

document.querySelector("#ip-checkbox").checked = true;
document.querySelector("#ip-checkbox").checked = false;

// radio 타입 값 지정
var checked = document.querySelector("#radio_1").checked;
console.log(checked);

var checked = document.querySelector("#radio_2").checked;
console.log(checked);

var checked = document.querySelector("#radio_2").checked = true;
var checked = document.querySelector("#radio_3").checked = true;

// 체크된 항목의 값 찾기
var value = document.querySelector("input[name=my-radio]:checked").value;
console.log(value);

// 값으로 체크하기
document.querySelector("input[value='3']").checked = true;