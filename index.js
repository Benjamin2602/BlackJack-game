// 2 randomCard function
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

//randomCard function
function getRandomCard(){
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    return 11;
  }else if(randomCard === 11 || randomCard === 12 || randomCard === 13){
    return 10;
  }else{
    return randomCard;
  }
}

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
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
  let card = getRandomCard();
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
