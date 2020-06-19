function hypotenuse(x, y) {
  return (Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));
}
var x = prompt("Enter the length of the base of your triangle: ");
var y = prompt("Enter the length of the perpendicular of your triangle: ");
document.write("Here is the Hypotenuse of your triangle: " + hypotenuse(x, y));