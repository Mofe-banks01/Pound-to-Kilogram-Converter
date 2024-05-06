// First we need to get the DOm elements of all input/options so taht we can implement them into our code
// DOM Elements

const userInput = document.getElementById("userinput");
const unit = document.getElementById("unitSelect");
const resultText = document.getElementById("result");
const resultDisplay = document.querySelector("#result__display");
resultText.classList.add("hidden");
// Function TO Convert Weight
function convertWeight() {
  // Resultvalue
  let result;
  // Collecting Userinput
  const uservalueInput = userInput.value;
  // Checking for input , and selected unit.
  if (!uservalueInput) {
    alert(`Please Input A Value`);
    result = null;
    resultText.classList.add("hidden");
  } else if (unit.value === "kg") {
    result = uservalueInput * 0.453592;
  } else if (unit.value === "lb") {
    result = uservalueInput * 2.204623;
  } else if (unit.value === "mg") {
    result = uservalueInput * 1000000;
  } else if (unit.value === "dg") {
    result = uservalueInput * 100;
  } else if (unit.value === "cg") {
    result = uservalueInput * 100000;
  }
  console.log(uservalueInput);
  if(uservalueInput === 0) document.querySelector('.name').classList.add('hidden')
  if (uservalueInput !== 0) document.querySelector(".name").classList.remove("hidden");

  if (uservalueInput !== 0) resultText.classList.remove("hidden");
  resultText.innerText = `Result : ${result} ${unit.value}`;
}
