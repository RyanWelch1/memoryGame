/*
 * Create a list that holds all of your cards
 */
 let card = document.getElementsByClassName("card");
 let allCards = [...card];
let clickedCards = [];
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

$(".card").click(function(card) {
  clickedCards.push(card)
  $(this).toggleClass("show open");
  if (clickedCards.length >= 2) {
    countMoves();
    setTimeout(function() {
      clickedCards.forEach(function(card){
        $(".card").removeClass("show open notmatched");
      });
      clickedCards = [];
    } ,1000);

  if(clickedCards[0].currentTarget.childNodes[1].className === clickedCards[1].currentTarget.childNodes[1].className) {
    $(clickedCards[0].currentTarget).toggleClass(" match");
    $(clickedCards[1].currentTarget).toggleClass(" match");
    clickedCards = [];
  }
  else {
  notMatched();

  }
  }
})

function notMatched() {
  $(clickedCards[0].currentTarget).addClass("notmatched");
  $(clickedCards[1].currentTarget).addClass("notmatched");
  setTimeout(function(){
    clickedCards.forEach(function(card){
      $(".clickedCards[0].currentTarget").removeClass("notmatched show open");
      $(".clickedCards[1].currentTarget").removeClass("notmatched show open");
    });
      clickedCards = [];
    },1000);
}

function countMoves(){
    moves++;
    counter.innerHTML = moves;
}






/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
