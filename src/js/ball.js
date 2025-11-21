    class Ball {
        constructor(x, y, radius, color = "blue") {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
// ctx est le context du canvas "var ctx = canvas.getContext("2d");""
    draw(ctx) {
        //la je commence le dessin
        ctx.beginPath();
        //icic this.x correspond a l'ax des abscisses et this.y a l'axe des ordonnees this.radius est le rayon de la balle 0 correspond au debut de l'arc et Math.PI * 2 correspond a la fin de l'arc
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        //ctx.fill() permet de remplir la balle
        
        ctx.fill();
        //ctx.fillStyle c'est la couleur de la balle
       //ctx.closePath();  je termine le dessin
        ctx.closePath();
    }
    }
