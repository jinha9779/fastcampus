// 스타일 제어하기
var divEl = document.querySelector("div");
divEl.style.color = "blue";

divEl.style.backgroundColor = "skyblue";
divEl.style.padding = "24px 36px";
divEl.style.display = "inline-block";
divEl.style.borderRadius = "12px";

// 사용자가 스타일을 조정할 수 있는 DIV 만들어보기
function changeStyle () {
    var newStyle = {};
    newStyle.attribute = prompt("어떤 스타일을 변경하시겠어요?");
    newStyle.value = prompt("어떤 값을 입력하시겠어요?");
    
    console.log(newStyle);
    
    document.querySelector("div").style[newStyle.attribute] = newStyle.value;
}

