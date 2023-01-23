function solve() {
  const firstOptElement = document.createElement("option");
  const secondOptElement = document.createElement("option");
  firstOptElement.value = "binary";
  secondOptElement.value = "hexadecimal";
  firstOptElement.innerHTML = "Binary";
  secondOptElement.innerHTML = "Hexadecimal";

  const menuToElement = document.querySelector("#selectMenuTo");
  menuToElement.appendChild(firstOptElement);
  menuToElement.appendChild(secondOptElement);
  const button = document.querySelector("button");

  button.addEventListener("click", () => {
    const numberInput = document.querySelector("#input");
    const outputResult = document.querySelector("#result");
    if (menuToElement.value === "binary") {
      outputResult.value = Number(numberInput.value).toString(2);
    } else if (menuToElement.value === "hexadecimal") {
      outputResult.value = Number(numberInput.value).toString(16).toUpperCase();
    }
  });
}
