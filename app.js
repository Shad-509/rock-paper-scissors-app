// You create a variable with the keyword let , const , or var followed by the name of your variable.
// querySelectorAll is a method that returns a list of the elements that match a specified CSS selector(s) in the document.
// forEach is a method that executes a provided function once for each array element.

// forEach also takes a callback function as an argument.
// The callback function is executed for each element in the array.
// The call back function is passed on three arguments.
// The first argument is the current element being processed.
// The second argument is the index of the current element being processed.
// The third argument is the array object.
// The callback function can be used to update the score.
// choices is a variable that contains the choices of the player and computer.
// textContent is a property that sets or returns the text content of the specified node.
// const stands for constant. It is used to declare a variable that cannot be reassigned.
// Let and var can be reassigned.
// Without using the querySelectorAll method, we would not be able to create our forEach loop because querySelectorAll returns a list of the elements in the document that match a specified CSS selector(s) such as #rock, #paper, #scissors this is why we need to use the querySelectorAll method because it returns a list of elements that we can use in our forEach loop to iterate through the list of elements. A callback function is a function inside the parentheses of another function and example in our code is the function choice inside the forEach method. The list of elements being used are the choices of the player and computer. We can use the forEach method to iterate through the list of elements. We pass the callback function to the forEach method. The callback function is executed for each element in the array.
// Use a constant to declare a variable choices that contains the choices of the player and computer.
// const stands for constant. It is used to declare a variable that cannot be reassigned.
// Initialized the choices variable to = document.querySelectorAll('.choices') now that it is initalized we can use the forEach method to iterate through the list of elements that are returned by the querySelectorAll method and pass the callback function to the forEach method to execute the callback function for each element in the array which is the choices of the player and computer. The choices are (#rock, #paper, #scissors).
const choices = document.querySelectorAll('.choices');
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
const displayResult = document.getElementById('results');

const roundTie = document.getElementById('roundTie');
const roundWin = document.getElementById('roundWin');
const roundLose = document.getElementById('roundLose');
// .again is the class that is added to the button.
// playAgain is set to the class that is added to the button in this case it is '.again'.

const playAgain = document.querySelector('.again');

// updateMoves takes in the playerInput and computerInput and updates the moves.
// Two parameters are passed to the function.
function updateMoves(playerInput, computerInput) {
  // Update moves
  // the image of the player's choice is displayed in the player's move box and the computer's choice is displayed in the computer's move box.
  // The image is dynamically changed to the image of the player's choice.
  // The image is dynamically changed to the image of the computer's choice.
  // Using template literals, the player's choice is displayed in the player's move box.
  // Same for the computer's choice.
  // Template literals are string literals allowing embedded expressions.
  // embedded expressions are expressions of the form ${playerInput} or ${computerInput} dynamically change the image of the player's and computer's choice.}
  // we use ${} to embed the expression expr in the template literal.

  document.getElementById('player-option').src = `./img/${playerInput}.svg`;
  document.getElementById('computer-option').src = `./img/${computerInput}.svg`;
}
// Event Listeners
// Calling its addEventlistener method registers the
// second argument to be called when ever the event
// described by the first argument occurs.
// The event is called when the user clicks on the image.
// querySelectorAll allows us to use the forEach method on the list of elements that match a specified CSS selector(s) in the document. The forEach method/loop essentially executes a provided function once for each array element. The callback function is passed on three arguments. The first argument is the current element being processed. The second argument is the index of the current element being processed. The third argument is the array object.
// So choices.forEach((choice) => {
//  choice.addEventListener('click: ', function () {
//
// The event is called when the user clicks on the image.
//}) creates a function that sets the playerInput to the value of the image that the user clicked on. const playerInput = this.value; is the same as const playerInput = this.getAttribute('value'); it gets the value of the attribute value. And this.value is the value of the image that the user clicked on. So when the user clicks on the image, the value of the image is set to the playerInput. The value of the image is then passed to the function updateMoves. And the function updateMoves is called. So the image of the player's choice is displayed in the player's move box and the computer's choice is displayed in the computer's move box. The image is dynamically changed to the image of the player's choice. The image is also dynamically changed to the image of the computer's choice. Using template literals, the player's choice is displayed in the player's move box. Same for the computer's choice. Template literals are string literals allowing embedded expressions. embedded expressions are expressions of the form ${playerInput} or ${computerInput} dynamically change the image of the player's and computer's choice.
// So choices.forEach((choice) => {}) is a forEach loop that loops through the list of elements that match a specified CSS selector(s) in the document. In our case it is the list of choices. Rock Paper Scissors are the choices. So the forEach loop loops through the list of choices.
// this.value is the value of the image that the user clicked on in our case the value is set to the id of the image which is rock, paper, or scissors and the value is passed to the function updateMoves when the user clicks on the image of the choice that the user chose and the function updateMoves is called and the image of the player's choice is displayed in the player's move box and the computer's choice is displayed in the computer's move box. The image is dynamically changed to the image of the player's choice. The image is also dynamically changed to the image of the computer's choice. Using template literals, the player's choice is displayed in the player's move box. Same for the computer's choice. Template literals are string literals allowing embedded expressions. embedded expressions are expressions of the form ${playerInput} or ${computerInput} dynamically change the image of the player's and computer's choice. So the forEach loop loops through the list of choices.
choices.forEach((choice) => {
  choice.addEventListener('click', function () {
    // console.log('Player clicked: ', this.innerText);
    const playerInput = this.value;

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

    // updateMoves is a function that updates the moves.
    // It takes two arguments, playerInput and computerInput.
    // The function updates the moves and displays the result.
    // The function also checks for a winner.
    // If there is a winner, the function disables the buttons.
    // If there is no winner, the function updates the score.
    // playRound is a function that also takes two arguments, playerInput and computerInput.
    // The function updates the moves and displays the result.
    // updateScore is a function that updates the score.
    // checkWinner is a function that checks for a winner.
    // If there is a winner, the function disables the buttons.
    // If there is no winner, the function updates the score.

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
  // currentMatch is a function that takes two arguments, playerInput and computerInput.
  // The function also dynamically updates the moves and displays the result.
  // The function also checks for a winner.
  // If there is a winner, the function disables the buttons.
  // If there is no winner, the function updates the score.
  // The function also checks for a tie.

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

  // Rock check
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
      return 'You Lose!';
    }
  }

  // Paper check

  //
  else if (playerInput === 'Paper') {
    if (computerInput === 'Rock') {
      // Using the template literal, we can create a string that contains the playerInput and computerInput.
      console.log(`${currentMatch} - You Win!`);
      // roundWin is a function that updates the currentMatch.
      // The function also dynamically updates the moves and displays the result.
      roundWin.textContent = `${currentMatch} - You Win!`;
      // playerScore++ increments the playerScore by 1.
      // The function also checks for a winner.

      playerScore++;
      return 'You Win!';
    } else {
      console.log(`${currentMatch} - You Lose!`);
      // roundlose is also a function that updates the currentMatch.
      // The function also dynamically updates the moves and displays the result.
      // The function also checks for a winner.

      roundLose.textContent = `${currentMatch} - You Lose!`;
      // computerScore++ increments the computerScore by 1.
      //  The function also checks for a winner.

      computerScore++;
      return 'You Lose!';
    }
  }

  // Scissors check
  else {
    if (computerInput === 'Paper') {
      console.log(`${currentMatch} - You Win!`);
      // The function also dynamically updates the moves and displays the result.
      // roundWin is a function that updates the currentMatch.
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

// updateScore is a function that updates the score.
// querySelector is a method that returns the first element that matches a specified CSS selector(s) in the document.
// textContent is a property that sets or returns the text content of the specified node.
//
function updateScore() {
  document.querySelector('#player-score').textContent = playerScore;
  document.querySelector('#computer-score').textContent = computerScore;
}

// checkWinner is a function that checks for a winner.
//
function checkWinner() {
  // If the playerScore is greater than or equal to 5, the function returns true;
  // If the playerScore is less than 5, the function returns false;

  // the condition is, if the playerScore is equal to 5, or computerScore is equal to 5.
  // if (playerScore === 5 || computerScore === 5)
  //  return true;
  // else return false;

  if (playerScore === 5 || computerScore === 5) {
    // const winner is a function that takes two arguments, playerScore and computerScore.
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
