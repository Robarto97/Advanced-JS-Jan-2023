function pieceOfPie(pies, start, end) {
  const firstIndex = pies.indexOf(start);
  const lastIndex = pies.indexOf(end);
  let result = pies.slice(firstIndex, lastIndex + 1);
  return result;
}

pieceOfPie(
  [
    "Apple Crisp",
    "Mississippi Mud Pie",
    "Pot Pie",
    "Steak and Cheese Pie",
    "Butter Chicken Pie",
    "Smoked Fish Pie",
  ],
  "Pot Pie",
  "Smoked Fish Pie"
);
