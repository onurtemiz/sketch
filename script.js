let gridSize = 16;

const HEIGHT = 400;
const WIDTH = 400;

let erase = 0;

function createGrid() {
  const container = document.getElementById("container");
  container.style.gridTemplate = `repeat(${Math.floor(
    HEIGHT / gridSize
  )}, ${gridSize}px) / repeat(${Math.floor(WIDTH / gridSize)}, ${gridSize}px)`;
  for (let i = 1; i < Math.floor(HEIGHT / gridSize) + 1; i++) {
    for (let j = 1; j < Math.floor(WIDTH / gridSize) + 1; j++) {
      const grid = document.createElement("div");
      grid.className = "grid";
      grid.id = `grid-${i}-${j}`;
      grid.style.gridArea = `${i}/${j}/span 1/span 1`;
      grid.style.width = `${gridSize}px`;
      grid.style.height = `${gridSize}px`;
      grid.style.backgroundColor = "white";
      grid.style.border = "1px solid black";
      container.appendChild(grid);
    }
  }

  function changeBackground() {
    if (erase == 0) {
      this.style.backgroundColor = currentColor;
    } else {
      this.style.backgroundColor = "white";
    }
  }

  const grid = document.querySelectorAll(".grid");
  grid.forEach(grid => grid.addEventListener("mouseover", changeBackground));

  const clearButton = document.querySelector("#clear");
  clearButton.addEventListener("click", clearBoard);

  function clearBoard() {
    grid.forEach(grid => (grid.style.backgroundColor = "white"));
  }
}

let currentColor;
randomColor();

function randomColor() {
  currentColor = `rgb(${randNumber(1, 255)},${randNumber(1, 255)},${randNumber(
    1,
    255
  )})`;
}

const colorButton = document.querySelector("#color");
colorButton.addEventListener("click", randomColor);

function deleteGrid() {
  const body = document.querySelector("body");
  const container = document.getElementById("container");
  body.removeChild(container);
  const newContainer = document.createElement("div");
  newContainer.id = "container";
  body.appendChild(newContainer);
}

createGrid();

const eraseButton = document.querySelector("#erase");
eraseButton.addEventListener("click", eraseMod);

function eraseMod() {
  if (erase) {
    erase = 0;
  } else {
    erase = 1;
  }
}

const sizeButton = document.querySelector("#size");
sizeButton.addEventListener("click", changeSizePropmt);

function changeSizePropmt() {
  let sizeInput = window.prompt("1-400 Arası Sayı Girin", 10);
  while (sizeInput != null || sizeInput != "") {
    if (!isNaN(sizeInput)) {
      break;
    } else {
      sizeInput = window.prompt("Lütfen Sadece 1-400 Arası Sayı Girin");
    }
  }
  deleteGrid();
  gridSize = Number(sizeInput);
  createGrid();
}

function randNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
