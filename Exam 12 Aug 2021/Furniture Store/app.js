window.addEventListener("load", solve);

function solve() {
  const modelInput = document.querySelector("#model");
  const yearInput = document.querySelector("#year");
  const descriptionInput = document.querySelector("#description");
  const priceInput = document.querySelector("#price");
  const addBtn = document.querySelector("#add");
  const furnitureList = document.querySelector("#furniture-list");
  const totalPriceEl = document.querySelector(".total-price");

  addBtn.addEventListener("click", handleAdd);

  function handleAdd(e) {
    e.preventDefault();
    if (
      !modelInput.value ||
      yearInput.value < 0 ||
      !yearInput.value ||
      !descriptionInput.value ||
      priceInput.value < 0 ||
      !priceInput.value
    ) {
      return;
    }

    const mainTr = document.createElement("tr");
    mainTr.className = "info";
    mainTr.innerHTML = `
    <td>${modelInput.value}</td>
    <td>${Number(priceInput.value).toFixed(2)}</td>
    <td>
        <button class='moreBtn'>More Info</button>
        <button class='buyBtn'>Buy it</button>
    </td>
    `;

    const secondTr = document.createElement("tr");
    secondTr.className = "hide";
    secondTr.innerHTML = `
    <td>Year: ${yearInput.value}</td>
    <td colspan='3'>Description: ${descriptionInput.value}</td>
    `;

    furnitureList.appendChild(mainTr);
    furnitureList.appendChild(secondTr);

    const infoBtn = mainTr.querySelector(".moreBtn");
    const buyBtn = mainTr.querySelector(".buyBtn");
    infoBtn.addEventListener("click", handleMore);
    buyBtn.addEventListener("click", handleBuy);

    const price = Number(priceInput.value);

    modelInput.value = "";
    yearInput.value = "";
    descriptionInput.value = "";
    priceInput.value = "";

    function handleMore() {
      if (infoBtn.textContent == "More Info") {
        infoBtn.textContent = "Less Info";
        secondTr.style.display = "contents";
      } else {
        infoBtn.textContent = "More Info";
        secondTr.style.display = "none";
      }
    }

    function handleBuy() {
      totalPriceEl.textContent = (
        Number(totalPriceEl.textContent) + price
      ).toFixed(2);

      mainTr.remove();
      secondTr.remove();
    }
  }
}
