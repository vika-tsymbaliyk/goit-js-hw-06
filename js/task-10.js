function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsArea = document.querySelector('#controls');
const controlInput = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const createArea = document.querySelector('#boxes');

function createBoxes() {
  const amount = controlInput.value;
  console.log(amount);
 
  for (let i = 0; i < amount; i += 1){
//     const newDiv = document.createElement('div');
//     newDiv.style.height = "30px";
//     newDiv.style.width = "30px";
//     newDiv.style.backgroundColor = getRandomHexColor();
 }
}
buttonCreate.addEventListener("click", createBoxes);

