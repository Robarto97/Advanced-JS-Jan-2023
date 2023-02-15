window.addEventListener("load", solve);

function solve() {
  const makeInput = document.querySelector("#make");
  const modelInput = document.querySelector("#model");
  const yearInput = document.querySelector("#year");
  const fuelInput = document.querySelector("#fuel");
  const originalPriceInput = document.querySelector("#original-cost");
  const sellingPriceInput = document.querySelector("#selling-price");
  const publishBtn = document.querySelector("#publish");
  const tbody = document.querySelector("#table-body");
  const carsList = document.querySelector("#cars-list");
  const profit = document.querySelector("#profit");

  publishBtn.addEventListener("click", handlePublish);

  function handlePublish(e) {
    e.preventDefault();
    if (
      !makeInput.value ||
      !modelInput.value ||
      !yearInput.value ||
      !fuelInput.value ||
      !originalPriceInput.value ||
      !sellingPriceInput.value ||
      originalPriceInput.value >= sellingPriceInput.value
    ) {
      return;
    }
    const tr = document.createElement("tr");
    tr.className = "row";
    tr.innerHTML = `
    <td>${makeInput.value}</td>
    <td>${modelInput.value}</td>
    <td>${yearInput.value}</td>
    <td>${fuelInput.value}</td>
    <td>${originalPriceInput.value}</td>
    <td>${sellingPriceInput.value}</td>
    <td>
      <button class='action-btn edit'>Edit</button>
      <button class='action-btn sell'>Sell</button>
    </td>
    `;
    tbody.appendChild(tr);

    const editBtn = tr.querySelector(".edit");
    const sellBtn = tr.querySelector(".sell");
    editBtn.addEventListener("click", handleEdit);
    sellBtn.addEventListener("click", handleSell);

    makeInput.value = "";
    modelInput.value = "";
    yearInput.value = "";
    // fuelInput.value = "";
    originalPriceInput.value = "";
    sellingPriceInput.value = "";

    function handleEdit(e) {
      const currRow = e.target.parentNode.parentNode;

      makeInput.value = currRow.querySelector("td:nth-child(1)").textContent;
      modelInput.value = currRow.querySelector("td:nth-child(2)").textContent;
      yearInput.value = currRow.querySelector("td:nth-child(3)").textContent;
      fuelInput.value = currRow.querySelector("td:nth-child(4)").textContent;
      originalPriceInput.value =
        currRow.querySelector("td:nth-child(5)").textContent;
      sellingPriceInput.value =
        currRow.querySelector("td:nth-child(6)").textContent;

      currRow.remove();
    }

    function handleSell(e) {
      const currRow = e.target.parentNode.parentNode;

      const sellMake = currRow.querySelector("td:nth-child(1)").textContent;
      const sellModel = currRow.querySelector("td:nth-child(2)").textContent;
      const sellYear = currRow.querySelector("td:nth-child(3)").textContent;
      const sellOriginalPrice =
        currRow.querySelector("td:nth-child(5)").textContent;
      const sellSellingPrice =
        currRow.querySelector("td:nth-child(6)").textContent;
      const diff = sellSellingPrice - sellOriginalPrice;

      const li = document.createElement("li");
      li.className = "each-list";
      li.innerHTML = `
      <span>${sellMake} ${sellModel}</span>
      <span>${sellYear}</span>
      <span>${diff}</span>
      `;
      carsList.appendChild(li);
      currRow.remove();

      profit.textContent = (Number(profit.textContent) + diff).toFixed(2);
    }
  }
}
