/*
 * Create a list that holds all of your cards
 */
let card = document.getElementsByClassName("card");
let allCards = [...card];
let clickedCards = [];
let move = 0;
let timer = setInterval(startTimer, 1000);
let totalSeconds = 0;
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
startTimer();
$(".card").click(function(card) {
  clickedCards.push(card)
  $(this).toggleClass("show open");
  if (clickedCards.length >= 2) {

    moveCount();
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

function moveCount() {
  move++;
document.getElementById("moves").innerHTML = move;

if (move > 10) {
 $(".one").remove();
}
if(move > 20) {
  $(".two").remove();
}
if(move > 30) {
  $(".three").remove();
}
}



// Timer functionality
// snippet from Stack Overflow https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

function startTimer() {
   totalSeconds++;
   let hour = Math.floor(totalSeconds /3600);
   let minute = Math.floor((totalSeconds - hour*3600)/60);
   let seconds = totalSeconds - (hour*3600 + minute*60);

   document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
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
