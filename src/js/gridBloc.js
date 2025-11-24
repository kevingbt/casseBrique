import Grid from "./grid.js";
import Bloc from "./bloc.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const grid = new Grid(8, 6, 75, 20, 10, 30, canvas.width);

const blocks = [];
grid.getBricks().forEach(row => {
  row.forEach(b => {
    blocks.push(new Bloc(b.x, b.y, b.width, b.height));
  });
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  blocks.forEach(block => block.draw(ctx));
}

draw();