function solve() {
  const input = document.querySelector("#input");
  const sentences = input.value.split(".").filter((e) => e.length > 0);

  for (let i = 0; i < sentences.length; i += 3) {
    let output = [];
    for (let j = 0; j < 3; j++) {
      if (sentences[i + j]) {
        output.push(sentences[i + j]);
      }
    }
    let res = output.join(".") + ".";
    document.querySelector("#output").innerHTML += `<p>${res}</p>`;
  }
}
