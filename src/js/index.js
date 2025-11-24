import Ball from "./ball.js";
import GameUI from "./gameUI.js";
import Grid from "./grid.js";
import Barre from "./classBarre.js";

/**
 * Point d'entrée principal du jeu Casse-Brique
 * Initialise le canvas et lance la boucle de jeu
 */

// Configuration du canvas
const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvaGame"));
const ctx = canvas.getContext("2d");

// Taille du canvas
canvas.width = 600;
canvas.height = 400;

// Initialisation du jeu
const gameUI = new GameUI(canvas, 3);
const grid = new Grid(10, 6, 75, 15, 10, 30, canvas);
const ball = new Ball(10, 10, 10, grid);
const paddle = new Barre(canvas);


/**
 * Boucle principale du jeu
 */
function gameLoop() {
  // Nettoyer le canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dessiner les éléents du jeu
  gameUI.draw();
  ball.move(canvas, gameUI, paddle);

  // Continuer la boucle
  requestAnimationFrame(gameLoop);
}


// D�marrer le jeu
gameLoop();
