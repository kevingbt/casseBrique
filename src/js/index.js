import GameUI from "./gameUI.js";

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


/**
 * Boucle principale du jeu
 */
function gameLoop() {
  // Nettoyer le canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dessiner les éléents du jeu
  gameUI.draw();


  // Continuer la boucle
  requestAnimationFrame(gameLoop);
}


// D�marrer le jeu
gameLoop();
