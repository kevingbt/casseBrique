import Bloc from "./bloc.js";

/**
 * Grille de briques pour le jeu Casse-Brique
 * Gère la création, l'organisation et l'affichage de la grille de blocs
 *
 * @export
 * @class Grid
 */
export default class Grid {

  /**
   * Crée une instance de Grid
   *
   * @constructor
   * @param {number} columnCount - Nombre de colonnes de briques
   * @param {number} rowCount - Nombre de lignes de briques
   * @param {number} width - Largeur d'une brique en pixels
   * @param {number} height - Hauteur d'une brique en pixels
   * @param {number} padding - Espacement entre les briques en pixels
   * @param {number} offsetTop - Marge supérieure de la grille en pixels
   * @param {HTMLCanvasElement} canvas - Canvas HTML pour le rendu
   */
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

  /**
   * Initialise le tableau de briques avec leurs positions
   * Calcule automatiquement les positions pour centrer la grille horizontalement
   *
   * @returns {void}
   */
initializeBricks() {
    // Largeur totale de la grille
    const totalGridWidth =
      this.columnCount * this.width +
      (this.columnCount - 1) * this.padding;

    // Centrage horizontal PARFAIT
    const offsetLeft = (this.canvas.width - totalGridWidth) / 2;

    // Construction ligne par ligne
    for (let row = 0; row < this.rowCount; row++) {
      this.bricks[row] = [];

      for (let col = 0; col < this.columnCount; col++) {
        const x = offsetLeft + col * (this.width + this.padding);
        const y = this.offsetTop + row * (this.height + this.padding);

        // Définir la couleur et le status selon la ligne : lignes paires = bleu (2 hits), lignes impaires = violet (1 hit)
        const color = (row % 2 === 0) ? "blue" : "purple";
        const status = (row % 2 === 0) ? 2 : 1;
        
        this.bricks[row][col] = {
          x,
          y,
          width: this.width,
          height: this.height,
          status: status,
          color: color
        };
      }
    }
  }

  /**
   * Retourne le tableau de briques
   *
   * @returns {Array<Array<Object>>} Tableau 2D des briques avec leurs propriétés
   */
  getBricks() {
    return this.bricks;
  }

  /**
   * Dessine toutes les briques actives sur le canvas
   *
   * @param {CanvasRenderingContext2D} ctx - Contexte de rendu 2D du canvas
   * @returns {void}
   */
draw(ctx) {
    // On nettoie la zone d'affichage
    //ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.bricks.forEach(row => {
      // Parcourir ensuite, chaque élément d'une rangée
      row.forEach( block => {
        if (block.status > 0) {
          let bloc = new Bloc( block.x, block.y, block.width, block.height, block.color, block.status );
          bloc.draw(ctx);
        }
      })
      }
    );
  }
}
