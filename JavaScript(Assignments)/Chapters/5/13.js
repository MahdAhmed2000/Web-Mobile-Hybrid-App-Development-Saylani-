var favsnack = "Chocolate-Chip-Biscuit";
var currentage = 20;
var maximumage = 65;
var amountperday = 5;
var biscuits = (maximumage - currentage) * 365  * 5;
document.write("The Lifetime Supply Calculator".bold() + "<br>");
document.write("<br>");
document.write("<br>");
document.write("Favourite Snack: " + favsnack + "<br>");
document.write("Current Age: " + currentage + "<br>");
document.write("Estimated Maximum Age: " + maximumage + "<br>");
document.write("Amount of Snacks per Day: " + amountperday + "<br>");
document.write("You will need " + biscuits + " biscuits in total to last you until the ripe old age of 65");