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

console.log(getComputerChoice());

// funntion to take the user's choice
function getHumanChoice() {
    return prompt("Select rock, paper or scissors! ")
}

console.log(getHumanChoice())

// Logic for a single round
// conditions:
// the same = tie
// 1. human = rock computer scissor: you scored a point
// 2. human paper computer scissor: computer scores
// 3. human paper computer rock: human scores
// 4. human scissors computer rock: computer scores
// 5. human rock computer paper: computer scores
// 6. human scissors computer paper human scores.

// Single round function
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) { 
      console.log(" comuters choice is " + computerChoice + " It's a tie!");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore += 1
      console.log(" comuters choice is " + computerChoice + " You won!");
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore += 1
      console.log(" comuters choice is " + computerChoice + " You lost!");
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
      humanScore += 1
      console.log(" comuters choice is " + computerChoice + " You won!");
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore += 1
      console.log(" comuters choice is " + computerChoice + " You lost!");
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore += 1
      console.log(" comuters choice is " + computerChoice + " You lost!");
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore += 1
      console.log(" comuters choice is " + computerChoice + " You won!");
    }

  }

  // Game function
    function playGame() {
      for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Your score is " + humanScore + " and the computers score is " + computerScore);
      }
    }

    playGame();


