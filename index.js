/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthEl = document.querySelector(".length-el");
const volumeEl = document.querySelector(".volume-el");
const massEl = document.querySelector(".mass-el");
const convertBtn = document.querySelector("#convert-btn");
let inputEl = document.querySelector("#number-to-convert");

convertBtn.addEventListener("click", () => {
  let inputData = Number(inputEl.value);
  lengthEl.textContent = `${inputData} meters =  ${
    inputData * 3.281
  } feet | ${inputData} feet = ${inputData * 0.3048} meters`;

  volumeEl.textContent = `${inputData} liters =  ${
    inputData * 0.264
  } gallon | ${inputData} gallons = ${inputData * 3.785411784}  liters`;

  massEl.textContent = `${inputData} kilos =  ${
    inputData * 2.204
  } pounds | ${inputData} pounds = ${inputData * 0.45359237}  kilos`;
});
