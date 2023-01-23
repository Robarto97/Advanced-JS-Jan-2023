function sumTable() {
  let rows = document.querySelectorAll("table tr");
  let total = 0;
  for (let i = 1; i < rows.length; i++) {
    const cols = rows[i].children;
    let cost = cols[cols.length - 1].textContent;
    total += Number(cost);
  }
  document.querySelector("#sum").textContent = total;
}
