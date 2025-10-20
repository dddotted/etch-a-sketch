"use strict";

const grid = document.querySelector(".grid");
const resizeButton = document.querySelector(".resize-button");
let size = 16;


function createGrid(count) {
  const fragment = document.createDocumentFragment();
  const total = count * count;
  
  for (let i = 0; i < total; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.style.width = `calc(100% / ${count})`;
    div.dataset.shade = 100;
    fragment.appendChild(div);
  }
  
  grid.innerHTML = "";
  grid.appendChild(fragment);
}


function getRandom(number) {
  return Math.floor(Math.random() * (number + 1));
}


function getRandomColor() {
  return `rgb(${getRandom(255)}, ${getRandom(255)}, ${getRandom(255)})`;
}


grid.addEventListener("mouseover", (e) => {
  if (e.target && e.target.classList.contains("cell")) {
    if (!e.target.dataset.colored) {
      e.target.style.backgroundColor = getRandomColor();
      e.target.dataset.colored = "1";
    }
    if (e.target.dataset.shade > 0) {
      const shade = Math.max(0, (parseInt(e.target.dataset.shade, 10) || 100) - 10);
      e.target.dataset.shade = String(shade);
      e.target.style.filter = `brightness(${shade}%)`;
    }
  }
});


createGrid(size);


resizeButton.addEventListener("click", (e) => {
  let input;
  do {
    input = prompt("Please enter the number of squares per side (from 1 to 100).");
    if (input === null) return;
  } while (!Number.isInteger(+input) || (+input < 1 || +input > 100));
  size = +input;
  createGrid(size);
});
