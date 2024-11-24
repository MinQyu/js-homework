# Mission - 2

---

- [main.js](https://github.com/MinQyu/js-homework/blob/main/mission01/mission-2/client/js/main.js)

---

## 과제 수행과정

- querySelectorAll을 이용해 네비게이션 요소들을 불러옴
- click이벤트를 처리할 이벤트 핸들러 handleClick을 작성
- handleClick에서 호출할 setBgColor, setImage, setNameText 함수 작성
- 네비게이션 요소들에 바인딩

## handleClick

- index는 data 속성에 접근해서 사용. data-index는 string이고 1부터 시작하기 때문에 parseInt를 이용해 숫자로 바꾸고 1을 빼줌
- 기존 요소의 is-active 속성을 지우고 이벤트가 발생한 요소에 is-active 속성 추가
- setBgColor, setImage, setNameText에 index 전달해 호출

## setBgColor

- 선택된 객체의 color값을 구조분해할당으로 가져옴
- 주어진 코드를 이용해 body 요소의 배경색 변경

## setImage

- 주어진 코드를 이용해 선택된 이미지의 src 경로와 alt 지정
- setAttribute를 이용해 selectedImage 요소의 src, alt값 변경

## setNameText

- 선택된 객체의 name값 가져옴
- nickName 요소의 textContent를 해당 값으로 변경
