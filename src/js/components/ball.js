/**
 * Balle du jeu Casse-Brique
 * Gère le mouvement, les collisions et l'affichage de la balle
 *
 * @class Ball
 */
class Ball {

    /**
     * Crée une instance de Ball
     *
     * @constructor
     * @param {number} x - Position initiale en X (abscisse)
     * @param {number} y - Position initiale en Y (ordonnée)
     * @param {number} radius - Rayon de la balle en pixels
     * @param {string} [color="blue"] - Couleur de la balle
     */
    constructor(x, y, radius, color = "blue") {

        this.x = x;             // Position de X
        this.y = y;             // Position de Y
        this.radius = radius;   // Rayon
        this.color = color;     // Couleur
        // Vitesses par défaut
        this.dx = 2;            // Vitesse horizontale
        this.dy = -2;           // Vitesse verticale
    }

    /**
     * Dessine la balle sur le canvas
     *
     * @param {CanvasRenderingContext2D} ctx - Contexte de rendu 2D du canvas
     * @returns {void}
     */
    draw(ctx) {
        ctx.beginPath();               // Début d dessin
        ctx.fillStyle = this.color;    // on choisi la couleur qu'on a defini avant
        ctx.arc(
            this.x,                    // Coordonnée de X
            this.y,                    // Coordonnée de Y
            this.radius,               // le Rayon
            0,                         // Début de l'angle
            Math.PI * 2                // Fin de l'angle 
        );
        ctx.fill();                    // Remplissage du cercle
        ctx.closePath();               // Fin du dessin
    }

    /**
     * Gère le mouvement de la balle et toutes ses collisions
     * Vérifie les collisions avec les murs, la barre, le sol et les blocs
     *
     * @param {HTMLCanvasElement} canvas - Canvas HTML pour les limites du jeu
     * @param {Object} livesObj - Objet contenant le nombre de vies (propriété lives)
     * @param {Object} paddle - Objet barre avec propriétés paddleX, paddleWidth, paddleHeight
     * @param {Object} grid - Grille de briques avec propriétés rowCount, columnCount, bricks
     * @param {Object} score - Objet score avec méthode scoreUp()
     * @returns {void}
     */
    move(canvas, livesObj ,paddle, grid, score ) {

        // quand sa touche les murs sur les cotés
        if (this.x + this.dx > canvas.width - this.radius || this.x + this.dx < this.radius) {
            this.dx = -this.dx;
        }

        // quand sa touche le mur du haut
        if (this.y + this.dy < this.radius) {
            this.dy = -this.dy;
        }

        // Collision avec la barre
        else if (this.y + this.dy > canvas.height - this.radius - paddle.paddleHeight &&
                 this.x > paddle.paddleX && 
                 this.x < paddle.paddleX + paddle.paddleWidth) {
            this.dy = -this.dy;
        }
        // quand sa touche le sol
        else if (this.y + this.dy > canvas.height - this.radius) {
            livesObj.lives--;

            if (livesObj.lives <= 0) {
                this.x = canvas.width / 2;
                this.y = canvas.height - 30;
                this.dx = 2;
                this.dy = -2;
                paddle.paddleX = (canvas.width - paddle.paddleWidth) / 2;                
            } 
            else {
                this.x = canvas.width / 2;
                this.y = canvas.height - 30;
                this.dx = 2;
                this.dy = -2;
                paddle.paddleX = (canvas.width - paddle.paddleWidth) / 2;
            }
        }

        // Collision avec les blocs
        for (let r = 0; r < grid.rowCount; r++) {
            for (let c = 0; c < grid.columnCount; c++) {
                let b = grid.bricks[r][c];
                if (b.status > 0) {
                    if (
                        this.x > b.x &&
                        this.x < b.x + b.width &&
                        this.y > b.y &&
                        this.y < b.y + b.height
                    ) {
                        this.dy = -this.dy;
                        
                        // Gérer le multihit directement
                        b.status--;
                        score.scoreUp();
                    }
                }
            }
        }

        this.x += this.dx;
        this.y += this.dy;

    }
}

export default Ball;