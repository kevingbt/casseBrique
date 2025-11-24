/**
 * Description placeholder
 *
 * @export
 * @class Vie
 * @typedef {Vie}
 */

export default class Vie {
  constructor(nbVie = 3) {
    this.vie = nbVie;
  };

  loose() {
    this.vie--;
    if (this.vie === 0) {
      alert("GAME OVER"); // a remplacer par un event gameui
    };
  };

  draw(ctx){ //param : canva
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText(`Lives: ${this.vie}`, ctx.canvas.width-65, 20);
    }
  }
