// We start by creating a variable called choices.
// The variable is declared with the const keyword.
//And initalize to the querySelectorAll method that returns a list of the elements in the document that match a specified CSS selector(s) such as #rock, #paper, #scissors.
//  now that it is initalized we can use the forEach method to iterate through the list of elements that are returned by the querySelectorAll method. It then will pass the callback function to the forEach method to execute the callback function for each element in the array which is the choices of the player.
const choices = document.querySelectorAll('.choices');
// We also create variables with the let keyword.
// The let keyword is used to declare a variable that can be reassigned.
// let highScore = 0;  variable that contains the high score. It is initialized to 0.
let highscore = 0;
let playerScore = 0;
let computerScore = 0;

// getElementById is a method that returns the element with the specified id in this case 'rock' is the id
const btnRock = document.getElementById('rock');
// getElementById is a method that returns the element with the specified id in this case 'paper' is the id
const btnPaper = document.getElementById('paper');
// getElementById is a method that returns the element with the specified id in this case 'scissors' is the id
const btnScissors = document.getElementById('scissors');
//// getElementById is a method that returns the element with the specified id in this case 'results' is the id
// getElementById is a method that returns the element with the specified id in this case 'results' is the id
const displayResult = document.getElementById('results');
// getElementById is a method that returns the element with the specified id in this case 'roundTie' is the id
const roundTie = document.getElementById('roundTie');
// getElementById is a method that returns the element with the specified id in this case 'roundWin' is the id
const roundWin = document.getElementById('roundWin');
// getElementById is a method that returns the element with the specified id in this case 'roundLose' is the id
const roundLose = document.getElementById('roundLose');

// querySelector is a method that returns the first element that matches a specified CSS selector(s) in the document. .again is the class that we grab from the button. So we can do something with the button.
const playAgain = document.querySelector('.again');

// updateMoves takes in the playerInput and computerInput and updates the moves.
// Two parameters are passed to the function.
function updateMoves(playerInput, computerInput) {
  // `./img/${playerInput}.svg` is a template literal that returns the path to the image file for the player to display on the screen.
  document.getElementById('player-option').src = `./img/${playerInput}.svg`;
  // the player-option allows us to dynamically change the image of the player. by setting the src attribute  equal to the information that is in the template literal. we can change the image when the player clicks on the rock, paper, or scissors buttons.
  document.getElementById('computer-option').src = `./img/${computerInput}.svg`;
  // `./img/${computerInput}.svg` and `./img/${playerInput}.svg` are template literal that are used to embed the expression computerInput in the template literal and then concatenate it with the string './img/' to get the path to the image file that we want to display onto the computer.
}

// choices.forEach is a method that executes a provided function once for each array element.
// The callback function is passed on three arguments.
// The first argument is the current element being processed.
// The second argument is the index of the current element being processed.
// The third argument is the array object.

choices.forEach((choice) => {
  choice.addEventListener('click', function () {
    const playerInput = this.value;
    // this.value is a property that returns the value of the selected option.
    // this.value is equal to the value of the button that the player clicked on.
    // forEach is a method that executes a provided function once for each array element.
    // The callback function is passed on three arguments.
    // The first argument is the current element being processed.
    // The second argument is the index of the current element being processed.
    // The third argument is the array object.
    // The computerInput is equal to the value of the computer's choice. Which is a random number from our array of choices (0, 1, or 2).

    // this.value which is rock, paper, or scissors and the value is passed to the function updateMoves when the user clicks on the image of the their choice. The value is then passed to the function updateMoves. And the function updateMoves is called. So the image of the player's choice is displayed in the player's move box and the computer's choice is displayed in the computer's move box. The image is dynamically changed to the image of the player's choice. The image is also dynamically changed to the image of the computer's choice.

    // This also gives us random choices for the computerPlay() function
    //
    // function computerPlay() {
    //   const random = Math.random();
    //   if (random < 0.34) {
    //     return 'rock';
    //   } else if (random <= 0.67) {
    //     return 'paper';
    //   } else {
    //     return 'scissors';
    //   }
    // }

    const computerSelection = ['Rock', 'Paper', 'Scissors'];
    const computerInput = computerSelection[Math.floor(Math.random() * 3)];

    // These will all be called or invoked when the player clicks on the buttons.

    updateMoves(playerInput, computerInput);
    playRound(playerInput, computerInput);
    updateScore();
    if (checkWinner()) {
      playerScore = computerScore = 0;
      updateScore();
    }
  });
});

// The playRound function gives our app logic to play a round of the game and determine the winner of the round
// playRound is a function that plays a round of the game and updates the score and the round results on the screen and in the console log if the player wins, loses, or ties the round.
// It takes in two parameters.
function playRound(playerInput, computerInput) {
  // currentMatch is a function that takes two arguments, playerInput and computerInput.
  // The currentMatch function is called when the player clicks on the buttons.
  // The function also updates the round results on the screen and in the console if the player wins, loses, or ties the round.
  // the current match calls the two arguments playerInput and computerInput and passes them to the variable currentMatch which then display's the round results dynamically with the information inside the template literal and the ebbedded expression onto the screen and the console log if the player wins, loses, or ties the round.
  const currentMatch = `${playerInput} vs ${computerInput}`;
  // Tie check
  // Using a template literal, we can create a string that will be displayed in the results box.
  // The string will be displayed when the player and computer both choose the same option.
  // currentMatch is a function that takes two arguments , playerInput and computerInput.
  // The function also dynamically updates the moves and displays the result.
  // The function also checks for a winner.
  // roundTie is a function that updates the currentMatch.
  if (playerInput === computerInput) {
    console.log(`${currentMatch} - It's a tie!`);
    roundTie.textContent = `${currentMatch} - It's a tie!`;
    return 'Tie';
  }
  // Rock
  // Using a template literal, we can create a string that contains the playerInput and computerInput.
  // We can then use the string to check if the playerInput is equal to the computerInput.
  // If the playerInput is equal to the computerInput, the function returns true.
  // If the playerInput is not equal to the computerInput, it returns false. and the function continues.
  if (playerInput === 'Rock') {
    if (computerInput === 'Scissors') {
      // Using the template literal, we can create a string that contains the playerInput and computerInput.
      console.log(`${currentMatch} - You Win!`);
      // roundWin is a function that updates the currentMatch.
      roundWin.textContent = `${currentMatch} - You Win!`;
      playerScore++;
      return 'You Win!';
    } else {
      console.log(`${currentMatch} - You Lose!`);
      // roundlose is also a function that updates the currentMatch.
      // The function also dynamically updates the moves and displays the result.
      // The function also checks for a winner.
      roundLose.textContent = `${currentMatch} - You Lose!`;
      computerScore++;
      // return allows us to break out of the function.
      return 'You Lose!';
      // Whenever JavaScript sees the return keyword, it immediately exits the function and any variable (or value) you pass after return will be returned back as a result.
    }
  }
  // Paper
  else if (playerInput === 'Paper') {
    if (computerInput === 'Rock') {
      // Using the template literal, we can create a string that contains the playerInput and computerInput then will be output to the screen and the console log when we click on our button/image of choice.
      console.log(`${currentMatch} - You Win!`);
      // roundWin is a variable that updates the currentMatch.
      // It also dynamically updates the moves and displays the result on the screen.
      roundWin.textContent = `${currentMatch} - You Win!`;
      // Increment the playerScore by 1.
      playerScore++;
      // return allows us to break out of the function.
      return 'You Win!';
    } else {
      console.log(`${currentMatch} - You Lose!`);
      roundLose.textContent = `${currentMatch} - You Lose!`;
      computerScore++;
      return 'You Lose!';
    }
  }
  // Scissors
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
/////////////////  Stop Part 1 //////////////////////

/////////////////////////////////////////////////////
// updateScore is a function that updates the score.
// querySelector is a method that returns the first element that matches a specified CSS selector(s) in the document.
// textContent is a property that sets or returns the text content of the specified node.
function updateScore() {
  document.querySelector('#player-score').textContent = playerScore;
  document.querySelector('#computer-score').textContent = computerScore;
}

// checkWinner is a function that checks for a winner.
function checkWinner() {
  // If the playerScore or computerScore is equal to 5, the function returns true;
  // If the playerScore or computerScore is less than 5, the function returns false;
  // the condition is, if the playerScore is equal to 5, or computerScore is equal to 5.

  //  return true;
  // else return false;
  if (playerScore === 5 || computerScore === 5) {
    // const winner is a variable that takes two arguments, playerScore and computerScore.
    const winner =
      // If the playerScore is equal to 5, the function returns true;
      playerScore === 5
        ? // ?  is an if statement and : is an else statement. but are also ternary operators.
          // ternary operators are a shortcut for an if statement. They are written like this: condition ? value1 : value2. The value1 is returned if the condition is true, and the value2 is returned if the condition is false.
          'You win the game! Congratulations!'
        : // : is an else statement. It is used to specify a value to return if the condition is false.
          'Computer wins the game! Better Luck Next Time!';
    // winner is a function that updates the winner.
    console.log(winner);
    // displayResult.textContent = winner; is a function that updates the winner.
    displayResult.textContent = winner;
    // Buttons are disabled when the game has a winner.
    // disabled = true is a property that disables the button.
    btnRock.disabled = true;
    // disabled = true is a property that disables the button.
    btnPaper.disabled = true;
    // disabled = true is a property that disables the button.
    btnScissors.disabled = true;
    // disabled = true is a property that disables the button.

    return true;
  }
  // return false: is a function that returns false.
  // The function also disables the buttons.
  return false;
}

// Invoking/Calling the addEventListener method registers the second argument to be called whenever the event described by its first  argument occurs.
// The second argument is a function that is called when the event 'click' occurs.
// The first argument is the event that is being listened for (click).
// When the event occurs (click), the function is invoked or called.
//  When click occurs on the playAgain button, the function argument is invoked or called. Any function inside the playAgain function is invoked or called also.
document.querySelector('.again').addEventListener('click', function () {
  // The function resets the game.
  // The function also enables the buttons.
  // The function also resets the score.
  // The function also resets the moves.
  // The function also resets the winner.
  // The function also resets the displayResult.
  // The function also resets the roundWin, roundLose, and roundTie.
  // The function also resets the currentMatch.
  // The function also resets the playerScore, computerScore.
  // The function also resets the playerInput, computerInput.
  let playerInput;
  let computerInput;
  // currentMatch = `${playerInput} vs ${computerInput}`; is a template literal that dynamically updates the currentMatch in the console.
  const currentMatch = `${playerInput} vs ${computerInput}`;
  // roundTie.textContent = ''; sets the textContent of the roundTie to an empty string.
  roundTie.textContent = '';
  // roundWin.textContent = ''; sets the textContent of the roundWin to an empty string.
  roundWin.textContent = '';
  // roundLose.textContent = ''; sets the textContent of the roundLose to an empty string.
  roundLose.textContent = '';
  // disabled = false is a property that enables the button.

  btnRock.disabled = false;
  // disabled = false is a property that enables the button.
  btnPaper.disabled = false;
  // disabled = false is a property that enables the button.
  btnScissors.disabled = false;
  // plaerScore = 0 is a function that resets the playerScore to 0.
  playerScore = 0;
  // computerScore = 0 is a function that resets the computerScore to 0.
  computerScore = 0;
  // updateScore is a function that updates the score.
  updateScore();
  // displayResult.textContent = '';  is a function that resets the displayResult to an empty string.
  displayResult.textContent = '';

  // roundTie.style.display = 'none';
  // roundWin.style.display = 'none';
  // roundLose.style.display = 'none';
});
