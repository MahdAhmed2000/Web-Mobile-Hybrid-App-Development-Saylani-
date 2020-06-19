var x = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.write("Today is: " + days[x.getDay()].slice(0, 3));