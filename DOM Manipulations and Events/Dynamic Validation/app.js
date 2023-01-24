function validate() {
  const email = document.querySelector("#email");
  const regex = /^\w+([\.-_]?\w+)*@\w+([\.]?\w+)*(\.\w{2,3})+$/g;

  email.addEventListener("change", checkEmail);

  function checkEmail(e) {
    if (e.target.value.match(regex)) {
      e.target.classList.remove("error");
      return
    }
    e.target.classList.add("error");
  }
}
