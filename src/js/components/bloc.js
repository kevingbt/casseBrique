/**
 * Brique individuelle du jeu Casse-Brique
 * Représente une brique avec sa position, taille, couleur et état
 *
 * @class Bloc
 */
class Bloc {

    /**
     * Crée une instance de Bloc
     *
     * @constructor
     * @param {number} x - Position horizontale (abscisse) en pixels
     * @param {number} y - Position verticale (ordonnée) en pixels
     * @param {number} width - Largeur de la brique en pixels
     * @param {number} height - Hauteur de la brique en pixels
     * @param {string} [color="purple"] - Couleur de la brique
     * @param {number} [status=1] - État de la brique (1=actif, 0=détruit)
     */
    constructor(x, y, width, height, color = "purple", status = 1, maxHits = 3) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.status = status;
        this.maxHits = maxHits;
        this.hits = 0;
    }

    /**
     * Dessine la brique sur le canvas si elle est active
     *
     * @param {CanvasRenderingContext2D} ctx - Contexte de rendu 2D du canvas
     * @returns {void}
     */
    draw(ctx) {
        if (this.status != 0) {
            ctx.beginPath();
            ctx.fillStyle = this.getColorByHits(); // Utiliser la couleur dynamique
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.fill();
            ctx.closePath();
        }
    }

    hit() {
        this.hits++;
        console.log(this.hits)
        if (this.hits >= this.maxHits) {
          this.status = 0; // Détruit le bloc
          return true; // Bloc détruit
        }
        return false; // Bloc encore actif
    }

    getColorByHits() {
        const colors = ["#8B4513", "#A0522D", "#CD853F"]; // Marron clair au foncé
        return colors[Math.min(this.hits, this.maxHits - 1)];
    }

}

export default Bloc;