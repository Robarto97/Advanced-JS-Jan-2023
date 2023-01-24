function focused() {
  const inputs = Array.from(document.querySelectorAll("input"));

  for (const input of inputs) {
    input.addEventListener("focus", (e) => {
      e.target.parentElement.classList.add("focused");
    });
    input.addEventListener("blur", (e) => {
      e.target.parentElement.classList.remove("focused");
    });
  }
}
