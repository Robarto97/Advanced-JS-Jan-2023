function solve() {
  const nameInput = document.querySelector("#recipientName");
  const titleInput = document.querySelector("#title");
  const messageInput = document.querySelector("#message");
  const addBtn = document.querySelector("#add");
  const resetBtn = document.querySelector("#reset");
  const list = document.querySelector("#list");
  const deletedList = document.querySelector(".delete-list");
  const sentList = document.querySelector(".sent-list");

  addBtn.addEventListener("click", addMail);
  resetBtn.addEventListener("click", onReset);

  function addMail(e) {
    e.preventDefault();
    const name = nameInput.value;
    const title = titleInput.value;
    const message = messageInput.value;

    if (name === "" || title === "" || message === "") {
      return;
    }

    const li = document.createElement("li");
    li.innerHTML = `<h4>Title: ${title}</h4>
    <h4>Recipient Name: ${name}</h4>
    <span>${message}</span>
    <div id="list-action">
        <button type="submit" id="send">Send</button>
        <button type="submit" id="delete">Delete</button>
    </div>`;

    list.appendChild(li);
    li.querySelector("#send").addEventListener("click", sendMail);
    li.querySelector("#delete").addEventListener("click", () => deleteMail(li));
    clearInfo();

    function deleteMail(source) {
      const deletedMailElement = document.createElement("li");
      deletedMailElement.innerHTML = `<span>To: ${name}</span>
        <span>Title: ${title}</span>`;

      deletedList.appendChild(deletedMailElement);
      source.remove();
    }
    function sendMail() {
      const sentMailElement = document.createElement("li");
      sentMailElement.innerHTML = `<span>To: ${name}</span>
      <span>Title: ${title}</span>
      <div class="btn">
          <button type="submit" class="delete">Delete</button>
      </div>`;

      sentMailElement
        .querySelector(".delete")
        .addEventListener("click", () => deleteMail(sentMailElement));

      sentList.appendChild(sentMailElement);
      li.remove();
    }
  }

  function onReset(e) {
    e.preventDefault();
    clearInfo();
  }
  function clearInfo() {
    nameInput.value = "";
    titleInput.value = "";
    messageInput.value = "";
  }
}
