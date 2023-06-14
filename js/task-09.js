function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorText = document.querySelector('.color');
const buttonChangeColor = document.querySelector('.change-color');
const colorArea = document.querySelector('body');
buttonChangeColor.addEventListener("click", () => {
  const colorOfArea =getRandomHexColor();
  colorArea.style.backgroundColor = colorOfArea;
  colorText.textContent = colorOfArea;
}
)
