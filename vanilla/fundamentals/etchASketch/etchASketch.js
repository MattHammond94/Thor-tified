const grid = document.querySelector('.grid');
const clearButton = document.querySelector('.clearBtn');
const errorMessage = document.querySelector('.errorMessage');
const inputField = document.querySelector('.input');
let rainbowMode = false;

clearButton.addEventListener("click", () => {
  clearGrid();
})

function makeGrid(scale) {
  grid.innerHTML = '';
  let pixelSize = 100 / scale;

  for (let i = 0; i < scale * scale; i++) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.width = `${pixelSize}%`;
    pixel.style.height = `${pixelSize}%`;
    grid.appendChild(pixel);

    pixel.addEventListener("mouseover", () => {
      if (rainbowMode) {
        pixel.style.backgroundColor = selectColour();
      } else {
        pixel.style.backgroundColor = 'black';
      }
    })
  }
}

function clearGrid() {
  let allPixels = document.querySelectorAll(".pixel");

  allPixels.forEach((pixel) => 
    { pixel.style.backgroundColor = 'lightsteelblue'}
  );
}

function activeRainbowMode() {
  return rainbowMode === false ? rainbowMode = true : rainbowMode = false
}

function selectColour() {
  return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
}

function randomNumber() {
  return Math.floor(Math.random() * 255);
}

function changeGridSize() {
  let newScale = inputField.value

  if (!validateScale(newScale)) {
    errorMessage.textContent = 'This input is invalid';
    return inputField.value = ''
  } else {
    errorMessage.textContent = '';
    inputField.value = ''
    makeGrid(newScale);
  }
}

function validateScale(scale) {
  return scale > 100 || scale < 16 || isNaN(scale) ? false : true;
}

makeGrid(50);