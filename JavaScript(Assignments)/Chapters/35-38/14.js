function calcCircumference(radius) {
  return (2 * Math.PI * radius);
}
function calcArea(radius) {
  return (Math.PI * Math.pow(radius, 2));
}
var radius = prompt("Enter the radius of the circle: ");
document.write("Your Circle: ".bold() + "<br>");
document.write("Circumference of the circle: " + calcCircumference(radius) + "<br>");
document.write("Area of the circle: " + calcArea(radius));