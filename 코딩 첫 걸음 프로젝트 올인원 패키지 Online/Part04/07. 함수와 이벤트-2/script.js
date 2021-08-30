function getAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

var average = getAverage([2, 8, 5, 3, 10]);

// return이 발생할 때 함수는 종료
var isPrimeNumber = function (number) {
    if (number <= 1) {
        return false;
    } else if (number === 2) {
        return true;
    } else {
        for (var i = 2; i < number; i++) {
            if (number % i === 0) return false;
        }
        return true;
    }
}

// 다중 함수 응용
function getSmallerPrimeNumbers (number) {
    var result = [];
    for (var i = 1; i < number; i++) {
        if (isPrimeNumber(i)) result.push(i);
    }
    return result;
}

// 이벤트
// 특정 요소 클릭시 이벤트
function insertThisTime () {
    var ulEl = document.querySelector("ul");
    var liEl = document.createElement("li");
    liEl.append(new Date());
    ulEl.append(liEl);
}

// 요소 로드 완료시 이벤트
// body에 붙일 경우 페이지의 모든 요소들(이미지, js, css파일 등) 로드 후 실행
function sayPageIsLoaded () {
    document.querySelector("h1").innerHTML = "페이지 로드 완료!"
}

// 팀 배정 프로그램 만들어보기
var members = [
    '손흥민', '김영권', '이승우', '기성용', '황희찬', 
    '황희조', '구자철', '이용', '조현우', '김승규',
    '이강인', '박주호', '문선민', '김민재', '황인범', 
    '이정협', '김인성', '구성윤', '장현수', '나상호'
];

// 배정되지 않은 멤버들 표시 함수
function showNotAssigneds () {
    var membersString = '';
    for (var i = 0; i < members.length; i++) {
        membersString += members[i];
        if (i < members.length - 1) membersString += ', ';
    }
    document.querySelector('#not_assigned').innerHTML = membersString;
}

// 목록 앞에서부터 한 명씩 빼서 원하는 팀에 배정
function assignMemberToTeam (teamNumber) {
    if (members.length === 0) return;
    var member = members[0];
    member = members.splice(0, 1);
    showNotAssigneds();
    
    var liEl = document.createElement("li");
    liEl.append(member);
    document.querySelector("#team_" + teamNumber).append(liEl);
}
