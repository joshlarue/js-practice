let score = 0;
let cScore = 0;

const startGame = document.querySelector(".start-game");

startGame.addEventListener("click", () =>
    game()
);

const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const playerChoiceInput = document.getElementById("player-input");

function getComputerChoice() {
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    switch (randomNumber) {
        case 1:
            return computerChoice = "rock";
            break;
        case 2:
            return computerChoice = "paper";
            break;
        case 3:
            return computerChoice = "scissors";
            break;
        default:
            return 1;
            break;
    }
}

function playRound(playerChoice, computerChoice) {

    if (playerChoice == computerChoice) {
        console.log("You tied!");
    } else if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "scissors" && computerChoice == "paper") ||
        (playerChoice == "paper" && computerChoice == "rock")
        ) {
            console.log(`You won! ${playerChoice} beats ${computerChoice}.`);
            score++;
            playerScore.textContent = `Your score is ${score}.`
        } else {
            console.log(`You lost! ${computerChoice} beats ${playerChoice}.`);
            cScore++;
            computerScore.textContent = `Computer score is ${cScore}.`;
        }
    return score;
}

function game() {
    console.log("game started");
    score = 0;

    for (let i = 0; i < 3; i++) {
        let playerChoice;

        playerChoiceInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                playerChoice = playerChoiceInput.value.toLowerCase();
                console.log(playerChoice);

                if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") { 
                    console.log("Choose either rock, paper, or scissors!");
                }
                return playerChoice;
            }
            let computerChoice = getComputerInput();
            console.log(playRound(playerChoice, computerChoice));
        });
    }

    console.log(`Your score was ${score}.`);
}