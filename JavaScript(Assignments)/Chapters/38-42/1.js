var a = prompt("Enter your base: ");
var b = prompt("Enter your exponent: ");
alert("Your answer is: " + exp(a, b));






function exp(a, b){
  return Math.pow(a, b);
}