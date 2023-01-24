function deleteByEmail() {
  const input = document.querySelector("input").value;
  const secondColumn = document.querySelectorAll(
    "#customers tbody tr td:nth-child(2)"
  );
  if (input !== "" && input !== null) {
    for (const td of secondColumn) {
      if (td.textContent === input) {
        let row = td.parentNode;
        row.parentNode.removeChild(row);
        document.querySelector("#result").textContent = "Deleted";
        return;
      }
    }
    document.querySelector("#result").textContent = "Not found.";
  }
}
