
import Game from "./scripts/game.js"

document.addEventListener("DOMContentLoaded", function () {
    const canvasEl = document.getElementById('alien-canvas');
    const ctx = canvasEl.getContext('2d');
    // debugger

    const newGame = new Game();
    const alien = newGame.randomAlien();
    // newGame.characterSequence(ctx);
    // const char = newGame.randomCharacter();
    // char.draw(ctx);
    alien.draw(ctx);
    canvasEl.addEventListener('click',(e) => {
        const rect = canvasEl.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (alien.hitCheck(x,y)) {
            alien.dead(ctx);
        }
    });
 
});
// document.addEventListener('click', function(e) {
//        console.log(e.clientX, e.clientY);
// })