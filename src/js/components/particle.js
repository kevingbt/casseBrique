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
    this.vx = (Math.random() - 0.5) * 12;
    this.vy = (Math.random() - 0.5) * 12;
    this.color = color;
    this.life = 1.0;
    this.decay = 0.02;
    this.size = Math.random() * 12 + 12;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.2;
  }

  /**
   * Met à jour la position et la durée de vie de la particule
   *
   * @returns {boolean} true si la particule est encore active, false sinon
   */
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.05;
    this.life -= this.decay;
    this.rotation += this.rotationSpeed;
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
    ctx.translate(this.x + this.size/2, this.y + this.size/2);
    ctx.rotate(this.rotation);
    
    // Ombre
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    
    ctx.fillStyle = this.color;
    ctx.fillRect(-this.size/2, -this.size/2, this.size, this.size);
    ctx.restore();
  }
}