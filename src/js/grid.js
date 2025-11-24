export default class Grid {

  constructor(canvasWidth) {

    // --- PARAMÈTRES FIXÉS ICI ---
    this.columnCount = 8;   // nombre de colonnes
    this.rowCount = 6;      // nombre de lignes
    this.width = 70;        // largeur d'une brique
    this.height = 20;       // hauteur d'une brique
    this.padding = 10;      // espace entre les briques
    this.offsetTop = 30;    // marge haute de la grille

    // --- largeur du canvas envoyée depuis le HTML ---
    this.canvasWidth = canvasWidth;

    // Tableau de briques
    this.bricks = [];

    // Construction de la grille
    this.initializeBricks();
  }


  initializeBricks() {

    // Largeur totale de la grille
    const totalGridWidth =
      this.columnCount * this.width +
      (this.columnCount - 1) * this.padding;

    // Centrage horizontal PARFAIT
    const offsetLeft = (this.canvasWidth - totalGridWidth) / 2;

    // Construction ligne par ligne
    for (let row = 0; row < this.rowCount; row++) {
      this.bricks[row] = [];

      for (let col = 0; col < this.columnCount; col++) {

        const x = offsetLeft + col * (this.width + this.padding);
        const y = this.offsetTop + row * (this.height + this.padding);

        this.bricks[row][col] = {
          x,
          y,
          width: this.width,
          height: this.height
        };
      }
    }
  }

  getBricks() {
    return this.bricks;
  }
}
