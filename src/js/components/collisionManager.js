/**
 * Gestionnaire des collisions de la balle
 * Sépare la logique de collision du mouvement
 */
class CollisionManager {
    constructor() {
        this.handlers = [];
    }

    /**
     * Ajoute un handler de collision
     * @param {CollisionHandler} handler 
     */
    addHandler(handler) {
        this.handlers.push(handler);
    }

    /**
     * Vérifie toutes les collisions
     * @param {Ball} ball 
     * @param {Object} context 
     */
    checkCollisions(ball, context) {
        this.handlers.forEach(handler => {
            handler.check(ball, context);
        });
    }
}

/**
 * Interface pour les handlers de collision
 */
class CollisionHandler {
    check(ball, context) {
        throw new Error("Must implement check()");
    }
}

/**
 * Collision avec les murs
 */
class WallCollisionHandler extends CollisionHandler {
    check(ball, context) {
        const { canvas } = context;
        
        // Murs latéraux
        if (ball.x + ball.dx > canvas.width - ball.radius || 
            ball.x + ball.dx < ball.radius) {
            ball.dx = -ball.dx;
        }
        
        // Mur supérieur
        if (ball.y + ball.dy < ball.radius) {
            ball.dy = -ball.dy;
        }
    }
}

/**
 * Collision avec la barre
 */
class PaddleCollisionHandler extends CollisionHandler {
    check(ball, context) {
        const { paddle, canvas } = context;
        
        if (ball.y + ball.dy > canvas.height - ball.radius - paddle.paddleHeight &&
            ball.x > paddle.paddleX && 
            ball.x < paddle.paddleX + paddle.paddleWidth) {
            ball.dy = -ball.dy;
        }
    }
}

/**
 * Collision avec le sol (perte de vie)
 */
class GroundCollisionHandler extends CollisionHandler {
    check(ball, context) {
        const { canvas, lifeManager } = context;
        
        if (ball.y + ball.dy > canvas.height - ball.radius) {
            lifeManager.loseLife(ball);
        }
    }
}

/**
 * Collision avec les briques
 */
class BrickCollisionHandler extends CollisionHandler {
    check(ball, context) {
        const { grid, score } = context;
        
        for (let r = 0; r < grid.rowCount; r++) {
            for (let c = 0; c < grid.columnCount; c++) {
                const brick = grid.bricks[r][c];
                if (brick.status === 1 && this.intersects(ball, brick)) {
                    ball.dy = -ball.dy;
                    if (brick.hit()) {
                        score.scoreUp(); // Points seulement si le bloc est détruit
                    }
                    score.scoreUp();
                }
            }
        }
    }
    
    intersects(ball, brick) {
        return ball.x > brick.x &&
               ball.x < brick.x + brick.width &&
               ball.y > brick.y &&
               ball.y < brick.y + brick.height;
    }
}

export { 
    CollisionManager, 
    WallCollisionHandler, 
    PaddleCollisionHandler, 
    GroundCollisionHandler, 
    BrickCollisionHandler 
};