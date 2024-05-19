let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
let gameOver = false;
const choices = ["rock", "paper", "scissors"];

const rock = document.querySelector('#rock').addEventListener('click', () => {
  if (!gameOver) {
    playerChoice = "rock";
    playRound();
  }
});

const paper = document.querySelector('#paper').addEventListener("click", () => {
  if (!gameOver) {
    playerChoice = "paper";
    playRound();
  }
});

const scissors = document.querySelector('#scissors').addEventListener("click", () => {
  if (!gameOver) {
    playerChoice = "scissors";
    playRound();
  }
});

// Get Computer Choice
function getComputerChoice() {
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

// Display choices
function displayChoice() {
  document.querySelector("#player-choice-display").innerHTML = `You chose: ${playerChoice.toUpperCase()}`;
  document.querySelector("#computer-choice-display").innerHTML = `Computer chose: ${computerChoice.toUpperCase()}`;
}

// Display winner
function displayWinner(result) {
  document.querySelector("#winner").innerHTML = result;
}

// Game Logic
function playRound() {
  // Proceed with the game logic for each round
  computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);

  // Update the scores
  if (result === "You Win!") {
    playerScore++;
  } else if (result === "You Lose!") {
    computerScore++;
  }

  // Call the function to update the scores
  scoreUpdate();

  // Call the function to display the choices
  displayChoice();

  // Call the function to display the winner
  displayWinner(result);

  // Check if either player or computer have a score of 5
  if (playerScore === 5 || computerScore === 5) {
    // Determine Overall Winner
    let overallWinner = "";
    if (playerScore > computerScore) {
      overallWinner = "YOU WON THE GAME!";
    } else if (playerScore < computerScore) {
      overallWinner = "YOU LOST THE GAME!";
    } else {
      overallWinner = "IT'S A DRAW!";
    }

    // Update the winner display
    document.querySelector("#winner").innerHTML = overallWinner;

    // Disable card click events and stop updating scores
    disableCardClickEvents();
    stopUpdatingScores();
  }
}

// Determine The Winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a draw!";
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

// Function to keep track of scores
function scoreUpdate() {
  // Select the elements where the scores are displayed
  const playerScoreElement = document.querySelector(".player-score");
  const computerScoreElement = document.querySelector(".computer-score");

  // Update the elements with current score
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

// Function to disable card click events
function disableCardClickEvents() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.backgroundColor = "var(--heading-bg-color)";
    card.style.cursor = "default";
    card.style.transform = "none";
  });
}

// Function to stop updating scores and end the game
function stopUpdatingScores() {
  gameOver = true;
}
