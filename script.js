function capitalizeString(string){
    return string.substr(0, 1).toUpperCase() + string.substr(1);
}

function validInput(playerInput){
    if(playerInput == "rock" || playerInput == "paper" || playerInput == "scissors"){
        return true;
    }
    return false;
}

function getComputerChoice(){
    let choices = Array("Rock", "Paper", "Scissors");
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection){
    console.log(`Player: ${capitalizeString(playerSelection)} v. Computer: ${capitalizeString(computerSelection)}`);
    if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
        return "You Won";
    }
    else if(playerSelection === computerSelection){
        return `You Tied`;
    }
    else{
        return "You Lost";
    }
}

function game(){
    let computerScore = 0;
    let playerScore = 0;
    for(let i = 0; i < 5; i++){
        let playerInput = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
        while(validInput(playerInput) == false){
            playerInput = prompt("Try again! Enter Rock, Paper, or Scissors").toLowerCase();
        }
        let result = playRound(playerInput.toLowerCase(), getComputerChoice().toLowerCase());
        if(result == "You Won"){ playerScore += 1; }
        else if(result == "You Lost"){ computerScore += 1;}
        console.log(result);
        console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
    }
    if(playerScore < computerScore){ console.log("The Computer Won"); }
    else{ console.log("Congratulations! You Won!"); }
}

game();