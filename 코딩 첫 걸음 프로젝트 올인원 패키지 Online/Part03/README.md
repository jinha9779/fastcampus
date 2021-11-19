# CSS

참조사이트

- [MDN](https://developer.mozilla.org/ko/docs/Web/CSS)
- [w3schools](https://www.w3schools.com/css/css_intro.asp)

## CSS란?

- CSS는 Cascading Style Sheets의 약자이다.
- CSS는 HTML 요소가 화면, 종이 또는 기타 미디어에 표시되는 방식을 설명한다.
- CSS는 많은 작업을 절약한다. 한 번에 여러 웹 페이지의 레이아웃을 제어할 수 있다.
- 외부 스타일시트는 CSS 파일에 저장된다.

## CSS 구문

- CSS는 규칙 기반 언어이다. 웹 페이지의 특정 요소 또는 요소 그룹에 적용해야 하는 스타일 그룹을 지정 하는 규칙을 정의한다.
- 예를 들어 `<h1>페이지의 제목을 큰 파란색 텍스트로 표시</h1>` 이 텍스트를 내용처럼 구현해보자

  #### 작성법

  ```css
  h1 {
    color: blue;
    font-size: 5em;
  }
  ```

  ```html
  <h1>페이지의 제목을 큰 파란색 텍스트로 표시</h1>
  ```

  #### 결과물

  > <h1 style="color:blue; font-size:5em;">페이지의 제목을 큰 파란색 텍스트로 표시</h1>
