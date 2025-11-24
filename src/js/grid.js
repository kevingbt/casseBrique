import Bloc from "./bloc.js";

export default class Grid {

  constructor(
    columnCount, rowCount, width, height, padding, offsetTop, canvas
  ) {

    // --- PARAMÈTRES transmis---
    this.columnCount = columnCount;   // nombre de colonnes
    this.rowCount = rowCount;      // nombre de lignes
    this.width = width;        // largeur d'une brique
    this.height = height;       // hauteur d'une brique
    this.padding = padding;      // espace entre les briques
    this.offsetTop = offsetTop;    // marge haute de la grille
    this.canvas = canvas; // canvas envoyé depuis le HTML

    // Tableau de briques, à vide.
    this.bricks = [];

    // Construction de la grille
    this.initializeBricks();
  }


  initializeBricks() {
    console.log(this.canvas)

    console.log("Initialisation de la grille");
    // Largeur totale de la grille
    const totalGridWidth =
      this.columnCount * this.width +
      (this.columnCount - 1) * this.padding;

    // Centrage horizontal PARFAIT
    console.log(`this.canvas.width = ${this.canvas.width}`);
    console.log(`totalGridWidth = ${totalGridWidth}`);
    const offsetLeft = (this.canvas.width - totalGridWidth) / 2;

    // Construction ligne par ligne
    for (let row = 0; row < this.rowCount; row++) {
      this.bricks[row] = [];

      for (let col = 0; col < this.columnCount; col++) {

        console.log(`offsetLeft = ${offsetLeft}`);
        console.log(`col = ${col}`);
        console.log(`this.width = ${this.width}`);
        console.log(`this.padding = ${this.padding}`);
        const x = offsetLeft + col * (this.width + this.padding);
        const y = this.offsetTop + row * (this.height + this.padding);

        console.log(`x=${x}, y=${y}`)

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

  draw(ctx) {
    // On nettoie la zone d'affichage
    //ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    console.log(`this.bricks = ${this.bricks}`)
    this.bricks.forEach(row => {
      // Parcourir ensuite, chaque élément d'une rangée
      row.forEach( block => {
        console.log(`block = ${block}`)
        console.log(block)
        let bloc = new Bloc( block.x, block.y, block.width, block.height );
        bloc.draw(ctx);
      })
      }
    );
  }
}
