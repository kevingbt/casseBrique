/**
 * Particule d'explosion pour l'animation de destruction des blocs
 * Représente une particule avec position, vélocité et durée de vie
 *
 * @class Particle
 */
export default class Particle {
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