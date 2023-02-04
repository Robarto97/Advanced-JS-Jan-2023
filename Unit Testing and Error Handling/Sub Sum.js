function subSum(arr, start, end) {
  if (!Array.isArray(arr)) {
    return NaN;
  }
  if (start < 0) start = 0;
  if (end > arr.length - 1) end = arr.length - 1;

  return arr
    .slice(start, end + 1)
    .map(Number)
    .reduce((acc, num) => acc + num, 0);
}

console.log(subSum([], 1, 2));
