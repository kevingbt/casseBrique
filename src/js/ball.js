/**
 * @class
 *
 * @description
 * Cette classe permet de créer une balle
 *
 * @param {number} x - la position des absis.
 * @param {number} y - la position des ordonnées
 * @param {number} radius - le rayon de la balle.
 * @param {string} [color="blue"] - la couleur de la balle.
 */
class Ball {
    
    constructor(x, y, radius, color = "blue") {

        this.x = x;             // Position de X
        this.y = y;             // Position de Y
        this.radius = radius;   // Rayon
        this.color = color;     // Couleur
        // Vitesses par défaut
        this.dx = 2;
        this.dy = -2;
    }

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
    //  Mouvement et Collisions de la Balle
    move(canvas, livesObj ,paddle ) {

        // quand sa touche les murs sur les cotés
        if (this.x + this.dx > canvas.width - this.radius || this.x + this.dx < this.radius) {
            this.dx = -this.dx;
        }

        // quand sa touche le mur du haut
        if (this.y + this.dy < this.radius) {
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
                paddle.x = (canvas.width - paddle.width) / 2;                
            } 
            else {
                this.x = canvas.width / 2;
                this.y = canvas.height - 30;
                this.dx = 2;
                this.dy = -2;
                paddle.x = (canvas.width - paddle.width) / 2;
            }
        }
        this.x += this.dx;
        this.y += this.dy;

    }
}

export default Ball;