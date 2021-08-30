// 숫자(number)
// 문자열 숫자로 바꾸기
var numStr = "10";
console.log(typeof numStr);
console.log(numStr + 5);

// cast : 어떠한 자료형을 다른 자료형으로 변경한다는 의미
var numCast = Number(numStr);
console.log(typeof numCast);
console.log(numCast + 5);

// 숫자로 바꿀 수 있는 문자열일 때
// Number로 형 변환 시도시 NaN 반환
// Number.isNaN 으로 형 변환 실패 여부 확인
var num1 = Number('114');
var num2 = Number('24B');

console.log(num1);
console.log(num2);

console.log(Number.isNaN(num1)); // NaN이 아니기에 false
console.log(Number.isNaN(num2)); // NaN이 출력되기에 true

// Math 객체를 사용한 기능들
// 절대값 구하기 : Math의 abs 함수
var absNum = Math.abs(-1);
console.log(absNum);

function getDifference(num1, num2) {
    return Math.abs(num1 - num2);
}

console.log(getDifference(4, 9));
console.log(getDifference(9, 4));

// 내림, 올림, 반올림 : Math의 floor, ceil, round 함수
console.log(Math.ceil(2.4));
console.log(Math.floor(2.4));
console.log(Math.round(2.4));

console.log(Math.ceil(2.7));
console.log(Math.floor(2.7));
console.log(Math.round(2.7));

// 제곱 구하기 : Math의 pow 함수
console.log(Math.pow(2, 3)); // 2의 3제곱을 나타낸 것

// 배열(array)
// 정렬 : sort 함수
var array = [3, 1, 4, 2, 8, 0, 9];

array.sort(function (a, b) {
    return a > b ? 1 : -1;
});
console.log(array);

array.sort(function (a, b) {
    return a < b ? 1 : -1;
});
console.log(array);

var array = ["melon", "banana", "kiwi", "apple", "orange", "grape"];

array.sort(function (a, b) {
    return a > b ? 1 : -1;
});
console.log(array);

array.sort(function (a, b) {
    return a < b ? 1 : -1;
});
console.log(array);

// 객체들을 정렬할 때
var array = [
    {
        name: "김서현",
        age: 24
    },
    {
        name: "백승협",
        age: 19
    },
    {
        name: "강종식",
        age: 37
    },
    {
        name: "차미나",
        age: 29
    },
    {
        name: "오정균",
        age: 40
    },
];

array.sort(function (a, b) {
    return a.name > b.name ? 1 : -1;
});
console.log(array);

array.sort(function (a, b) {
    return a.age > b.age ? 1 : -1;
});
console.log(array);

// 특정 기준으로 걸러내기 : filter 함수 사용
var array = [3, 1, 4, 2, 8, 0, 9];

var filtered = array.filter(function (it) {
    return it < 5;
});
console.log(filtered);

// 객체들을 걸러낼 때
var array = [
    {
        name: "김서현",
        age: 24,
        married: false
    },
    {
        name: "백승협",
        age: 19,
        married: false
    },
    {
        name: "강종식",
        age: 37,
        married: true
    },
    {
        name: "차미나",
        age: 29,
        married: true
    },
    {
        name: "오정균",
        age: 40,
        married: false
    },
];

var filtered = array.filter(function (it) {
    return it.age > 25;
})
console.log(filtered);

var filtered = array.filter(function (it) {
    return it.married;
})
console.log(filtered);

// 요소마다 명령 내리기 : forEach 함수 사용
var array = [3, 1, 4, 2, 8, 0, 9];
var sum = 0;

array.forEach(function (item, index) {
    sum += item;
    console.log((index + 1) + "번째: " + sum);
});

var array = [
    {
        name: "김서현",
        age: 24,
        married: false
    },
    {
        name: "백승협",
        age: 19,
        married: false
    },
    {
        name: "강종식",
        age: 37,
        married: true
    },
    {
        name: "차미나",
        age: 29,
        married: true
    },
    {
        name: "오정균",
        age: 40,
        married: false
    },
];

var olEl = document.querySelector("ol");

array.forEach(function (item) {
    var liEl = document.createElement("li");
    liEl.append(item.name);
    olEl.append(liEl);
});
