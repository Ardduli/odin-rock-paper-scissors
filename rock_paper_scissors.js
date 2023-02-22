const choiceArray = ['rock','paper','scissors'];
let computerScore = 0;
let playerScore = 0;
let roundNumber = 0;
const buttons = document.querySelectorAll('.buttons')


function getComputerSelection() {
    return choiceArray[Math.floor(Math.random()*choiceArray.length)].toString();
    
};

function playRound(playerSelection, computerSelection){
    

    if (playerSelection == 'rock' && computerSelection == 'scissors'){
        playerScore += 1;
        return "win";
    } else  if(playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore += 1;
        return "win";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore += 1;
        return "win";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        computerScore += 1;
        return "lose";
    }else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        computerScore += 1;
        return "lose";
    }else if (playerSelection == 'rock' && computerSelection == 'paper'){
        computerScore += 1;
        return "lose";
    } else {return "tie"};
}

//function roundWinner(winStatus,computerSelection,playerSelection){
//    if (winStatus === "win"){
//        return(`You won the round, ${playerSelection} beats ${computerSelection}.`);
//    } else if(winStatus === "lose"){
//        return(`You lose the round, ${computerSelection} beats ${playerSelection}`);
//    } else if(winStatus === "tie"){return("it is a tie, no-one wins");}
//};

function scoreCheck(playerScore, computerScore){
    if (playerScore > computerScore) {
        return "You are the Winner";
    } else if (computerScore > playerScore) {
        return " You lost";
    } else { return "It is a tie"}
}

function game(clickValue){
    if (playerScore === 5 || computerScore === 5){
        let winner = scoreCheck(playerScore, computerScore)
        roundNumber += 1;
        updateStatus(winner);
    } else if (playerScore < 5 || computerScore < 5){
        let computerSelection = getComputerSelection();
        let playerSelection = clickValue;
        let winStatus = playRound(computerSelection,playerSelection);
        roundNumber += 1;
        let winner = 'The Game is ON!'
        updateRound(roundNumber)
        updateScore()
        updateStatus(winner)
    } else {  
        console.log('reset');
        roundNumber = 0; 
        playerScore = 0; 
        computerScore = 0;}
        updateScore();
    };


const roundDisplay = document.querySelector('#round');
const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');
const winnerDisplay = document.querySelector('#resultTxt');

function updateScore(){
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}

function updateStatus(winner){
    winnerDisplay.textContent = `${winner}`
}

function updateRound(roundNumber){
    roundDisplay.textContent = `round: ${roundNumber}`
}
buttons.forEach(buttons =>{
    buttons.addEventListener('click', function(){
        let clickValue = buttons.value.toString();
        game(clickValue)
    })
})
