// Classe Bloc - Création de briques
class Bloc {
  /**
   * Crée une instance de Bloc.
   *
   * @constructor
   * @param {number} x 
   * @param {number} y 
   * @param {number} width - largeur
   * @param {number} height - hauteur
   * @param {string} color - couleur
   * @param {number} [status=1] - état (actif=1, ...)
   */
  constructor(x, y, width, height, color="purple", status = 1){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.status = status;
  }

  draw(ctx) {
    console.log(`dessiner bloc x=${this.x}`);
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