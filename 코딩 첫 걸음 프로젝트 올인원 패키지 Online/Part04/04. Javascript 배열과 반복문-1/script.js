// 배열(array) : 0개 ~ 다수의 데이터를 포함할 수 있음
console.log([1, 2, 3, 4, 5]);

// 두번째 []는 첫번째 []안에서 몇번째를 선택하는 코드
console.log([1, 2, 3, 4, 5][0]);

// 변수에 대입
var myNumberArray = [1, 2, 3, 4, 5];
var firstNumber = myNumberArray[0];
var lastNumber = myNumberArray[4];

console.log(myNumberArray);
console.log(firstNumber);
console.log(lastNumber);

var arrayOfTwo = [firstNumber, lastNumber];
console.log(arrayOfTwo);

// 다룬 자료형의 배열
var generals = ['이순신', '을지문덕', '장보고'];
var onOffs = [true, false];

var multiTypes = [100, true, 'English', [2, 4, 8]];
console.log(multiTypes[3]);
console.log(multiTypes[3][1]);

console.log(typeof multiTypes[3][1]);

// lenght속성
// 배열의 크기를 number로 반환
console.log(myNumberArray.length);

console.log(['a', 'b', 'c'].length);

console.log(multiTypes.length);

console.log(multiTypes[3].length);

// 마지막 요소 얻기
var lastInArray = myNumberArray[myNumberArray.length - 1];
console.log(lastInArray);

// indexOF 함수
// 특정 값이 배열의 볓 번째 요소인지 반환
// 없을 시 -1 반환
console.log(
    ['apple', 'banana', 'grape', 'orange'].indexOf('grape')
);
console.log(myNumberArray.indexOf(2));

console.log(['apple', 'banana', 'grape', 'orange'].indexOf('mango'));

// 배열 내 요소 변경
generals[2] = '김유신';
console.log(generals);

// push 함수
// 배열에 요소를 삽입
var myArray = [];
console.log(myArray);

myArray.push(1);
console.log(myArray);

myArray.push(3);
myArray.push(5);
console.log(myArray);

// concat 함수
// 다른 배열을 이어붙인 배열을 반환
var myArray2 = myArray.concat([2, 4, 8]);
console.log(myArray2);

myArray = myArray.concat(myArray2);
console.log(myArray);

// splice 함수
// #번째 위치로부터 n개의 요소 제거
myArray.splice(4, 1);
console.log(myArray);

myArray.splice(3, 2);
console.log(myArray);