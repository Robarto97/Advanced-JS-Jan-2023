function addItem() {
  const list = document.querySelector("#items");
  const input = document.querySelector("#newItemText");

  if (input.value !== "" && input.value !== null) {
    const deleteBtn = document.createElement("a");
    deleteBtn.href = "#";
    deleteBtn.text = "[Delete]";
    const li = document.createElement("li");
    li.textContent = input.value;

    deleteBtn.addEventListener("click", () => li.remove());

    li.appendChild(deleteBtn);
    list.appendChild(li);
  }
  input.value = "";
}
