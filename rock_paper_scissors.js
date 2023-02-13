const choiceArray = ['rock','paper','scissors'];
let computerScore = 0;
let playerScore = 0;

function getComputerSelection() {
    return choiceArray[Math.floor(Math.random()*choiceArray.length)];
    
};

function playRound(playerSelection, computerSelection){
    

    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore += 1;
        return "win";
    } else  if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore += 1;
        return "win";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore += 1;
        return "win";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore += 1;
        return "lose";
    }else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore += 1;
        return "lose";
    }else if (playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore += 1;
        return "lose";
    } else {return "tie"};
}

function roundWinner(winStatus,computerSelection,playerSelection){
    if (winStatus === "win"){
        return(`You won the round, ${playerSelection} beats ${computerSelection}.`);
    } else if(winStatus === "lose"){
        return(`You lose the round, ${computerSelection} beats ${playerSelection}`);
    } else if(winStatus === "tie"){return("it is a tie, no-one wins");}
};

function scoreCheck(playerScore, computerScore){
    if (playerScore > computerScore) {
        return "You are the Winner";
    } else if (computerScore > playerScore) {
        return " You lost";
    } else { return "It is a tie"}
}

function game(roundNumber){

    for (let roundNumber = 0; roundNumber < 5; roundNumber++) {
        let computerSelection = getComputerSelection();
        let playerSelection = prompt("please enter rock, paper or scissors");
        let winStatus = playRound(computerSelection,playerSelection);
        let roundWin = roundWinner(winStatus,computerSelection,playerSelection);
        console.log(roundWin);
        console.log(playerScore,computerScore)};
    let winner = scoreCheck(playerScore,computerScore);
    return winner
   };

let winner = game();
console.warn(winner)