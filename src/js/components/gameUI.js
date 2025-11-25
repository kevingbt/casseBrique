import Vie from "./vie.js";
import Score from "./score.js";
import Ball from "./ball.js";
import Barre from "./classBarre.js";
import Grid from "./grid.js";
import { particleManager } from "./bloc.js";

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
        const rowGrid= 6 // nombre de ligne de brique
        const colGrid = 10 // nombre de colonne de brique
        let radBall = canvas.width/70 
        let largeBloc = (canvas.width-100)/colGrid // largeur d'une brique
        let hautBloc = (canvas.height*0.5)/rowGrid // hauteur d'une brique
        this.score = new Score(); // score
        this.vie = new Vie(); // nombre de vies
        this.ballList = []; // liste des balles (par défaut: ballList[0])
        this.ballList.push(new Ball(300, 300, radBall));
        this.canvas = canvas;
        this.barre = new Barre(canvas);
        this.grid = new Grid(colGrid, rowGrid, largeBloc, hautBloc, 10, 30, this.canvas);
        
        this.setupResizeListener();
    }

    /**
     * Configure l'écouteur d'événement de redimensionnement de la fenêtre
     */
    setupResizeListener() {
        window.addEventListener('resize', () => {
            // Adapter le canvas aux nouvelles dimensions de la fenêtre
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            
            // Recalculer les dimensions des éléments du jeu
            const rowGrid = 6;
            const colGrid = 10;
            let radBall = this.canvas.width / 70;
            let largeBloc = (this.canvas.width - 100) / colGrid;
            let hautBloc = (this.canvas.height * 0.5) / rowGrid;
            let paddleWidth = this.canvas.width / 8;
            this.barre.paddleWidth = paddleWidth;
            
            // Mettre à jour les éléments avec les nouvelles dimensions
            this.ballList[0].radius = radBall;
            this.grid = new Grid(colGrid, rowGrid, largeBloc, hautBloc, 10, 30, this.canvas);
            this.barre = new Barre(this.canvas);
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
        this.barre.deplacerLaRaquette();

    };
    
}