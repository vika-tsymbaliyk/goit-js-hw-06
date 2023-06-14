const inputSlider = document.querySelector('#font-size-control');
const textChange = document.querySelector('#text');
inputSlider.addEventListener("input", (event) => {
    const textSize = event.currentTarget.value+"px";
   
    textChange.style.fontSize = textSize;

})