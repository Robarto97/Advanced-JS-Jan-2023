function townPopulation(arr) {
  const result = {};
  for (const line of arr) {
    let [name, population] = line.split(" <-> ");
    if (name in result) {
      result[name] += Number(population);
    } else {
      result[name] = Number(population);
    }
  }
  for (let name in result) {
    console.log(`${name} : ${result[name]}`);
  }
}

townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
