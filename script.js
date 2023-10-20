const form = document.querySelector("#form");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");
const error = document.querySelector(".error");
const button = document.querySelector(".button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const validateInputs = () => {
  const firstnameVal = firstname.value.trim();
  const lastnameVal = lastname.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  let allFieldisValidate = true;

  if (firstnameVal === "") {
    setError(firstname, "Firstname is required");
    allFieldisValidate = false;
  } else {
    setSuccess(firstname);
  }

  if (lastnameVal === "") {
    setError(lastname, "Lastname is required");
    allFieldisValidate = false;
  } else {
    setSuccess(lastname);
  }

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

  if (cpasswordVal === "") {
    setError(cpassword, "Confirm password is required");
    allFieldisValidate = false;
  } else if (cpasswordVal !== passwordVal) {
    setError(cpassword, "Password does not match");
    allFieldisValidate = false;
  } else {
    setSuccess(cpassword);
  }

  if (allFieldisValidate) {
    window.location.href = "login.html";
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