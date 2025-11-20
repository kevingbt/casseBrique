// Classe Bloc unifiée pour les briques et la grille
class Bloc {
  constructor(columnCount, rowCount, width, height, padding, offsetTop, offsetLeft) {
    // Paramètres de la grille
    this.columnCount = columnCount;
    this.rowCount = rowCount;
    this.padding = padding;
    this.offsetTop = offsetTop;
    this.offsetLeft = offsetLeft;

    // Paramètres de la brique
    this.width = width;
    this.height = height;
    this.color = "#0095DD";

    // Grille des briques
    this.bricks = [];
    this.initializeBricks();
  }

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

  draw(ctx) {
    for (let c = 0; c < this.columnCount; c++) {
      for (let r = 0; r < this.rowCount; r++) {
        const brick = this.bricks[c][r];
        if (brick.status === 1) {
          ctx.beginPath();
          ctx.rect(brick.x, brick.y, brick.width, brick.height);
          ctx.fillStyle = brick.color;
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }

  getActiveBrickCount() {
    let count = 0;
    for (let c = 0; c < this.columnCount; c++) {
      for (let r = 0; r < this.rowCount; r++) {
        if (this.bricks[c][r].status === 1) {
          count++;
        }
      }
    }
    return count;
  }
}

export default Bloc;