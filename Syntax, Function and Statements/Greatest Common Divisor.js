function divisor(num1, num2) {
  let min = Math.min(num1, num2);
  let currDivisor = 1;
  for (let i = 2; i <= min; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      currDivisor = i;
    }
  }
  console.log(currDivisor);
}
divisor(15, 5);
divisor(2154, 458);
