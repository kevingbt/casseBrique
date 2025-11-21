/**
 * Description placeholder
 *
 * @export
 * @class Score
 * @typedef {Score}
 */

export default class Score {

  constructor(){
    this.score=0;
  }

  scoreUp() {
    this.score += 100;
    /*if (score == brickRowCount * brickColumnCount) {
      alert("YOU WIN, CONGRATS!");
      document.location.reload();
    }*/
  }

  draw(ctx){  //param : canva
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText(`Score: ${this.score}`, 8, 20);
  }
}