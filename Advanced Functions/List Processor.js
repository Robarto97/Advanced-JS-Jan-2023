function listProcessor(arr) {
  let result = [];

  for (const line of arr) {
    const [command, string] = line.split(" ");
    handleCommand(command, string);
  }

  function handleCommand(command, string) {
    switch (command) {
      case "add":
        result.push(string);
        break;
      case "remove":
        let index = result.indexOf(string);
        while (index !== -1) {
          result.splice(index, 1);
          index = result.indexOf(string);
        }
        break;
      case "print":
        console.log(result.join(","));
        break;
    }
  }
}

listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
listProcessor([
  "add pesho",
  "add george",
  "add peter",
  "remove peter",
  "print",
]);
