var p1 = document.querySelector('#p1Button');
var p2 = document.querySelector('#p2Button');
var p1Display = document.querySelector('#p1Score');
var p2Display = document.querySelector('#p2Score');
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var finalScore = 5;

p1.addEventListener('click', function functionName() {
  if (!gameOver) {
    p1Score++;
    if (p1Score === finalScore) {
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
})

p2.addEventListener('click', function functionName() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === finalScore) {
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
})