/*
 * Create a list that holds all of your cards
 */


 // A $( document ).ready() block.
 $( document ).ready(function() {
     $("#modalContent").hide();
     window.onload = startGame();
 });

const deck = document.querySelector(".deck");
let card = document.getElementsByClassName("card");
let allCards = [...card];
let clickedCards = [];
let hour;
let minute;
let seconds;
let move = 0;
let timer = setInterval(startTimer, 1000);
let totalSeconds = 0;
let totalMatchedCards = 0;
let modal = document.getElementById('myModal');
let showTime= $("#timer");



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
    totalMatchedCards++;
    console.log(totalMatchedCards);
    checkPairs();

//counter to see if matched
     }
    else {
    notMatched();
    }

  }
})

function checkPairs() {
  if (totalMatchedCards === 8) {
    congrats();
  }
}


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

if (move > 15) {
 $(".one").remove();
}
if(move > 30) {
 let twoStars=  $(".two").remove();
}
if(move > 45) {
  $(".three").remove();
}
}



// Timer functionality
// snippet from Stack Overflow https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

function startTimer() {
   totalSeconds++;
    hour = Math.floor(totalSeconds /3600);
    minute = Math.floor((totalSeconds - hour*3600)/60);
    seconds = totalSeconds - (hour*3600 + minute*60);

   document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
}

function setTimer() {
  timer= setInterval(function() {
    time++
  })
}
function stopTimer() {
  clearInterval(timer);

}
//When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It should also tell the user how much time it took to win the game, and what the star rating was.

function congrats() {
  stopTimer();
  openModal();
}

function openModal() {
      modal.style.display = "block";
      $(".score").append(`<p> It took you ${move} moves</p>`);
      $(".time").append(`<p> to complete in ${minute} minutes and ${seconds} seconds`)
      if (move < 15) {
       $(".ranking").append(`<li><i class="one fa fa-star"></i></li>
       <li><i class="two fa fa-star"></i></li>
       <li><i class="three fa fa-star"></i></li>`);
      }
      if(move > 15) {
        $(".ranking").append(`<li><i class="one fa fa-star"></i></li>
        <li><i class="two fa fa-star"></i></li>`);
      }
      if(move > 45) {
        $(".ranking").append(`<li><i class="one fa fa-star"></i></li>`)
      ;
      }

      $("#startOver").on("click", function() {
                 closeModal();

                 startGame();

       })
     }


function closeModal()  {
    modal.style.display = "none";
}




function startGame(){
   let shuffledCards = shuffle(allCards);
   for (var i= 0; i < shuffledCards.length; i++){
      allCards.forEach.call(shuffledCards, function(item){
         deck.appendChild(item);
      });
   }
}
window.onload = startGame();



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
