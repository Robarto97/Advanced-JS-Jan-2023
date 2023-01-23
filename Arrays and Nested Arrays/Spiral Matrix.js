function spiralMatrix(rows, cols) {
  let num = 1;
  let finalArr = [];
  for (let i = 0; i < rows; i++) {
    let currArr = [];
    currArr.length = cols;
    finalArr.push(currArr);
  }
  let startRowIndex = 0;
  let startColIndex = 0;

  while (startRowIndex < rows && startColIndex < cols) {
    for (let i = startColIndex; i < cols; ++i) {
      finalArr[startRowIndex][i] = num++;
    }
    startRowIndex++;
    for (let i = startRowIndex; i < rows; ++i) {
      finalArr[i][cols - 1] = num++;
    }
    cols--;

    if (startRowIndex < rows) {
      for (let i = cols - 1; i >= startColIndex; --i) {
        finalArr[rows - 1][i] = num++;
      }
      rows--;
    }
    if (startColIndex < cols) {
      for (let i = rows - 1; i >= startRowIndex; --i) {
        finalArr[i][startColIndex] = num++;
      }
      startColIndex++;
    }
  }
  finalArr.forEach((row) => console.log(row.join(" ")));
}
// spiralMatrix(5, 5);
spiralMatrix(3, 3);
