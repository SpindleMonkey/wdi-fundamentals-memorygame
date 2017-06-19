var cards = [
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
]
var cardsInPlay = [];
var matchesMade = 0;

var checkForMatch = function() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0].length === cardsInPlay[1].length) {
      // - either both kings or both queens--being lazy here because I should really parse the string rather than use length
      // - now check to see if they picked 2 differnet cards, or the same card twice!
      if (cardsInPlay[0].charCodeAt(cardsInPlay[0].length - 1) !== cardsInPlay[1].charCodeAt(cardsInPlay[1].length - 1)) {
        matchesMade += 1;
        grammarPolice = matchesMade === 1 ? " match" : " matches";
        alert("You've made " + matchesMade + grammarPolice + " in a row!");
        return;
      }
      else {
        // you picked the same card twice!
        cardsInPlay.pop();
      }
    }
    matchesMade = 0;
    alert("Sorry, try again.");
  }
}

var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank + cardId);
  checkForMatch();
}

var cardElement;
var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

var clearBoard = function() {
  var imgList = document.getElementsByTagName('img');
  for (var i = 0; i < imgList.length; i++) {
    imgList[i].setAttribute('src', 'images/back.png');
  }
  cardsInPlay = [];
}

var playAgain = document.querySelector('button');
playAgain.addEventListener('click', clearBoard);

createBoard();
