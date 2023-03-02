import { Ball } from "./modules/ball.js";

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let formes = [];

// Création de nos objets
let ball1 = new Ball();

// Ajout des objets
formes.push(ball1);


// La boucle de jeu
window.requestAnimationFrame(gameLoop);
function gameLoop() {
    // nettoyer le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const forme of formes) {
        forme.dessiner(ctx);
    }

    for (const forme of formes) {
        forme.mettreAJour(ctx);
    }

    window.requestAnimationFrame(gameLoop);
}
