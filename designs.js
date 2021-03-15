// Select color input
// Select size input

const sizePicker = document.querySelector('.size-picker');
const pixelCanvas = document.querySelector('.pixel-canvas');

function makeGrid() {
  let gridHeight = document.querySelector('.height').value;
  let gridWidth = document.querySelector('.width').value;
  // Removes current grid (otherwise the grid will be attached to the previous one)
  while (pixelCanvas.firstChild) {
    pixelCanvas.removeChild(pixelCanvas.firstChild);
    } 
  // Creates rows and cells
  for (let i = 1; i <= gridHeight; i++) {
    let gridRow = document.createElement('tr');
    pixelCanvas.appendChild(gridRow);
    for (let j = 1; j <= gridWidth; j++) {
      let gridCell = document.createElement('td');
      gridRow.appendChild(gridCell);
      // Listener for every cell to see if clicked. If it is clicked it's background is changed with the color inputed
      gridCell.addEventListener('mousedown', function() {
        var color = document.querySelector('#colorPicker').value;
        this.style.backgroundColor = color;
      })
     }
  }
}

sizePicker.addEventListener('submit', function(e) {
  e.preventDefault(); //no reload and remove grid
  makeGrid(); //runs the code ^^
});

