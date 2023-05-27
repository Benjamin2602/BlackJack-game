let firstCard = 10;
let secondCard = 4;

let sum = firstCard + secondCard ;
let hasBlackJack = false;
let isAlive = true;
let message = "";



let messageEl = document.getElementById("message-el");
console.log(messageEl);

let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");

let cardEl = document.getElementById("cards-el");


function startGame() {
  renderGame();
}

function renderGame() {
  if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  messageEl.textContent = message;

  sumEl.textContent = "Sum : " + sum;

  cardEl.textContent = "Cards :" + firstCard + " " + secondCard
}


function newCard() {
  console.log("Drawing a new card from the deck!");
  let card = 7
  sum += card;
  renderGame( )
}


// log it out!
// console.log(message);

//CashOut
// console.log("the player has blackJack => ", hasBlackJack);
// console.log("The player is still in the game => ", isAlive);
