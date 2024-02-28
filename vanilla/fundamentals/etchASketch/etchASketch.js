const grid = document.querySelector('.grid');
const clearButton = document.querySelector('.clearBtn');

clearButton.addEventListener("click", () => {
  clearGrid();
})

function makeGrid(scale) {
  let pixelSize = 100 / scale;

  for (let i = 0; i < scale * scale; i++) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.width = `${pixelSize}%`;
    pixel.style.height = `${pixelSize}%`;
    grid.appendChild(pixel);

    pixel.addEventListener("mouseover", (event) => {
      pixel.style.backgroundColor = 'black';
    })
  }
}

function clearGrid() {
  console.log("Clear button clicked");

  let allPixels = document.querySelectorAll(".pixel");
  
  allPixels.forEach((pixel) => 
    { pixel.style.backgroundColor = 'lightsteelblue'}
  );
}

makeGrid(50)