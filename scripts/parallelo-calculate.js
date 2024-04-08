function calculateParallelogramArea() {
  const base = getInputValueById('parallelogram-base');
  const height = getInputValueById('parallelogram-height');
  // console.log(base, height);
  const area = base * height;
  setInnerTextById('parallelogram-area', area);
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
