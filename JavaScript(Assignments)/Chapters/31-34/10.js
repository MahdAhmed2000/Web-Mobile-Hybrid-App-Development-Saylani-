var now = new Date();
var then = new Date("January 1, 2015");
var diff = (now.getTime() - then.getTime());
var noseconds = diff / 1000;
document.write("Exactly, " + noseconds + " seconds have passed since 1st Ramdan 2015"); 