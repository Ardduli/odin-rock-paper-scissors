const choiceArray = ['rock','paper','scissors'];

function getComputerSelection(array) {
    let computerSelection = array[Math.floor(Math.random()*array.length)];
    return computerSelection;
};

function playRound(playerSelection, computerSelection){   
            if (playerSelection == 'rock' && computerSelection == 'scissors'){
            return "win";
            } else  if(playerSelection == 'paper' && computerSelection == 'rock'){
            return "win";
            } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
            return "win";
            } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
            return "lose";
            }else if (playerSelection == 'paper' && computerSelection == 'scissors'){
            return "lose";
            }else if (playerSelection == 'rock' && computerSelection == 'paper'){
            return "lose";
            } else {return "tie"};
}

function declareWinner(winStatus){
    if (winStatus === "win"){
        return(`You won ${playerSelection} beats ${computerSelection}.`);
    } else if(winStatus === "lose"){
        return(`You lose ${computerSelection} beats ${playerSelection}`);
    } else if(winStatus === "tie"){return("it is a tie");}
};


const playerSelection = prompt("please enter rock, paper or scissors");
const computerSelection = getComputerSelection(choiceArray);
const winStatus = playRound(playerSelection,computerSelection);
const winner = declareWinner(winStatus);
console.log(winner)