function increasingArray(arr) {
  let biggestNum = arr.shift();
  const newArr = [biggestNum];

  for (const number of arr) {
    if (number >= biggestNum) {
      biggestNum = number;
      newArr.push(biggestNum);
    }
  }
  return newArr;
}

increasingArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
