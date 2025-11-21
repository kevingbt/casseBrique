// Classe Bloc - Création de briques
class Bloc {
  /**
   * Crée une instance de Bloc.
   *
   * @constructor
   * @param {number} columnCount 
   * @param {number} rowCount 
   * @param {number} width 
   * @param {number} height 
   * @param {number} padding 
   * @param {number} offsetTop 
   * @param {number} offsetLeft 
   */
  constructor(columnCount, rowCount, width, height, padding, offsetTop, offsetLeft) {
    this.columnCount = columnCount;
    this.rowCount = rowCount;
    this.width = width;
    this.height = height;
    this.padding = padding;
    this.offsetTop = offsetTop;
    this.offsetLeft = offsetLeft;
    this.color = "purple";

    this.bricks = [];
    this.initializeBricks();
  }

  /** Création des blocs */
  initializeBricks() {
    for (let c = 0; c < this.columnCount; c++) {
      this.bricks[c] = [];
      for (let r = 0; r < this.rowCount; r++) {
        const brickX = (r * (this.width + this.padding)) + this.offsetLeft;
        const brickY = (c * (this.height + this.padding)) + this.offsetTop;
        this.bricks[c][r] = {
          x: brickX,
          y: brickY,
          width: this.width,
          height: this.height,
          status: 1,
          color: this.color
        };
      }
    }
  }

  /**
   * Retourne la grille de briques
   *
   * @returns {Array}
   */
  getBricks() {
    return this.bricks;
  }
}

export default Bloc;