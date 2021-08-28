var myNumberArray = [0, 1, 2, 3, 4, 5];
// for문
// 특정 조건이 성립하는 동안 주어진 작업을 수행
// 형식 -> ( 초기화 ; 조건 ; 작업 후 처리 )
for (var i = 0; i < 5; i++) {
    console.log(i);
}

for (var num = 10; num > 0; num -= 2) {
    console.log(num);
}

// 배열을 for문으로 다루기
for (var i = 0; i < myNumberArray.length; i++) {
    console.log(myNumberArray[i]);
}

for (var i = 0; i < myNumberArray.length; i += 2) {
    console.log(myNumberArray[i]);
}

var oddArray = [];
var evenArray = [];

for (var i = 10; i <= 20; i++) {
    if (i % 2 === 0) {
        evenArray.push(i);
    } else {
        oddArray.push(i);
    }
}

console.log(oddArray);
console.log(evenArray);

var cities = ['서울', '대전', '대구', '부산', '울산', '광주'];
var citiesString = '';

for (var i = 0; i < cities.length; i++) {
    citiesString += cities[i];
    if (i < cities.length - 1) citiesString += ', ';
}

console.log(citiesString);

var longArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = longArray.length - 1; longArray.length > 0; i--) {
    longArray.splice(i, 1);
    console.log(longArray);
}

// break 구문 : for 루프를 중단
var longArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < longArray.length; i++) {
    if (longArray[i] === 5) break;
    console.log(longArray[i]);
}

// while문 : 조건을 만족하는 동안 반복 수행
var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// HTML 요소 생성하여 삽입하기
var spanElement = document.createElement("span");

spanElement.append("삽입된 문자열");
document.querySelector("div").append(spanElement);

// for문과 배열 사용하기
var things = ['냉장고', '코끼리', '기린'];
var steps = [
    '냉장고 문을 연다',
    '기린을 꺼낸다',
    '코끼리를 넣는다',
    '냉장고 문을 닫는다'
];

var thingsUl = document.querySelector("ul");
for (var i = 0; i < things.length; i++) {
    var li = document.createElement("li");
    li.append(things[i]);
    thingsUl.append(li);
}

var stepsOl = document.querySelector("ol");
for (var i = 0; i < steps.length; i++) {
    var li = document.createElement("li");
    li.append(steps[i]);
    stepsOl.append(li);
}

// 구구단 표 만들어보기
var tableEl = document.createElement("table");
for (var i = 1; i < 10; i++) {
    var trEl = document.createElement("tr");
    for (var j = 1; j < 10; j++) {
        var tdEl = document.createElement("td");
        tdEl.append(i * j);
        trEl.append(tdEl);
    }
    tableEl.append(trEl);
}
document.querySelector("body").append(tableEl);
