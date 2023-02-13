function solve() {
  const firstName = document.querySelector("#fname");
  const lastName = document.querySelector("#lname");
  const email = document.querySelector("#email");
  const birth = document.querySelector("#birth");
  const position = document.querySelector("#position");
  const salary = document.querySelector("#salary");
  const hireBtn = document.querySelector("#add-worker");
  const tbody = document.querySelector("#tbody");
  const sum = document.querySelector("#sum");

  hireBtn.addEventListener("click", handleHire);

  function handleHire(e) {
    e.preventDefault();
    if (
      firstName.value &&
      lastName.value &&
      email.value &&
      birth.value &&
      position.value &&
      salary.value
    ) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${firstName.value}</td>
        <td>${lastName.value}</td>
        <td>${email.value}</td>
        <td>${birth.value}</td>
        <td>${position.value}</td>
        <td>${salary.value}</td>
        <td><button class='fired'>Fired</button><button class='edit'>Edit</button></td>`;

      tbody.appendChild(tr);

      const currSalary = Number(sum.textContent);
      sum.textContent = (Number(salary.value) + currSalary).toFixed(2);
      const editBtn = tr.querySelector(".edit");
      const firedBtn = tr.querySelector(".fired");
      editBtn.addEventListener("click", handleEdit);
      firedBtn.addEventListener("click", handleFired);

      firstName.value = "";
      lastName.value = "";
      email.value = "";
      birth.value = "";
      position.value = "";
      salary.value = "";

      function handleEdit(e) {
        e.preventDefault();
        const currTarget = e.target.parentNode.parentNode;
        console.log("click");
        firstName.value =
          currTarget.querySelector("td:nth-of-type(1)").textContent;
        lastName.value =
          currTarget.querySelector("td:nth-of-type(2)").textContent;
        email.value = currTarget.querySelector("td:nth-of-type(3)").textContent;
        birth.value = currTarget.querySelector("td:nth-of-type(4)").textContent;
        position.value =
          currTarget.querySelector("td:nth-of-type(5)").textContent;
        salary.value =
          currTarget.querySelector("td:nth-of-type(6)").textContent;

        sum.textContent = (
          Number(sum.textContent) - Number(salary.value)
        ).toFixed(2);

        e.target.parentNode.parentNode.remove();
      }

      function handleFired(e) {
        const currTarget = e.target.parentNode.parentNode;
        sum.textContent = (
          Number(sum.textContent) -
          Number(currTarget.querySelector("td:nth-of-type(6)").textContent)
        ).toFixed(2);
        e.target.parentNode.parentNode.remove();
      }
    }
  }
}
solve();
