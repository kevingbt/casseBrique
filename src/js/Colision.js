/**
 * Description placeholder
 *
 * @class Colision
 * @typedef {Colision}
*/

export default class Colision {

    constructor(canvas, ball, brick, paddle){
        this.canvas = canvas;
        this.ball = ball;
        this.paddle = paddle;
        this.brick = brick;
    }

    ballMovement() {

        let ballRadius = this.ball.ballRadius;

        // Collision avec les murs latéraux
        if(x + dx > this.canvas.width-ballRadius || x + dx < ballRadius) {
            dx = -dx;  // Inversion horizontale
        }
        
        // Collision avec le plafond  
        if(y + dy < ballRadius) {
            dy = -dy;  // Inversion verticale
        }
        
        // Collision avec le sol (Game Over)
        else if(y + dy > this.canvas.height-ballRadius) {
            lives--;
            if(!lives) {
                alert("GAME OVER");
                document.location.reload();
            } else {
                // Reset de la balle et raquette
                x = this.canvas.width/2;
                y = this.canvas.height-30;
                dx = 2;
                dy = -2;
                paddleX = (this.canvas.width-paddleWidth)/2;
            }
        }
        
        // Mise à jour de la position
        x += dx;
        y += dy;
    }

    paddleCollision() {
        let paddle = this.paddle;
        // Vérification collision balle-raquette
        if(y + dy > this.canvas.height-ballRadius) {
            if(x > paddle.paddleX && x < paddle.paddleX + paddle.paddleWidth) {
                dy = -dy;  // Rebond
            }
        }
    }

    colisionDetection() {
        let brick = this.brick;
        for (var c = 0; c < brick.brickColumnCount; c++) {
            for (var r = 0; r < brick.brickRowCount; r++) {
                var b = brick.bricks[c][r];
                if (b.status == 1) {
                    if (
                        x > b.x &&
                        x < b.x + brick.brickWidth &&
                        y > b.y &&
                        y < b.y + brick.brickHeight
                    ) {
                        dy = -dy;
                        b.status = 0;
                    }
                }
            }
        }
    }
}
