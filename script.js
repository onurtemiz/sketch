let gridBig = 4;
let gridSize = 100;

const container = document.getElementById("container");
container.style.gridTemplate = `repeat(${gridSize}, ${gridBig}px) / repeat(${gridSize}, ${gridBig}px)`;

for (let i = 1; i < gridSize + 1; i++) {
  for (let j = 1; j < gridSize + 1; j++) {
    const grid = document.createElement("div");
    grid.className = "grid";
    grid.id = `grid-${i}-${j}`;
    grid.style.gridArea = `${i}/${j}/span 1/span 1`;
    grid.style.width = `${gridBig}px`;
    grid.style.height = `${gridBig}px`;
    container.appendChild(grid);
  }
}

function changeBackground() {
  this.style.backgroundColor = "red";
}

const grid = document.querySelectorAll(".grid");

grid.forEach(grid => grid.addEventListener("mouseover", changeBackground));

const clearButton = document.querySelector("button");

clearButton.addEventListener("click", clearBoard);

function clearBoard() {
  grid.forEach(grid => (grid.style.backgroundColor = "black"));
}
