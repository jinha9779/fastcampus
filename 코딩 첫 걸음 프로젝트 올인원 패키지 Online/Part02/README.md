# HTML

참조사이트

- [MDN](https://developer.mozilla.org/ko/)
- [w3schools](https://www.w3schools.com/default.asp)

## HTML이란?

- HTML 은 프로그래밍 언어가 아니다.
- HTML 은 Hyper Text Markup Language의 약자이다.
- HTML 은 웹 페이지를 만들기 위한 표준 마크업 언어이다.
- HTML 은 웹 페이지의 구조를 설명한다.
- HTML 은 일련의 요소로 구성된다.
- HTML 요소는 브라우저에 콘텐츠를 표시하는 방법을 알려준다.

## HTML 기본 문서

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>web page title</title>
  </head>
  <body>
    태그를 이용한 내용 꾸미기
  </body>
</html>
```

## 문서 설명

- `<!DOCTYPE html>` : 오래전 HTML이 막 나왔을 때 doctype은 (자동오류 확인이나 다른 유용한 것을 의미하는) good HTML로 인정받기 위해 HTML 페이지가 따라야 할 일련의 규칙으로의 연결통로로써 작동하는 것을 의미하였지만, 최근에는 그런것에 신경쓰지 않으며 올바르게 작독하게 하기 위해 포함한다거나 HTML5 문서임을 정의한다고 인식된다.

- `<html lang="ko"><html/>` : 이 요소는 페이지 전체의 컨텐츠를 감싸며, 루트(root) 요소라고 한다.

- `<head><head/>` : HTML 페이지에 포함되어 있는 모든것들의 컨테이너 역할을 하며, 메타 정보를 포함하는 등 페이지 설명, CSS를 포함한다.

- `<meta charset="utf-8"/>` : 문서가 사용해야 할 문자 집합을 utf-8으로 설정한다.

- `<title><title/>` : 페이지의 제목을 설정하는 것으로 페이지가 로드되는 브라우저의 탭에 제목이 표시된다.

- `<body><body/>` : 문서의 본문을 정의하고, 등 호, 단락, 이미지, 하이퍼 링크, 테이블, 리스트, 모든 가시적 인 컨텐츠에 대한 컨테이너이다.

## HTML 요소란?

```html
element = <opening tag>content</closing tag>
```

- HTML 요소(element)는 시작 태그(opening tag), 일부 콘텐츠(content) 및 종료 태그(closing tag)로 정의 된다.

  - `opening tag` : 요소가 시작되는 곳, 또는 효과를 시작하는 곳임을 나타낸다.
  - `content` : 요소의 내용으로 위의 예제에서는 텍스트이다.
  - `closing tag` : opening tag 와 같지만, 요소의 이름 앞에 `/` 가 포함되며 요소의 끝을 나타낸다.
  - `element` : opening tag로 시작하여 content를 포함하고 closing tag로 끝나는 것을 요소라한다.

- 요소는 속성도 가질 수 있는데, 다음과 같이 사용한다.
  - ex) `<p class="eidtor-note">content</p>`
  - `속성(attribute)` : class="editor-note"

## 문자 나타내기

- `제목` : HTML 제목은 내용의 특정 부분이 제목 또는 내용의 하위 제목임을 구체화 할 수 있게 해준다. `<h1>제목</h1>` 에서 `<h6>제목</h6>` 으로 정의된다.

  #### 작성법

  ```html
  <h1>html문서에서 가장 중요한 제목을 표시하며 한번만 사용하는걸 권장함</h1>
  <h2>제목</h2>
  <h3>제목</h3>
  <h4>제목</h4>
  <h5>제목</h5>
  <h6>제목</h6>
  ```

  #### 결과물

  > <h1>html문서에서 가장 중요한 제목을 표시하며 한번만 사용하는걸 권장함</h1>
  > <h2>제목</h2>
  > <h3>제목</h3>
  > <h4>제목</h4>
  > <h5>제목</h5>
  > <h6>제목</h6>

- `단락(문단)` : 일반적인 문자 내용을 나타낼 때 사용되며, `<p></p>` 로 정의된다.

  #### 작성법

  ```html
  <p>이곳에 작성된 텍스트는 일반적인 문자 내용을 나타낸다.</p>
  ```

  #### 결과물

  > <p>이곳에 작성된 텍스트는 일반적인 문자 내용을 나타낸다.</p>

- `목록(리스트)` : HTML문서의 목록을 나타내는 요소로 순서가 있는 것과 순서가 없는 것이 있다.

  #### 작성법

  ```html
  순서 없는 목록
  <ul>
    <li>첫번째</li>
    <li>두번째</li>
  </ul>

  순서 있는 목록
  <ol>
    기본값은 숫자이다.
    <li>첫번째</li>
    <li>두번째</li>
  </ol>

  <ol type="a">
    영어 소문자
    <li>첫번째</li>
    <li>두번째</li>
  </ol>

  <ol type="A">
    영어 대문자
    <li>첫번째</li>
    <li>두번째</li>
  </ol>

  <ol type="i">
    로마숫자 소문자
    <li>첫번째</li>
    <li>두번째</li>
  </ol>

  <ol type="I">
    로마숫자 대문자
    <li>첫번째</li>
    <li>두번째</li>
  </ol>

  <ol start="2">
    시작 목록의 순번을 지정
    <li>첫번째</li>
    <li>두번째</li>
  </ol>

  <ol reserved>
    항목을 역순으로 표시
    <li>첫번째</li>
    <li>두번째</li>
  </ol>
  ```

  #### 결과물

  > 순서 없는 목록
  >
  > <ul>
  >   <li>첫번째</li>
  >   <li>두번째</li>
  > </ul>

  > 순서 있는 목록
  >
  > <ol>
  >   기본값은 숫자이다.
  >   <li>첫번째</li>
  >   <li>두번째</li>
  > </ol>
  > <br>
  > <ol type="a">
  >   알파벳 소문자
  >   <li>첫번째</li>
  >   <li>두번째</li>
  > </ol>
  > <br>
  > <ol type="A">
  >   알파벳 대문자
  >   <li>첫번째</li>
  >   <li>두번째</li>
  > </ol>
  > <br>
  > <ol type="i">
  >   로마숫자 소문자
  >   <li>첫번째</li>
  >   <li>두번째</li>
  > </ol>
  > <br>
  > <ol type="I">
  >   로마숫자 대문자
  >   <li>첫번째</li>
  >   <li>두번째</li>
  > </ol>
  > <br>
  > <ol start="2">
  >   시작 목록의 순번을 지정
  >   <li>첫번째</li>
  >   <li>두번째</li>
  > </ol>
  > <br>
  > <ol reserved>
  >   항목을 역순으로 표시
  >   <li>첫번째</li>
  >   <li>두번째</li>
  > </ol>

- `링크` : 웹을 웹으로 만들어주는 아주 중요한 요소로 `<a></a>`로 정의 되며, a는 "anchor" 의 약자이다.

  #### 작성법

  ```html
  <a href="#">현재 사이트 링크</a>
  ```

  ```html
  <a href="#HTML">HTML로 이동</a>
  ```

  ```html
  <a href="https://google.com">현재 페이지에서 다른 사이트로 이동</a>
  ```

  ```html
  <a href="https://google.com" target="_blank">새창에서 링크 열기</a>
  ```

  ```html
  <a href="https://google.com" target="_blank" title="구글로 이동"
    >링크의 설명</a
  >
  ```

  #### 결과물

  > <a href="#">현재 사이트 링크</a>

  > <a href="#HTML">HTML로 이동</a>

  > <a href="https://google.com">현재 페이지에서 다른 사이트로 이동</a>

  > <a href="https://google.com" target="_blank">새창에서 링크 열기</a>

  > <a href="https://google.com" target="_blank" title="구글로 이동">링크의 설명</a>
