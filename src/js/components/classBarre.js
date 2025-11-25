/**
 * Barre de contrôle du joueur (paddle)
 * Gère le déplacement et l'affichage de la barre contrôlée par clavier ou souris
 *
 * @class Barre
 */
class Barre {
  /**
   * Crée une instance de Barre
   *
   * @constructor
   * @param {HTMLCanvasElement} canvas - Canvas HTML pour le rendu et la détection des limites
   * @param {number} [paddleHeight=10] - Hauteur de la barre en pixels
   * @param {number} [paddleWidth=75] - Largeur de la barre en pixels
   */
  constructor(canvas, paddleHeight = 10, paddleWidth = (canvas.width / 15)) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    // Paramètres barre
    if (paddleWidth < 75) {
      this.paddleWidth = 75;
    } else{
        this.paddleWidth = paddleWidth;
    }
    this.paddleHeight = paddleHeight;
    this.paddleX = (canvas.width - paddleWidth) / 2;

    // Déplacement
    this.rightPressed = false;
    this.leftPressed = false;

    // Bind des handlers
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);

    // Écouteurs
    document.addEventListener("keydown", this.keyDownHandler);
    document.addEventListener("keyup", this.keyUpHandler);
    document.addEventListener("mousemove", this.mouseMoveHandler);
  }

  /**
   * Gère l'appui sur une touche du clavier
   * Détecte les flèches gauche/droite et déplace la barre
   *
   * @param {KeyboardEvent} e - Événement clavier
   * @returns {void}
   */
  keyDownHandler(e) {
    //console.log("keyDownHandler")
    //console.log(`e.key=${e.key}`)
    if (e.key === "Right" || e.key === "ArrowRight") {
      this.rightPressed = true;
      if (
        this.rightPressed &&
        this.paddleX < this.canvas.width - this.paddleWidth
      ) {
        this.paddleX += 7;
      }
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      // console.log("touche gauche ok")
      this.leftPressed = true;
      if (this.leftPressed && this.paddleX > 0) {
        this.paddleX -= 7;
      }
    }
  }

  /**
   * Gère le relâchement d'une touche du clavier
   * Arrête le déplacement de la barre
   *
   * @param {KeyboardEvent} e - Événement clavier
   * @returns {void}
   */
  keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
      this.rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      this.leftPressed = false;
    }
  }
  /**
   * Gère le mouvement de la souris
   * Déplace la barre pour suivre la position horizontale de la souris
   *
   * @param {MouseEvent} e - Événement souris
   * @returns {void}
   */
  mouseMoveHandler(e) {
    const relativeX = e.clientX - this.canvas.offsetLeft;
    if (relativeX > 0 && relativeX < this.canvas.width) {
      this.paddleX = relativeX - this.paddleWidth / 2;
    }
  }

  /**
   * Dessine la barre sur le canvas
   *
   * @returns {void}
   */
  drawPaddle() {
    this.ctx.beginPath();
    this.ctx.rect(
      this.paddleX,
      this.canvas.height - this.paddleHeight, // ✔️ Correction ici
      this.paddleWidth,
      this.paddleHeight
    );
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fill();
    this.ctx.closePath();
  }
}

export default Barre;
