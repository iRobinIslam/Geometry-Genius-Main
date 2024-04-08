// function calculateParallelogramArea() {
//   // get the base value
//   const baseInput = document.getElementById('parallelogram-base');
//   const baseText = baseInput.value;
//   const base = parseFloat(baseText);
//   // console.log(base);

//   // get the height value
//   const heightInput = document.getElementById('parallelogram-height');
//   const heightText = heightInput.value;
//   const height = parseFloat(heightText);
//   // console.log(height);

//   // calculate area
//   const area = base * height;
//   // console.log('area calculate is', area);
//   // display area
//   const parallelogramAreaSpan = document.getElementById('parallelogram-area');
//   parallelogramAreaSpan.innerText = area;
// }

function calculateParallelogramArea() {
  const base = getInputValueById('parallelogram-base');
  console.log(base);
  const height = getInputValueById('parallelogram-height');
  console.log(height);

  const area = base * height;
  setInnerTextById('parallelogram-area', area);
}

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);
  // console.log(inputValue);
  return inputValue;
} 

function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}