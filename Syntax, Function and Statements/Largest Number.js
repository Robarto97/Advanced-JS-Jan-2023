function largest(a, b, c) {
  let max = c;

  if (a > b && a > c) {
    max = a;
  } else if (b > a && b > c) {
    max = b;
  }
  
  console.log(`The largest number is ${max}.`);
}

largest(-3, -5, -22.5);
