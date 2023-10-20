const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const error = document.querySelector(".error");
const button = document.querySelector(".button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const validateInputs = () => {
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  let allFieldisValidate = true;

  if (emailVal === "") {
    setError(email, "email field is required");
    allFieldisValidate = false;
  } else if (!validateEmail(emailVal)) {
    setError(email, "please enter valid emailID");
    allFieldisValidate = false;
  } else {
    setSuccess(email);
  }

  if (passwordVal === "") {
    setError(password, "Password is required");
    allFieldisValidate = false;
  } else if (passwordVal.length < 8) {
    setError(password, "Password should be max 8 characters");
    allFieldisValidate = false;
  } else {
    setSuccess(password);
  }

  if (allFieldisValidate) {
    window.location.href = "todo.html";
  }
};

const setError = (element, message) => {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
};

const setSuccess = (element) => {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = "";
  inputGroup.classList.remove("error");
  inputGroup.classList.add("success");
};

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};