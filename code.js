let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  computerChoice = Math.floor(Math.random() * 3);

  return choices[computerChoice];
}

function getHumanChoice() {
  humanChoice = prompt("Please enter your choice, :rock, paper, or scissors");
  let lowerChoice = humanChoice.toLowerCase();
  if (
    lowerChoice === "rock" ||
    lowerChoice === "paper" ||
    lowerChoice === "scissors"
  ) {
    return lowerChoice;
  } else {
    console.log("Invalid Input, enter rock, paper, or scissors");
    getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "") {
    getHumanChoice();
  }
  if (computerChoice === "") {
    getComputerChoice();
  }

  switch (computerChoice) {
    case "rock":
      if (humanChoice === "paper") {
        console.log("You win paper beats rock!");
        humanScore++;
      } else if (humanChoice === "rock") {
        console.log("It's a tie, try again");
      } else {
        console.log("You lose, rock beats scissors");
        computerScore++;
      }
      computerChoice = "";
      humanChoice = "";
      console.log("Your Score: " + humanScore);
      console.log("Computer Score: " + computerScore);
      break;
    case "paper":
      if (humanChoice === "scissors") {
        console.log("You win, scissors beats paper");
        humanScore++;
      } else if (humanChoice === "rock") {
        console.log("You lose, paper beats rock");
        computerScore++;
      } else {
        console.log("Its a tie, try again");
      }
      computerChoice = "";
      humanChoice = "";
      console.log("Your Score: " + humanScore);
      console.log("Computer Score: " + computerScore);
      break;
    case "scissors":
      if (humanChoice === "scissors") {
        console.log("Its a tie, try again");
      } else if (humanChoice === "rock") {
        console.log("You win, rock beats scissors");
        humanScore++;
      } else {
        console.log("You lose, scissors beats paper");
        computerScore++;
      }
      computerChoice = "";
      humanChoice = "";
      console.log("Your Score: " + humanScore);
      console.log("Computer Score: " + computerScore);
      break;
    default:
      console.error("default case reached");
      break;
  }
}

console.log("Welcome to rock, paper, scissors.");

for (let index = 0; index < 5; index++) {
  console.log("Round " + (index + 1) + " begin!");
  console.log("\n");
  playRound(getHumanChoice(), getComputerChoice());
}
