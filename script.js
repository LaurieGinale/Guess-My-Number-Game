'use strict';


let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random()*20)+1;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {

  const guess = Number(document.querySelector('.guess').value);

  // If there is no input
  if(!guess) {
    displayMessage('⛔️ Enter a number...');
  }

  else if(guess < 0 || guess > 20) {
    displayMessage('⛔️ Enter a correct number...');
  }
  // If player wins
  else if (guess===secretNumber) {
    displayMessage('🏆 Correct Number !');
    document.querySelector('.message').style.color = '#53a2a2';
    document.querySelector('.number').textContent = secretNumber;
    if(score> highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
    // When game is wrong
  else if (guess != secretNumber) {
    if(score > 1) {
      displayMessage(guess>secretNumber ? '📈 Too high !' :  '📉 Too low !');
    score --;
    document.querySelector('.score').textContent = score;
  }
  // If player looses
  else {document.querySelector('.message').textContent = '😢 You lost the game';
  document.querySelector('.score').textContent = 0;}
  document.querySelector('.message').style.color = 'red';
}

});

document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random()*20)+1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.message').style.color = 'hsl(224, 23%, 55%)';
  document.querySelector('.score').textContent = score;

})


