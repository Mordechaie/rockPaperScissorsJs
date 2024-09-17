// TODO: Function returns a string from a sereis of strings.
// 1. create the function.
// 2. place rps in a list 
// 3. computer makes choice
// 3. user makes a choice
// 5. Check for match. If humanchoice = rock & computer 

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

