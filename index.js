const form = document.getElementById("submit-form");
const name1 = document.getElementById("name1");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const phone = document.getElementById("phone");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const nameValue = name1.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();
  const phoneValue = phone.value.trim();

  if (nameValue === "") {
    setError(name1, "name is required");
  } else if (nameValue.length <= 2 || nameValue.length > 25) {
    setError(name1, "name should contain words between 3 and 20");
  } else if (!isNaN(nameValue)) {
    setError(name1, "name can't contain digits");
  } else {
    setSuccess(name1);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (subjectValue === "") {
    setError(subject, "Subject is required");
  } else if (subjectValue.length <= 3 || subjectValue > 20) {
    setError(subject, "Subject must contain words between 4 and 20");
  } else {
    setSuccess(subject);
  }

  if (messageValue === "") {
    setError(message, "Message is required");
  } else if (messageValue.length <= 15) {
    setError(message, "Message should atleast contain 15 words!");
  } else {
    setSuccess(message);
  }

  if (phoneValue === "") {
    setError(phone, "Phone number is required");
  } else if (isNaN(phoneValue)) {
    setError(phone, "number should only have 10 digits");
  } else if (phoneValue.length !== 10) {
    setError(phone, "phone number must contain exactly 10 digits");
  } else {
    setSuccess(phone);
  }
};
