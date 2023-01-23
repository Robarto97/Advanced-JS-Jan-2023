function janNotation(arr) {
  const nums = [];
  const operations = {
    "+": (a, b) => b + a,
    "-": (a, b) => b - a,
    "*": (a, b) => b * a,
    "/": (a, b) => b / a,
  };

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (typeof element === "number") {
      nums.push(element);
    } else {
      if (nums.length < 2) {
        return "Error: not enough operands!";
      }
      nums.push(operations[element](nums.pop(), nums.pop()));
    }
  }
  if (nums.length !== 1) {
    return "Error: too many operands!";
  }
  return nums[0];
}

console.log(janNotation([5, 3, 4, "*", "-"]));
