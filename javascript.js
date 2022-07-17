const choices = ["Rock", "Paper", "Scissors"];
const PLAYER = 0;
const COMPUTER = 1;
const TIE = 2;

var playerScore = 0;
var computerScore = 0;

function computerPlay() {
  let number = Math.floor(Math.random() * 3)
  return choices[number]
}


function playRound(e) {
  const result = document.querySelector('.result')

  if (playerScore >= 5 || computerScore >= 5) {
    if (playerScore > computerScore) {
      result.textContent = "You Win!"

    }
    else {
      result.textContent = "You Lose :("
    }
    return;

  }
  let computerSelection = computerPlay();
  computerSelection = computerSelection.toLowerCase();
  let playerSelection = e.target.textContent;
  playerSelection = playerSelection.toLowerCase();



  const score = document.querySelector('.score')


  if (playerSelection == "rock") {
    switch (computerSelection) {
      case "paper":
        result.textContent = "You Lose! Paper beats Rock";
        computerScore += 1;
        break;
      case "scissors":
        result.textContent = "You Win! Rock beats Scissors";
        playerScore += 1;
        break;
      case "rock":
        result.textContent = "You Tied! Rock ties with Rock";
        break;
    }
  }
  else if (playerSelection == "paper") {
    switch (computerSelection) {
      case "scissors":
        result.textContent = "You Lose! Scissors beats Paper";
        computerScore += 1;
        break;
      case "rock":
        result.textContent = "You Win! Paper beats Rock";
        playerScore += 1;
        break;
      case "paper":
        result.textContent = "You Tied! Paper ties with Paper";
        break;

    }
  }
  else {
    switch (computerSelection) {
      case "rock":
        result.textContent = "You Lose! Rock beats Scissors";
        computerScore += 1;
        break;
      case "paper":
        result.textContent = "You Win! Scissors beats paper";
        playerScore += 1;
        break;
      case "scissors":
        result.textContent = "You Tied! Scissors ties with Scissors";
        break;
    }
  }

  score.textContent = `Player: ${playerScore}   Computer: ${computerScore}`


}

function game() {
  playerScore = 0;
  computerScore = 0;
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', playRound)
  });


  // let result = playRound(playerChoice, computerChoice);
  // if (result == PLAYER) {
  //   playerScore += 1;
  // }
  // else if (result == COMPUTER) {
  //   computerScore += 1;
  // }
  // console.log("Player:" + playerScore + " Computer:" + computerScore);
  // // }
  // if (playerScore > computerScore) {
  //   console.log("You Win!")
  // }
  // else if (playerScore < computerScore) {
  //   console.log("You Lose!")
  // }
  // else {
  //   console.log("You Tied!")
  // }
}

game();