import Vie from "./vie.js";
import Score from "./score.js";
import Ball from "./ball.js";
import Barre from "./classBarre.js";
import Grid from "./grid.js";


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
        // affiche grille
        let grid = new Grid(10, 6, 75, 15, 10, 30, this.canvas);
        grid.draw(ctx);

        // affiche vie
        console.log(this.vie);
        this.vie.draw(ctx);

        // affiche score
        this.score.draw(ctx);

        // affiche barre (paddle)
        this.barre.drawPaddle();
    };
    
}