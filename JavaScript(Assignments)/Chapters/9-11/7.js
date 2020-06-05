var secret = 7;
var guess = prompt("Enter a number to guess the secret number:");
guess = parseInt(guess);
x = guess - secret;
if (guess === secret) {
  alert("Bingo!, Correct Answer!");
}
else if (x === 1 || x === -1) {
  alert("Close Enough to the correct answer!");
} 
else {
  alert("Sorry!, Better luck next time!");
}