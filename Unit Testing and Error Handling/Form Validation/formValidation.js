function validate() {
  const companyField = document.querySelector("#companyInfo");
  const companyCheck = document.querySelector("#company");
  const form = document.querySelector("#registerForm");

  companyCheck.addEventListener("change", () => {
    if (companyCheck.checked) {
      companyField.style.display = "block";
    } else {
      companyField.style.display = "none";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const usernameInput = document.querySelector("#username");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const confirmPassInput = document.querySelector("#confirm-password");
    const companyNumberInput = document.querySelector("#companyNumber");
    const validField = document.querySelector("#valid");

    const usernamePattern = /^[a-zA-Z0-9]+$/;
    const passwordPattern = /^[\w]+$/;
    const emailPattern = /.*@.*\..*/;

    let usernameIsValid = false;
    let passIsValid = false;
    let confirmPassIsValid = false;
    let emailIsValid = false;
    let companyNumberIsValid = false;

    if (
      usernamePattern.test(usernameInput.value) &&
      usernameInput.value.length >= 3 &&
      usernameInput.value.length <= 20
    ) {
      usernameIsValid = true;
    }
    if (emailPattern.test(emailInput.value)) {
      emailIsValid = true;
    }
    if (
      passwordPattern.test(passwordInput.value) &&
      passwordInput.value.length >= 5 &&
      passwordInput.value.length <= 15 &&
      passwordInput.value === confirmPassInput.value
    ) {
      passIsValid = true;
      confirmPassIsValid = true;
    }
    if (companyCheck.checked) {
      if (
        companyNumberInput.value >= 1000 &&
        companyNumberInput.value <= 9999
      ) {
        companyNumberIsValid = true;
      } else {
      }
    } else {
      companyNumberIsValid = true;
    }

    if(usernameIsValid && passIsValid && confirmPassIsValid && emailIsValid && companyNumberIsValid){
        validField.style.display = 'block';
    }

    if(!usernameIsValid){
        usernameInput.style.borderColor = 'red'
    }
    if(!passIsValid){
        passwordInput.style.borderColor = 'red'
    }
    if(!confirmPassIsValid){
        confirmPassInput.style.borderColor = 'red'
    }
    if(!emailIsValid){
        emailInput.style.borderColor = 'red'
    }
    if(!companyNumberIsValid){
        companyNumberInput.style.borderColor = 'red'
    }
  });
}
