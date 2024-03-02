'use strict';

const player1 = document.querySelector(`.player.player--0.player--active`);
const player2 = document.querySelector(`.player.player--1`);

let current1 = document.querySelector('#current--0');
let current2 = document.querySelector('#current--1');

let score1 = document.querySelector(`#score--0`);
let score2 = document.querySelector(`#score--1`);

let playing = true;

//set display to 0
score1.textContent = 0;
score2.textContent = 0;

//set current to 0
current1.textContent = 0;
current2.textContent = 0;

//hide the dice before the game starts
document.querySelector(`.dice`).classList.add(`hidden`);

//switch using toggle
const swtichPlayers = function () {
    player1.classList.toggle(`player--active`);
    player2.classList.toggle(`player--active`);

};

//roll button improved
document.querySelector(`.btn--roll`).addEventListener(`click`, function () {
    document.querySelector(`.dice`).classList.remove(`hidden`);

    if (playing) {
        let diceNumber = Math.trunc(Math.random() * 6) + 1;
        console.log(diceNumber);
        document.querySelector(`.dice`).src = `dice-${diceNumber}.png`


        if (player1.classList.contains('player--active')) {
            current1.textContent = +current1.textContent + diceNumber;
        } else {
            current2.textContent = +current2.textContent + diceNumber;
        }

        if (diceNumber === 1) {
            current1.textContent = 0;
            current2.textContent = 0;
            swtichPlayers();
        }
    }
});


//hold button improved
document.querySelector(`.btn--hold`).addEventListener(`click`, function () {
    if (playing) {
        if (player1.classList.contains(`player--active`)) {
            score1.textContent = +score1.textContent + +current1.textContent;
            current1.textContent = 0;
        } else {
            score2.textContent = +score2.textContent + +current2.textContent;
            current2.textContent = 0;
        }
        if (score1.textContent >= 100) {
            player1.classList.add(`player--winner`);
            playing = false;
        } else if (score2.textContent >= 100) {
            player2.classList.add(`player--winner`);
            playing = false;
        }
        swtichPlayers();
    }
});

//new game button
document.querySelector(`.btn--new`).addEventListener(`click`, function newGame() {
    score1.textContent = 0;
    score2.textContent = 0;
    current1.textContent = 0;
    current2.textContent = 0;
    document.querySelector(`.dice`).classList.add(`hidden`);
    player1.classList.add(`player--active`);
    player2.classList.remove(`player--active`);
    player1.classList.remove(`player--winner`);
    player2.classList.remove(`player--winner`);
    playing = true;

});

