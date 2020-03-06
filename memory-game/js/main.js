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

function flipCard() {
    let cardId = this.getAttribute("data-id");
    let flipped = cards[cardId];
    cardsInPlay.push(flipped.rank);
    this.setAttribute("src", flipped.cardImage);
    checkForMatch();
}

function createBoard() {
    for (let i = 0; i < cards.length; i++) {
        let cardElement = document.createElement("img");
        cardElement.setAttribute("src", "images/back.png");
        cardElement.setAttribute("data-id", i);
        cardElement.addEventListener("click", flipCard);
        document.getElementById("game-board").appendChild(cardElement);
    }
}

function checkForMatch() {
    if (cardsInPlay.length === 2) {
        cardsInPlay[0] === cardsInPlay [1] ? alert("You found a match!") : console.log("Sorry, try again.");
        cardsInPlay = [];
    }
}

createBoard();