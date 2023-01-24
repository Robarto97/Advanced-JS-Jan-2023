function attachGradientEvents() {
  const gradient = document.querySelector("#gradient");
  gradient.addEventListener("mousemove", onClick);

  function onClick(e) {
    const x = e.offsetX;
    const percent = Math.floor(x / 3);
    document.querySelector("#result").textContent = percent + "%";
  }
}
