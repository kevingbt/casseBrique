class Barre {

    /**
     * Creates an instance of Barre.
     *
     * @constructor
     * @param {*} canvas 
     * @param {*} ctx 
     * @param {number} [paddleHeight=10] 
     * @param {number} [paddleWidth=75] 
     */
    constructor(canvas, ctx, paddleHeight = 10, paddleWidth = 75) {
        this.canvas = canvas;
        this.ctx = ctx;

        // Paramètres barre
        this.paddleHeight = paddleHeight;
        this.paddleWidth = paddleWidth;
        this.paddleX = (canvas.width - paddleWidth) / 2;

        // Déplacement
        this.rightPressed = false;
        this.leftPressed = false;

        // Bind des handlers
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.mouseMoveHandler = this.mouseMoveHandler.bind(this);

        // Écouteurs
        document.addEventListener("keydown", this.keyDownHandler);
        document.addEventListener("keyup", this.keyUpHandler);
        document.addEventListener("mousemove", this.mouseMoveHandler);
    }

    /**
     * Description placeholder
     *
     * @param {*} e 
     */
    keyDownHandler(e) {
      //console.log("keyDownHandler")
      //console.log(`e.key=${e.key}`)
        if (e.key === "Right" || e.key === "ArrowRight") {
            this.rightPressed = true;
        if (this.rightPressed && this.paddleX < this.canvas.width - this.paddleWidth) {
          this.paddleX += 7;}
        } else if (e.key === "Left" || e.key === "ArrowLeft") {
         // console.log("touche gauche ok")
            this.leftPressed = true;
           if (this.leftPressed && this.paddleX > 0) {
          this.paddleX -= 7; }
          } 
    }

    /**
     * Description placeholder
     *
     * @param {*} e 
     */
    keyUpHandler(e) {
      console.log("keyUpHandler")
        if (e.key === "Right" || e.key === "ArrowRight") {
            this.rightPressed = false;
        } else if (e.key === "Left" || e.key === "ArrowLeft") {
            this.leftPressed = false;
        }
    }
    /**
     * Description placeholder
     *
     * @param {*} e 
     */
    mouseMoveHandler(e) {
        const relativeX = e.clientX - this.canvas.offsetLeft;
        if (relativeX > 0 && relativeX < this.canvas.width) {
            this.paddleX = relativeX - this.paddleWidth / 2;
        }
    }

    /** Description placeholder */
    drawPaddle() {
        this.ctx.beginPath();
        this.ctx.rect(
            this.paddleX,
            this.canvas.height - this.paddleHeight, // ✔️ Correction ici
            this.paddleWidth,
            this.paddleHeight
        );
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }
}

export default Barre;