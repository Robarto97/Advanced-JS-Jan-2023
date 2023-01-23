function biggestEl(arr) {
  let max = Number.MIN_SAFE_INTEGER;

  for (const i of arr) {
    for (const j of i) {
      if (j > max) {
        max = j;
      }
    }
  }
  console.log(max);
}

biggestEl([
  [20, 50, 10],
  [8, 33, 145],
]);
