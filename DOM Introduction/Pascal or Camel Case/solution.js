function solve() {
  const input = document.querySelector("#text").value;
  const currCase = document.querySelector("#naming-convention").value;
  const inputArr = input.toLowerCase().split(" ");

  let result = "";

  switch (currCase) {
    case "Camel Case":
      result += inputArr[0];
      for (let i = 1; i < inputArr.length; i++) {
        let word = inputArr[i];
        result += word[0].toUpperCase() + word.slice(1);
      }
      break;
    case "Pascal Case":
      for (let word of inputArr) {
        word = word[0].toUpperCase() + word.slice(1);
        result += word;
      }
      break;
    default:
      result = "Error!";
      break;
  }
  document.querySelector("#result").textContent = result;
}
