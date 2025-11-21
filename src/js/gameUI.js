import Vie from "./vie.js";
import Score from "./score.js";
import Ball from "./ball.js";
import Barre from "./classBarre.js";

/**
 * Description placeholder
 *
 * @export
 * @class GameUI
 * @typedef {GameUI}
 */


export default class GameUI {

    constructor(canvas, nbVie){
        this.score = new Score(); // score
        this.vie = new Vie(); // nombre de vies
        this.ballList = []; // liste des balles (par défaut: ballList[0])
        this.ballList.push(new Ball(300, 300, 10));
        this.canvas = canvas;
        this.barre = new Barre(canvas);
    };

    draw(){
        let ctx = this.canvas.getContext("2d");
        console.log(this.ballList);
        console.log(this.ballList[0]);
        let currentBall = this.ballList[0];
        this.ballList[0].draw(ctx);
        // affiche raquette, grille
        console.log(this.vie);
        this.vie.draw(ctx);
        this.score.draw(ctx);
        this.barre.drawPaddle();
    };
    
}