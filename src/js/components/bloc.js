/**
 * Brique individuelle du jeu Casse-Brique
 * Représente une brique avec sa position, taille, couleur et état
 *
 * @class Bloc
 */
export class Bloc {

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

  recevoirCoup(){
    this.status = 0;
    return true;
  }

}

export class BlocDur extends Bloc{
    /**
   * @param {number} vie - Nombre de coups nécessaires
   */
  constructor(x, y, width, height, color = "blue", vie = 3) {
    // 1. On appelle le constructeur du parent avec super()
    super(x, y, width, height, color); 
    
    // 2. On ajoute la propriété spécifique
    this.vie = vie;
    this.vieMax = vie; // Pour calculer la couleur (optionnel)
  }

  // Surcharge de la méthode de collision
  recevoirCoup() {
    this.vie--;

    // Changement visuel pour montrer les dégâts (s'assombrit)
    this.color = this.vie === 1 ? "red" : "orange";

    if (this.vie <= 0) {
      this.status = 0;
      return true; // Détruit
    }
    return false; // Pas encore détruit
  }
}