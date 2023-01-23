function aggregateEl(array) {
  let sum = 0;
  let sumInv = 0;
  let string = "";
  for (const num of array) {
    sum += num;
    sumInv += 1 / num;
    string += num;
  }
  console.log(sum);
  console.log(sumInv);
  console.log(string);
}

aggregateEl([1, 2, 3]);
aggregateEl([2, 4, 8, 16]);
