const container = document.querySelector('.container');

function makeGrid(size) {
  for (let i = 0; i === size; i++) {
      const pixel = document.createElement('div');
      pixel.squareDiv.classList.add("pixel");
      container.appendChild(pixel);
  }
}

makeGrid(16)