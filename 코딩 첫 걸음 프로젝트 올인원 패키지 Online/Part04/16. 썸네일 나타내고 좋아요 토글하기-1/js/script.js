// 메뉴 이동
function setMenu(_menu) {
  var filterButtons = document.querySelectorAll("nav li");
  filterButtons.forEach(function (filterButton) {
    filterButton.classList.remove("on");
  });
  document.querySelector("nav li." + _menu).classList.add("on");
  document.querySelector("main").className = _menu;
}

// 사진올리기의 사진설명 길이 표시
function setDescLength () {
  document.querySelector(".descLength").innerHTML =
   document.querySelector("input.description").value.length + "/20";
}

function updateMyInfo () {
  my_info.introduction = document.querySelector("#ip-intro").value;
  my_info.as = document.querySelector("#myinfo input[type=radio]:checked").value;
  var interests = [];
  document.querySelectorAll("#myinfo input[type=checkbox]:checked").forEach(function (checked) {
    interests.push(checked.value);
  });
  my_info.interest = interests;
  setEditMyInfo(false);
  showMyInfo();
}

function showMyInfo () {
  document.querySelector("#myInfoId").innerHTML = my_info.id;
  document.querySelector("#myInfoUserName").innerHTML = my_info.user_name;
  document.querySelector("#sp-intro").innerHTML = my_info.introduction;
  document.querySelector("#ip-intro").value = my_info.introduction;
  document.querySelector("#myinfo input[type=radio][value=" + my_info.as + "]").checked = true;
  document.querySelectorAll("#myinfo input[type=checkbox]")
    .forEach(function(checkbox) {
    checkbox.checked = false;
  });
  my_info.interest.forEach(function (interest) {
    document.querySelector("#myinfo input[type=checkbox][value=" + interest + "]").checked = true;
  });
}

function setEditMyInfo (on) {
  document.querySelector("#myinfo > div").className = on ? "edit" : "non-edit"
  document.querySelectorAll("#myinfo input").forEach(function (input) {
    input.disabled = !on;
  })
  // 취소했을 때 원상복구하기 위해
  showMyInfo();
}

// showPhotos 함수
function showPhotos () {
  // 함수 시작시 현존하는 썸네일들 삭제
  // showPhotos 함수가 재실행될 경우 대비
  var existingNodes = document.querySelectorAll("#gallery article:not(.hidden)");
  existingNodes.forEach(function (existingNode) {
    existingNode.remove();
  });

  // 갤러리 div 선택
  var gallery = document.querySelector("#gallery");
  // 각 사진을 썸네일로 만들어 넣음
  photos.forEach(function (photo) {
    // 마련한 요소 복사하여 숨김 풀기
    var photoNode = document.querySelector("article.hidden").cloneNode(true);
    photoNode.classList.remove("hidden");
    // 사진의 내용 채우기
    photoNode.querySelector(".author").innerHTML = photo.user_name;
    photoNode.querySelector(".desc").innerHTML = photo.description;
    photoNode.querySelector(".like").innerHTML = photo.likes;
    photoNode.querySelector(".photo").style.backgroundImage 
      = "url('./img/photo/" + photo.file_name + "')";

    // 좋아요 여부 클래스로 표시
    if (my_info.like.indexOf(photo.idx) > -1) {
      photoNode.querySelector(".like").classList.add("on");
    }

    photoNode.querySelector(".like").addEventListener(
      "click", function () { toggleLike(photo.idx) }
    )
    
    // 갤러리 요소에 붙여넣기
    gallery.append(photoNode);
  })
}

// 썸네일의 좋아요를 토글하려면?
// my_info.like에 해당 idx가 없다면 : my_info.like에 해당 idx를 넣는다, 해당 사진의 likes를 1증가시킨다.
// my_info.like에 해당 idx가 있다면 : my_info.like에 해당 idx를 뺀다, 해당 사진의 likes를 1감소시키다.
function toggleLike(idx) {
  if (my_info.like.indexOf(idx) === -1) {

    // 내가 좋아요하지 않은 사진일 때
    // → 좋아요로 바꿈
    my_info.like.push(idx);
    for (var i = 0; i < photos.length; i++) {
      if (photos[i].idx === idx) {
        photos[i].likes++;
        break;
      }
    }
  } else {
    // 내가 좋아요 한 사진일 때
    // → 좋아요 해제
    my_info.like = my_info.like.filter(
      function (it) { return it !== idx; }
    );
    for (var i = 0; i < photos.length; i++) {
      if (photos[i].idx === idx) {
        photos[i].likes--;
        break;
      }
    }
  }
  // 최종적용
  showPhotos();
}

// 화면이 처음 로드되면 실행되는 함수
function init() {
  showMyInfo();
  showPhotos();
}