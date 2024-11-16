# 네이버 로그인 페이지 구현

---

- [main.js](https://github.com/MinQyu/js-homework/blob/main/mission01/naver_login/js/main.js)

---

## 과제 수행과정

- 쿼리셀렉터를 이용해 로그인 폼 객체를 불러옴
- submit이벤트를 처리할 이벤트 핸들러 handleSubmit을 작성
- 로그인 폼 객체에 바인딩

## handleSubmit

- validation을 진행한 뒤 각 input 객체에 is--invalid 속성을 넣을 것을 고려해 input 따로 inputValue 따로 선언
- 유효하지 않은 값인 경우 return으로 함수 탈출
- id와 pw비교시 일치하지 않을 경우 alert로 메시지 출력
- 문자열 validation과 user.id, user.pw 검증을 모두 통과하면 welcome.html으로 이동
