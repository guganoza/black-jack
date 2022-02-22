let player = {
    name :"guga",
    chips :100
}
let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let playerEL = document.getElementById("player-el")
let cardsEl = document.getElementById("cards-el")
let cards = []
let sum = 0 
let hasBlackJack = false
let isAlive = false
let message = ""


playerEL.textContent = player.name + ": $" + player.chips



function getRandomCard() {
    let randomNum = Math.floor( Math.random()*13 ) + 1
    if(randomNum >=11){
        return 10
    }
    else if(randomNum === 1){
        return 11
    }
    else{
        return randomNum
    }
 }

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
   renderGame()
}

function renderGame(){
    sumEL.textContent = "sum: " + sum
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    messageEL.textContent = message
}






function newCard(){
    if (isAlive === true && hasBlackJack === false){
    let Card = getRandomCard()
    sum += Card
    cards.push(Card)
    renderGame()
}
}
