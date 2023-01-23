function listNames(arr) {
  arr
    .sort((a, b) => a.localeCompare(b))
    .forEach((el, index) => {
      console.log(`${index + 1}.${el}`);
    });
}

listNames(["John", "Bob", "Christina", "Ema"]);
