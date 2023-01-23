function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  const tableRows = Array.from(
    document.querySelectorAll(".container tbody tr")
  );
  const input = document.querySelector("#searchField");

  function onClick() {
    tableRows.map((e) => {
      e.classList.remove("select");
      if (e.innerHTML.includes(input.value)) {
        e.classList.add("select");
      }
    });
    input.value = "";
  }
}
