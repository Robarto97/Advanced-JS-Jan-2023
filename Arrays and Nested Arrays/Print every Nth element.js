function arrNthEl(arr, steps) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += steps) {
    newArr.push(arr[i]);
  }
  return newArr;
}

arrNthEl(["5", "20", "31", "4", "20"], 2);
arrNthEl(["dsa", "asd", "test", "tset"], 2);
