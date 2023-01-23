function colorize() {
  let rows = document.querySelectorAll("table tr:nth-child(2n+0)");
  Array.from(rows).forEach((row) => (row.style.background = "teal"));
}
