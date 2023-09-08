'use strict';

const $table = document.querySelector('table');
const $colorSelector = document.getElementById('colorSelector');

const socket = io('http://localhost:3003');

// This is an event listener for color selection
$colorSelector.addEventListener('change', (event) => {
  const selectedColor = event.target.value; 
  updateSelectedCellColor(selectedColor);
  sendColorUpdate(selectedColor); 
});

// I declared a function to send color to the server
function sendColorUpdate(color) {
  socket.emit('color-update', color);
}

// I declared a function to update the color of a cell
function updateSelectedCellColor(color) {
  const selectedCell = getSelectedCell(); 
  if (selectedCell) {
    selectedCell.style.backgroundColor = color;
  }
}

// I declared a function to get the currently selected cell and alsoimplemented this function to identify the selected cell.
function getSelectedCell() {
  return $table.querySelector('td.selected');
}

// I added an event listener to the table for cell selection
$table.addEventListener('click', (event) => {
  const cell = event.target;
  if (cell.tagName === 'TD') {
    $table.querySelectorAll('td').forEach((td) => {
      td.classList.remove('selected');
    });
    cell.classList.add('selected'); 
  }
});

socket.on('canvas-update', (updatedCanvas) => {
  renderTable(updatedCanvas);
});

// Initial rendering of the table
fetch('http://localhost:3003/canvas')
  .then((res) => res.json())
  .then(renderTable);

function renderTable(grid) {
  $table.innerHTML = '';

  for (const row of grid) {
    const rowElement = document.createElement('tr');
    for (const cellColor of row) {
      const cellElement = document.createElement('td');
      cellElement.style.backgroundColor = cellColor; 
      rowElement.appendChild(cellElement);
    }
    $table.appendChild(rowElement);
  }
  console.log(grid, $table);
}
