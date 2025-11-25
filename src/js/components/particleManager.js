import Particle from "./particle.js";

/**
 * Gestionnaire d'animations de particules
 * Centralise la gestion de toutes les particules actives
 *
 * @class ParticleManager
 */
export default class ParticleManager {
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