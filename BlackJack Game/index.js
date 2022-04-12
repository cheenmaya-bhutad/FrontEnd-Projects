let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let temp = "";

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = cards[0] + cards[1];
    renderGame();
}

function renderGame() {

    sumEl.textContent = "Sum : " + sum;
    cardsEl.textContent = "Cards : "

    for(let i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " "; 
    }

    if(sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if(sum === 21) {
        message = "Woohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;

}

function getRandomCard() {
    let temp = Math.floor(Math.random() * 13) + 1;
    if(temp === 1)
        return 11;
    else if(temp > 10) 
        return 10;
    else 
        return temp;
}

function newCard() {
    if(isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum = sum + card;
        cards.push(card);
        renderGame();
    }
}