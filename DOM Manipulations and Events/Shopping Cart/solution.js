function solve() {
  const buttons = Array.from(document.querySelectorAll(".add-product"));
  const checkoutBtn = document.querySelector(".checkout");
  const textarea = document.querySelector("textarea");
  let sum = 0;
  let products = [];

  buttons.forEach((button) => {
    button.addEventListener("click", addItem);
  });

  checkoutBtn.addEventListener("click", checkout);

  function checkout() {
    textarea.value += `You bought ${products.join(", ")} for ${sum.toFixed(
      2
    )}.`;
    checkoutBtn.disabled = true;
    checkoutBtn.removeEventListener("click", checkout);
    buttons.forEach((button) => {
      button.disabled = true;
      button.removeEventListener("click", addItem);
    });
  }

  function addItem(e) {
    const currProduct = e.target.parentElement.parentElement;
    const title = currProduct.querySelector(".product-title").textContent;
    const price = Number(
      currProduct.querySelector(".product-line-price").textContent
    );

    sum += price;
    if (!products.includes(title)) {
      products.push(title);
    }
    textarea.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;
  }
}
