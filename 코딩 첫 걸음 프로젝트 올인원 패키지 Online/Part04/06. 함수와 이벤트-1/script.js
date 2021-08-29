//var ulEl = document.querySelector("ul");
//var liEl = document.createElement("li");
//liEl.append(new Date()); // new Date() : 현재 시각을 반환
//ulEl.append(liEl);

// 위 명령어들이 여러 번 사용되어야 한다면
// 함수로 지정하여 필요할 때 호출
function insertThisTime () {
    var ulEl = document.querySelector("ul");
    var liEl = document.createElement("li");
    liEl.append(new Date());
    ulEl.appendChild(liEl);
}

// 같은 코드 : 함수도 변수로 저장될 수 있음
var insertThisTime = function () {
    var ulEl = document.querySelector("ul");
    var liEl = document.createElement("li");
    liEl.append(new Date());
    ulEl.append(liEl);
}

// 값을 인자로 넣어주기
function setPageTitle (title) {
    document.querySelector("h1").innerHTML = title;
}

var insertMemberToTeam = function (member, teamNumber) {
    var liEl = document.createElement("li");
    liEl.append(member);
    document.querySelector("#team_" + teamNumber).append(liEl);
};

// 값을 반환하는 함수
function getSum (number1, number2) {
    return number1 + number2;
}

function addNumbersBetween (number1, number2) {
    var sum = 0;
    for (var i = number1 + 1; i < number2; i++) {
        sum += i;
    }
    return sum;
}

// 위 함수를 보다 안전하게 바꾸면?
function addNumbersBetweenMoreSafe (number1, number2) {
    var larger = number1 > number2? number1 : number2;
    var smaller = number1 > number2? number2 : number1;
    var sum = 0;
    for (var i = smaller + 1; i < larger; i++) {
        sum += i;
    }
    return sum;
}