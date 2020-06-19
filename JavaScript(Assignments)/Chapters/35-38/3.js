function add(x, y) {
  x = parseInt(x);
  y = parseInt(y);
  return x + y;
}
var first = prompt("Enter the first number: ");
var second = prompt("Enter the second number: ");
alert("Here is the sum of the two numbers: " + add(first, second));