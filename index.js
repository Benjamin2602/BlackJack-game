let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
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
  cardEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }


  sumEl.textContent = "Sum : " + sum;

  if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = " You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  let card = 6;
  sum += card;
  // Push the card to the cards array
  cards.push(card);
  console.log(cards);
  renderGame();
}

// log it out!
// console.log(message);

//CashOut
// console.log("the player has blackJack => ", hasBlackJack);
// console.log("The player is still in the game => ", isAlive);
