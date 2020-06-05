var x = prompt("Enter a number to show its' multiplication table:");
var y = prompt("Enter the length of the multiplication table:");
var v = "Multiplication Table of " + x + ": " + "<br>";
document.write(v.bold());
var t = x + " X ";
for (var i = 1; i <= y; i++) {
  document.write(t + i + " = " + (x*i) + "<br>");
}