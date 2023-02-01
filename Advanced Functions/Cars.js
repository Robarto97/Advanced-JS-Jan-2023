function processCommands(input) {
  let objects = {};
  for (let line of input) {
    let [command, name, key, value] = line.split(" ");
    switch (command) {
      case "create":
        if (key === "inherit") {
          create(name, value);
        } else {
          create(name);
        }
        break;
      case "set":
        set(name, key, value);
        break;
      case "print":
        print(name);
        break;
    }
  }
  
  function create(name, parentName) {
    let obj = {};
    if (parentName) {
      let parent = objects[parentName];
      obj = Object.create(parent);
    }
    objects[name] = obj;
  }

  function set(name, key, value) {
    let obj = objects[name];
    obj[key] = value;
  }

  function print(name) {
    let obj = objects[name];
    let properties = [];
    for (let key in obj) {
      properties.push(`${key}:${obj[key]}`);
    }
    console.log(properties.join(","));
  }
}

processCommands([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
