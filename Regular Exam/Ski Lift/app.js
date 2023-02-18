window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.querySelector("#first-name");
  const lastNameInput = document.querySelector("#last-name");
  const peopleCountInput = document.querySelector("#people-count");
  const fromDateInput = document.querySelector("#from-date");
  const daysCountInput = document.querySelector("#days-count");
  const nextBtn = document.querySelector("#next-btn");
  const ticketInfoList = document.querySelector(".ticket-info-list");
  const confirmTicketList = document.querySelector(".confirm-ticket");
  const mainDiv = document.querySelector("#main");
  const body = document.querySelector("#body");

  nextBtn.addEventListener("click", handleNext);

  function handleNext(e) {
    e.preventDefault();
    if (
      !firstNameInput.value ||
      !lastNameInput.value ||
      !peopleCountInput.value ||
      !fromDateInput.value ||
      !daysCountInput.value
    ) {
      return;
    }

    const li = document.createElement("li");
    li.className = "ticket";
    li.innerHTML = `
    <article>
        <h3>Name: ${firstNameInput.value} ${lastNameInput.value}</h3>
        <p>From date: ${fromDateInput.value}</p>
        <p>For ${daysCountInput.value} days</p>
        <p>For ${peopleCountInput.value} people</p>
    </article>
    <button class='edit-btn'>Edit</button>
    <button class='continue-btn'>Continue</button>
    `;
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const peopleCount = peopleCountInput.value;
    const fromDate = fromDateInput.value;
    const daysCount = daysCountInput.value;

    ticketInfoList.appendChild(li);

    const editBtn = li.querySelector(".edit-btn");
    const continueBtn = li.querySelector(".continue-btn");
    editBtn.addEventListener("click", handleEdit);
    continueBtn.addEventListener("click", handleContinue);

    firstNameInput.value = "";
    lastNameInput.value = "";
    peopleCountInput.value = "";
    fromDateInput.value = "";
    daysCountInput.value = "";

    nextBtn.disabled = true;

    function handleEdit() {
      li.remove();

      firstNameInput.value = firstName;
      lastNameInput.value = lastName;
      peopleCountInput.value = peopleCount;
      fromDateInput.value = fromDate;
      daysCountInput.value = daysCount;

      nextBtn.disabled = false;
    }

    function handleContinue() {
      editBtn.remove();
      continueBtn.remove();

      li.innerHTML += `
        <button class='confirm-btn'>Confirm</button>
        <button class='cancel-btn'>Cancel</button>
        `;

      confirmTicketList.appendChild(li);

      li.querySelector(".confirm-btn").addEventListener("click", handleConfirm);
      li.querySelector(".cancel-btn").addEventListener("click", handleCancel);

      function handleCancel() {
        li.remove();
        nextBtn.disabled = false;
      }

      function handleConfirm() {
        mainDiv.remove();

        const h1 = document.createElement("h1");
        h1.textContent = "Thank you, have a nice day!";
        h1.id = "thank-you";

        const backBtn = document.createElement("button");
        backBtn.textContent = "Back";
        backBtn.id = "back-btn";
        backBtn.addEventListener("click", () => location.reload());

        body.appendChild(h1);
        body.appendChild(backBtn);
      }
    }
  }
}
