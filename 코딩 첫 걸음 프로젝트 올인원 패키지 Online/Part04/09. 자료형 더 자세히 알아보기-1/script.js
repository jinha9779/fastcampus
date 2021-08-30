// 문자열(string)
// 문자열 길이 구하기
var myString = "동해물과 백두산이 마르고 닳도록";
console.log(myString.length);

// n번째 글자
var myLetter = "자바스크립트"[3];
console.log(myLetter);

// 바꿔넣기는 동작하지 않음
var myString = "서울소곱창";
myString[3] = "막";
console.log(myString);

// 글자 수로 자르기 : slice 함수
var myString = "0123456789";
console.log(myString.slice(3));
console.log(myString.slice(-3));
console.log(myString.slice(4, 8));
console.log(myString.slice(0, -3));

// 문자열 일부 치환 : replace 함수
var myString = "저는 서울에 살고 있는 서울 시민입니다.";
myString.replace("서울", "부산");
console.log(myString);
myString = myString.replace("서울", "부산");
console.log(myString);
myString = myString.replace("저는 부산에 살고 있는 ", "");
console.log(myString);
myString = myString.replace("울 시", "동 서");
console.log(myString);

// 문자열 내 다른 문자열 위치 : indexOf 함수
var myString = "한겨울에 밀짚모자 꼬마 눈사람";
console.log(myString.indexOf("꼬마"));
console.log(myString.indexOf("산타"));

var myString = "저는 서울에 살고 있는 서울 시민입니다.";
while (myString.indexOf("서울") !== -1) {
    myString = myString.replace("서울", "부산");
    console.log(myString);
}

// 특정 문자 기준으로 배열로 분할 : split 함수
var myString = "010-1234-5678";
console.log(myString.split("-"));
console.log(myString);
myString = myString.split("-");
console.log(myString);

// 전체 대문자, 소문자 변환 : toUpperCase, toLowerCase 함수
var myString = "Merry Christmas!";
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());

// 공백 없애기 : trim 함수
var myString = " 하나 ";
console.log(myString.length);
console.log(myString.trim().length);

