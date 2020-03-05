let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

function flipCard(cardId) {
    let flipped = cards[cardId];
    cardsInPlay.push(flipped);
    console.log("User flipped " + flipped);
    checkForMatch();
}

function checkForMatch() {
    if (cardsInPlay.length === 2) {
        cardsInPlay[0] === cardsInPlay [1] ? alert("You found a match!") : alert("Sorry, try again.");
        cardsInPlay = [];
    }
}

flipCard(1);
flipCard(2);
flipCard(3);
flipCard(2);