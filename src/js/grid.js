export default class Grid {
  constructor(columnCount, rowCount, width, height, padding, offsetTop, offsetLeft) {
    this.columnCount = columnCount;
    this.rowCount = rowCount;
    this.padding = padding;
    this.offsetTop = offsetTop;
    this.offsetLeft = offsetLeft;

    this.width = width;
    this.height = height;

    this.bricks = [];
    this.initializeBricks();
  }

  initializeBricks() {
    for (let c = 0; c < this.columnCount; c++) {
      this.bricks[c] = [];

      for (let r = 0; r < this.rowCount; r++) {
        const x = r * (this.width + this.padding) + this.offsetLeft;
        const y = c * (this.height + this.padding) + this.offsetTop;

        this.bricks[c][r] = { x, y };
      }
    }
  }

  getBricks() {
    return this.bricks;
  }
}
