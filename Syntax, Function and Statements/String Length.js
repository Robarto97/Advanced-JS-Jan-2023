function strlen(a, b, c) {
  const sum = a.length + b.length + c.length;
  const avg = Math.floor(sum / 3);
  console.log(sum);
  console.log(avg);
}

strlen("chocolate", "ice cream", "cake");
strlen("pasta", "5", "22.3");
