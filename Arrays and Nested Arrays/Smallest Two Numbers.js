function smallestTwoNumbers(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr.splice(0, 2).join(" "));
}

smallestTwoNumbers([30, 15, 50, 5]);
