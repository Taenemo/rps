const buttons = document.querySelectorAll("button");
const choices = ["rock", "paper", "scissors"];
const resultRef = document.getElementById("result");
const displayGO = document.querySelectorAll('.displayGameOver')

let movesLeft = document.getElementById("movesLeft");
let userCHoice;
let computerChoice;

let userScore = 0;
let computerScore = 0;
let drawScore = 0;
let moves = 0;

const handleClick = (e) => {
  userCHoice = e.target.id;
  winner();
  document.getElementById("user_choice").innerText = `You Choose ${userCHoice.toUpperCase()}`;
  document.getElementById("user_score").innerText = `${userScore}`;
  document.getElementById("draws").innerText = `${drawScore}`;
  ++moves;
  movesLeft.innerText = `${10 - moves}`;
  computerC();
  
  if (moves == 10) {
    gameOver(buttons, movesLeft,displayGO);
  }
};

const computerC = () => {
  computerChoice = choices[Math.floor(Math.random() * 3)];
  document.getElementById(
    "comp_choice"
  ).textContent = `Computer Choose ${computerChoice.toUpperCase()}`;
  document.getElementById("computer_score").innerText = `${computerScore}`;
};

const winner = () => {
  switch (userCHoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      userScore++;
      resultRef.style.cssText = "background-color: #cefdce; color: #689f38";
      resultRef.textContent = `YOU WIN`;
      break;
    case "rockspaper":
    case "paperscissors":
    case "scissorsrock":
      computerScore++;
      resultRef.style.cssText = "background-color: #ffdde0; color: #d32f2f";
      resultRef.textContent = `YOU LOSE`;
      break;
    default:
      drawScore++;
      resultRef.style.cssText = "background-color: #e5e5e5; color: #808080";
      resultRef.textContent = `DRAW`;
      break;
  }
};

const gameOver = (buttons, movesLeft,displayGO) => {
  buttons.forEach((buttons) => {
    buttons.style.display = "none";
  });

  displayGO.forEach(displayGO => displayGO.style.display ="none")
  const gameOverId = document.getElementById('gameOver')
  
  if(userScore > computerScore){
    gameOverId.textContent = "GAME OVER"
    gameOverId.style.cssText = "background-color: #cefdce; color: #689f38";
  }else if(userScore < computerScore){
    gameOverId.textContent = "GAME OVER"
    gameOverId.style.cssText = "background-color: #ffdde0; color: #d32f2f";
  }else{
    gameOverId.textContent = "GAME OVER"
    gameOverId.style.cssText = "background-color: #e5e5e5; color: #808080";
  }
  

  const restartBtn = document.getElementById("restart");
  if (userScore > computerScore) {
    resultRef.style.cssText = "background-color: #cefdce; color: #689f38";
    resultRef.innerText = "YOU WON THE GAME";
  } else if (userScore < computerScore) {
    resultRef.style.cssText = "background-color: #ffdde0; color: #d32f2f";
    resultRef.innerText = "YOU LOSE THE GAME";
  } else if (userScore === computerScore){
    resultRef.style.cssText = "background-color: #e5e5e5; color: #808080";
    resultRef.innerText = "DRAW GAME";
  }
  restartBtn.innerText = "RESTART GAME?";
  restartBtn.style.display = "flex";
  restartBtn.style.cssText = "background-color: #ffd51b;";
  restartBtn.addEventListener("click", () => {
    window.location.reload();
  });
};

function game() {
  buttons.forEach(buttons => buttons.addEventListener("click", handleClick));
}
game()