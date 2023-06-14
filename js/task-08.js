const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('всі поля повинні бути заповнені'); 
  } else {
    const formObject = {
      email: emailInput.value,
      password: passwordInput.value
    };

    console.log(formObject); 

    loginForm.reset(); 
  }
});