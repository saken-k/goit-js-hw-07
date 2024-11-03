function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorChange = document.querySelector(".change-color");
const text = document.querySelector(".color");
const handleClick = (event) => {
  text.textContent = getRandomHexColor();
  document.body.style.background = text.textContent;
};

colorChange.addEventListener("click", handleClick);
