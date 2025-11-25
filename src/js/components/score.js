/**
 * Gestion du score du jeu
 * Gère l'incrémentation et l'affichage du score
 *
 * @export
 * @class Score
 */

export default class Score {

  /**
   * Crée une instance de Score
   *
   * @constructor
   */
  constructor(){
    this.score=0;
  }

  /**
   * Incrémente le score de 1 point
   *
   * @returns {void}
   */
  scoreUp() {
    this.score += 1;
    /*if (score == brickRowCount * brickColumnCount) {
      alert("YOU WIN, CONGRATS!");
      document.location.reload();
    }*/
  }

  /**
   * Dessine le score sur le canvas
   *
   * @param {CanvasRenderingContext2D} ctx - Contexte de rendu 2D du canvas
   * @returns {void}
   */
  draw(ctx){  //param : canva
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText(`Score: ${this.score}`, 8, 20);
  }
}