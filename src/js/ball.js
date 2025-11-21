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
 * @param {canvas} ctx - dessin va etre en 2D 
 */
class Ball {
    
    constructor(x, y, radius, color = "blue") {
        this.x = x;             // Position de X
        this.y = y;             // Position de Y
        this.radius = radius;   // Rayon
        this.color = color;     // Couleur
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
}

export default Ball;