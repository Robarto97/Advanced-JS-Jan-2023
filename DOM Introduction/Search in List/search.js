function search() {
  const input = document.querySelector("#searchText");
  const towns = document.querySelectorAll("#towns li");
  let counter = 0;

  for (const town of towns) {
    if (input.value !== "" && input.value !== null) {
      if (town.textContent.toLowerCase().includes(input.value.toLowerCase())) {
        town.style.fontWeight = "bold";
        town.style.textDecoration = "underline";
        counter++;
      } else {
        town.style.fontWeight = "normal";
        town.style.textDecoration = "none";
      }
    }
  }
  document.querySelector("#result").textContent = `${counter} matches found`;
}
