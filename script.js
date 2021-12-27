const form = document.querySelector('form');
const userName = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const textarea = document.querySelector('#message');
function unset(errorMessage) {
  errorMessage.innerText = ''
}
function showError(input, message) {
  input.classList = 'error';
  const Name = input.name;
  const result = Name[0].toUpperCase() + input.name.slice(1);
  let errorMessage = input.nextElementSibling;
  errorMessage.innerText = `${result} ${message}.`;
}
function showSuccess(input) {
  let errorMessage = input.nextElementSibling;
  input.classList = 'success';
  unset(errorMessage)
}
function checkLength(input, min) {
  if (input.value.length < min) {
    showError(input, 'is too short');
  } else {
    showSuccess(input);
  }
}
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function checkEmail(email) {
  const written = email.value;
  const condition = validateEmail(written);
  if (condition) {
    showSuccess(email);
  } else {
    showError(email, 'is not valid');
  }
}
function checkPhone(input, min) {
  checkLength(input, min);
}
function checkMessage(input) {
  if (input.value.length <= 0) {
    showError(input, 'field should not be empty');
  } else {
    showSuccess(input);
  }
}
form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkLength(userName, 4);
  checkEmail(email);
  checkPhone(phone, 11);
  checkMessage(textarea);
  
  
});
