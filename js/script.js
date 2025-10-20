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
    fragment.appendChild(div);
  }
  
  grid.innerHTML = "";
  grid.appendChild(fragment);
}


grid.addEventListener("mouseover", (e) => {
  if (e.target && e.target.classList.contains("cell")) {
    e.target.classList.add("is-hover");
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
