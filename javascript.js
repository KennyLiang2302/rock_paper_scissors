const choices = ["Rock", "Paper", "Scissors"];
const PLAYER = 0;
const COMPUTER = 1;
const TIE = 2;

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
        console.log("You Lose! Paper beats Rock");
        return COMPUTER;
      case "scissors":
        console.log("You Win! Rock beats Scissors");
        return PLAYER;
      case "rock":
        console.log("You Tied! Rock ties with Rock");
        return TIE;
    }
  }
  else if (playerSelection == "paper") {
    switch (computerSelection) {
      case "scissors":
        console.log("You Lose! Scissors beats Rock");
        return COMPUTER;
      case "rock":
        console.log("You Win! Rock beats Scissors");
        return PLAYER;
      case "paper":
        console.log("You Tied! Paper ties with Paper");
        return TIE;
    }
  }
  else {
    switch (computerSelection) {
      case "rock":
        console.log("You Lose! Rock beats Scissors");
        return COMPUTER;
      case "paper":
        console.log("You Win! Scissors beats paper");
        return PLAYER;
      case "scissors":
        console.log("You Tied! Scissors ties with Scissors")
        return TIE;
    }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let computerChoice = computerPlay();
    let playerChoice = playerSelection();
    computerChoice = computerChoice.toLowerCase();
    playerChoice = playerChoice.toLowerCase();
    let result = playRound(playerChoice, computerChoice);
    if (result == PLAYER) {
      playerScore += 1;
    }
    else if (result == COMPUTER) {
      computerScore += 1;
    }
    console.log("Player:" + playerScore + " Computer:" + computerScore);
  }
  if (playerScore > computerScore) {
    console.log("You Win!")
  }
  else if (playerScore < computerScore) {
    console.log("You Lose!")
  }
  else {
    console.log("You Tied!")
  }
}

game();