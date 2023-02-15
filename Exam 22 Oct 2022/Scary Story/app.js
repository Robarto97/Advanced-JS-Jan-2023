window.addEventListener("load", solve);

function solve() {
  const firstName = document.querySelector("#first-name");
  const lastName = document.querySelector("#last-name");
  const age = document.querySelector("#age");
  const storyTitle = document.querySelector("#story-title");
  const genre = document.querySelector("#genre");
  const story = document.querySelector("#story");
  const publishBtn = document.querySelector("#form-btn");
  const previewList = document.querySelector("#preview-list");
  const mainDiv = document.querySelector("#main");

  publishBtn.addEventListener("click", handlePublish);

  function handlePublish(e) {
    if (
      !firstName.value ||
      !lastName.value ||
      !age.value ||
      !storyTitle.value ||
      !story.value
    ) {
      return;
    }

    const li = document.createElement("li");
    li.className = "story-info";
    li.innerHTML = `
    <article>
    <h4>Name: ${firstName.value} ${lastName.value}</h4>
    <p>Age: ${age.value}</p>
    <p>Title: ${storyTitle.value}</p>
    <p>Genre: ${genre.value}</p>
    <p>${story.value}</p>
    </article>
    <button class='save-btn'>Save Story</button>
    <button class='edit-btn'>Edit Story</button>
    <button class='delete-btn'>Delete Story</button>`;

    previewList.appendChild(li);

    const saveBtn = li.querySelector(".save-btn");
    const editBtn = li.querySelector(".edit-btn");
    const deleteBtn = li.querySelector(".delete-btn");

    saveBtn.addEventListener("click", handleSave);
    editBtn.addEventListener("click", handleEdit);
    deleteBtn.addEventListener("click", handleDelete);

    const editFirstName = firstName.value;
    const editLastName = lastName.value;
    const editAge = age.value;
    const editStoryTitle = storyTitle.value;
    const editStory = story.value;

    publishBtn.disabled = true;
    firstName.value = "";
    lastName.value = "";
    age.value = "";
    storyTitle.value = "";
    story.value = "";

    function handleEdit() {
      firstName.value = editFirstName;
      lastName.value = editLastName;
      age.value = editAge;
      storyTitle.value = editStoryTitle;
      story.value = editStory;

      li.remove();
      publishBtn.disabled = false;
    }

    function handleSave() {
      while (mainDiv.firstChild) mainDiv.firstChild.remove();
      const h1 = document.createElement("h1");
      h1.textContent = "Your scary story is saved!";
      mainDiv.appendChild(h1);
    }

    function handleDelete() {
      li.remove();
      publishBtn.disabled = false;
    }
  }
}
