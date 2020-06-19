var x = Math.random();
x *= 10;
x = Math.round(x);
var t = prompt("Enter a number to guess the secret number of this webpage: (Between 1 to 10)");
var y = Number(t);
if(y === x) {
  alert("Congratulations, you guessed the number correctly!");
}
else {
  alert("Sorry, Better Luck next time.");
}
