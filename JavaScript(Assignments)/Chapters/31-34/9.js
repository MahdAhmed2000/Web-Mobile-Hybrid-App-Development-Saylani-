var now = new Date();
var then = new Date("June 18, 2015");
var diff = (now.getTime() - then.getTime());
var nodays = diff / (1000 * 3600 * 24);
document.write("Exactly, " + nodays + " days have passed since 1st Ramdan 2015"); 