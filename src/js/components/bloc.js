/**
 * Particule d'explosion pour l'animation de destruction des blocs
 * Représente une particule avec position, vélocité et durée de vie
 *
 * @class Particle
 */
class Particle {
  /**
   * Crée une instance de Particle
   *
   * @constructor
   * @param {number} x - Position X initiale
   * @param {number} y - Position Y initiale
   * @param {string} color - Couleur de la particule
   */
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 8;
    this.vy = (Math.random() - 0.5) * 8;
    this.color = color;
    this.life = 1.0;
    this.decay = 0.02;
    this.size = Math.random() * 3 + 2;
  }

  /**
   * Met à jour la position et la durée de vie de la particule
   *
   * @returns {boolean} true si la particule est encore active, false sinon
   */
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.2;
    this.life -= this.decay;
    return this.life > 0;
  }

  /**
   * Dessine la particule sur le canvas
   *
   * @param {CanvasRenderingContext2D} ctx - Contexte de rendu 2D du canvas
   * @returns {void}
   */
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.life;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.restore();
  }
}

/**
 * Gestionnaire d'animations de particules
 * Centralise la gestion de toutes les particules actives
 *
 * @class ParticleManager
 */
class ParticleManager {
  constructor() {
    this.particles = [];
  }

  /**
   * Ajoute une explosion de particules à une position donnée
   *
   * @param {number} x - Position X de l'explosion
   * @param {number} y - Position Y de l'explosion
   * @param {string} color - Couleur des particules
   * @param {number} count - Nombre de particules à générer
   * @returns {void}
   */
  createExplosion(x, y, color, count = 15) {
    for (let i = 0; i < count; i++) {
      this.particles.push(new Particle(x, y, color));
    }
  }

  /**
   * Met à jour toutes les particules et retire celles qui sont terminées
   *
   * @returns {void}
   */
  update() {
    this.particles = this.particles.filter(particle => particle.update());
  }

  /**
   * Dessine toutes les particules actives
   *
   * @param {CanvasRenderingContext2D} ctx - Contexte de rendu 2D du canvas
   * @returns {void}
   */
  draw(ctx) {
    this.particles.forEach(particle => particle.draw(ctx));
  }

  /**
   * Vérifie s'il y a des particules actives
   *
   * @returns {boolean} true s'il y a des particules actives
   */
  hasActiveParticles() {
    return this.particles.length > 0;
  }
}

// Instance globale du gestionnaire de particules
const particleManager = new ParticleManager();

/**
 * Événements de bloc pour le pattern Observer
 */
export const BlocEvents = {
  DESTROYED: 'bloc:destroyed'
};

/**
 * Système d'événements simple pour découpler les composants
 */
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(data));
    }
  }
}

// Emetteur global d'événements de blocs
const blocEventEmitter = new EventEmitter();

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
   * @param {number} [status=1] - État de la brique (nombre de hits restants)
   * @param {number} [maxHits=1] - Nombre maximum de hits nécessaires pour détruire la brique
   */
  constructor(x, y, width, height, color="purple", status = 1, maxHits = null){
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
      case 'purple':
      default:
        return 1;
    }
  }

  /**
   * Dessine la brique sur le canvas si elle est active
   *
   * @param {CanvasRenderingContext2D} ctx - Contexte de rendu 2D du canvas
   * @returns {void}
   */
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
      
      // Ajuster l'opacité selon le nombre de hits restants
      const opacity = this.status / this.maxHits;
      ctx.globalAlpha = Math.max(0.3, opacity);
      
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
      // Émettre un événement de destruction (SRP : le bloc ne gère que son état)
      blocEventEmitter.emit(BlocEvents.DESTROYED, {
        x: this.x + this.width / 2,
        y: this.y + this.height / 2,
        color: this.color
      });
    }
    this.status = 0;
    return true;
  }

}

// Exporter les utilitaires pour utilisation externe
export { particleManager, blocEventEmitter };

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
      // Émettre un événement de destruction (SRP : le bloc ne gère que son état)
      blocEventEmitter.emit(BlocEvents.DESTROYED, {
        x: this.x + this.width / 2,
        y: this.y + this.height / 2,
        color: this.color
      });
      this.status = 0;
      return true; // Détruit
    }
    return false; // Pas encore détruit
  }
}