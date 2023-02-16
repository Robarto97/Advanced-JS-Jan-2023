window.addEventListener("load", solve);

function solve() {
  const typeInput = document.querySelector("#type-product");
  const descInput = document.querySelector("#description");
  const clientNameInput = document.querySelector("#client-name");
  const clientPhoneInput = document.querySelector("#client-phone");
  const submitBtn = document.querySelector("button[type=submit]");
  const receivedOrders = document.querySelector("#received-orders");
  const completedOrders = document.querySelector("#completed-orders");
  const clearBtn = document.querySelector(".clear-btn");

  submitBtn.addEventListener("click", handleSubmit);
  clearBtn.addEventListener("click", handleClear);

  function handleClear() {
    const allDivs = Array.from(completedOrders.querySelectorAll(".container"));

    if (allDivs.length > 0) {
      allDivs.forEach((div) => div.remove());
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!descInput || !clientNameInput.value || !clientPhoneInput.value) {
      return;
    }

    const div = document.createElement("div");
    div.className = "container";
    div.innerHTML = `
        <h2>Product type for repair: ${typeInput.value}</h2>
        <h3>Client information: ${clientNameInput.value}, ${clientPhoneInput.value}</h3>
        <h4>Description of the problem: ${descInput.value}</h4>
        <button class='start-btn'>Start repair</button>
        <button class='finish-btn' disabled>Finish repair</button>
        `;
    receivedOrders.appendChild(div);

    const startBtn = div.querySelector(".start-btn");
    const finishBtn = div.querySelector(".finish-btn");
    startBtn.addEventListener("click", handleStart);
    finishBtn.addEventListener("click", handleFinish);

    descInput.value = "";
    clientNameInput.value = "";
    clientPhoneInput.value = "";

    function handleStart() {
      startBtn.disabled = true;
      finishBtn.disabled = false;
    }

    function handleFinish(e) {
      const parent = e.target.parentNode;

      startBtn.remove();
      finishBtn.remove();
      completedOrders.appendChild(parent);
    }
  }
}
