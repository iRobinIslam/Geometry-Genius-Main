/**
 * Objective: get base, height of a triangle calculate the area using the formula and then display the area
 * step-1: get base value fo the triangle
 * step-2: added an id based input field
 * step-3: get getElementById to access the input field
 * step-4: get value from the input field (value is string now)
 * step-5: convert to the value a number. use parseFloat()
 * */ 
function calculateTriangleArea() {
  // get triangle base value
  const triangleBasedInput = document.getElementById('triangle-base')
  const triangleBasedText = triangleBasedInput.value;
  const base = parseFloat(triangleBasedText)
  // console.log(base);
  // get triangle height value
  const triangleHeightInput = document.getElementById('triangle-height');
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);
  // console.log(height);
  // calculate triangle area
  const area = 0.5 * base * height;
  console.log('area of the triangle is', area);
  // display triangle area
  const triangleAreaSpan = document.getElementById('triangle-area')
  triangleAreaSpan.innerText = area;
}

