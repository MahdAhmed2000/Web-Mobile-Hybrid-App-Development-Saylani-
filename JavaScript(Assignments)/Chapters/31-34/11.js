var x = new Date();
document.write("Current Time: " + x.toString() + "<br>");
var hoursbefore = x.getHours();
x.setHours(hoursbefore - 1);
document.write("One hour before it was: " + x.toString());