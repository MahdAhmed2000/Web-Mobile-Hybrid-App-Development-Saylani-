var x = new Date();
document.write("Current Date: " + x.toString() + "<br>");
var years = x.getFullYear();
x.setFullYear(years - 100);
document.write("One Hundred years before, it was: " + x.toString());
