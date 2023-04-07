const inputs = document.querySelectorAll("input");
const button = document.querySelector('.login__button');
const form = document.querySelector('form');
const username = document.querySelector('input[name="username"]');
const password = document.querySelector('input[name="password"]');
const submitBtn = document.querySelector('.login__button');

function validateForm() {
  if (username.value === '' || password.value === '') {
    alert('Por favor, preencha todos os campos.');
    return false;
  }
  
  return true;
}

submitBtn.addEventListener('click', function() {
  if (validateForm()) {
    alert('Formulário enviado com sucesso!');
    form.submit();
  }
});





const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add("span-active");
};

const handleFocusOut = ({ target }) => {
  if (target.value === "") {
    const span = target.previousElementSibling;
    span.classList.remove("span-active");
  }
};

const handleChange = () => {
  const [username, password] = inputs;

  if (username.value && password.value.length >= 8) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "");
  }
};

inputs.forEach((input) => input.addEventListener("focus", handleFocus));
inputs.forEach((input) => input.addEventListener("focusout", handleFocusOut));
inputs.forEach((input) => input.addEventListener("input", handleChange));




