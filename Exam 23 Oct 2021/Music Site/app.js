window.addEventListener("load", solve);

function solve() {
  const genreInput = document.querySelector("#genre");
  const nameInput = document.querySelector("#name");
  const authorInput = document.querySelector("#author");
  const dateInput = document.querySelector("#date");
  const addBtn = document.querySelector("#add-btn");
  const hitsDiv = document.querySelector(".all-hits-container");
  const savedDiv = document.querySelector(".saved-container");
  const likesP = document.querySelector(".likes p");
  let counter = 0;

  addBtn.addEventListener("click", handleAdd);

  function handleAdd(e) {
    e.preventDefault();
    if (
      !genreInput.value ||
      !nameInput.value ||
      !authorInput.value ||
      !dateInput.value
    ) {
      return;
    }

    const div = document.createElement("div");
    div.className = "hits-info";
    div.innerHTML = `
        <img src='./static/img/img.png'>
        <h2>Genre: ${genreInput.value}</h2>
        <h2>Name: ${nameInput.value}</h2>
        <h2>Author: ${authorInput.value}</h2>
        <h3>Date: ${dateInput.value}</h3>
        <button class='save-btn'>Save song</button>
        <button class='like-btn'>Like song</button>
        <button class='delete-btn'>Delete</button>
        `;

    hitsDiv.appendChild(div);
    const saveBtn = div.querySelector(".save-btn");
    const likeBtn = div.querySelector(".like-btn");
    const deleteBtn = div.querySelector(".delete-btn");
    saveBtn.addEventListener("click", handleSave);
    likeBtn.addEventListener("click", handleLike);
    deleteBtn.addEventListener("click", handleDelete);

    genreInput.value = "";
    nameInput.value = "";
    authorInput.value = "";
    dateInput.value = "";

    function handleLike() {
      likesP.textContent = `Total Likes: ${++counter}`;
      likeBtn.disabled = true;
    }

    function handleSave(e) {
      const parent = e.target.parentNode;

      likeBtn.remove();
      saveBtn.remove();
      savedDiv.appendChild(parent);
    }

    function handleDelete(e) {
      const parent = e.target.parentNode;

      parent.remove();
    }
  }
}
