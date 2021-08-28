// 데이터의 자료형을 확인하는 방법
typeof "Hello"  
// "string"

// !DOCTYPE html 문서의 쿼리를 선택하여 요소를 문자열(string)로 변경
document.querySelector("#typesTest").innerHTML = "안녕하세요.";

// 자바스크립트 구문을 여러 줄에 나눠 쓰는 것도 가능
document.querySelector("#typesTest")
  .innerHTML = "안녕하세요.";

document.querySelector("#typesTest").innerHTML
  = "안녕하세요.";

// 콘솔에서 로그활용
console.log("안녕하세요.");
console.log(typeof "안녕하세요");

// 세미콜론(;) : 필수는 아님.  한 줄에 여러 명령어를 넣을 수 있도록 함
console.log("안녕하세요."); console.log(typeof "안녕하세요");

// 문자열을 +로 연결하면(문자열에 문자열을 더하면) 이어진 문자열이 됨
console.log("안녕하세요." + "반갑습니다.");
console.log("안녕하세요." + " " + "반갑습니다.");

// 다른 연산자(-, /, * 등)는 작동하지 않음
console.log("안녕하세요." - "하세요.");  
// NaN

typeof 1
// "number"

// !DOCTYPE html 문서의 쿼리를 선택하여 요소를 숫자(number)로 변경
document.querySelector("#typesTest").innerHTML = 100;

// 수학 연산자로 사칙연산 수행
console.log(
    1 + 2,
    // 10진법이 아닌 2진법을 사용하기에 소수점 아래 계산값이 1.2999999999999998로 도출됨
    5 - 3.7,
    -0.5 + 3.14 * 2,
    4 / (1 + 5),
    // 나머지 연산자
    13 % 5
    // 3
);

// 문자열과 숫자를 더하면 문자열이 됨
console.log("Number " + 1);
// 결과: "Number 1"

// 변수(variable) : 데이터를 담는 주머니 - 모든 종류의 데이터를 할당할 수 있음
// 데이터들이 직접 입력된 코드
document.querySelector("h1").innerHTML = "자료형과 변수";

// var : 변수를 선언하는 구문
var salutation = "안녕하세요, 반갑습니다!";
var typesTestDiv = document.querySelector("#typesTest");

// document.querySelector("#typesTest").innerHTML
//   = "안녕하세요, 반갑습니다!";
typesTestDiv.innerHTML = salutation;

// 변수마다 선언은 한 번, 값은 이후 변경 가능
var myNumber = 1;
console.log(myNumber); // 1

myNumber = 3;
console.log(myNumber); // 3

myNumber = myNumber + 2;
console.log(myNumber); // 5

// ++, -- : 1씩 증가 / 감소 연산자
myNumber++;
console.log(myNumber);

myNumber--;
console.log(myNumber);

// +=, -=, *=, /=, %= : 각각의 연산을 수행하여 대입
myNumber += 3;
console.log(myNumber);

myNumber -= 5;
console.log(myNumber);

myNumber *= 6;
console.log(myNumber);

myNumber /= 2;
console.log(myNumber);

myNumber %= 4;
console.log(myNumber);

// 문자열은 += 가능
var myName = '홍';
myName += '길동';

console.log(myName);