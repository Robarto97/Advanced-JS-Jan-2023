function area() {
  return Math.abs(this.x * this.y);
}
function vol() {
  return Math.abs(this.x * this.y * this.z);
}

function areaVol(areaFunc, volFunc, input) {
  const shapes = JSON.parse(input);
  return shapes.map(shape => {
    const area = areaFunc.call(shape);
    const volume = volFunc.call(shape);
    return { area, volume };
  });
}


areaVol(
  area,
  vol,
  `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
);
