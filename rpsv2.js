const buttons = document.querySelectorAll('button')


let userChoice;
let computerChoice;

let moves = 0;
let userScore = 0;
let computerScore = 0;
let drawScore = 0;


let resultRef = document.getElementById('result')

const handleClick = (e) => {
     userChoice = e.target.id
    document.getElementById('user_choice').innerText = `You Choose ${userChoice.toUpperCase()}`;
    document.getElementById('user_score').innerText = userScore;
    const movesLeft = document.getElementById('movesLeft');
    moves++
    movesLeft.innerText = `${10 - moves}`;
     
    generateRandomCompChoices()
    getResult()

    if(moves == 10){gameOver(buttons,movesLeft)}
}

const generateRandomCompChoices = () =>{
    const choices = ['rock','paper','scissors']
    const randomNum = Math.floor(Math.random() * 3)
    computerChoice = choices[randomNum]
    document.getElementById('comp_choice').innerText = `Computer Choose ${computerChoice.toUpperCase()}`;
    document.getElementById('computer_score').innerText = computerScore;
}

const getResult = () => { 
     document.getElementById('draws').innerText = drawScore;

     switch(userChoice + computerChoice){
          case 'rockscissors':
          case 'scissorspaper':
          case 'paperrock':
               ++userScore
               resultRef.style.cssText = 
               "background-color: #cefdce; color: #689f38";
               resultRef.innerText = `YOU WIN`
          break;
          case 'rockpaper':
          case 'paperscissors':
          case 'scissorsrock':
               ++computerScore
               resultRef.style.cssText = 
               "background-color: #ffdde0; color: #d32f2f"
               resultRef.innerText =`YOU LOSE`
          break;
          case 'rockrock':
          case 'paperpaper':
          case 'scissorsscissors':
               ++drawScore
               resultRef.style.cssText = 
               "background-color: #e5e5e5; color: #808080";
               resultRef.innerText = `DRAW`
     }
}

function gameOver(buttons,movesLeft){
buttons.forEach(buttons => {
     buttons.style.display = 'none'
})

resultRef.innerText = 'GAME OVER!!'
movesLeft.style.display = 'none';
const restartBtn = document.getElementById('restart')

if(userScore > computerScore){
     resultRef.style.cssText = 
     "background-color: #cefdce; color: #689f38";
     resultRef.innerText = "YOU WON THE GAME";

}else if(computerScore > userScore){
     resultRef.style.cssText = 
     "background-color: #ffdde0; color: #d32f2f"
     resultRef.innerText = "YOU LOSE THE GAME"
}else if(userScore === computerScore){
     resultRef.style.cssText = 
     "background-color: #e5e5e5; color: #808080"
     resultRef.innerText = "DRAW GAME"
}

restartBtn.innerText = 'RESTART GAME?';
restartBtn.style.display = 'flex';
restartBtn.style.cssText ="background-color: #ffd51b;"
restartBtn.addEventListener('click',() => {
     window.location.reload();
})
}


function game(){
buttons.forEach(buttons => buttons.addEventListener('click',handleClick))
}

game()

