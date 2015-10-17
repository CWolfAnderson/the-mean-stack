/*
Create a “class” card that has the following immutable properties:

• rank : String

o The rank of the card can be one of the following: Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King

• suit : String

o The suit of the card can be one of the following: Hearts, Clubs, Diamonds, Spades

The card class should also contain a .value() method that returns the numeric value of the card.

Note: an Ace is worth 11. Jacks, Queens, and Kings are worth 10, and all other cards assume the value of their corresponding rank.

Finally, you should override the toString method (Hint: use card.prototype to implement this). The toString method should print the rank and suit of the card in a human-readable format (see examples below).

Example usages of your card class are as follows:

var card1 = new card(‘Ace’, ‘Spades’); // Creates the Ace of Spades card
var card2 = new card(‘9’, ‘Hearts’); // Creates the 9 of Hearts card
console.log( card1.value() ); // Prints 11
console.log( card1 ); // Ace of Spades
console.log( card2.value() ); // Prints 9
console.log( card2 ); // 9 of Hearts
Next, create a “class” deck that acts as a container for 52 cards. That is to say, the deck should contain a private array named cards that is comprised of 52 card objects.

- Upon instantiating a deck, all 52 card objects should also be instantiated.

The deck class should have the following functions:

• deal()

o The deal() function will remove and return the “top” card from the cards array. Assume the top card is at index zero (0) of the array.

• remaining()

o The remaining() function returns the number of card objects remaining in the deck.

Note, as you deal cards, the number of cards remaining will decrease.

• shuffle()

o The shuffle() function will randomize the order of the cards currently in the deck.

• reset()

o The reset() function will re-initialize the deck with all 52 cards.

Your code should execute the following:

var myDeck = new deck();
myDeck.shuffle();
var hand1 = [];
hand1.push( myDeck.deal() );
hand1.push( myDeck.deal() );
// Note, the output below will vary since the deck will be shuffled

console.log( ‘Hand 1: ‘, hand1[0], hand1[1] ); // Hand 1: 2 of Hearts 9 of Clubs


var hand2 = [];
hand2.push( myDeck.deal() );
hand2.push( myDeck.deal() );


console.log( ‘Hand 2: ‘, hand2[0], hand2[1] ); // Hand 2: Queen of Diamonds Jack of Clubs


console.log(‘The value of Hand 1 is: ‘, hand1[0].value() + hand1[1].value());
console.log(‘The value of Hand 2 is: ‘, hand2[0].value() + hand2[1].value());


console.log(‘There are ‘, deck.remaining(), ‘ cards remaining in the deck’); //48
deck.reset();
console.log(‘There are ‘, deck.remaining(), ‘ cards remaining in the deck’); //52
*/

function Card(rank, suit){
  this.rank = rank;
  this.suit = suit;
  
  return {
    value: function(){
      switch(rank) {
        case "Ace":
        return 11;
        case "King":
        case "Queen":
        case "Jack":
        return 10;
        default:
        return parseInt(rank);
      }
    },
    getRank: function() {
      return rank;
    },
    getSuit: function() {
      return suit;
    },
    toString: function() {
      return rank + " of " + suit;
    }
    
  };
}

Card.prototype.toString = function() {
  // return this.getRank() + " " + this.getSuit();
};

var card1 = new Card("Ace", "Spades");
var card2 = new Card("9", "Hearts"); 

console.log("value:", card1.value()); // 11
console.log("card: " + card1); // Ace of Spades
console.log("value:", card2.value()); // 9
console.log("card: " + card2); // 9 of Hearts

function Deck() {
  var cards = [];
  var ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
  var suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
  
  // instantiate cards
  function resetDeck() {
    cards = [];
    for (var i = 0; i < suits.length; i++) {
      for (var j = 0; j < ranks.length; j++) {
        cards.push(new Card(ranks[j], suits[i]));
      }
    }
  }
  resetDeck();
  
  return {
    deal: function() {
      return cards.pop();
    },
    shuffle: function () {
      var toReturn = [];
      var randomIndex = -1;
      var usedArr = [-1];
      
      for (var i = 0; i < cards.length; i++) {
        while (usedArr.indexOf(randomIndex) > -1) {
          randomIndex = Math.floor(Math.random() * ((cards.length - 1) - 0 + 1)) + 0;
        }
        usedArr.push(randomIndex);
        toReturn[randomIndex] = cards[i];
      }
      
      cards = toReturn;
    },
    remaining: function() {
      return cards.length;
    },
    reset: resetDeck
  };
}

var myDeck = new Deck();
myDeck.shuffle();
console.log("Remaining: ", myDeck.remaining());

var hand1 = [];
hand1.push(myDeck.deal());
hand1.push(myDeck.deal());
console.log("Remaining: ", myDeck.remaining());

console.log("Hand 1: " + hand1[0] + ", " + hand1[1]);

var hand2 = [];
console.log("Remaining: ", myDeck.remaining());
hand2.push(myDeck.deal());
hand2.push(myDeck.deal());
console.log("Remaining: ", myDeck.remaining());

console.log("Hand 2: " + hand2[0] + ", " + hand2[1] );

console.log("The value of Hand 1 is: " + (hand1[0].value() + hand1[1].value()));
console.log("The value of Hand 2 is: " + (hand2[0].value() + hand2[1].value()));

console.log("There are " + myDeck.remaining() + " cards remaining in the deck"); //48
myDeck.reset();
console.log("There are " + myDeck.remaining() + " cards remaining in the deck"); //52
