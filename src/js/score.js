/**
 * Description placeholder
 *
 * @export
 * @class Score
 * @typedef {Score}
 */
export default class Score {
  constructor() {
    this.score = 0;
  }
  scoreUp() {
    this.score += 100;
    if (score == brickRowCount * brickColumnCount) {
      alert("YOU WIN, CONGRATS!");
      document.location.reload();
    }
  }
  getScore() {
    return this.score;
  }
}
