//variables used in this docuement
const myArray = ["ROCK", "PAPER", "SCISSORS"];

let playerScore = 0;//used as start score of the player
let computerScore = 0;// used as start score of the computer

const divContainer = document.querySelector('#divContainer');

//shows the current state of the round and who won that 
const divRound = document.createElement('p');

const playerScoreCounter = document.querySelector('#playerScoreCounter');

const computerScoreCounter = document.querySelector('#computerScoreCounter');

const finalWinner = document.querySelector('#finalWinner');

//variables that calls buttons  
const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () =>
{
    let playerSelection = "ROCK";
    
    const computerSelection = getComputerChoice();

    game(playerSelection, computerSelection);
});


const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () =>
{
    let playerSelection = "PAPER";
    
    const computerSelection = getComputerChoice();
    
    game(playerSelection, computerSelection);
});

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () =>
{
    let playerSelection = "SCISSORS";
    
    const computerSelection = getComputerChoice();
    
    game(playerSelection, computerSelection);
});

//this button reload the page
const restartBtn = document.querySelector('#restartBtn');
restartBtn.addEventListener('click', ()=>
{
    document.location.reload();
});

//function that generates a random choice for the computer
function getComputerChoice() 
{
    return myArray[Math.floor(Math.random() * myArray.length)];
}

//this function compare the player's choice and the computer's choice
function checkWinner(playerSelection, computerSelection) 
{
    if (playerSelection == computerSelection) 
    {
        return "Tie";
    }

    else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") || (playerSelection == "PAPER" && computerSelection == "ROCK") || (playerSelection == "SCISSORS" && computerSelection == "PAPER")) 
    {
        return "You Win!";
    }

    else if ((computerSelection == "ROCK" && playerSelection == "SCISSORS") || (computerSelection == "PAPER" && playerSelection == "ROCK") || (computerSelection == "SCISSORS" && playerSelection == "PAPER")) 
    {
        return "You Lose!";
    }
}

//function that display who beat who and how the round was won
function playRound(playerSelection, computerSelection) 
{
    let result = checkWinner(playerSelection, computerSelection);

    if (result == "Tie") 
    {
        return "Nobody Wins!"
    }
    else if (result == "You Win!") 
    {
        return (`You Win! ${playerSelection} beats ${computerSelection}`);
    }
    else if (result == "You Lose!") 
    {
        return (`You Lose! Computer wins! ${computerSelection} beats ${playerSelection}`);
    }
    else 
    {
        return ("something did not work")
    }
}


let game = function(playerSelection, computerSelection)
{

    divRound.textContent = playRound(playerSelection, computerSelection);

    checkWinner(playerSelection,computerSelection);
    
    //compares the winner with the loser and gives a point to the winner 
    if (checkWinner(playerSelection, computerSelection) == "You Win!") 
    {
        playerScore++;
    }
    else if (checkWinner(playerSelection, computerSelection) == "You Lose!") 
    {
        computerScore++;
    }
    else 
    {
        "Tie!";
    }
    
    playerScoreCounter.textContent = `player score = ${playerScore}`;
    
    computerScoreCounter.textContent = `computer score = ${computerScore}`;
    
    //it compares bothe scores to know who won the match, also shows an alert telling who won and the final score
    if(playerScore == 5)
    {
        document.getElementById("rockBtn").disabled = true; 
        
        document.getElementById("paperBtn").disabled = true;
        
        document.getElementById("scissorsBtn").disabled = true;
        
        finalWinner.textContent = "YOU ARE THE WINNER!";
        
        divRound.textContent = " ";
        
    }
    else if(computerScore == 5)
    {
        document.getElementById("rockBtn").disabled = true; 

        document.getElementById("paperBtn").disabled = true;

        document.getElementById("scissorsBtn").disabled = true;

        finalWinner.textContent = "COMPUTER WINS!";

        divRound.textContent = " ";
        
    }

}

divContainer.appendChild(divRound);
divContainer.appendChild(playerScoreCounter);
divContainer.appendChild(computerScoreCounter);
divContainer.appendChild(finalWinner);