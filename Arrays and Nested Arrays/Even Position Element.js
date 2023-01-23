function evenPos(arr) {
  let line = "";
  for (let i = 0; i < arr.length; i += 2) {
    line += arr[i] + " ";
  }
  console.log(line);
}

evenPos(["20", "30", "40", "50", "60"]);
