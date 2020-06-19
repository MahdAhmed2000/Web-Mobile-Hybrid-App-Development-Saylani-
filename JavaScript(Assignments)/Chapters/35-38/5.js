function square(x) {
  return x*x;
}
var num = prompt("Enter a number to be squared: ");
num = parseInt(num);
document.write("Your Result: " + square(num));