function subtract() {
  const num1 = document.querySelector("#firstNumber").value;
  const num2 = document.querySelector("#secondNumber").value;
  const result = Number(num1) - Number(num2);
  document.querySelector("#result").textContent = result
}
