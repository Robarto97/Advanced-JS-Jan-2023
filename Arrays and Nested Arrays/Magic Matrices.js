function magicMatrices(arr) {
  let sumRows = 0;
  let sumCols = 0;

  for (let i = 0; i < arr.length; i++) {
    let currArr = arr[i].join("");
    for (let j = 0; j < currArr.length; j++) {
      sumRows += Number(currArr[j]);
      sumCols += Number(currArr[0]);
    }
  }
  if (sumRows === sumCols) {
    console.log(true);
  } else {
    console.log(false);
  }
}

magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
