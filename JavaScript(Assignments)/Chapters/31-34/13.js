var x = new Date();
var year = x.getFullYear();
var target = prompt("Enter your birth year: ");
target = parseInt(target);
document.write("Your Age is: " + (year-target) + "<br>");
document.write("Your birth year is: " + target);