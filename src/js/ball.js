/**
 * @class
 *
 * @description
 * Cette classe permet de créer une balle avec dessin, mouvement et collisions.
 *
 * @param {number} x - Position X.
 * @param {number} y - Position Y.
 * @param {number} radius - Rayon de la balle.
 * @param {string} [color="blue"] - Couleur.
 */
class Ball {
    
    constructor(x, y, radius, color = "blue") {
        this.x = x;             
        this.y = y;             
        this.radius = radius;   
        this.color = color;     

        // Vitesses par défaut
        this.dx = 2;
        this.dy = -2;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
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