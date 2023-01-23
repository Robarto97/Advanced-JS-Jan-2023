function sameNumbers(number) {
  let numberToString = number.toString();
  let sum = 0;
  let isSame = true;
  let firstLetter = numberToString[0];
  for (let i = 0; i < numberToString.length; i++) {
    if (firstLetter !== numberToString[i]) {
      isSame = false;
    }
    sum += Number(numberToString[i]);
  }
  console.log(isSame);
  console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);
