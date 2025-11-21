export default class Grid {
  constructor(
    columnCount,
    rowCount,
    width,
    height,
    padding,
    offsetTop,
    canvasWidth
  ) {
    this.columnCount = columnCount;
    this.rowCount = rowCount;

    this.width = width;
    this.height = height;
    this.padding = padding;
    this.offsetTop = offsetTop;

    this.canvasWidth = canvasWidth;

    this.bricks = [];
    this.initializeBricks();
  }

  initializeBricks() {
    // Largeur totale de la grille
    const totalGridWidth =
      this.columnCount * this.width +
      (this.columnCount - 1) * this.padding;

    // CENTRAGE PARFAIT
    const offsetLeft = (this.canvasWidth - totalGridWidth) / 2;

    for (let row = 0; row < this.rowCount; row++) {
      this.bricks[row] = [];

      for (let col = 0; col < this.columnCount; col++) {
        const x = offsetLeft + col * (this.width + this.padding);
        const y = this.offsetTop + row * (this.height + this.padding);

        this.bricks[row][col] = {
          x,
          y,
          width: this.width,
          height: this.height,
        };
      }
    }
  }

  getBricks() {
    return this.bricks;
  }
}
