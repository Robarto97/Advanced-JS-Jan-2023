function jsonToHtml(jsonData) {
  const result = [];
  const data = JSON.parse(jsonData);
  result.push("<table>");

  const props = Object.keys(data[0]);
  result.push(`<tr>${props.map((p) => `<th>${p}</th>`).join("")}</tr>`);

  for (let entry of data) {
    result.push(
      `<tr>${props.map((p) => `<td>${entry[p]}</td>`).join("")}</tr>`
    );
  }

  result.push("</table>");
  console.log(result.join("\n"));
}
jsonToHtml(`[{"Name":"Pesho",
"Score":4,
"Grade":8},
{"Name":"Gosho",
"Score":5,
"Grade":8},
{"Name":"Angel",
"Score":5.50,
"Grade":10}]`);
