function addItem() {
  const list = document.querySelector("#items");
  const input = document.querySelector("#newItemText");

  if (input.value !== "" && input.value !== null) {
    const li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
  }
  input.value = "";
}
