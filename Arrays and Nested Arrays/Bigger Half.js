function biggerHalf(arr) {
  arr.sort((a, b) => a - b);
  let start = Math.floor(arr.length / 2);
  let newArr = arr.splice(start);
  return newArr;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
