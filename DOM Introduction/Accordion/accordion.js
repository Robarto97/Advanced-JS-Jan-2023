function toggle() {
  const button = document.querySelector(".head .button");
  const extraText = document.querySelector("#extra");

  if (button.textContent === "More") {
    extraText.style.display = "block";
    button.textContent = "Less";
  } else {
    extraText.style.display = "none";
    button.textContent = "More";
  }
}
