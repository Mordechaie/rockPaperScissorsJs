// TODO: Function returns a string from a sereis of strings.
// 1. create the function.
// 2. place rps in a list 
// 3. computer makes choice
// 3. user makes a choice
// 5. Check for match. If humanchoice = rock & computer 

// Score variables
let humanScore = 0;
let computerScore = 0;


let choices = ["rock", "paper", "scissors"];

// Function to get a random choice
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Create the container
const container = document.createElement('div')
document.body.appendChild(container)

// Create score display
const scoreDisplay = document.createElement('div');
container.appendChild(scoreDisplay);

// Function to update score display
function updateScoreDisplay() {
  scoreDisplay.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`;
}

// Function to play a round
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  
  let resultMessage = "";

  if (humanChoice === computerChoice) {
    resultMessage = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultMessage = "You won!";
  } else {
    computerScore++;
    resultMessage = "You lost!";
  }

  // message after each choice
  const roundResult = document.createElement('div');
  roundResult.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. ${resultMessage}`;
  container.appendChild(roundResult);

  updateScoreDisplay();

  if (humanScore === 5 || computerScore === 5) {
    const gameOver = document.createElement('div');
    gameOver.textContent = humanScore > computerScore ? "You won the game!" : "Computer won the game!";
    container.appendChild(gameOver);
    
    // Disable buttons after game over
    choiceButtons.forEach(button => button.disabled = true);
  }
} 
// Create choice buttons
const choiceButtons = choices.map(choice => {
  const button = document.createElement('button');
  button.textContent = choice.charAt(0).toUpperCase() + choice.slice(1);
  button.addEventListener('click', () => playRound(choice));
  container.appendChild(button);
  return button;
});

// Initial score display
updateScoreDisplay();