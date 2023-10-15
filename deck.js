const SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const VALUES = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

class Deck {
    constructor(cards) {
        this.cards = cards
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}

function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit,value)
        })
    })
}

const myDeck = new Deck(freshDeck());
console.log(myDeck.cards);  // This will output an array of cards representing a complete deck.
