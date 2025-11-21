class Ball {
    constructor(x, y, radius, color = "blue") {
        this.x = x;             // Position en X
        this.y = y;             // Position en Y
        this.radius = radius;   // Rayon de la balle
        this.color = color;     // Couleur de remplissage
    }

    // ctx = canvas.getContext("2d")
    draw(ctx) {
        ctx.beginPath(); // je commence le dessin

        ctx.fillStyle = this.color; // je defini la couleur de remplissage

        ctx.arc(
            this.x,          // Coordonnée de X
            this.y,          // Coordonnée  de Y
            this.radius,     // le Rayon
            0,               // Début de l'arc
            Math.PI * 2      // Fin de l'arc
        );


        ctx.fill();                 // Remplit le cercle

        ctx.closePath(); // Fin du chemin de dessin
    }
}
