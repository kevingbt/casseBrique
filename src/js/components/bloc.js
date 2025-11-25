import ParticleManager from "./particleManager.js";

// Instance globale du gestionnaire de particules
export const particleManager = new ParticleManager();

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
   * @param {string} [color="grey"] - Couleur de la brique
   * @param {number} [status=1] - État de la brique (nombre de hits restants)
   * @param {number} [maxHits=1] - Nombre maximum de hits nécessaires pour détruire la brique
   */
  constructor(x, y, width, height, color="grey", status = 1, maxHits = null){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.status = status;
    this.maxHits = maxHits || this.getMaxHitsByColor(color);
  }

  /**
   * Détermine le nombre de hits nécessaires selon la couleur
   *
   * @private
   * @param {string} color - Couleur de la brique
   * @returns {number} Nombre de hits nécessaires
   */
  getMaxHitsByColor(color) {
    switch(color.toLowerCase()) {
      case 'blue':
        return 2;
      default:
        return 1;
    }
  }

  /**
   * Gère la collision avec la brique
   *
   * @returns {boolean} true si la brique est détruite, false sinon
   */
  hit() {
    if (this.status <= 0) {
      return true;
    }
    
    this.status--;
    return this.status <= 0;
  }

  /**
   * Dessine la brique sur le canvas si elle est active
   *
   * @param {CanvasRenderingContext2D} ctx - Contexte de rendu 2D du canvas
   * @returns {void}
   */
  draw(ctx) {
    // Dessiner la brique si elle est active (status > 0)
    if (this.status > 0) {
      ctx.beginPath();
      
      ctx.fillStyle = this.color;
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.fill();
      ctx.closePath();
      
      // Réinitialiser l'opacité
      ctx.globalAlpha = 1.0;
      
      // Afficher le nombre de hits restants pour les blocs multihit
      if (this.maxHits > 1 && this.status > 1) {
        ctx.fillStyle = 'white';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.status.toString(), this.x + this.width/2, this.y + this.height/2);
      }
    }
  }

  recevoirCoup(){
    if (this.status > 0) {
      // Créer directement les particules d'explosion
      particleManager.createExplosion(
        this.x + this.width / 2,
        this.y + this.height / 2,
        this.color,
        20
      );
    }
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
      // Créer directement les particules d'explosion
      particleManager.createExplosion(
        this.x + this.width / 2,
        this.y + this.height / 2,
        this.color,
        20
      );
      this.status = 0;
      return true; // Détruit
    }
    return false; // Pas encore détruit
  }
}