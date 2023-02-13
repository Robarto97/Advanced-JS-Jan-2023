window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.querySelector("#first-name");
  const lastNameInput = document.querySelector("#last-name");
  const checkInDateInput = document.querySelector("#date-in");
  const checkOutDateInput = document.querySelector("#date-out");
  const guestsNumInput = document.querySelector("#people-count");
  const nextBtn = document.querySelector("#next-btn");
  const infoList = document.querySelector(".info-list");
  const confirmList = document.querySelector(".confirm-list");
  const verification = document.querySelector("#verification");

  nextBtn.addEventListener("click", handleNext);

  function handleNext(e) {
    e.preventDefault();
    if (
      firstNameInput.value !== "" &&
      lastNameInput.value !== "" &&
      checkInDateInput.value !== "" &&
      checkOutDateInput.value !== "" &&
      guestsNumInput.value !== "" &&
      checkInDateInput.value < checkOutDateInput.value
    ) {
      const li = document.createElement("li");
      li.className = "reservation-content";
      li.innerHTML = `<article>
        <h3>Name: ${firstNameInput.value} ${lastNameInput.value}</h3>
        <p>From date: ${checkInDateInput.value}</p>
        <p>To date: ${checkOutDateInput.value}</p>
        <p>For ${guestsNumInput.value} people</p>
        </article>
        <button class='edit-btn'>Edit</button>
        <button class='continue-btn'>Continue</button>`;
      infoList.appendChild(li);

      const editBtn = document.querySelector(".edit-btn");
      const continueBtn = document.querySelector(".continue-btn");

      const editFirstName = firstNameInput.value;
      const editLastName = lastNameInput.value;
      const editDateIn = checkInDateInput.value;
      const editDateOut = checkOutDateInput.value;
      const editGuestNum = guestsNumInput.value;

      firstNameInput.value = "";
      lastNameInput.value = "";
      checkInDateInput.value = "";
      checkOutDateInput.value = "";
      guestsNumInput.value = "";
      nextBtn.disabled = true;

      editBtn.addEventListener("click", handleEdit);
      continueBtn.addEventListener("click", handleContinue);

      function handleEdit() {
        firstNameInput.value = editFirstName;
        lastNameInput.value = editLastName;
        checkInDateInput.value = editDateIn;
        checkOutDateInput.value = editDateOut;
        guestsNumInput.value = editGuestNum;
        li.remove();
        nextBtn.disabled = false;
      }

      function handleContinue() {
        editBtn.removeEventListener("click", handleEdit);
        continueBtn.removeEventListener("click", handleContinue);

        const confirmBtn = document.querySelector(".edit-btn");
        confirmBtn.className = "confirm-btn";
        confirmBtn.textContent = "Confirm";
        const cancelBtn = document.querySelector(".continue-btn");
        cancelBtn.className = "cancel-btn";
        cancelBtn.textContent = "Cancel";

        confirmList.appendChild(li);

        confirmBtn.addEventListener("click", handleConfirm);
        cancelBtn.addEventListener("click", handleCancel);

        function handleConfirm() {
          li.remove();
          nextBtn.disabled = false;
          verification.textContent = "Confirmed.";
          verification.classList.add("reservation-confirmed");
        }

        function handleCancel() {
          li.remove();
          nextBtn.disabled = false;
          verification.textContent = "Cancelled.";
          verification.classList.add("reservation-cancelled");
        }
      }
    }
  }
}
