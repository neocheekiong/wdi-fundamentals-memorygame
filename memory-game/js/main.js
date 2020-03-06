let cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];
let cardsInPlay = [];

function flipCard(cardId) {
    let flipped = cards[cardId];
    cardsInPlay.push(flipped.rank);
    console.log("User flipped " + flipped.rank);
    console.log(flipped.cardImage);
    checkForMatch();
}

function checkForMatch() {
    if (cardsInPlay.length === 2) {
        cardsInPlay[0] === cardsInPlay [1] ? console.log("You found a match!") : console.log("Sorry, try again.");
        cardsInPlay = [];
    }
}

flipCard(1);
flipCard(2);
flipCard(3);
flipCard(2);