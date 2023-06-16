const inputForm = document.querySelector('#validation-input');
inputForm.addEventListener("blur", (event) => {
    const inputText = event.currentTarget.value;
    const MIN_VALUE = inputForm.getAttribute('data-length');
    if (inputText.length == MIN_VALUE) {
        inputForm.classList.add('valid');
    } else {
        inputForm.classList.add('invalid');
    }
})
