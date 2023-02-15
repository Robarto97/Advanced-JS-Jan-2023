window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.querySelector("#first-name");
  const lastNameInput = document.querySelector("#last-name");
  const ageInput = document.querySelector("#age");
  const genderInput = document.querySelector("#genderSelect");
  const dishDescInput = document.querySelector("#task");
  const submitBtn = document.querySelector("#form-btn");
  const progressList = document.querySelector("#in-progress");
  const finishedList = document.querySelector("#finished");
  const counterElement = document.querySelector("#progress-count");
  const clearBtn = document.querySelector("#clear-btn");

  submitBtn.addEventListener("click", handleSubmit);
  clearBtn.addEventListener("click", handleClear);

  function handleClear(e) {
    e.preventDefault();
    while (finishedList.firstChild) {
      finishedList.firstChild.remove();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !firstNameInput.value ||
      !lastNameInput.value ||
      !ageInput.value ||
      !dishDescInput.value
    ) {
      return;
    }

    const li = document.createElement("li");
    li.className = "each-line";
    li.innerHTML = `
    <article>
    <h4>${firstNameInput.value} ${lastNameInput.value}</h4>
    <p>${genderInput.value}, ${ageInput.value}</p>
    <p>Dish description: ${dishDescInput.value}</p>
    </article>
    <button class='edit-btn'>Edit</button>
    <button class='complete-btn'>Mark as complete</button>
    `;

    progressList.appendChild(li);

    const editBtn = li.querySelector(".edit-btn");
    const completeBtn = li.querySelector(".complete-btn");
    editBtn.addEventListener("click", handleEdit);
    completeBtn.addEventListener("click", handleComplete);

    firstNameInput.value = "";
    lastNameInput.value = "";
    ageInput.value = "";
    dishDescInput.value = "";

    counterElement.textContent = Number(counterElement.textContent) + 1;

    function handleEdit(e) {
      e.preventDefault();
      const currTargetParent = e.target.parentNode;
      const [editFirstName, editLastName] = currTargetParent
        .querySelector("h4")
        .textContent.split(" ");
      const [editGender, editAge] = currTargetParent
        .querySelector("p:first-of-type")
        .textContent.split(", ");
      const editDishDesc = currTargetParent
        .querySelector("p:last-of-type")
        .textContent.split(": ")[1];

      firstNameInput.value = editFirstName;
      lastNameInput.value = editLastName;
      ageInput.value = editAge;
      dishDescInput.value = editDishDesc;
      genderInput.value = editGender;

      currTargetParent.remove();
      counterElement.textContent = Number(counterElement.textContent) - 1;
    }

    function handleComplete(e) {
      e.preventDefault();
      editBtn.remove();
      completeBtn.remove();
      finishedList.appendChild(li);
      counterElement.textContent = Number(counterElement.textContent) - 1;
    }
  }
}
