function attachEventsListeners() {
  const inputDays = document.querySelector("#days");
  const inputHours = document.querySelector("#hours");
  const inputMinutes = document.querySelector("#minutes");
  const inputSeconds = document.querySelector("#seconds");

  document.querySelector("#daysBtn").addEventListener("click", convert);
  document.querySelector("#hoursBtn").addEventListener("click", convert);
  document.querySelector("#minutesBtn").addEventListener("click", convert);
  document.querySelector("#secondsBtn").addEventListener("click", convert);

  function convert(e) {
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    const parent = e.target.parentElement;

    if (parent.textContent.includes("Days")) {
      days = Number(inputDays.value);
      hours = days * 24;
      minutes = hours * 60;
      seconds = minutes * 60;
    } else if (parent.textContent.includes("Hours")) {
      hours = Number(inputHours.value);
      days = hours / 24;
      minutes = hours * 60;
      seconds = minutes * 60;
    } else if (parent.textContent.includes("Minutes")) {
      minutes = Number(inputMinutes.value);
      hours = minutes / 60;
      days = hours / 24;
      seconds = minutes * 60;
    } else if (parent.textContent.includes("Seconds")) {
      seconds = Number(inputSeconds.value);
      minutes = seconds / 60;
      hours = minutes / 60;
      days = hours / 24;
    }

    inputDays.value = days;
    inputHours.value = hours;
    inputMinutes.value = minutes;
    inputSeconds.value = seconds;
  }
}
