// 사이트 방문 질문 선택창(confirm)으로 h1태그의 요소 결정
if (confirm("이 사이트 방문이 처음이십니까?")) {
    document.querySelector("h1").innerHTML = "처음 뵙겠습니다.";
} else {
    document.querySelector("h1").innerHTML = "다시 만나뵈어 기쁩니다.";
}

// boolean : 참/거짓
var myBool_1 = true;
var myBool_2 = false;

console.log("myBool_1 = " + myBool_1);
console.log("myBool_2 = " + myBool_2);

// ! : 부정 연산자
console.log("!myBool_1 = " + !myBool_1);
console.log("!myBool_2 = " + !myBool_2);

var myBool_3 = !myBool_1;
var myBool_4 = !myBool_2;

console.log("myBool_3 = " + myBool_3);
console.log("myBool_4 = " + myBool_4);

// ==, === 연산자 : 양쪽 값이 같으면 true, 다르면 false를 반환
console.log("1 === 1 = ", 1 === 1);
console.log("1 === 2 = ", 1 === 2);
console.log("1 === 2 - 1 = ", 1 === 2 - 1);

console.log("'hello' === 'hello' = ", 'hello' === 'hello');
console.log("'hello' === 'bye' = ", 'hello' === 'bye');

console.log("true === true = ", true === true);
console.log("true === false = ", true === false);

console.log("myBool_1 === myBool_3 = ", myBool_1 === myBool_3);
console.log("myBool_1 === myBool_4 = ", myBool_1 === myBool_4);

// ==: 같은 타입으로 바꾸어 비교
// === : 타입이 같은지 여부도 비교
console.log("1 == '1' = ", 1 == '1');
console.log("1 === '1' = ", 1 === '1');

console.log("0 == '' = ", 0 == '');
console.log("0 === '' = ", 0 === '');

console.log("0 == false = ", 0 == false);
console.log("0 === false = ", 0 === false);

console.log("0 == true = ", 0 == true);
console.log("0 === true = ", 0 === true);

// !=, !== 연산자 : 양쪽 값이 다르면 true, 같으면 false를 반환
// 각각 ==, === 와 반대로 작동
console.log("1 !== 1 = ", 1 !== 1);
console.log("1 !== 2 = ", 1 !== 2);
console.log("1 !== 2 - 1 = ", 1 !== 2 - 1);

console.log("true !== true = ", true !== true);
console.log("true !== false = ", true !== false);

console.log("myBool_1 !== myBool_3 = ", myBool_1 !== myBool_3);
console.log("myBool_1 !== myBool_4 = ", myBool_1 !== myBool_4);

// >, >=, <, <= 연산자 : 숫자일 경우 크기를 비교, 문자열일 경우 알파벳순 비교 (뒤에 오는 글자를 더 크게)
console.log("10 > 10 = ", 10 > 10);
console.log("10 >= 10 = ", 10 >= 10);
console.log("10 <= 10 = ", 10 <= 10);

console.log("10 > 9 = ", 10 > 9);
console.log("10 < 9 = ", 10 < 9);

console.log("'a' < 'b' = ", 'a' < 'b');

console.log("true > false = ", true > false);

// && : AND 연산자
// 양쪽 모두 true 일 때만 true를 반환
console.log("true && true = ", true && true)
console.log("true && false = ", true && false)

console.log("myBool_1 && myBool_3 = ", myBool_1 && myBool_3);
console.log("myBool_1 && myBool_4 = ", myBool_1 && myBool_4);

console.log("1 + 1 === 2 && 1 + 2 === 3 = ", 1 + 1 === 2 && 1 + 2 === 3);
console.log("1 + 1 === 3 && 1 + 2 === 3 = ", 1 + 1 === 3 && 1 + 2 === 3);

console.log("true && myBool_1 && 1 + 1 === 2 && 'hello' === 'hello' = ", true && myBool_1 && 1 + 1 === 2 && 'hello' === 'hello');
console.log("true && myBool_1 && 1 + 1 === 2 && 'hello' === 'bye' = ", true && myBool_1 && 1 + 1 === 2 && 'hello' === 'bye');

// || : OR 연산자
// 양쪽 중 하나 이상이 true 면 true를 반환
console.log("true || true = ", true || true)
console.log("true || false = ", true || false)
console.log("false || false = ", false || false)

console.log("myBool_1 || myBool_3 = ", myBool_1 || myBool_3);

console.log("1 + 1 === 3 || 1 + 2 === 3 = ", 1 + 1 === 3 || 1 + 2 === 3);

console.log("false || myBool_2 || 1 + 1 === 3 && 'hello' === 'hello' = ", false || myBool_2 || 1 + 1 === 3 && 'hello' === 'hello');

// AND 연산자와 RO연산자의 혼합 사용
console.log("(true && false) || true = ", (true && false) || true);
console.log("(100 > 200 || 20 <= 30) && '감자' < '고구마' = ", (100 > 200 || 20 <= 30) && '감자' < '고구마');

// 조건문

// if문
// 조건이 true 일 시 명령문 실행
if (true) console.log("YES");

if (true) {
  console.log("Yes,");
  console.log("it's");
  console.log("true!");
}

// 조건이 false 일 시 실행하지 않음
if (false) console.log("YES");

// else문
// if문의 조건이 사실이 아닐 시 실행
if (false) {
    console.log("YES");
} else{
    console.log("NO");
};

if (1 + 1 === 2) {
    alert("1 + 1은 2 입니다.");
}

if ("Apple" > "Banana") {
    console.log("Apple은 Banana보다 앞에 있습니다.");
} else {
    console.log("Apple은 Banana보다 뒤에 있습니다.");
}

// else if문
var myNumber = 25;
if (myNumber % 3 === 0) {
  console.log(myNumber + "는 3의 배수입니다.");
} else if (myNumber % 3 === 1) {
  console.log(myNumber + "는 3의 배수 + 1입니다.");
} else {
  console.log(myNumber + "는 3의 배수 + 2입니다.");
}

if (confirm("이 사이트 방문이 처음이십니까?")) {
    document.querySelector("h1").innerHTML = "처음 뵙겠습니다.";
} else {
    document.querySelector("h1").innerHTML = "다시 만나뵈어 기쁩니다.";
}

// 삼항연산자 : (조건) ? [참일 때 값] : [거짓일 때 값]
var largerNumber = 10 > 24 ? 10 : 24;
console.log(largerNumber);
