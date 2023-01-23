function towns(arr) {
  const towns = [];

  for (let i = 1; i < arr.length; i++) {
    const tokens = arr[i].split(/\s*\|\s*/g);
    const town = tokens[1];
    const lat = Number(tokens[2]).toFixed(2);
    const lon = Number(tokens[3]).toFixed(2);
    const currObj = {
      Town: town,
      Latitude: Number(lat),
      Longitude: Number(lon),
    };
    towns.push(currObj);
  }
  console.log(JSON.stringify(towns));
}

towns([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
