var x = new Date();
var t = x.getTime();
document.write("Current Date: " + x.toString() + "<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + t + "<br>");
document.write("Elapsed minutes since January 1, 1970: " + Math.floor(t / (1000 * 60)));