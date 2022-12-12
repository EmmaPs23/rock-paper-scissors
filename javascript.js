const myArray = ["ROCK", "PAPER", "SCISSORS"];
const playerSelection = [];
const computerSelection = getComputerChoice();


function getComputerChoice() {
    return myArray[Math.floor(Math.random() * myArray.length)];
}


function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }

    else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") || (playerSelection == "PAPER" && computerSelection == "ROCK") || (playerSelection == "SCISSORS" && computerSelection == "PAPER")) {
        return "You Win!";
    }

    else if ((computerSelection == "ROCK" && playerSelection == "SCISSORS") || (computerSelection == "PAPER" && playerSelection == "ROCK") || (computerSelection == "SCISSORS" && playerSelection == "PAPER")) {
        return "You Lose!";
    }
}


function playRound(playerSelection, computerSelection) {
    let result = checkWinner(playerSelection, computerSelection);
    
    if (result == "Tie") {
        return "Nobody Wins!"
    }
    else if (result == "You Win!") {
        return (`You Win! ${playerSelection} beats ${computerSelection}`);
    }
    else if (result == "You Lose!") {
        return (`You Lose! Computer wins! ${computerSelection} beats ${playerSelection}`);
    }
    else {
        return ("something did not work")
    }
}


function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        const playerSelection = prompt("ROCK, PAPER, SCISSORS");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

        if (checkWinner(playerSelection, computerSelection) == "You Win!") {
            playerScore++;
        }
        else if (checkWinner(playerSelection, computerSelection) == "You Lose!") {
            computerScore++;
        }
        else {
            "Tie!";
        }

    }

    console.log("----------------");
    console.log(`player score = ${playerScore}`);
    console.log(`computer score = ${computerScore}`);

    if (playerScore == computerScore) {
        console.log('----------------');
        console.log("WE have a Tie!");
    }
    else if (playerScore > computerScore) {
        console.log('----------------');
        console.log("You Are The Winner");
    }
    else if (computerScore > playerScore) {
        console.log('----------------');
        console.log("You Lose. Computer is the winner");
        console.log('----------------');
        
    }
}

game();