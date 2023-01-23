function equal(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i + 1 < arr.length) {
        if (arr[i][j] === arr[i + 1][j]) {
          count++;
        }
      }
      if (j + 1 < arr[i].length) {
        if (arr[i][j] === arr[i][j + 1]) {
          count++;
        }
      }
    }
  }
  console.log(count);
}

equal([
  [2, 2, 5, 7, 4],
  [4, 0, 5, 3, 4],
  [2, 5, 5, 4, 2],
]);
equal([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
