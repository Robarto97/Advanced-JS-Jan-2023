function calc() {
  const num1 = Number(document.querySelector("#num1").value);
  const num2 = Number(document.querySelector("#num2").value);
  let sum = document.querySelector("#sum");
  sum.value = num1 + num2;
}
