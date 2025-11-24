/**
 * Gestion des vies du joueur
 * Gère le compteur de vies et l'affichage
 *
 * @export
 * @class Vie
 */

export default class Vie {

  /**
   * Crée une instance de Vie
   *
   * @constructor
   * @param {number} [nbVie=3] - Nombre de vies initial
   */
  constructor(nbVie = 3) {
    this.vie = nbVie;
  };

  /**
   * Décrémente le nombre de vies
   * Affiche "GAME OVER" si les vies atteignent 0
   *
   * @returns {void}
   */
  loose() {
    this.vie--;
    if (this.vie === 0) {
      alert("GAME OVER"); // a remplacer par un event gameui
    };
  };

  /**
   * Dessine le compteur de vies sur le canvas
   *
   * @param {CanvasRenderingContext2D} ctx - Contexte de rendu 2D du canvas
   * @returns {void}
   */
  draw(ctx){ //param : canva
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText(`Lives: ${this.vie}`, ctx.canvas.width-65, 20);
    }
  }
