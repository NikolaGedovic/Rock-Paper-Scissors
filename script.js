let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

const rock = document.querySelector('#rock').addEventListener('click', () => {
  playerChoice = "rock";
  playRound();
});

const paper = document.querySelector('#paper').addEventListener("click", () => {
  playerChoice = "paper";
  playRound();
});

const scissors = document.querySelector('#scissors').addEventListener("click", () => {
  playerChoice = "scissors";
  playRound();
});

// Get Computer Choice
function getComputerChoice() {
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

// Game Logic
function playRound() {
  computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  console.log("Player Choice: " + playerChoice);
  console.log("Computer Choice: " + computerChoice);
  console.log(result);
}

// Determine The Winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Its a draw!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}

