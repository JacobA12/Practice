let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  const computerChoice = Math.floor(Math.random() * 3);

  return choices[computerChoice];
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  let resultMessage = "";

  switch (computerChoice) {
    case "rock":
      if (playerChoice === "paper") {
        resultMessage = "You win paper beats rock!";
        humanScore++;
      } else if (playerChoice === "rock") {
        resultMessage = "It's a tie!";
      } else {
        resultMessage = "You lose, rock beats scissors";
        computerScore++;
      }
      break;
    case "paper":
      if (playerChoice === "scissors") {
        resultMessage = "You win, scissors beats paper";
        humanScore++;
      } else if (playerChoice === "rock") {
        resultMessage = "You lose, paper beats rock";
        computerScore++;
      } else {
        resultMessage = "Its a tie!";
      }
      break;
    case "scissors":
      if (playerChoice === "scissors") {
        resultMessage = "It's a tie";
      } else if (playerChoice === "rock") {
        resultMessage = "You win, rock beats scissors";
        humanScore++;
      } else {
        resultMessage = "You lose, scissors beats paper";
        computerScore++;
      }
      break;
    default:
      console.error("default case reached");
      return;
  }
  console.log(resultMessage);
  console.log("Your score: " + humanScore);
  console.log("Computer score: " + computerScore);
  console.log("\n");
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

const mainContainer = document.querySelector(".container");

mainContainer.appendChild(rockButton);
mainContainer.appendChild(paperButton);
mainContainer.appendChild(scissorsButton);
