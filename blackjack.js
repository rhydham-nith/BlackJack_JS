let runGame = document.getElementById("cards");
let sumGame = document.getElementById("sum");
let person = document.getElementById("people")
// let person = document.getElementsByClassName("people");
// let person = {
//     name : "Rhydham",
//     chips : 2000
// };
let chips = 2000;
let summition = 0;
let IsAlive = false;
let haveBlackJack = false
let ourLine = document.getElementById("line");

function randomnum() {
    let random = Math.floor(Math.random() * 11) + 1;
    // console.log(random);
    return random;
}

function CheckBlackJAck() {
    if (summition == 21) {
        ourLine.textContent = "You have got the BlackJack!!"
        playedBlackJack();
        haveBlackJack = true;
        IsAlive = false;
    }
    else if (summition < 21) {
        ourLine.textContent = "Do you want to draw a New Card..?"
    }
    else {
        ourLine.textContent = "Better Luck Next Time."
        IsAlive = false;
    }
}

function StartGame() {
    // console.log("HELLO")
    if ( chips > 0) {
        let firstCard = randomnum();
        let secondCard = randomnum();
        summition = 0 + firstCard + secondCard;
        runGame.textContent = "Cards : " + firstCard + "  " + secondCard;
        IsAlive = true;
        haveBlackJack = false;
        sumGame.textContent = "Sum : " + summition;
        CheckBlackJAck();
        startedplay();
    }
}
function NewCard() {
    // console.log("HELLO")
    if (IsAlive == true && haveBlackJack == false && chips > 0) {
        let nextcard = randomnum();
        runGame.textContent = runGame.textContent + " " + nextcard;
        summition = summition + nextcard;
        CheckBlackJAck();
        sumGame.textContent = "Sum : " + summition;
        startedplay();
    }
}

function startedplay(){
    chips = chips - 100
    person.textContent = 'Rhydham : ' + chips;
    // person.textContent = '';
}
function playedBlackJack(){
    chips = chips + 1000
    person.textContent = 'Rhydham : ' + chips;
    // person.textContent = '';
}