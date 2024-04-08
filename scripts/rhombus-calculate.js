function calculateRhombusArea() {
  const diagonals1 = getInputValueById('rhombus-diagonals-1');
  const diagonals2 = getInputValueById('rhombus-diagonals-2');
  // console.log(diagonals1, diagonals2);
  const area = 0.5 * diagonals1 * diagonals2;
  setInnerTextById('rhombus-area', area);
}

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}

function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
