function oddPositions(arr) {
  return arr
    .filter((num, index) => index % 2 !== 0)
    .map((x) => x * 2)
    .reverse()
    .join(" ");
}

oddPositions([10, 15, 20, 25]);
