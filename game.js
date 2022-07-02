console.log("hello world")

/* Create a function that will randomly return either Rock, paper, scissors. This essentially controls 
the computer side of the game.  Need to generate something like random.choice, thus returning the random values*/



let countPlayer = 0

let countComputer = 0


/* Create the variables above in the global scope so they can easily be incremented */


function chooseRandom(providedArray){
    let index = Math.floor(Math.random() * providedArray.length);

    return providedArray[index];
}

function computerPlay() {

    const gameChoices = ['rock','paper','scissors'];

    let computerSelection = chooseRandom(gameChoices);

    return computerSelection;

}

function runGame(playerSelection,computerPlay) {

    var playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerPlay){
        console.log("It's a tie. You both have chosen " + playerSelection);

    } else if (playerSelection == 'rock' && computerPlay == 'scissors'){
        console.log("Player has won. Rock beats Scissors")
        countPlayer +=1

    } else if (playerSelection == 'paper' && computerPlay == 'rock'){
        console.log("Player has won. Paper beats Rock")
        countPlayer +=1

    } else if (playerSelection == 'scissors' && computerPlay == 'paper'){
        console.log("Player has won. Scissors beats Paper")
        countPlayer +=1

    } else if (computerPlay == 'rock' && playerSelection == 'scissors'){
        console.log("Computer has won. Rock beats Scissors")
        countComputer +=1

    } else if (computerPlay == 'paper' && playerSelection == 'rock'){
        console.log("Computer has won. Paper beats Rock")
        countComputer +=1

    } else if (computerPlay == 'scissors' && playerSelection == 'paper'){
        console.log("Computer has won. Scissors beats Rock")
        countComputer +=1
    }

}

function playerSelectionInput(){

    var playerSelection = prompt('Enter your chosen weapon').toLowerCase();
    
    runGame(playerSelection,computerPlay());

}

function game(){

    for(i = 1; i <= 5; i++){
        console.log("Playing round " + i.toString() + ": ")
        playerSelectionInput();
    }

    if (countPlayer > countComputer) {
        console.log("Player is the winner. They won " + countPlayer.toString() + " times.")
    } else if (countPlayer < countComputer){
           console.log("Computer is the winner. They won " + countComputer.toString() + " times.")
    } else{
        console.log("It was a tie between Computer and Player :) ")
    }

}


game();
