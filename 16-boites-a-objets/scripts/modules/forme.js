export class Forme {
  x = 0;
  y = 0;
  vitesseX = 0;
  vitesseY = 0;

  rayonCollision = 0;
  dessiner(ctx) {
    throw new Error("Méthode abstraite");
  }

  mettreAJour(ctx) {
    this.bouger();
    this.collision(ctx);
  }

  collision(ctx) {
    if (this.x > ctx.canvas.width) {
      this.vitesseX = -this.vitesseX;
    } else if (this.x < 0) {
      this.vitesseX = -this.vitesseX;
    }
    if (this.y > ctx.canvas.height) {
      this.vitesseY = -this.vitesseY;
    } else if (this.y < 0) {
      this.vitesseY = -this.vitesseY;
    }
  }

  bouger() {
    this.x += this.vitesseX;
    this.y += this.vitesseY;
  }
}
