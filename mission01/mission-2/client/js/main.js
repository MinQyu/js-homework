/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const navItems = document.querySelectorAll(".nav li");
const selectedImage = document.querySelector(".visual img");
const nickName = document.querySelector(".nickName");

function setBgColor(index) {
  const [colorA, colorB] = data[index].color;
  document.body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}

function setImage(index) {
  const selectedImageSrc = `./assets/${data[index].name}.jpeg`;
  const selectedImageAlt = data[index].alt;

  selectedImage.setAttribute("src", selectedImageSrc);
  selectedImage.setAttribute("alt", selectedImageAlt);
}

function setNameText(index) {
  const selecteImageName = data[index].name;
  nickName.textContent = selecteImageName;
}

function handleClick(e) {
  const target = e.currentTarget;
  const index = parseInt(target.dataset.index) - 1;

  document.querySelector(".nav .is-active").classList.remove("is-active");
  target.classList.add("is-active");

  setBgColor(index);
  setImage(index);
  setNameText(index);
}

navItems.forEach((item) => {
  item.addEventListener("click", handleClick);
});
