// 요소에 이벤트 리스너 할당하기
function sayHello () {
    console.log("Hello");
}
function printTextInputVal () {
    console.log(document.querySelector("input").value);
}

function putButtonAndInput () {
    var bodyEl = document.querySelector("body");
    var buttonEl = document.createElement("button");
    buttonEl.append("버튼");
    var brEl = document.createElement("br");
    var inputEl = document.createElement("input");

    bodyEl.append(buttonEl);
    bodyEl.append(brEl);
    bodyEl.append(inputEl);
}

// button 요소에 click 이벤트 할당
var buttonEl = document.querySelector("button");
buttonEl.addEventListener('click', function () {
    sayHello();
});
var buttonEl = document.querySelector("button");
buttonEl.addEventListener('click', sayHello);

// input 요소에 keyup 이벤트 할당
var inputEl = document.querySelector("input");
inputEl.addEventListener('keyup', printTextInputVal);
