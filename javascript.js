const choices = ["Rock", "Paper", "Scissors"]

function computerPlay() {
  let number = Math.floor(Math.random() * 3)
  return choices[number]
}

function playerSelection() {
  let choice = window.prompt("Pick between Rock, Paper, or Scissors: ");
  choice = choice.toLowerCase();
  let retry = !(choice == "rock" || choice == "paper" || choice == "scissors")
  // while not a valid choice
  while (retry) {
    choice = window.prompt("Not a valid choice. Pick between Rock, Paper, or Scissors: ")
    choice = choice.toLowerCase();
    retry = !(choice == "rock" || choice == "paper" || choice == "scissors")
  }

  return choice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock") {
    switch (computerSelection) {
      case "paper":
        return "You Lose! Paper beats Rock"
      case "scissors":
        return "You Win! Rock beats Scissors"
      case "rock":
        return "You Tied"
    }
  }
  else if (playerSelection == "paper") {
    switch (computerSelection) {
      case "scissors":
        return "You Lose! Scissors beats Rock"
      case "rock":
        return "You Win! Rock beats Scissors"
      case "paper":
        return "You Tied"
    }
  }
  else {
    switch (computerSelection) {
      case "rock":
        return "You Lose! Rock beats Scissors"
      case "paper":
        return "You Win! Scissors beats paper"
      case "scissors":
        return "You Tied"
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let computerChoice = computerPlay();
    let playerChoice = playerSelection();
    computerChoice = computerChoice.toLowerCase();
    playerChoice = playerChoice.toLowerCase();
    let result = playRound(playerChoice, computerChoice);
    console.log(result);
  }
}

game();