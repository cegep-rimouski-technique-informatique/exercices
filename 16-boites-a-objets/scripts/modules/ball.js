import { Forme } from "./forme.js";

export class Ball extends Forme {
  x = 50;
  y = 50;
  vitesseX = 1;
  vitesseY = 3;

  dessiner(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 20, 0, Math.PI * 2, true);
    ctx.fillStyle = "red";
    ctx.fill();
  }
}
