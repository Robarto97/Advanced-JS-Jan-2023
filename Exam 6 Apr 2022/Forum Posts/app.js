window.addEventListener("load", solve);

function solve() {
  const titleInput = document.querySelector("#post-title");
  const categoryInput = document.querySelector("#post-category");
  const contentInput = document.querySelector("#post-content");
  const publishBtn = document.querySelector("#publish-btn");
  const clearBtn = document.querySelector("#clear-btn");
  const reviewList = document.querySelector("#review-list");
  const publishedList = document.querySelector("#published-list");

  publishBtn.addEventListener("click", handlePublish);
  clearBtn.addEventListener("click", handleClear);

  function handleClear() {
    while (publishedList.firstChild) {
      publishedList.firstChild.remove();
    }
  }

  function handlePublish(e) {
    e.preventDefault();

    if (!titleInput.value || !categoryInput.value || !contentInput.value) {
      return;
    }
    const li = document.createElement("li");
    li.className = "rpost";
    li.innerHTML = `
    <article>
      <h4>${titleInput.value}</h4>
      <p>Category: ${categoryInput.value}</p>
      <p>Content: ${contentInput.value}</p>
    </article>
    <button class='action-btn edit'>Edit</button>
    <button class='action-btn approve'>Approve</button>
    `;
    reviewList.appendChild(li);

    const editBtn = li.querySelector(".edit");
    const approveBtn = li.querySelector(".approve");
    editBtn.addEventListener("click", handleEdit);
    approveBtn.addEventListener("click", handleApprove);

    titleInput.value = "";
    categoryInput.value = "";
    contentInput.value = "";

    function handleEdit(e) {
      const currLi = e.target.parentNode;

      titleInput.value = currLi.querySelector("h4").textContent;
      categoryInput.value = currLi
        .querySelector("p:first-of-type")
        .textContent.split(": ")[1];
      contentInput.value = currLi
        .querySelector("p:last-of-type")
        .textContent.split(": ")[1];

      currLi.remove();
    }

    function handleApprove(e) {
      const currLi = e.target.parentNode;

      editBtn.remove();
      approveBtn.remove();
      publishedList.appendChild(currLi);
    }
  }
}
