function extractText() {
  const items = document.querySelectorAll("#items li");
  const textarea = document.querySelector("#result");
  const itemArr = Array.from(items);
  const result = itemArr.map((li) => li.textContent).join("\n");
  textarea.value = result;
}
