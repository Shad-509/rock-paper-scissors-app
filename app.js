const choices = document.querySelectorAll('.choices');
let highscore = 0;
let playerScore = 0;
let computerScore = 0;

const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');
const displayResult = document.getElementById('results');
const roundTie = document.getElementById('roundTie');
const roundWin = document.getElementById('roundWin');
const roundLose = document.getElementById('roundLose');
const playAgain = document.querySelector('.again');

function updateMoves(playerInput, computerInput) {
  document.getElementById('player-option').src = `./img/${playerInput}.svg`;
  document.getElementById('computer-option').src = `./img/${computerInput}.svg`;
}

choices.forEach((choice) => {
  choice.addEventListener('click', function () {
    // To Do: process player click
    // console.log('Player clicked: ', this.innerText);
    const playerInput = this.value;

    const computerSelection = ['Rock', 'Paper', 'Scissors'];
    const computerInput = computerSelection[Math.floor(Math.random() * 3)];

    updateMoves(playerInput, computerInput);
    playRound(playerInput, computerInput);
    updateScore();
    if (checkWinner()) {
      playerScore = computerScore = 0;
      updateScore();
    }
  });
});

function playRound(playerInput, computerInput) {
  const currentMatch = `${playerInput} vs ${computerInput}`;

  // Tie check
  if (playerInput === computerInput) {
    console.log(`${currentMatch} - It's a tie!`);
    roundTie.textContent = `${currentMatch} - It's a tie!`;
    return 'Tie';
  }

  // Rock check
  if (playerInput === 'Rock') {
    if (computerInput === 'Scissors') {
      console.log(`${currentMatch} - You Win!`);
      roundWin.textContent = `${currentMatch} - You Win!`;
      playerScore++;
      return 'You Win!';
    } else {
      console.log(`${currentMatch} - You Lose!`);
      roundLose.textContent = `${currentMatch} - You Lose!`;
      computerScore++;
      return 'You Lose!';
    }
  }

  // Paper check
  else if (playerInput === 'Paper') {
    if (computerInput === 'Rock') {
      console.log(`${currentMatch} - You Win!`);
      roundWin.textContent = `${currentMatch} - You Win!`;
      playerScore++;
      return 'You Win!';
    } else {
      console.log(`${currentMatch} - You Lose!`);
      roundLose.textContent = `${currentMatch} - You Lose!`;
      computerScore++;
      return 'You Lose!';
    }
  }

  // Scissors check
  else {
    if (computerInput === 'Paper') {
      console.log(`${currentMatch} - You Win!`);
      roundWin.textContent = `${currentMatch} - You Win!`;
      playerScore++;
      return 'You Win!';
    } else {
      console.log(`${currentMatch} - You Loose!`);
      roundLose.textContent = `${currentMatch} - You Lose!`;
      computerScore++;
      return 'You Loose!';
    }
  }
}

function updateScore() {
  document.querySelector('#player-score').textContent = playerScore;
  document.querySelector('#computer-score').textContent = computerScore;
}

function checkWinner() {
  if (playerScore === 5 || computerScore === 5) {
    const winner =
      playerScore === 5
        ? 'You win the game! Congratulations!'
        : 'Computer wins the game! Better Luck Next Time!';
    console.log(winner);
    displayResult.textContent = winner;
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
    return true;
  }
  return false;
}

document.querySelector('.again').addEventListener('click', function () {
  let playerInput;
  let computerInput;
  const currentMatch = `${playerInput} vs ${computerInput}`;
  roundTie.textContent = '';
  roundWin.textContent = '';
  roundLose.textContent = '';
  btnRock.disabled = false;
  btnPaper.disabled = false;
  btnScissors.disabled = false;
  playerScore = 0;
  computerScore = 0;
  updateScore();
  displayResult.textContent = '';
  
  
  // roundTie.style.display = 'none';
  // roundWin.style.display = 'none';
  // roundLose.style.display = 'none';
});
