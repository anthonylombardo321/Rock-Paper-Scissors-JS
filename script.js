//Get Sections, in order to toggle visibility
let challengerSection = document.querySelector(".challenger-section");
let resultsSection = document.querySelector(".results-section");
let selectionSection = document.querySelector(".selection-section");
let scoreSection = document.querySelector(".score-section");
let winnerSection = document.querySelector(".winner-section");
let restartSection = document.querySelector(".play-again");

let playerScoreText = document.querySelector(".player-score-text");
let computerScoreText = document.querySelector(".computer-score-text");
let playerScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let choices = ["Mario", "Bowser", "Peach"];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection){
    //Show Player and Computer Selection
    displayChallengers(playerSelection, computerSelection);

    //Prepare Results Section
    let resultsHeading = document.createElement("h2");
    resultsHeading.textContent = "Results";
    let resultsImg = document.createElement("img");
    let resultsText = document.createElement("p");

    //Determine this round's winner
    if(playerSelection == "Mario" && computerSelection == "Bowser"){
        resultsImg.src = "images/Mario Defeats Bowser.gif";
        resultsImg.alt = "Mario Defeats Bowser";

        resultsText.classList.add("results-text");
        resultsText.textContent="Mario Defeats Bowser - Player Wins";
        updateScores("Player");
    }
    else if(playerSelection == "Peach" && computerSelection == "Mario"){
        resultsImg.src = "images/Peach Kisses Mario.gif";
        resultsImg.alt = "Peach Kisses Mario";

        resultsText.classList.add("results-text");
        resultsText.textContent="Peach Kisses Mario - Player Wins";
        updateScores("Player");
    }
    else if(playerSelection == "Bowser" && computerSelection == "Peach"){
        resultsImg.src = "images/Bowser Kidnaps Peach.gif";
        resultsImg.alt = "Bowser Kidnaps Peach";

        resultsText.classList.add("results-text");
        resultsText.textContent="Bowser Kidnaps Peach - Player Wins";
        updateScores("Player");
    }
    else if(computerSelection == "Mario" && playerSelection == "Bowser"){
        resultsImg.src = "images/Mario Defeats Bowser.gif";
        resultsImg.alt = "Mario Defeats Bowser";
        
        resultsText.classList.add("results-text");
        resultsText.textContent="Mario Defeats Bowser - Computer Wins";
        updateScores("Computer");
    }
    else if(computerSelection == "Peach" && playerSelection == "Mario"){
        resultsImg.src = "images/Peach Kisses Mario.gif";
        resultsImg.alt = "Peach Kisses Mario";
        
        resultsText.classList.add("results-text");
        resultsText.textContent="Peach Kisses Mario - Computer Wins";
        updateScores("Computer");
    }
    else if(computerSelection == "Bowser" && playerSelection == "Peach"){
        resultsImg.src = "images/Bowser Kidnaps Peach.gif";
        resultsImg.alt = "Bowser Kidnaps Peach";
        
        resultsText.classList.add("results-text");
        resultsText.textContent="Bowser Kidnaps Peach - Computer Wins";
        updateScores("Computer");
    }
    else{
        resultsImg.src = "images/Tie.jpg";
        resultsImg.alt = "Game Tied";
        
        resultsText.classList.add("results-text");
        resultsText.textContent="You Tied - No One Wins";
    }

    //Replaces children in Results Section
    resultsSection.classList.remove("invisible");
    resultsSection.replaceChildren();
    resultsSection.appendChild(resultsHeading);
    resultsSection.appendChild(resultsImg);
    resultsSection.appendChild(resultsText);

    //If there's a winner, make Results Section invisible
    if(playerScore === 5 || computerScore === 5){
        resultsSection.classList.add("invisible");
    }
}


function displayChallengers(playerSelection, computerSelection){
    let challengerHeading = document.createElement("h2");
    challengerHeading.textContent = "Challengers";

    let challengerImages = document.createElement("div");
    challengerImages.classList.add("challenger-images");

    //Selects Player Image
    let playerImage = document.createElement("div");

    let playerImg = document.createElement("img");
    playerImg.src = `images/${playerSelection}.png`;
    playerImg.alt = "Player's Selection";
    let playerText = document.createElement("p");
    playerText.textContent = `${playerSelection}`;

    //Append Player Info to Div
    playerImage.appendChild(playerImg);
    playerImage.appendChild(playerText);
    challengerImages.appendChild(playerImage);

    let vsText = document.createElement("span");
    vsText.textContent = "vs.";
    challengerImages.appendChild(vsText);

    //Selects Computer Image
    let computerImage = document.createElement("div");
    let computerImg = document.createElement("img");
    computerImg.src = `images/${computerSelection}.png`;
    computerImg.alt = "Computer's Selection";
    let computerText = document.createElement("p");
    computerText.textContent = `${computerSelection}`;

    //Append Computer Info to Div
    computerImage.appendChild(computerImg);
    computerImage.appendChild(computerText);
    challengerImages.appendChild(computerImage);

    //Replaces children in Challenger Section
    challengerSection.classList.remove("invisible");
    challengerSection.replaceChildren();
    challengerSection.appendChild(challengerHeading);
    challengerSection.appendChild(challengerImages);
}

function updateScores(winner){
    if(winner === "Player"){
        playerScore += 1;
        if(playerScore === 5){
            displayWinner("Player");
        }
        else{
            playerScoreText.textContent = playerScore;
        }
    }
    else{
        computerScore += 1;
        if(computerScore === 5){
            displayWinner("Computer");
        }
        else{
            computerScoreText.textContent = computerScore;
        }
    }
}

function displayWinner(winner){
    challengerSection.classList.toggle("invisible");
    resultsSection.classList.toggle("invisible");
    selectionSection.classList.toggle("invisible");
    scoreSection.classList.toggle("invisible");
    winnerSection.classList.toggle("invisible");

    if(winner === "Player"){
        //Create elements for Winner Section
        let winnerHeading = document.createElement("h2");
        winnerHeading.textContent = "You Won";

        let winnerImage = document.createElement("img");
        winnerImage.src = "images/Winning Animation.webp";
        winnerImage.alt = "Player Won";
        
        //Append elements to Winner Section
        winnerSection.replaceChildren();
        winnerSection.appendChild(winnerHeading);
        winnerSection.appendChild(winnerImage);
    }
    else{
        //Create elements for Winner Section
        let winnerHeading = document.createElement("h2");
        winnerHeading.textContent = "You Lost";

        let winnerImage = document.createElement("img");
        winnerImage.src = "images/Losing Animation.webp";
        winnerImage.alt = "Player Lost";

        //Append elements to Winner Section
        winnerSection.replaceChildren();
        winnerSection.appendChild(winnerHeading);
        winnerSection.appendChild(winnerImage);
    }
    //Ask if the player wants to play again after 10 seconds
    setTimeout(displayRestart, 10000);
}

function displayRestart(){
    winnerSection.classList.toggle("invisible");
    restartSection.classList.toggle("invisible");
}

function restartGame(){
    restartSection.classList.toggle("invisible");
    selectionSection.classList.toggle("invisible");
    scoreSection.classList.toggle("invisible");

    //Reset Score
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
}

//Set addEventListener to buttons
let marioDiv = document.querySelector(".mario-button");
let marioButton = marioDiv.firstElementChild;
marioButton.addEventListener('click', function(){
    playRound("Mario", getComputerChoice());
});

let bowserDiv = document.querySelector(".bowser-button");
let bowserButton = bowserDiv.firstElementChild;
bowserButton.addEventListener('click', function(){
    playRound("Bowser", getComputerChoice());
});

let peachDiv = document.querySelector(".peach-button");
let peachButton = peachDiv.firstElementChild;
peachButton.addEventListener('click', function(){
    playRound("Peach", getComputerChoice());
});

let restartButton = document.querySelector(".restartButton");
restartButton.addEventListener('click', restartGame);