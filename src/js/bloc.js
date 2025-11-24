export default class Bloc {
  constructor(x, y, width, height, color = "purple") {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.active = true;
  }

  draw(ctx) {
    if (!this.active) return;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  } 
}