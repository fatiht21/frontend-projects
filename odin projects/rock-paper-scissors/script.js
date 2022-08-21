function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  let playerPoint = 0;
  if (playerSelection == computerSelection) {
    console.log(`It's a tie. You both chose ${playerSelection}`);
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    playerPoint = 1;
    console.log(`You won! ${playerSelection} beats ${computerSelection}`);
  } else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  }
  return playerPoint;
}

function game() {
  let playerScore = 0;
  let roundsPlayed = 0;
  let computerSelection = getComputerChoice();
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase().trim();
    if (
      playerSelection != "rock" &&
      playerSelection != "paper" &&
      playerSelection != "scissors"
    ) {
      continue;
    }
    playerScore += playRound(playerSelection, computerSelection);
    roundsPlayed++;
  }

  if (playerScore > roundsPlayed / 2) {
    console.log(
      `You won ${playerScore} out of ${roundsPlayed} rounds. You win!`
    );
  } else if (playerScore == roundsPlayed / 2) {
    console.log(
      `You won ${playerScore} out of ${roundsPlayed} rounds. You tie.`
    );
  } else {
    console.log(
      `You won ${playerScore} out of ${roundsPlayed} rounds.You lost!`
    );
  }
}

// game();
