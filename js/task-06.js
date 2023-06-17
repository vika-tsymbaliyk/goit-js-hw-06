const inputForm = document.querySelector('#validation-input');
const MIN_VALUE = parseInt(inputForm.getAttribute('data-length'));


inputForm.addEventListener("blur", (event) => {
    const inputText = inputForm.value.trim();
    inputForm.classList.add('invalid');
    if (inputText.length === MIN_VALUE) {
        inputForm.classList.replace('invalid','valid');   
    };    
})

