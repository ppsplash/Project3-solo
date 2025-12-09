const options = document.querySelectorAll("#rock,#paper,#scissors");
const button = document.getElementById("play-button");
const result = document.getElementById("result");
let userScore = 0;
let computerScore = 0;
const computerOptions = ["rock", "paper", "scissors"];
function randomChoice(arr) {
  return arr[Math.floor(arr.length * Math.random())];
}

//adding a class to the selected option

options.forEach((option) => {
  option.addEventListener("click", () => {
    // remove selection from all buttons
    options.forEach((option) => option.classList.remove("selected"));
    // add selection to clicked button
    option.classList.add("selected");
  });
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.clear();
  const selectedOption = Array.from(options).find((option) => option.classList.contains("selected"));
  if (!selectedOption) {
    result.style.fontWeight = "Bold";
    result.style.color = "Red";
    result.style.fontSize = "2rem";
    result.textContent = "Please choose any button to play";
    return;
  }
  const userChoice = selectedOption.id;
  console.log(`User chose:${userChoice}`);
  const compChoice = randomChoice(computerOptions);
  console.log(`Computer chose:${compChoice}`);
  result.style.fontWeight = "Bold";
  result.style.color = "Green";
  result.style.fontSize = "2rem";
  const uScore = document.getElementById("user-score");
  const cScore = document.getElementById("computer-score");
  if (userChoice === compChoice) {
    result.textContent = "Draw. Please play again";
  } else if (userChoice === "rock" && compChoice === "paper") {
    result.textContent = "Paper wins";
    computerScore++;
  } else if (userChoice === "paper" && compChoice === "scissors") {
    result.textContent = "Scissor wins";
    computerScore++;
  } else if (userChoice === "rock" && compChoice === "scissors") {
    result.textContent = "Rock wins";
    userScore++;
  } else if (userChoice === "paper" && compChoice === "rock") {
    result.textContent = "Paper wins";
    userScore++;
  } else if (userChoice === "scissors" && compChoice === "paper") {
    result.textContent = "Scissor wins";
    userScore++;
  } else if (userChoice === "scissors" && compChoice === "rock") {
    result.textContent = "Rock wins";
    computerScore++;
  }
  uScore.textContent = userScore;
  cScore.textContent = computerScore;
});
