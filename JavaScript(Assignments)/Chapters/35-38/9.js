function arearectangle(x, y) {
  return x*y;
}
var height = prompt("Enter your rectangle's height: ");
var width = prompt("Enter your rectangle's width: ");
document.write("Here is my rectangle's area: " + arearectangle(5, 5) + " units");
document.write("<br>");
document.write("Here is your rectangle's area: " + arearectangle(height, width) + " units");