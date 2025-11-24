/**
 * Brique individuelle du jeu Casse-Brique
 * Représente une brique avec sa position, taille, couleur et état
 *
 * @class Bloc
 */
class Bloc {

  /**
   * Crée une instance de Bloc
   *
   * @constructor
   * @param {number} x - Position horizontale (abscisse) en pixels
   * @param {number} y - Position verticale (ordonnée) en pixels
   * @param {number} width - Largeur de la brique en pixels
   * @param {number} height - Hauteur de la brique en pixels
   * @param {string} [color="purple"] - Couleur de la brique
   * @param {number} [status=1] - État de la brique (1=actif, 0=détruit)
   */
  constructor(x, y, width, height, color="purple", status = 1){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.status = status;
  }

  /**
   * Dessine la brique sur le canvas si elle est active
   *
   * @param {CanvasRenderingContext2D} ctx - Contexte de rendu 2D du canvas
   * @returns {void}
   */
draw(ctx) {
    // Dessiner la brique si elle est active (status >= 1)
    if (this.status != 0) {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.fill();
      ctx.closePath();
      
    }
  }

}

export default Bloc;