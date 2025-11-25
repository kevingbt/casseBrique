import Vie from "./vie.js";
import Score from "./score.js";
import Ball from "./ball.js";
import Barre from "./classBarre.js";
import Grid from "./grid.js";
import { particleManager, blocEventEmitter, BlocEvents } from "./bloc.js";

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
        this.ballList.push(new Ball(300, 300, 10));
        this.canvas = canvas;
        this.barre = new Barre(canvas);
        this.grid = new Grid(7, 6, 75, 15, 10, 30, this.canvas);
        
        // S'abonner aux événements de destruction de blocs (DIP : dépend de l'abstraction)
        this.setupEventListeners();
    }

    /**
     * Configure les écouteurs d'événements pour les blocs
     * @private
     */
    setupEventListeners() {
        blocEventEmitter.on(BlocEvents.DESTROYED, (data) => {
            particleManager.createExplosion(data.x, data.y, data.color, 20);
        });
    }

    /**
     * Dessine tous les éléments du jeu sur le canvas
     * Met à jour et affiche : balle, grille, vies, score, barre et particules
     *
     * @returns {void}
     */
    draw(){
        let ctx = this.canvas.getContext("2d");
        
        // Déplacer la balle
        this.ballList[0].move(this.canvas, this.vie, this.barre, this.grid, this.score);
        
        // Mettre à jour les particules
        particleManager.update();
        
        // Dessiner la balle
        this.ballList[0].draw(ctx);
        
        // affiche grille
        this.grid.draw(ctx);

        // affiche particules (après la grille pour qu'elles apparaissent au-dessus)
        particleManager.draw(ctx);

        // affiche vie
        this.vie.draw(ctx);

        // affiche score
        this.score.draw(ctx);

        // affiche barre (paddle)
        this.barre.drawPaddle();
    };
    
}