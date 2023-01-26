function attachEventsListeners() {
  const input = document.querySelector("#inputDistance");
  const output = document.querySelector("#outputDistance");
  const inputUnits = document.querySelector("#inputUnits");
  const outputUnits = document.querySelector("#outputUnits");
  const btn = document.querySelector("#convert");

  const conversionRatesFromMeter = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34,
    yrd: 0.9144,
    ft: 0.3048,
    in: 0.0254,
  };

  btn.addEventListener("click", convert);

  function convert() {
    const convertFrom = inputUnits.value;
    const convertTo = outputUnits.value;

    const valueInMeters = input.value * conversionRatesFromMeter[convertFrom];
    const convertedValue = valueInMeters / conversionRatesFromMeter[convertTo];
    output.value = convertedValue;
  }
}
