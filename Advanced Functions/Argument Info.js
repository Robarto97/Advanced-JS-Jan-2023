function argumentInfo() {
  const arg = Array.from(arguments);
  const count = new Map();
  arg.forEach((el) => {
    const type = typeof el;
    console.log(`${type}: ${el}`);
    if (!count.has(type)) {
      count.set(type, 0);
    }
    count.set(type, count.get(type) + 1);
  });

  Array.from(count.entries())
    .sort((a, b) => b[1] - a[1])
    .forEach((el) => {
      console.log(`${el[0]} = ${el[1]}`);
    });
}

argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});
