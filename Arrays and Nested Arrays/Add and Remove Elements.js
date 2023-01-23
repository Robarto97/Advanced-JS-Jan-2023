function addRemoveEl(arr) {
  let counter = 1;
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const command = arr[i];
    if (command === "add") {
      newArray.push(counter++);
    } else if (command === "remove") {
      newArray.pop(counter++);
    }
  }
  if (!newArray.length) {
    console.log("Empty");
  } else {
    console.log(newArray.join("\n"));
  }
}

addRemoveEl(["remove"]);
