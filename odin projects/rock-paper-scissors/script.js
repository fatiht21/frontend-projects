function getComputerChoice() {
  let computerChoices = ["rock", "paper", "scissors"];
  return computerChoices[Math.floor(Math.random() * 3)];
}
// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  let playerPoint = 0;

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    playerPoint = 1;
    console.log(`'You won! ${playerSelection} beats ${computerSelection}`);
  } else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  }
  return playerPoint;
}
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));

