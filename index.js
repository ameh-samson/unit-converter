const lengthEl = document.querySelector(".length-el");
const volumeEl = document.querySelector(".volume-el");
const massEl = document.querySelector(".mass-el");
const convertBtn = document.querySelector("#convert-btn");
let inputEl = document.querySelector("#number-to-convert");

convertBtn.addEventListener("click", () => {
  let inputData = Number(inputEl.value);
  if (isNaN(inputData)) {
    alert("Enter a valid number");
    return;
  }
  convert(inputData);
});

function convert(inputData) {
  const convertMetersToFeet = (inputData * 3.281).toFixed(2);
  const convertFeetToMeters = (inputData * 0.3048).toFixed(2);

  const convertLitersTGallon = (inputData * 0.264).toFixed(2);
  const convertGallonToLiters = (inputData * 3.785411784).toFixed(2);

  const convertKilosToPounds = (inputData * 2.204).toFixed(2);
  const convertPoundsToKilos = (inputData * 0.45359237).toFixed(2);

  lengthEl.textContent = `${inputData} meters = ${convertMetersToFeet} feet || ${inputData} feet = ${convertFeetToMeters} meters`;
  volumeEl.textContent = `${inputData} liters = ${convertLitersTGallon} gallon || ${inputData} gallon = ${convertGallonToLiters} liters`;
  massEl.textContent = `${inputData} kilos = ${convertKilosToPounds} pounds || ${inputData} pound = ${convertPoundsToKilos} kilos`;

  return inputData.toFixed(2);
}
