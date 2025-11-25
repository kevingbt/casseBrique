import Vie from "./vie.js";
import Score from "./score.js";
import Ball from "./ball.js";
import Barre from "./classBarre.js";
import Grid from "./grid.js";

/**
 * Interface principale du jeu Casse-Brique
 * Gère l'initialisation et le rendu de tous les éléments du jeu
 *
 * @export
 * @class GameUI
 */
export default class GameUI {

    /**
     * Crée une instance de GameUI
     *
     * @constructor
     * @param {HTMLCanvasElement} canvas - Le canvas HTML pour le rendu du jeu
     * @param {number} nbVie - Nombre de vies initial (paramètre actuellement non utilisé)
     */
    constructor(canvas, nbVie /** @type {number} */){
        this.score = new Score(); // score
        this.vie = new Vie(); // nombre de vies
        this.ballList = []; // liste des balles (par défaut: ballList[0])
        this.ballList.push(new Ball(300, 300, (canvas.width/70)));
        this.canvas = canvas;
        this.barre = new Barre(canvas);
        this.grid = new Grid(10, 6, (this.canvas.width/11), (this.canvas.height/50), 10, 30, this.canvas);
    }

    /**
     * Dessine tous les éléments du jeu sur le canvas
     * Met à jour et affiche : balle, grille, vies, score et barre
     *
     * @returns {void}
     */
    draw(){
        let ctx = this.canvas.getContext("2d");
        
        // Déplacer la balle
        this.ballList[0].move(this.canvas, this.vie, this.barre, this.grid, this.score);
        
        // Dessiner la balle
        this.ballList[0].draw(ctx);
        
// affiche grille
        this.grid.draw(ctx);

        // affiche vie
        this.vie.draw(ctx);

        // affiche score
        this.score.draw(ctx);

        // affiche barre (paddle)
        this.barre.drawPaddle();
    };
    
}