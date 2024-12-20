let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  const computerChoice = Math.floor(Math.random() * 3);

  return choices[computerChoice];
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  let message = "";

  switch (computerChoice) {
    case "rock":
      if (playerChoice === "paper") {
        message = "You win paper beats rock!";
        humanScore++;
      } else if (playerChoice === "rock") {
        message = "It's a tie!";
      } else {
        message = "You lose, rock beats scissors";
        computerScore++;
      }
      break;
    case "paper":
      if (playerChoice === "scissors") {
        message = "You win, scissors beats paper";
        humanScore++;
      } else if (playerChoice === "rock") {
        message = "You lose, paper beats rock";
        computerScore++;
      } else {
        message = "Its a tie!";
      }
      break;
    case "scissors":
      if (playerChoice === "scissors") {
        message = "It's a tie";
      } else if (playerChoice === "rock") {
        message = "You win, rock beats scissors";
        humanScore++;
      } else {
        message = "You lose, scissors beats paper";
        computerScore++;
      }
      break;
    default:
      console.error("default case reached");
      return;
  }
  resultMessage.innerText = message;
  playerScore.textContent = "Score: " + humanScore;
  compScore.textContent = "Computer score: " + computerScore;

  if (humanScore === 5) {
    resultMessage.innerText = "You were first to 5!";
  }
  if (computerScore === 5) {
    resultMessage.innerText = "You lose, the computer was first to 5!";
  }

  if (humanScore === 5 || computerScore === 5) {
    mainContainer.removeChild(rockButton);
    mainContainer.removeChild(scissorsButton);
    mainContainer.removeChild(paperButton);

    const tryAgain = document.createElement("button");
    tryAgain.innerText = "Try Again";

    tryAgain.addEventListener("click", () => {
      humanScore = 0;
      computerScore = 0;

      resultMessage.innerText = "Good Luck!";
      playerScore.textContent = "Score: " + humanScore;
      compScore.textContent = "Computer score: " + computerScore;

      mainContainer.removeChild(tryAgain);
      mainContainer.appendChild(rockButton);
      mainContainer.appendChild(scissorsButton);
      mainContainer.appendChild(paperButton);
    });

    mainContainer.appendChild(tryAgain);
    return;
  }
}

const rockButton = document.createElement("button");
rockButton.className = "rockButton";
rockButton.textContent = "Rock";
rockButton.addEventListener("click", () => playRound("rock"));

const paperButton = document.createElement("button");
paperButton.className = "paperButton";
paperButton.textContent = "Paper";
paperButton.addEventListener("click", () => playRound("paper"));

const scissorsButton = document.createElement("button");
scissorsButton.className = "scissorsButton";
scissorsButton.textContent = "Scissors";
scissorsButton.addEventListener("click", () => playRound("scissors"));

const resultMessage = document.createElement("p");
resultMessage.innerText = "Select rock, paper, or scissors to begin!";

const playerScore = document.createElement("p");
playerScore.textContent = "Score: " + humanScore;

const compScore = document.createElement("p");
compScore.textContent = "Computer score: " + computerScore;

const scoreContainer = document.createElement("div");
scoreContainer.className = "scoreContainer";
scoreContainer.appendChild(playerScore);
scoreContainer.appendChild(compScore);
scoreContainer.appendChild(resultMessage);

const mainContainer = document.querySelector(".container");

mainContainer.appendChild(scoreContainer);
mainContainer.appendChild(rockButton);
mainContainer.appendChild(paperButton);
mainContainer.appendChild(scissorsButton);
