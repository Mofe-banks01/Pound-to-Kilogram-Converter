// First we need to get the DOm elements of all input/options so taht we can implement them into our code
// DOM Elements

const userInput = document.getElementById("userinput");
const unit = document.getElementById("unitSelect");
const resultText = document.getElementById("result");
// Function TO Convert Weight
function convertWeight() {
  // Resultvalue
  let result = null;
  // Collecting Userinput
  const uservalueInput = userInput.value;
  // Checking for input , and selected unit.
  if (!uservalueInput) {
    alert(`Please Input A Value`);
    resultText.innerText = `You are yet to put in a value`;
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

  if (uservalueInput !== 0)
    resultText.innerText = `Result : ${result} ${unit.value}`;
}
