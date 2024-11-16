const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const loginForm = document.querySelector(".login-form");

function handleSubmit(e) {
  e.preventDefault();

  const idInput = loginForm.querySelector("#userEmail");
  const idInputValue = idInput.value;
  const pwInput = loginForm.querySelector("#userPassword");
  const pwInputValue = pwInput.value;

  if (!emailReg(idInputValue)) {
    idInput.classList.add("is--invalid");
    return;
  } else {
    idInput.classList.remove("is--invalid");
  }

  if (!pwReg(pwInputValue)) {
    pwInput.classList.add("is--invalid");
    return;
  } else {
    pwInput.classList.remove("is--invalid");
  }

  if (idInputValue !== user.id) {
    alert("ID가 일치하지 않습니다.");
    return;
  }

  if (pwInputValue !== user.pw) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  window.location.href = "welcome.html";
}

loginForm.addEventListener("submit", handleSubmit);
