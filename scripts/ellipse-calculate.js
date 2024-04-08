function calculateEllipseArea() {
  const majorRadius = getInputValueById('ellipse-major-radius');
  const minorRadius = getInputValueById('ellipse-minor-radius');
  // console.log(majorRadius, minorRadius);
  const area = 3.14 * majorRadius * minorRadius;
  setInnerTextById('ellipse-area', area);
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
