function add(num1) {
  let total = num1;

  function sum(num2) {
    total += num2;
    return sum;
  }
  sum.toString = () => total;
  return sum;
}

console.log(add(1));
