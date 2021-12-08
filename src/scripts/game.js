import Alien from "./alien.js";
import Civilian from "./civilian.js";

const CHARACTER_SIZE = [100,200];
const POSITIONS = [[10,314],[600,400],[415,370],[215,390]];

/*
GAME LOGIC OVERVIEW. 15 LIMIT INTERVALS FOR LEVEL ONE, IN THE INTERVALS A RANDOM CHARACTER WILL BE GENERATED
AND THE PLAYER MUST SURVIVE THE ALIENS.
*/

class Game {
    
    constructor(canvasEl) {
        this.canvas = canvasEl;
        this.characters = [];
        this.fillCharacters();
        this.killCount = 0;
        this.lives = 5;
        this.gameover = false;
      
    }
    //THIS FUNCTION GENERATES A NEW ALIEN INSTANCE WITH RANDOM POSITION.
    randomAlien() {
        const randomPosition = Math.floor(Math.random() * POSITIONS.length)
        const alien = new Alien(POSITIONS[randomPosition], CHARACTER_SIZE, this);
        return alien;
    }
    //THIS FUNCTION GENERATES A NEW CIVILIAN INSTANCE WITH A RANDOM POSITION.
    randomCivilian() {
        const randomPosition = Math.floor(Math.random() * POSITIONS.length)
        const civilian = new Civilian(POSITIONS[randomPosition], CHARACTER_SIZE, this);
        return civilian;
    }
    //THIS FUNCTION WILL RANDOMLY CALL THE ABOVE TO FUNCTIONS AND GENERATE
    //A RANDOM CHARACTER (ALIEN OR CIVILIAN)
    randomCharacter() {
        const randomAlien = this.randomAlien();
        const randomCivilian = this.randomCivilian();
        const randomCall = [randomAlien,randomCivilian,randomAlien, randomAlien, randomAlien];
        this.shuffle(randomCall)
        const pos = Math.floor(Math.random() * 3);
        return randomCall[pos]
    }
    //THIS FUNCTION FILLS THE CHARACTER ARRAY WITH FIFTEEN RANDOM CHARACTERS
    fillCharacters() {
        for (let i = 0; i < 15; i++) {
            let character = this.randomCharacter();
            this.characters.push(character);
        }
    }
    //THIS FUNCTION WAS MADE TO SHUFFLE ARRAYS FOR INCREASED RANDOMNESS
    shuffle(array) {
        for (let i = 0; i < array.length; i++) {
            let j = Math.floor(Math.random() * (i + 1));
            let holder = array[i];
            array[i] = array[j];
            array[j] = holder;
        }
        return array;
    }
    //THIS FUNCTION IS OPERATIONAL...
    //THE MAIN PROBLEM HERE IS THAT THE EVENT LISTENERS ARE STACKING WHEN THERE IS NO CLICK
    //I NEED TO REMOVE THE PREVIOUS EVENT LISTENER I THINK BEFORE ADDING ANOTHER ONE.
    characterSequence(ctx) {
    
        let intCount = 0;

        const gameRun = function() {
            
            let randChar = this.characters.pop()
            randChar.draw(ctx);
            console.log(randChar);
            const controller = new AbortController();

            intCount += 1
            
            this.canvas.removeEventListener('click', clickDetect);
            
            if (intCount === 15 || this.characters.length === 0) {
                clearInterval(intervalId);
                this.renderClearMessage()
            }
            let that = this;
            
            function clickDetect(e) {
                
                const rect = that.canvas.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                controller.abort();
            
                if (randChar.hitCheck(x,y)) {
                    
                    if (randChar instanceof Civilian) {
                        // alert('game over')
                        controller.abort()
                    }
                    randChar.dead(ctx);
                    that.killCount += 1;
                    that.upgradeKillCount()
                    
                } 
                
            }
            
            this.canvas.addEventListener('click', clickDetect,{ signal: controller.signal} );
            // this.canvas.removeEventListener('click', clickDetect);
            
        }.bind(this);

        var intervalId = setInterval(gameRun,2500);
      
    }
    upgradeKillCount() {
     
     const killEl = document.querySelector('#kills')
     killEl.innerText = `Blast Count : ${this.killCount}`
    }

    removeHeart() {

        if (this.lives === 2) {
            const h3 = document.querySelector('#heart3');
            h3.style.visibility = 'hidden';
        }

        if (this.lives === 1) {
            const h2 = document.querySelector('#heart2');
            h2.style.visibility = 'hidden';
        }

        if (this.lives === 0) {
            const h1 = document.querySelector('#heart1')
            h1.style.visibility = 'hidden';
            this.gameover = true;
            // this.gameoverMessage();
        }
    }
    renderClearMessage() {
        const message = document.querySelector('.levelclear');
        message.style.visibility = 'visible'
    }
    gameoverMessage() {
        // alert('game over')
    }
}

export default Game;
