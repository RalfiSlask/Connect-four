// DOM variables //

let columns = document.querySelectorAll(".column");
let pointers = document.querySelectorAll(".pointer");
let buttons = document.querySelectorAll(".button");
let playerOne = document.querySelector(".playerOne");
let playerTwo = document.querySelector(".playerTwo");
let winnertext = document.querySelector(".winner");
let score1 = document.querySelector(".score-1");
let score2 = document.querySelector(".score-2");

let score_player1 = 0;
let score_player2 = 0;

// for keeping track of the current player //

let currPlayer = "player1";

// sounds when a player wins //

let fanfare = new Audio("./Sounds/success.mp3");
fanfare.volume = 0.2;

// Adding a nice visual effect with triangels for the players //

const hoverEffect = () => {
    for(let i = 0; i < columns.length; i++) {
        columns[i].onmouseover = () => {
            pointers[i].style.visibility = "visible";
        }
        columns[i].onmouseleave = () => {
            pointers[i].style.visibility = "hidden";
        }
    }   
}


const restartGame = () => {
    buttons.forEach(button => {
        button.classList.remove("taken1");
        button.classList.remove("taken2");
        button.classList.remove("player1");
        button.classList.remove("player2");
        currPlayer = "player1";
        playerOne.classList.add("player1");
        playerTwo.classList.remove("player2");
        winnertext.style.visibility = "hidden";
    })
}

// Effects when a player wins //

const playerOneWinner = () => {
    winnertext.style.visibility = "visible";
    winnertext.innerHTML = "player 1 wins!"
    fanfare.play();
    score_player1++;
    score1.innerHTML = score_player1;
}

const playerTwoWinner = () => {
    winnertext.style.visibility = "visible";
    winnertext.innerHTML = "player 2 wins!"
    fanfare.play();
    score_player2++;
    score2.innerHTML = score_player2;
}

// When clicking on columns and adding pieces to the game //

const addingPieces = () => {
    for(let i = 0; i < columns.length; i++) [
        columns[i].onclick = () => {
            let indexLength = 0;
            let lowestIndex = 0;
            if(i == 0) {
                indexLength = 6;
                lowestIndex = 0;
            } 
            else if(i == 1) {
                indexLength = 12;
                lowestIndex = 6;
            }
            else if(i == 2) {
                indexLength = 18;
                lowestIndex = 12;
            }
            else if(i == 3) {
                indexLength = 24;
                lowestIndex = 18;
            }
            else if(i == 4) {
                indexLength = 30;
                lowestIndex = 24;
            }
            else if(i == 5) {
                indexLength = 36;
                lowestIndex = 30;
            }
            else if(i == 6) {
                indexLength = 42;
                lowestIndex = 36;
            }
            for(let y = indexLength-1; y >= lowestIndex; y--) {
                if(currPlayer == "player1") {
                    if(buttons[y].classList.contains("taken1") == false && buttons[y].classList.contains("taken2") == false) {
                        buttons[y].classList.add("player1");
                        buttons[y].classList.add("taken1");
                        currPlayer = "player2";
                        break;
                    }
                }
                if(currPlayer == "player2") {
                    if(buttons[y].classList.contains("taken1") == false && buttons[y].classList.contains("taken2") == false) {
                        buttons[y].classList.add("player2");
                        buttons[y].classList.add("taken2");
                        currPlayer = "player1";
                        break;
                    }
                }

            // styling player buttons according to current Player //

            } if(currPlayer == "player1") {
                playerOne.classList.add("player1")
                playerTwo.classList.remove("player2")
            } else if(currPlayer == "player2") {
                playerOne.classList.remove("player1")
                playerTwo.classList.add("player2")
            }

            // winning conditions //

            // if four buttons in a row has been placed vertically //
            for(let x = buttons.length-1; x < buttons.length; x--) {
                if(buttons[x].classList.contains("player1")
                && buttons[x-1].classList.contains("player1")
                && buttons[x-2].classList.contains("player1")
                && buttons[x-3].classList.contains("player1")) {
                    playerOneWinner();
                    setTimeout(restartGame, 2500);
                } else if(buttons[x].classList.contains("player2") 
                && buttons[x-1].classList.contains("player2")
                && buttons[x-2].classList.contains("player2")
                && buttons[x-3].classList.contains("player2")) {
                    playerTwoWinner();
                    setTimeout(restartGame, 2500);
                }
            // if four buttons in a row has been placed horizontally //
                else if(buttons[x].classList.contains("player1")
                && buttons[x-6].classList.contains("player1")
                && buttons[x-12].classList.contains("player1")
                && buttons[x-18].classList.contains("player1")) {
                    playerOneWinner();
                    setTimeout(restartGame, 2500);
                } else if(buttons[x].classList.contains("player2")
                && buttons[x-6].classList.contains("player2")
                && buttons[x-12].classList.contains("player2")
                && buttons[x-18].classList.contains("player2")) {
                    playerTwoWinner();
                    setTimeout(restartGame, 2500);
                }
             // if four buttons in a row has been placed downwards diagonally //
                else if(buttons[x].classList.contains("player1") 
                && buttons[x-5].classList.contains("player1")
                && buttons[x-10].classList.contains("player1")
                && buttons[x-15].classList.contains("player1")) {
                    playerOneWinner();
                    setTimeout(restartGame, 2500);
                } else if(buttons[x].classList.contains("player2")
                && buttons[x-5].classList.contains("player2")
                && buttons[x-10].classList.contains("player2")
                && buttons[x-15].classList.contains("player2")) {
                    playerTwoWinner();
                    setTimeout(restartGame, 2500);
                }
             // if four buttons in a row has been placed upwards diagonally //
                else if(buttons[x].classList.contains("player1")
                && buttons[x-7].classList.contains("player1")
                && buttons[x-14].classList.contains("player1")
                && buttons[x-21].classList.contains("player1")) {
                    playerOneWinner();
                    setTimeout(restartGame, 2500);
                } else if(buttons[x].classList.contains("player2")
                && buttons[x-7].classList.contains("player2")
                && buttons[x-14].classList.contains("player2")
                && buttons[x-21].classList.contains("player2")) {
                    playerTwoWinner();
                    setTimeout(restartGame, 2500);
                }
            }
        } 
    ]
}

hoverEffect();
addingPieces();

