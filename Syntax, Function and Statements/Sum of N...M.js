function sumNtoM(n, m) {
  const startNum = Number(n);
  const endNum = Number(m);
  let sum = 0;
  for (let i = startNum; i <= m; i++) {
    sum += i;
  }
  console.log(sum);
}

sumNtoM("-8", "20");
