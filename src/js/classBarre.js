//Paramettre-barre
class Barre{
    /**
     * Creates an instance of Barre.
     *
     * @constructor
     * @param {number} [paddleHeight=10] 
     * @param {number} [paddleWidth=75] 
     * @param {number} [paddleX=(canvas.width - paddleWidth) / 2] 
     * @param {boolean} [rightPressed=false] 
     * @param {boolean} [leftPressed=false] 
     * @param {*} [keyDownHandler=keyDownHandler] 
     * @param {*} [keyUpHandler=keyUpHandler] 
     * @param {*} [mouseMoveHandler=mouseMoveHandler] 
     * @param {*} ctx 
     */
    constructor (paddleHeight = 10, paddleWidth = 75, paddleX = (canvas.width - paddleWidth) / 2, rightPressed = false, leftPressed = false, keyDownHandler = keyDownHandler, keyUpHandler = keyUpHandler, mouseMoveHandler = mouseMoveHandler, ctx){
        this.ctx = ctx
        //Paramettre barre
        this.paddleHeight = paddleHeight;
        this.paddleWidth = paddleWidth;
        this.paddleX = paddleX;

        //Déplacement
        this.rightPressed = rightPressed;
        this.leftPressed = leftPressed;

        //Mode de déplacement 
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.mouseMoveHandler = this.mouseMoveHandler.bind(this);

      //Commande-directionnel-barre
      document.addEventListener("keydown", this.keyDownHandler);
      document.addEventListener("keyup", this.keyUpHandler);
      document.addEventListener("mousemove", this.mouseMoveHandler);
    }
      //commande-touche
      /**
       * Commande touche du bas
       *
       * @param {*} e 
       */
      keyDownHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
          rightPressed = true;
        } else if (e.key == "Left" || e.key == "ArrowLeft") {
          leftPressed = true;
        }
      }

      /**
       * Commande touche du haut
       *
       * @param {*} e 
       */
      keyUpHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
          rightPressed = false;
        } else if (e.key == "Left" || e.key == "ArrowLeft") {
          leftPressed = false;
        }
      }

      //commande-souris
      /**
       * Commande souris
       *
       * @param {*} e 
       */
      mouseMoveHandler(e) {
        let relativeX = e.clientX - canvas.offsetLeft;
        if (relativeX > 0 && relativeX < canvas.width) {
          this.paddleX = relativeX - paddleWidth / 2;
        }
      }

       //Dessin-barre
        /** Mise en place de la barre */
        drawPaddle() {
        this.ctx.beginPath();
        this.ctx.rect(
          this.paddleX,
          this.canvas.width - this.paddleHeight,
          this.paddleWidth,
          this.paddleHeight
        );
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
      }
    }
    let canvas = document.getElementById("myCanvas");
      let ctx = canvas.getContext("2d");